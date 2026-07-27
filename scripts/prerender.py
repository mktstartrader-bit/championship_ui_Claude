#!/usr/bin/env python3
"""Snapshot a built SPA page to static HTML: load it, let React render + all
scroll-reveal animations settle, then capture the live DOM as static markup
and strip the JS runtime so the content lives in the HTML itself."""
import base64, json, os, re, socket, struct, subprocess, sys, time, urllib.request

URL = sys.argv[1]
OUTFILE = sys.argv[2]
PORT = 9334
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

proc = subprocess.Popen([CHROME, "--headless=new", "--disable-gpu",
                         f"--remote-debugging-port={PORT}", "about:blank"],
                        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

def page_ws():
    for _ in range(50):
        try:
            for t in json.load(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json")):
                if t.get("type") == "page" and t.get("webSocketDebuggerUrl"):
                    return t["webSocketDebuggerUrl"]
        except Exception:
            pass
        time.sleep(0.2)
    raise RuntimeError("no target")

ws = page_ws()
host, port, path = "127.0.0.1", PORT, ws.split(f":{PORT}", 1)[1]
s = socket.create_connection((host, port)); s.settimeout(45)
key = base64.b64encode(os.urandom(16)).decode()
s.sendall(("GET %s HTTP/1.1\r\nHost: %s:%d\r\nUpgrade: websocket\r\nConnection: Upgrade\r\n"
           "Sec-WebSocket-Key: %s\r\nSec-WebSocket-Version: 13\r\n\r\n" % (path, host, port, key)).encode())
buf = b""
while b"\r\n\r\n" not in buf:
    buf += s.recv(4096)

def send(o):
    p = json.dumps(o).encode(); h = bytearray([0x81]); n = len(p)
    if n < 126: h.append(0x80 | n)
    elif n < 65536: h.append(0x80 | 126); h += struct.pack(">H", n)
    else: h.append(0x80 | 127); h += struct.pack(">Q", n)
    m = os.urandom(4); h += m
    s.sendall(bytes(h) + bytes(b ^ m[i % 4] for i, b in enumerate(p)))

rbuf = b""
def frame():
    global rbuf
    def need(n):
        global rbuf
        while len(rbuf) < n: rbuf += s.recv(65536)
    need(2); ln = rbuf[1] & 0x7f; off = 2
    if ln == 126: need(4); ln = struct.unpack(">H", rbuf[2:4])[0]; off = 4
    elif ln == 127: need(10); ln = struct.unpack(">Q", rbuf[2:10])[0]; off = 10
    need(off + ln); d = rbuf[off:off+ln]; rbuf = rbuf[off+ln:]
    return d.decode("utf-8", "replace")

_id = 0
def cmd(method, params=None):
    global _id; _id += 1; mid = _id
    send({"id": mid, "method": method, "params": params or {}})
    while True:
        m = json.loads(frame())
        if m.get("id") == mid: return m

cmd("Page.enable")
cmd("Emulation.setDeviceMetricsOverride",
    {"width": 1366, "height": 900, "deviceScaleFactor": 1, "mobile": False})
cmd("Page.navigate", {"url": URL})
time.sleep(2.5)
# Scroll through so every framer-motion whileInView (once:true) fires and the
# road path finishes drawing, then return to top and settle.
cmd("Runtime.evaluate", {"awaitPromise": True, "expression":
    "(async()=>{let y=0;while(y<=document.body.scrollHeight){window.scrollTo(0,y);"
    "await new Promise(r=>setTimeout(r,220));y+=window.innerHeight*0.7;}"
    "window.scrollTo(0,0);await new Promise(r=>setTimeout(r,600));})()"})
res = cmd("Runtime.evaluate", {"returnByValue": True,
          "expression": "document.documentElement.outerHTML"})
html = res["result"]["result"]["value"]

# Vite (base:'./') resolves JS-imported asset URLs to absolute at runtime, so
# the captured DOM has http://host/<slug>/assets/... — turn those back into
# relative paths so the file works at any host / sub-path.
base = URL if URL.endswith("/") else URL + "/"
html = html.replace(base, "./").replace(base.rstrip("/"), ".")

# Optionally strip the React runtime (pure no-JS export). Default keeps it so
# the JS layer (animations/effects) runs and hydrates the prerendered DOM.
if os.environ.get("STRIP_JS") == "1":
    html = re.sub(r'<script\b[^>]*type="module"[^>]*>\s*</script>', '', html)
    html = re.sub(r'<script\b[^>]*type="module"[^>]*/?>', '', html)
    html = re.sub(r'<link\b[^>]*rel="modulepreload"[^>]*>', '', html)
html = "<!doctype html>\n" + html

open(OUTFILE, "w", encoding="utf-8").write(html)
print("wrote", OUTFILE, len(html), "bytes")
try: proc.terminate()
except Exception: pass
