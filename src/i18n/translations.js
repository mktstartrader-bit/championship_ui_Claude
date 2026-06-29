// Translation dictionary. EN is the source (verbatim from the components).
// Each additional language is a column from the reference sheet — added
// exactly as provided, no wording changes. Missing keys fall back to EN
// (see LanguageContext), so partially-translated languages still render.
//
// To add a language: copy the EN block, keep the keys, replace the values.
export const translations = {
  EN: {
    // Hero / banner
    'hero.eyebrow': 'STAR TRADING LEAGUE',
    'hero.headline': ['The Season Has', 'Reached Its', 'Final Moment'],
    'hero.sub':
      'The buzzer has sounded. The bracket is complete. 30 teams to 1: the ultimate trading MVP has been determined.',
    'hero.chipLabel': 'Tournament Period',
    'hero.chipValue': '1 June 2026 – 13 August 2026',
    'hero.chipState': 'Concluded',

    // Champions
    'champions.title': 'Meet Your MVP Champions',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'Most teams competed. They dominated. The team with the highest profit rate across all 5 stages of the STAR Trading League.',
    'champions.winners': 'Winners',
    'champions.profitRate': 'Profit Rate:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Grand Prize Winners',
    'tier.first.meta': 'Top 2',
    'tier.first.prizes': [
      'NBA Tickets',
      'Basketball Gift Set',
      'NBA Signature Jersey',
      '$10,000 Cash Reward',
    ],
    'tier.second.title': 'Second Place',
    'tier.second.meta': 'USD 200 NBA Store Voucher (4 person)',
    'tier.second.prizes': ['NBA Jersey or NBA Basketball Shoes — you choose.'],
    'tier.third.title': 'Third Place',
    'tier.third.meta': 'USD 150 NBA Store Voucher (4 person)',
    'tier.third.prizes': ['NBA Jersey or NBA Basketball Shoes — you choose.'],

    // Road to the Finals
    'road.title': 'The Road to the Finals',
    'road.regular.name': 'Regular Season',
    'road.regular.east': 'Eastern Conference · 15 Teams',
    'road.regular.west': 'Western Conference · 15 Teams',
    'road.playoff.name': 'Playoff',
    'road.playoff.east': 'Eastern Conference · 8 Teams',
    'road.playoff.west': 'Western Conference · 8 Teams',
    'road.quarter.name': 'Quarter Finals',
    'road.quarter.east': 'Eastern Conference · 4 Teams',
    'road.quarter.west': 'Western Conference · 4 Teams',
    'road.semi.name': 'Semi-Finals',
    'road.semi.east': 'Eastern Conference · 2 Teams',
    'road.semi.west': 'Western Conference · 2 Teams',
    'road.mvp.name': 'MVP Finals',
    'road.mvp.east': 'Eastern Conference · Finalist',
    'road.mvp.west': 'Western Conference · Finalist',
    'road.champion': 'MVP Champion',

    // More Than a Tournament
    'more.title': 'More Than a Tournament',
    'more.lead':
      'The STAR Trading League: A competition defined by market performance and competitive spirit.',
    'more.line1': 'You competed. You represented. You traded.',
    'more.line2':
      'Whether you made it to the finals or fell in the early rounds, every participant was part of something bigger.',

    // Footer
    'footer.tagline':
      'Strategy. Skill. Squad. The STAR Trading League: where the market meets the court.',
    'footer.signoff': 'Stay tuned for the next season.',
  },

  // 简体中文 — verbatim from the reference sheet.
  CN: {
    'hero.eyebrow': 'STAR交易联赛',
    'hero.headline': ['赛季已进入最后时刻'],
    'hero.sub': '哨声已响。排位已定。\n30队血战，1队登顶：\n终极交易MVP已然诞生',
    'hero.chipLabel': '赛事周期',
    'hero.chipValue': '2026年6月1日 – 2026年8月13日',
    'hero.chipState': '已结束',

    'champions.title': '认识您的MVP冠军',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      '众队竞逐。他们傲视群雄。\nSTAR交易联赛的5轮激战，他们以收益率笑到最后的交易MVP',
    'champions.winners': '获奖者',
    'champions.profitRate': '盈利率：',
    'champions.uid': 'UID：',

    'tier.first.title': '大奖得主',
    'tier.first.meta': '前2名',
    'tier.first.prizes': ['NBA门票', '篮球礼品套装', 'NBA签名球衣', '10,000美元现金奖励'],
    'tier.second.title': '第二名',
    'tier.second.meta': '200美元 NBA Store 代金券（4人）',
    'tier.second.prizes': ['NBA球衣或NBA篮球鞋——由您选择。'],
    'tier.third.title': '第三名',
    'tier.third.meta': '150美元 NBA Store 代金券（4人）',
    'tier.third.prizes': ['NBA球衣或NBA篮球鞋——由您选择。'],

    'road.title': '通往总决赛之路',
    'road.regular.name': '常规赛',
    'road.regular.east': '东部联盟 – 15队',
    'road.regular.west': '西部联盟 – 15队',
    'road.playoff.name': '季后赛',
    'road.playoff.east': '东部联盟 – 8队',
    'road.playoff.west': '西部联盟 – 8队',
    'road.quarter.name': '八强决赛',
    'road.quarter.east': '东部联盟 – 4队',
    'road.quarter.west': '西部联盟 – 4队',
    'road.semi.name': '半决赛',
    'road.semi.east': '东部联盟 – 2队',
    'road.semi.west': '西部联盟 – 2队',
    'road.mvp.name': 'MVP总决赛',
    'road.mvp.east': '东部联盟 总决赛队伍',
    'road.mvp.west': '西部联盟-总决赛队伍',
    'road.champion': 'MVP・总冠军',

    'more.title': '超越比赛',
    'more.lead': 'STAR交易联赛：用市场成绩说话，用竞技精神铸魂。',
    'more.line1': '你参与。你代表。你交易。',
    'more.line2': '无论战到决赛还是提前谢幕，每一位参赛者都在创造自己的交易传奇。',

    'footer.tagline': '策略。技巧。团队。STAR交易联赛：交易者的竞技场。',
    'footer.signoff': '下一季，我们再战。',
  },

  // 繁體中文 — verbatim from the reference sheet.
  TW: {
    'hero.eyebrow': 'STAR交易聯賽',
    'hero.headline': ['賽季已來到最終時刻'],
    'hero.sub': '哨聲已響。排位已定。\n30隊血戰，1隊登頂：\n終極交易MVP已然誕生。',
    'hero.chipLabel': '賽事期間',
    'hero.chipValue': '2026年6月1日 – 2026年8月13日',
    'hero.chipState': '已結束',

    'champions.title': '認識您的MVP冠軍',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      '眾隊競逐。他們傲視群雄。\nSTAR交易聯賽的5輪激戰，他們以收益率笑到最後的交易MVP',
    'champions.winners': '獲獎者',
    'champions.profitRate': '獲利率：',
    'champions.uid': 'UID：',

    'tier.first.title': '大獎得主',
    'tier.first.meta': '前2名',
    'tier.first.prizes': ['NBA門票', '籃球禮品套裝', 'NBA簽名球衣', '10,000美元現金獎勵'],
    'tier.second.title': '第二名',
    'tier.second.meta': '200美元 NBA Store 禮券（4人）',
    'tier.second.prizes': ['NBA球衣或NBA籃球鞋——由您選擇。'],
    'tier.third.title': '第三名',
    'tier.third.meta': '150美元 NBA Store 禮券（4人）',
    'tier.third.prizes': ['NBA球衣或NBA籃球鞋——由您選擇。'],

    'road.title': '通往總決賽之路',
    'road.regular.name': '常規賽',
    'road.regular.east': '東部聯盟 – 15隊',
    'road.regular.west': '西部聯盟 – 15隊',
    'road.playoff.name': '季後賽',
    'road.playoff.east': '東部聯盟 – 8隊',
    'road.playoff.west': '西部聯盟 – 8隊',
    'road.quarter.name': '八強賽',
    'road.quarter.east': '東部聯盟 – 4隊',
    'road.quarter.west': '西部聯盟 – 4隊',
    'road.semi.name': '半決賽',
    'road.semi.east': '東部聯盟 – 2隊',
    'road.semi.west': '西部聯盟 – 2隊',
    'road.mvp.name': 'MVP總決賽',
    'road.mvp.east': '東部聯盟 總決賽隊伍',
    'road.mvp.west': '西部聯盟 總決賽隊伍',
    'road.champion': 'MVP・總冠軍',

    'more.title': '超越比賽',
    'more.lead': 'STAR交易聯賽：用市場成績說話，用競技精神鑄魂。',
    'more.line1': '你參與。你代表。你交易。',
    'more.line2': '無論戰到決賽還是提前謝幕，每一位參賽者都在創造自己的交易傳奇。',

    'footer.tagline': '策略。技巧。團隊。STAR交易聯賽：交易者的競技場。',
    'footer.signoff': '下一季，我們再戰。',
  },

  // Bahasa Melayu — verbatim from the reference sheet.
  MY: {
    'hero.eyebrow': 'Liga Dagangan STAR',
    'hero.headline': ['Musim Telah Tiba Ke Saat Penentuan Akhir'],
    'hero.sub':
      'Bunyi buzzer telah kedengaran. Carta kejohanan telah lengkap. Daripada 30 pasukan menjadi 1: MVP dagangan terbaik telah ditentukan.',
    'hero.chipLabel': 'Tempoh Kejohanan',
    'hero.chipValue': '1 Jun 2026 – 13 Ogos 2026',
    'hero.chipState': 'Tamat',

    'champions.title': 'Kenali Juara MVP Anda',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'Kebanyakan pasukan telah bertanding. Mereka mendominasi. Pasukan dengan kadar keuntungan tertinggi merentasi semua 5 peringkat Liga Dagangan STAR.',
    'champions.winners': 'Pemenang',
    'champions.profitRate': 'Kadar Keuntungan:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Pemenang Hadiah Utama',
    'tier.first.meta': '2 Teratas',
    'tier.first.prizes': [
      'Tiket NBA',
      'Set Hadiah Bola Keranjang',
      'Jersi NBA Bertandatangan',
      'Ganjaran Tunai USD10,000',
    ],
    'tier.second.title': 'Naib Juara',
    'tier.second.meta': 'Baucar NBA Store USD200 (4 orang)',
    'tier.second.prizes': ['Jersi NBA atau Kasut Bola Keranjang NBA — pilihan anda.'],
    'tier.third.title': 'Tempat Ketiga',
    'tier.third.meta': 'Baucar NBA Store USD150 (4 orang)',
    'tier.third.prizes': ['Jersi NBA atau Kasut Bola Keranjang NBA — pilihan anda.'],

    'road.title': 'Perjalanan Ke Peringkat Akhir',
    'road.regular.name': 'Musim Biasa',
    'road.regular.east': 'Divisyen Timur – 15 Pasukan',
    'road.regular.west': 'Divisyen Barat – 15 Pasukan',
    'road.playoff.name': 'Pusingan Kalah Mati',
    'road.playoff.east': 'Divisyen Timur – 8 Pasukan',
    'road.playoff.west': 'Divisyen Barat – 8 Pasukan',
    'road.quarter.name': 'Suku Akhir',
    'road.quarter.east': 'Divisyen Timur – 4 Pasukan',
    'road.quarter.west': 'Divisyen Barat – 4 Pasukan',
    'road.semi.name': 'Separuh Akhir',
    'road.semi.east': 'Divisyen Timur – 2 Pasukan',
    'road.semi.west': 'Divisyen Barat – 2 Pasukan',
    'road.mvp.name': 'Pusingan Akhir MVP',
    'road.mvp.east': 'Divisyen Timur – Finalis',
    'road.mvp.west': 'Divisyen Barat – Finalis',
    'road.champion': 'Juara MVP',

    'more.title': 'Lebih Daripada Sekadar Kejohanan',
    'more.lead':
      'Liga Dagangan STAR: Pertandingan yang ditentukan oleh prestasi pasaran dan semangat bersaing.',
    'more.line1': 'Anda telah bersaing. Anda telah mewakili. Anda telah berdagang.',
    'more.line2':
      'Sama ada anda berjaya ke peringkat akhir atau tewas di awal pusingan, setiap peserta adalah sebahagian daripada sesuatu yang lebih besar.',

    'footer.tagline':
      'Strategi. Kemahiran. Pasukan. Liga Dagangan STAR: di mana pasaran bertemu dengan gelanggang.',
    'footer.signoff': 'Nantikan musim seterusnya.',
  },

  // Tiếng Việt — verbatim from the reference sheet.
  VN: {
    'hero.eyebrow': 'Giải đấu giao dịch STAR',
    'hero.headline': ['Mùa Giải Đã Đi Đến Khoảnh Khắc Cuối Cùng'],
    'hero.sub':
      'Tiếng còi kết thúc đã vang lên. Nhánh đấu đã hoàn tất. Từ 30 đội chỉ còn 1: MVP giao dịch xuất sắc nhất đã được xác định.',
    'hero.chipLabel': 'Thời Gian Giải Đấu',
    'hero.chipValue': '1 tháng 6, 2026 – 13 tháng 8, 2026',
    'hero.chipState': 'Đã kết thúc',

    'champions.title': 'Gặp Gỡ Những Nhà Vô Địch MVP',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'Hầu hết các đội đã tham gia tranh tài. Họ đã thống trị giải đấu. Đội có tỷ suất lợi nhuận cao nhất qua cả 5 vòng của Giải đấu giao dịch STAR.',
    'champions.winners': 'Người chiến thắng',
    'champions.profitRate': 'Tỷ Suất Lợi Nhuận:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Người Chiến Thắng Giải Thưởng Lớn',
    'tier.first.meta': 'Top 2',
    'tier.first.prizes': [
      'Vé NBA',
      'Bộ Quà Tặng Bóng Rổ',
      'Áo NBA Có Chữ Ký',
      'Tiền Thưởng 10.000 USD',
    ],
    'tier.second.title': 'Hạng Nhì',
    'tier.second.meta': 'Phiếu Mua Hàng NBA Store trị giá 200 USD (4 người)',
    'tier.second.prizes': ['Áo NBA hoặc Giày Bóng Rổ NBA — bạn lựa chọn.'],
    'tier.third.title': 'Hạng Ba',
    'tier.third.meta': 'Phiếu Mua Hàng NBA Store trị giá 150 USD (4 người)',
    'tier.third.prizes': ['Áo NBA hoặc Giày Bóng Rổ NBA — bạn lựa chọn.'],

    'road.title': 'Hành Trình Đến Chung Kết',
    'road.regular.name': 'Mùa Giải Thường',
    'road.regular.east': 'KHU VỰC MIỀN ĐÔNG – 15 Đội',
    'road.regular.west': 'KHU VỰC MIỀN TÂY – 15 Đội',
    'road.playoff.name': 'Vòng Playoff',
    'road.playoff.east': 'KHU VỰC MIỀN ĐÔNG – 8 Đội',
    'road.playoff.west': 'KHU VỰC MIỀN TÂY – 8 Đội',
    'road.quarter.name': 'Tứ Kết',
    'road.quarter.east': 'KHU VỰC MIỀN ĐÔNG – 4 Đội',
    'road.quarter.west': 'KHU VỰC MIỀN TÂY – 4 Đội',
    'road.semi.name': 'Bán Kết',
    'road.semi.east': 'KHU VỰC MIỀN ĐÔNG – 2 Đội',
    'road.semi.west': 'KHU VỰC MIỀN TÂY – 2 Đội',
    'road.mvp.name': 'Chung Kết MVP',
    'road.mvp.east': 'KHU VỰC MIỀN ĐÔNG – Đội vào chung kết',
    'road.mvp.west': 'KHU VỰC MIỀN TÂY – Chung kết',
    'road.champion': 'Nhà vô địch MVP',

    'more.title': 'Hơn Cả Một Giải Đấu',
    'more.lead':
      'Giải đấu giao dịch STAR: Cuộc thi được định nghĩa bởi hiệu suất thị trường và tinh thần cạnh tranh.',
    'more.line1': 'Bạn đã thi đấu. Bạn đã đại diện. Bạn đã giao dịch.',
    'more.line2':
      'Dù bạn vào được chung kết hay bị loại từ vòng đấu, mỗi người tham gia đều là một phần của điều gì đó lớn hơn.',

    'footer.tagline':
      'Chiến lược. Kỹ năng. Đội nhóm. Giải đấu giao dịch STAR: nơi thị trường gặp gỡ sân đấu.',
    'footer.signoff': 'Hãy chờ đón mùa giải tiếp theo.',
  },

  // ไทย — verbatim from the reference sheet.
  TH: {
    'hero.eyebrow': 'STAR เทรดดิ้ง ลีก',
    'hero.headline': ['ฤดูกาลได้มาถึงช่วงเวลาสุดท้ายแล้ว'],
    'hero.sub':
      'เสียงสัญญาณหมดเวลาได้ดังขึ้นแล้ว ตารางการแข่งขันได้เสร็จสมบูรณ์แล้ว จาก 30 ทีม เหลือเพียง 1 ทีม: ได้มีการตัดสิน MVP การเทรดสูงสุดที่เรียบร้อยแล้ว',
    'hero.chipLabel': 'ช่วงเวลาการแข่งขัน',
    'hero.chipValue': '1 มิถุนายน 2026 – 13 สิงหาคม 2026',
    'hero.chipState': 'สิ้นสุดแล้ว',

    'champions.title': 'พบกับแชมป์ MVP ของคุณ',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'ทีมส่วนใหญ่เข้าร่วมการแข่งขันและพวกเขาครองความเป็นผู้นำตลอดทั้งรายการ ทีมที่มีอัตรากำไรสูงสุดตลอดทั้ง 5 รอบของ STAR เทรดดิ้ง ลีก',
    'champions.winners': 'ผู้ชนะ',
    'champions.profitRate': 'อัตรากำไร:',
    'champions.uid': 'UID:',

    'tier.first.title': 'ผู้ชนะรางวัลใหญ่',
    'tier.first.meta': 'อันดับ 1-2',
    'tier.first.prizes': [
      'บัตรเข้าชม NBA',
      'ชุดของขวัญบาสเกตบอล',
      'เสื้อ NBA พร้อมลายเซ็น',
      'รางวัลเงินสด 10,000 ดอลลาร์สหรัฐ',
    ],
    'tier.second.title': 'อันดับ 2',
    'tier.second.meta': 'บัตรกำนัล NBA Store มูลค่า 200 ดอลลาร์สหรัฐ (4 ท่าน)',
    'tier.second.prizes': ['เสื้อ NBA หรือรองเท้าบาสเกตบอล NBA — เลือกได้ตามใจคุณ'],
    'tier.third.title': 'อันดับ 3',
    'tier.third.meta': 'บัตรกำนัล NBA Store มูลค่า 150 ดอลลาร์สหรัฐ (4 ท่าน)',
    'tier.third.prizes': ['เสื้อ NBA หรือรองเท้าบาสเกตบอล NBA — เลือกได้ตามใจคุณ'],

    'road.title': 'เส้นทางสู่รอบชิงชนะเลิศ',
    'road.regular.name': 'รอบลีก',
    'road.regular.east': 'สายตะวันออก – 15 ทีม',
    'road.regular.west': 'สายตะวันตก – 15 ทีม',
    'road.playoff.name': 'รอบเพลย์ออฟ',
    'road.playoff.east': 'สายตะวันออก – 8 ทีม',
    'road.playoff.west': 'สายตะวันตก – 8 ทีม',
    'road.quarter.name': 'รอบ 8 ทีมสุดท้าย',
    'road.quarter.east': 'สายตะวันออก – 4 ทีม',
    'road.quarter.west': 'สายตะวันตก – 4 ทีม',
    'road.semi.name': 'รอบรองชนะเลิศ',
    'road.semi.east': 'สายตะวันออก – 2 ทีม',
    'road.semi.west': 'สายตะวันตก – 2 ทีม',
    'road.mvp.name': 'รอบชิงชนะเลิศ MVP',
    'road.mvp.east': 'สายตะวันออก – ผู้เข้าชิง',
    'road.mvp.west': 'สายตะวันตก – ผู้เข้าชิง',
    'road.champion': 'แชมป์ MVP',

    'more.title': 'มากกว่าการแข่งขัน',
    'more.lead':
      'STAR เทรดดิ้ง ลีก: การแข่งขันที่นิยามด้วยผลการดำเนินตลาดและจิตวิญญาณการแข่งขัน',
    'more.line1': 'คุณได้แข่งขันแล้ว คุณได้เป็นตัวแทนแล้ว คุณเทรดแล้ว',
    'more.line2':
      'ไม่ว่าคุณจะผ่านเข้าสู่รอบชิงชนะเลิศหรือตกรอบแรก ผู้เข้าร่วมทุกคนเป็นส่วนหนึ่งของบางสิ่งที่ยิ่งใหญ่กว่า',

    'footer.tagline':
      'กลยุทธ์ ทักษะ ทีม STAR เทรดดิ้ง ลีก: ที่ซึ่งตลาดพบกับสนามแข่งขัน',
    'footer.signoff': 'คอยติดตามฤดูกาลถัดไป',
  },

  // Bahasa Indonesia — verbatim from the reference sheet.
  IDN: {
    'hero.eyebrow': 'Liga Trading STAR',
    'hero.headline': ['Musim Telah Mencapai Momen Terakhir'],
    'hero.sub':
      'Bel penanda akhir telah berbunyi. Bagan turnamen telah lengkap. Dari 30 tim menjadi 1: MVP trading terbaik telah ditentukan.',
    'hero.chipLabel': 'Periode Turnamen',
    'hero.chipValue': '1 Juni 2026 – 13 Agustus 2026',
    'hero.chipState': 'Selesai',

    'champions.title': 'Kenali Para Juara MVP Anda',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'Sebagian besar tim telah bertanding. Mereka mendominasi. Tim dengan tingkat profit tertinggi di seluruh 5 tahap Liga Trading STAR.',
    'champions.winners': 'Pemenang',
    'champions.profitRate': 'Tingkat Profit:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Pemenang Hadiah Utama',
    'tier.first.meta': '2 Teratas',
    'tier.first.prizes': [
      'Tiket NBA',
      'Paket Hadiah Basket',
      'Jersey NBA Bertanda Tangan',
      'Hadiah Tunai USD10.000',
    ],
    'tier.second.title': 'Juara Kedua',
    'tier.second.meta': 'Voucher NBA Store USD200 (4 orang)',
    'tier.second.prizes': ['Jersey NBA atau Sepatu Basket NBA — pilihan Anda.'],
    'tier.third.title': 'Juara Ketiga',
    'tier.third.meta': 'Voucher NBA Store USD150 (4 orang)',
    'tier.third.prizes': ['Jersey NBA atau Sepatu Basket NBA — pilihan Anda.'],

    'road.title': 'Perjalanan Menuju Final',
    'road.regular.name': 'Musim Reguler',
    'road.regular.east': 'Eastern Conference – 15 Tim',
    'road.regular.west': 'Western Conference – 15 Tim',
    'road.playoff.name': 'Babak Playoff',
    'road.playoff.east': 'Eastern Conference – 8 Tim',
    'road.playoff.west': 'Western Conference – 8 Tim',
    'road.quarter.name': 'Perempat Final',
    'road.quarter.east': 'Eastern Conference – 4 Tim',
    'road.quarter.west': 'Western Conference – 4 Tim',
    'road.semi.name': 'Semi Final',
    'road.semi.east': 'Eastern Conference – 2 Tim',
    'road.semi.west': 'Western Conference – 2 Tim',
    'road.mvp.name': 'Final MVP',
    'road.mvp.east': 'Eastern Conference – Finalis',
    'road.mvp.west': 'Western Conference – Finalis',
    'road.champion': 'Juara MVP',

    'more.title': 'Lebih dari Sekadar Turnamen',
    'more.lead':
      'Liga Trading STAR: Kompetisi yang didefinisikan oleh kinerja pasar dan semangat kompetitif.',
    'more.line1': 'Kamu telah bersaing. Kamu telah mewakili. Kamu telah berdagang.',
    'more.line2':
      'Apakah kamu mencapai babak final atau gugur di putaran awal, setiap peserta adalah bagian dari sesuatu yang lebih besar.',

    'footer.tagline':
      'Strategi. Keahlian. Tim. Liga Trading STAR: di mana pasar bertemu dengan lapangan.',
    'footer.signoff': 'Nantikan musim berikutnya.',
  },

  // العربية — verbatim from the reference sheet. RTL: LanguageContext sets
  // <html dir="rtl"> for AR. Brand/proper nouns (NBA, STARTRADER, STAR Trading
  // League, MVP, UID) stay in Latin script; digits stay Western.
  AR: {
    'hero.eyebrow': 'STAR TRADING LEAGUE',
    'hero.headline': ['وصل الدوري إلى لحظته الأخيرة'],
    'hero.sub':
      'دقت صافرة النهاية. واكتمل مشوار البطولة. من 30 فريقًا إلى فائز واحد: الـ MVP لهذا الدوري أصبح معروفًا.',
    'hero.chipLabel': 'فترة البطولة',
    'hero.chipValue': '1 يونيو 2026 – 13 أغسطس 2026',
    'hero.chipState': 'انتهت',

    'champions.title': 'أبطال الـ MVP لهذا الدوري',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'من بداية الموسم حتى النهائيات، برز هذا الفريق بأداء استثنائي. صاحب أعلى معدل ربح عبر المراحل الخمس من STAR Trading League.',
    'champions.winners': 'الفائزون',
    'champions.profitRate': 'معدل الربح:',
    'champions.uid': 'UID:',

    'tier.first.title': 'الفائزون بالجائزة الكبرى',
    'tier.first.meta': 'أفضل فريقين',
    'tier.first.prizes': [
      'تذاكر NBA',
      'مجموعة هدايا كرة السلة',
      'قميص NBA موقّع',
      'مكافأة نقدية بقيمة 10,000 دولار أمريكي',
    ],
    'tier.second.title': 'المركز الثاني',
    'tier.second.meta': 'قسيمة من NBA Store بقيمة 200 دولار أمريكي (4 فائزين)',
    'tier.second.prizes': ['قميص NBA أو حذاء كرة سلة NBA — الخيار لك.'],
    'tier.third.title': 'المركز الثالث',
    'tier.third.meta': 'قسيمة من NBA Store بقيمة 150 دولار أمريكي (4 فائزين)',
    'tier.third.prizes': ['قميص NBA أو حذاء كرة سلة NBA — الخيار لك.'],

    'road.title': 'الطريق إلى النهائيات',
    'road.regular.name': 'الموسم النظامي',
    'road.regular.east': 'المؤتمر الشرقي · 15 فريقًا',
    'road.regular.west': 'المؤتمر الغربي · 15 فريقًا',
    'road.playoff.name': 'التصفيات',
    'road.playoff.east': 'المؤتمر الشرقي · 8 فرق',
    'road.playoff.west': 'المؤتمر الغربي · 8 فرق',
    'road.quarter.name': 'ربع النهائي',
    'road.quarter.east': 'المؤتمر الشرقي · 4 فرق',
    'road.quarter.west': 'المؤتمر الغربي · 4 فرق',
    'road.semi.name': 'نصف النهائي',
    'road.semi.east': 'المؤتمر الشرقي · فريقان',
    'road.semi.west': 'المؤتمر الغربي · فريقان',
    'road.mvp.name': 'نهائي الـ MVP',
    'road.mvp.east': 'المؤتمر الشرقي · المتأهل للنهائي',
    'road.mvp.west': 'المؤتمر الغربي · المتأهل للنهائي',
    'road.champion': 'بطل الـ MVP',

    'more.title': 'لم تكن مجرد بطولة',
    'more.lead':
      'في STAR Trading League، حملت كل مرحلة تحديًا جديدًا، وكان لكل فريق دور في هذا الموسم.',
    'more.line1': 'تنافست، مثّلت فريقك، وتداولت حتى النهاية.',
    'more.line2':
      'سواء وصلت إلى النهائيات أو توقّف مشوارك في المراحل الأولى، ساهم كل مشارك في صنع هذا الموسم.',

    'footer.tagline':
      'استراتيجية. مهارة. فريق. STAR Trading League: حيث يلتقي السوق بالملعب.',
    'footer.signoff': 'ترقّبوا الموسم القادم.',
  },

  // 한국어 — verbatim from the reference sheet.
  KR: {
    'hero.eyebrow': '스타 트레이딩 리그',
    'hero.headline': ['시즌이 마침내 마지막 순간에 도달했습니다'],
    'hero.sub':
      '버저가 울렸습니다. 대진표가 완성되었습니다. 30개 팀에서 단 1개 팀으로: 최종 트레이딩 MVP가 결정되었습니다.',
    'hero.chipLabel': '대회 기간',
    'hero.chipValue': '2026년 6월 1일 – 2026년 8월 13일',
    'hero.chipState': '종료',

    'champions.title': 'MVP 챔피언을 만나보세요',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      '대부분의 팀이 참가했고, 그들은 대회를 지배했습니다. 스타 트레이딩 리그의 5개 모든 스테이지에서 가장 높은 수익률을 기록한 팀입니다.',
    'champions.winners': '수상자',
    'champions.profitRate': '수익률:',
    'champions.uid': 'UID:',

    'tier.first.title': '그랜드 프라이즈 수상팀',
    'tier.first.meta': '상위 2팀',
    'tier.first.prizes': ['NBA 티켓', '농구 기프트 세트', 'NBA 친필 사인 저지', '현금 보상 US$10,000'],
    'tier.second.title': '2위',
    'tier.second.meta': 'NBA Store 상품권 US$200 (4명)',
    'tier.second.prizes': ['NBA 저지 또는 NBA 농구화 — 원하는 상품을 선택하세요.'],
    'tier.third.title': '3위',
    'tier.third.meta': 'NBA Store 상품권 US$150 (4명)',
    'tier.third.prizes': ['NBA 저지 또는 NBA 농구화 — 원하는 상품을 선택하세요.'],

    'road.title': '파이널까지의 여정',
    'road.regular.name': '정규 시즌',
    'road.regular.east': '동부 컨퍼런스 – 15개 팀',
    'road.regular.west': '서부 컨퍼런스 – 15개 팀',
    'road.playoff.name': '플레이오프',
    'road.playoff.east': '동부 컨퍼런스 – 8개 팀',
    'road.playoff.west': '서부 컨퍼런스 – 8개 팀',
    'road.quarter.name': '8강전',
    'road.quarter.east': '동부 컨퍼런스 – 4개 팀',
    'road.quarter.west': '서부 컨퍼런스 – 4개 팀',
    'road.semi.name': '준결승',
    'road.semi.east': '동부 컨퍼런스 – 2개 팀',
    'road.semi.west': '서부 컨퍼런스 – 2개 팀',
    'road.mvp.name': 'MVP 결승',
    'road.mvp.east': '동부 컨퍼런스 – 결승 진출팀',
    'road.mvp.west': '서부 컨퍼런스 – 결승 진출팀',
    'road.champion': 'MVP 챔피언',

    'more.title': '단순한 토너먼트 그 이상',
    'more.lead': '스타 트레이딩 리그: 시장 성과와 경쟁 정신으로 정의되는 대회.',
    'more.line1': '당신은 경쟁했습니다. 대표했습니다. 거래했습니다.',
    'more.line2': '결승에 진출했든 초반에 탈락했든, 모든 참가자는 더 큰 무언가의 일부였습니다.',

    'footer.tagline': '전략. 실력. 팀. 스타 트레이딩 리그: 시장과 코트가 만나는 곳.',
    'footer.signoff': '다음 시즌을 기대해 주세요.',
  },

  // 日本語 — verbatim from the reference sheet.
  JP: {
    'hero.eyebrow': 'STAR トレーディング リーグ',
    'hero.headline': ['シーズンはいよいよ最終局面を迎えました'],
    'hero.sub':
      'ブザーが鳴り響きました。トーナメント表が完成しました。30チームから1チームへ：究極のトレーディングMVPが決定しました。',
    'hero.chipLabel': '大会期間',
    'hero.chipValue': '2026年6月1日～2026年8月13日',
    'hero.chipState': '終了',

    'champions.title': 'MVPチャンピオンをご紹介します',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      '多くのチームが競い合い、圧倒的な実力を見せました。STAR トレーディング リーグの全5ステージを通じて最高の利益率を達成したチームです。',
    'champions.winners': '受賞者',
    'champions.profitRate': '利益率:',
    'champions.uid': 'UID:',

    'tier.first.title': 'グランドプライズ受賞者',
    'tier.first.meta': '上位2チーム',
    'tier.first.prizes': [
      'NBA観戦チケット',
      'バスケットボールギフトセット',
      'NBA直筆サイン入りジャージ',
      '現金賞金10,000米ドル',
    ],
    'tier.second.title': '第2位',
    'tier.second.meta': 'NBA Store 200米ドル分バウチャー（4名）',
    'tier.second.prizes': ['NBAジャージまたはNBAバスケットボールシューズ、お好きな方をお選びください。'],
    'tier.third.title': '第3位',
    'tier.third.meta': 'NBA Store 150米ドル分バウチャー（4名）',
    'tier.third.prizes': ['NBAジャージまたはNBAバスケットボールシューズ、お好きな方をお選びください。'],

    'road.title': '決勝への道のり',
    'road.regular.name': 'レギュラーシーズン',
    'road.regular.east': '東・カンファレンス – 15チーム',
    'road.regular.west': '西・カンファレンス – 15チーム',
    'road.playoff.name': 'プレーオフ',
    'road.playoff.east': '東・カンファレンス – 8チーム',
    'road.playoff.west': '西・カンファレンス – 8チーム',
    'road.quarter.name': '準々決勝',
    'road.quarter.east': '東・カンファレンス – 4チーム',
    'road.quarter.west': '西・カンファレンス – 4チーム',
    'road.semi.name': '準決勝',
    'road.semi.east': '東・カンファレンス – 2チーム',
    'road.semi.west': '西・カンファレンス – 2チーム',
    'road.mvp.name': 'MVP決勝',
    'road.mvp.east': '東・カンファレンス – ファイナリスト',
    'road.mvp.west': '西・カンファレンス – ファイナリスト',
    'road.champion': 'MVPチャンピオン',

    'more.title': 'トーナメント以上のもの',
    'more.lead': 'STAR トレーディング リーグ：市場のパフォーマンスと競争精神によって定義される大会。',
    'more.line1': 'あなたは競いました。代表しました。トレードしました。',
    'more.line2': '決勝に進んでも、序盤で敗退しても、すべての参加者はより大きな何かの一部でした。',

    'footer.tagline': '戦略。スキル。チーム。STAR トレーディング リーグ：市場とコートが交わる場所。',
    'footer.signoff': '次のシーズンをお楽しみに。',
  },

  // Français — verbatim from the reference sheet.
  FR: {
    'hero.eyebrow': 'Ligue de Trading STAR',
    'hero.headline': ['La Saison Est Arrivée À Son Dernier Moment'],
    'hero.sub':
      'Le buzzer a retenti. Le tableau du tournoi est désormais complet. De 30 équipes à 1 seule : le MVP ultime du trading a été désigné.',
    'hero.chipLabel': 'Période du tournoi',
    'hero.chipValue': '1 juin 2026 – 13 août 2026',
    'hero.chipState': 'Terminé',

    'champions.title': 'Découvrez Vos Champions MVP',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'La plupart des équipes ont participé. Elles ont dominé la compétition. L’équipe ayant obtenu le taux de profit le plus élevé sur l’ensemble des 5 étapes de la Ligue de Trading STAR.',
    'champions.winners': 'Gagnants',
    'champions.profitRate': 'Taux de Profit :',
    'champions.uid': 'UID :',

    'tier.first.title': 'Gagnants du Grand Prix',
    'tier.first.meta': 'Top 2',
    'tier.first.prizes': [
      'Billets NBA',
      'Coffret Cadeau Basketball',
      'Maillot NBA Dédicacé',
      'Récompense en Espèces de 10 000 USD',
    ],
    'tier.second.title': 'Deuxième Place',
    'tier.second.meta': 'Bon d’Achat NBA Store de 200 USD (4 personnes)',
    'tier.second.prizes': ['Maillot NBA ou Chaussures de Basketball NBA — à vous de choisir.'],
    'tier.third.title': 'Troisième Place',
    'tier.third.meta': 'Bon d’Achat NBA Store de 150 USD (4 personnes)',
    'tier.third.prizes': ['Maillot NBA ou Chaussures de Basketball NBA — à vous de choisir.'],

    'road.title': 'La Route Vers La Finale',
    'road.regular.name': 'Saison Régulière',
    'road.regular.east': 'CONFÉRENCE EST – 15 équipes',
    'road.regular.west': 'CONFÉRENCE OUEST – 15 équipes',
    'road.playoff.name': 'Playoffs',
    'road.playoff.east': 'CONFÉRENCE EST – 8 équipes',
    'road.playoff.west': 'CONFÉRENCE OUEST – 8 équipes',
    'road.quarter.name': 'Quarts de Finale',
    'road.quarter.east': 'CONFÉRENCE EST – 4 équipes',
    'road.quarter.west': 'CONFÉRENCE OUEST – 4 équipes',
    'road.semi.name': 'Demi-Finales',
    'road.semi.east': 'CONFÉRENCE EST – 2 équipes',
    'road.semi.west': 'CONFÉRENCE OUEST – 2 équipes',
    'road.mvp.name': 'Finale MVP',
    'road.mvp.east': 'CONFÉRENCE EST – Finaliste',
    'road.mvp.west': 'CONFÉRENCE OUEST – Finaliste',
    'road.champion': 'Champion MVP',

    'more.title': 'Plus qu’un tournoi',
    'more.lead':
      'Ligue de Trading STAR : une compétition définie par la performance du marché et l’esprit de compétition.',
    'more.line1': 'Vous avez concouru. Vous avez représenté. Vous avez tradé.',
    'more.line2':
      'Que vous ayez atteint la finale ou été éliminé en début de parcours, chaque participant faisait partie de quelque chose de plus grand.',

    'footer.tagline':
      'Stratégie. Compétence. Équipe. Ligue de Trading STAR : là où le marché rencontre le terrain.',
    'footer.signoff': 'Restez connectés pour la prochaine saison.',
  },

  // Español — verbatim from the reference sheet.
  ES: {
    'hero.eyebrow': 'Liga de Trading STAR',
    'hero.headline': ['La Temporada Ha Llegado A Su Momento Final'],
    'hero.sub':
      'El timbre final ha sonado. El cuadro del torneo está completo. De 30 equipos a 1: ya se ha determinado el MVP definitivo del trading.',
    'hero.chipLabel': 'Período del torneo',
    'hero.chipValue': '1 de junio de 2026 – 13 de agosto de 2026',
    'hero.chipState': 'Finalizado',

    'champions.title': 'Conoce A Tus Campeones MVP',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'La mayoría de los equipos compitieron. Dominaron la competición. El equipo con la mayor tasa de ganancias a lo largo de las 5 etapas de la Liga de Trading STAR.',
    'champions.winners': 'Ganadores',
    'champions.profitRate': 'Tasa de Ganancia:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Ganadores del Gran Premio',
    'tier.first.meta': 'Top 2',
    'tier.first.prizes': [
      'Entradas NBA',
      'Set de Regalo de Baloncesto',
      'Camiseta NBA Firmada',
      'Premio en Efectivo de USD 10.000',
    ],
    'tier.second.title': 'Segundo Lugar',
    'tier.second.meta': 'Vale de NBA Store por USD 200 (4 personas)',
    'tier.second.prizes': ['Camiseta NBA o Zapatillas de Baloncesto NBA — tú eliges.'],
    'tier.third.title': 'Tercer Lugar',
    'tier.third.meta': 'Vale de NBA Store por USD 150 (4 personas)',
    'tier.third.prizes': ['Camiseta NBA o Zapatillas de Baloncesto NBA — tú eliges.'],

    'road.title': 'El Camino Hacia La Final',
    'road.regular.name': 'Temporada Regular',
    'road.regular.east': 'CONFERENCIA ESTE – 15 equipos',
    'road.regular.west': 'CONFERENCIA OESTE – 15 equipos',
    'road.playoff.name': 'Playoffs',
    'road.playoff.east': 'CONFERENCIA ESTE – 8 equipos',
    'road.playoff.west': 'CONFERENCIA OESTE – 8 equipos',
    'road.quarter.name': 'Cuartos de Final',
    'road.quarter.east': 'CONFERENCIA ESTE – 4 equipos',
    'road.quarter.west': 'CONFERENCIA OESTE – 4 equipos',
    'road.semi.name': 'Semifinales',
    'road.semi.east': 'CONFERENCIA ESTE – 2 equipos',
    'road.semi.west': 'CONFERENCIA OESTE – 2 equipos',
    'road.mvp.name': 'Final MVP',
    'road.mvp.east': 'CONFERENCIA ESTE – Finalista',
    'road.mvp.west': 'CONFERENCIA OESTE – Finalista',
    'road.champion': 'Campeón MVP',

    'more.title': 'Más que un torneo',
    'more.lead':
      'Liga de Trading STAR: una competición definida por el rendimiento del mercado y el espíritu competitivo.',
    'more.line1': 'Competiste. Te representaste. Operaste.',
    'more.line2':
      'Tanto si llegaste a las finales como si caíste en las primeras rondas, cada participante formó parte de algo más grande.',

    'footer.tagline':
      'Estrategia. Habilidad. Equipo. Liga de Trading STAR: donde el mercado se encuentra con la cancha.',
    'footer.signoff': 'Estad atentos a la próxima temporada.',
  },

  // Português — verbatim from the reference sheet.
  PT: {
    'hero.eyebrow': 'Liga de Trading STAR',
    'hero.headline': ['A Temporada Chegou Ao Seu Momento Final'],
    'hero.sub':
      'O sinal final soou. A chave do torneio está completa. De 30 equipas para 1: o MVP máximo de trading foi determinado.',
    'hero.chipLabel': 'Período do torneio',
    'hero.chipValue': '1 de junho de 2026 – 13 de agosto de 2026',
    'hero.chipState': 'Concluído',

    'champions.title': 'Conheça Os Seus Campeões MVP',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'A maioria das equipas competiu. Dominaram a competição. A equipa com a maior taxa de lucro ao longo das 5 etapas da Liga de Trading STAR.',
    'champions.winners': 'Vencedores',
    'champions.profitRate': 'Taxa de Lucro:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Vencedores do Grande Prémio',
    'tier.first.meta': 'Top 2',
    'tier.first.prizes': [
      'Bilhetes NBA',
      'Conjunto de Oferta de Basquetebol',
      'Camisola NBA Autografada',
      'Prémio Monetário de USD 10.000',
    ],
    'tier.second.title': 'Segundo Lugar',
    'tier.second.meta': 'Vale NBA Store de USD 200 (4 pessoas)',
    'tier.second.prizes': ['Camisola NBA ou Ténis de Basquetebol NBA — a escolha é sua.'],
    'tier.third.title': 'Terceiro Lugar',
    'tier.third.meta': 'Vale NBA Store de USD 150 (4 pessoas)',
    'tier.third.prizes': ['Camisola NBA ou Ténis de Basquetebol NBA — a escolha é sua.'],

    'road.title': 'O Caminho Para A Final',
    'road.regular.name': 'Época Regular',
    'road.regular.east': 'CONFERÊNCIA ESTE – 15 equipas',
    'road.regular.west': 'CONFERÊNCIA OESTE – 15 equipas',
    'road.playoff.name': 'Playoffs',
    'road.playoff.east': 'CONFERÊNCIA ESTE – 8 equipas',
    'road.playoff.west': 'CONFERÊNCIA OESTE – 8 equipas',
    'road.quarter.name': 'Quartos de Final',
    'road.quarter.east': 'CONFERÊNCIA ESTE – 4 equipas',
    'road.quarter.west': 'CONFERÊNCIA OESTE – 4 equipas',
    'road.semi.name': 'Meias-Finais',
    'road.semi.east': 'CONFERÊNCIA ESTE – 2 equipas',
    'road.semi.west': 'CONFERÊNCIA OESTE – 2 equipas',
    'road.mvp.name': 'Final MVP',
    'road.mvp.east': 'CONFERÊNCIA ESTE – Finalista',
    'road.mvp.west': 'CONFERÊNCIA OESTE – Finalista',
    'road.champion': 'Campeão MVP',

    'more.title': 'Mais do que um torneio',
    'more.lead':
      'Liga de Trading STAR: Uma competição definida pelo desempenho no mercado e pelo espírito competitivo.',
    'more.line1': 'Competiste. Representaste. Negociaste.',
    'more.line2':
      'Quer tenhas chegado às finais ou saído nas primeiras rondas, cada participante fez parte de algo maior.',

    'footer.tagline':
      'Estratégia. Competência. Equipa. Liga de Trading STAR: onde o mercado encontra o campo.',
    'footer.signoff': 'Fiquem atentos à próxima época.',
  },

  // Deutsch — verbatim from the reference sheet.
  DE: {
    'hero.eyebrow': 'STAR Trading-Liga',
    'hero.headline': ['Die Saison Hat Ihren Letzten Moment Erreicht'],
    'hero.sub':
      'Der Buzzer hat ertönt. Der Turnierbaum ist vollständig. Von 30 Teams auf 1: Der ultimative Trading-MVP steht fest.',
    'hero.chipLabel': 'Turnierzeitraum',
    'hero.chipValue': '1. Juni 2026 – 13. August 2026',
    'hero.chipState': 'Abgeschlossen',

    'champions.title': 'Lernen Sie Ihre MVP-Champions Kennen',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'Die meisten Teams haben teilgenommen. Sie dominierten den Wettbewerb. Das Team mit der höchsten Gewinnrate über alle 5 Phasen der STAR Trading League hinweg.',
    'champions.winners': 'Gewinner',
    'champions.profitRate': 'Gewinnrate:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Gewinner Des Hauptpreises',
    'tier.first.meta': 'Top 2',
    'tier.first.prizes': [
      'NBA-Tickets',
      'Basketball-Geschenkset',
      'Signiertes NBA-Trikot',
      '10.000 USD Bargeldprämie',
    ],
    'tier.second.title': 'Zweiter Platz',
    'tier.second.meta': 'NBA Store Gutschein im Wert von 200 USD (4 Personen)',
    'tier.second.prizes': ['NBA-Trikot oder NBA-Basketballschuhe — Sie haben die Wahl.'],
    'tier.third.title': 'Dritter Platz',
    'tier.third.meta': 'NBA Store Gutschein im Wert von 150 USD (4 Personen)',
    'tier.third.prizes': ['NBA-Trikot oder NBA-Basketballschuhe — Sie haben die Wahl.'],

    'road.title': 'Der Weg Ins Finale',
    'road.regular.name': 'Reguläre Saison',
    'road.regular.east': 'EASTERN CONFERENCE – 15 Teams',
    'road.regular.west': 'WESTERN CONFERENCE – 15 Teams',
    'road.playoff.name': 'Playoffs',
    'road.playoff.east': 'EASTERN CONFERENCE – 8 Teams',
    'road.playoff.west': 'WESTERN CONFERENCE – 8 Teams',
    'road.quarter.name': 'Viertelfinale',
    'road.quarter.east': 'EASTERN CONFERENCE – 4 Teams',
    'road.quarter.west': 'WESTERN CONFERENCE – 4 Teams',
    'road.semi.name': 'Halbfinale',
    'road.semi.east': 'EASTERN CONFERENCE – 2 Teams',
    'road.semi.west': 'WESTERN CONFERENCE – 2 Teams',
    'road.mvp.name': 'MVP-Finale',
    'road.mvp.east': 'EASTERN CONFERENCE – Finalist',
    'road.mvp.west': 'WESTERN CONFERENCE – Finalist',
    'road.champion': 'MVP Champion',

    'more.title': 'Mehr als ein Turnier',
    'more.lead':
      'STAR Trading-Liga: Ein Wettbewerb, definiert durch Marktleistung und Wettkampfgeist.',
    'more.line1': 'Du hast teilgenommen. Du hast dich vertreten. Du hast gehandelt.',
    'more.line2':
      'Egal, ob du das Finale erreicht oder in den frühen Runden ausgeschieden bist – jeder Teilnehmer war Teil von etwas Größerem.',

    'footer.tagline':
      'Strategie. Können. Team. STAR Trading-Liga: wo der Markt auf das Spielfeld trifft.',
    'footer.signoff': 'Bleibt gespannt auf die nächste Saison.',
  },

  // Italiano — verbatim from the reference sheet.
  IT: {
    'hero.eyebrow': 'Lega di Trading STAR',
    'hero.headline': ['La Stagione È Arrivata Al Suo Momento Finale'],
    'hero.sub':
      'Il buzzer è suonato. Il tabellone del torneo è completo. Da 30 squadre a 1: è stato determinato l’MVP definitivo del trading.',
    'hero.chipLabel': 'Periodo del torneo',
    'hero.chipValue': '1 giugno 2026 – 13 agosto 2026',
    'hero.chipState': 'Concluso',

    'champions.title': 'Scopri I Tuoi Campioni MVP',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'La maggior parte delle squadre ha gareggiato. Hanno dominato la competizione. La squadra con il più alto tasso di profitto in tutte le 5 fasi della Lega di Trading STAR.',
    'champions.winners': 'Vincitori',
    'champions.profitRate': 'Tasso di Profitto:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Vincitori Del Gran Premio',
    'tier.first.meta': 'Top 2',
    'tier.first.prizes': [
      'Biglietti NBA',
      'Set Regalo Basket',
      'Maglia NBA Autografata',
      'Premio in Denaro di 10.000 USD',
    ],
    'tier.second.title': 'Secondo Posto',
    'tier.second.meta': 'Voucher NBA Store da 200 USD (4 persone)',
    'tier.second.prizes': ['Maglia NBA o Scarpe da Basket NBA — scegli tu.'],
    'tier.third.title': 'Terzo Posto',
    'tier.third.meta': 'Voucher NBA Store da 150 USD (4 persone)',
    'tier.third.prizes': ['Maglia NBA o Scarpe da Basket NBA — scegli tu.'],

    'road.title': 'La Strada Verso La Finale',
    'road.regular.name': 'Stagione Regolare',
    'road.regular.east': 'CONFERENZA EST – 15 squadre',
    'road.regular.west': 'CONFERENZA OVEST – 15 squadre',
    'road.playoff.name': 'Playoff',
    'road.playoff.east': 'CONFERENZA EST – 8 squadre',
    'road.playoff.west': 'CONFERENZA OVEST – 8 squadre',
    'road.quarter.name': 'Quarti di Finale',
    'road.quarter.east': 'CONFERENZA EST – 4 squadre',
    'road.quarter.west': 'CONFERENZA OVEST – 4 squadre',
    'road.semi.name': 'Semifinali',
    'road.semi.east': 'CONFERENZA EST – 2 squadre',
    'road.semi.west': 'CONFERENZA OVEST – 2 squadre',
    'road.mvp.name': 'Finale MVP',
    'road.mvp.east': 'CONFERENZA EST – Finalista',
    'road.mvp.west': 'CONFERENZA OVEST – Finalista',
    'road.champion': 'Campione MVP',

    'more.title': 'Più di un torneo',
    'more.lead':
      'Lega di Trading STAR: una competizione definita dalle performance di mercato e dallo spirito competitivo.',
    'more.line1': 'Hai gareggiato. Hai rappresentato. Hai fatto trading.',
    'more.line2':
      'Che tu abbia raggiunto le finali o sia uscito nei turni iniziali, ogni partecipante ha fatto parte di qualcosa di più grande.',

    'footer.tagline':
      'Strategia. Abilità. Squadra. Lega di Trading STAR: dove il mercato incontra il campo.',
    'footer.signoff': 'Rimanete sintonizzati per la prossima stagione.',
  },

  // Polski — verbatim from the reference sheet.
  PL: {
    'hero.eyebrow': 'STAR Liga Tradingowa',
    'hero.headline': ['Sezon Osiągnął Swój Finałowy Moment'],
    'hero.sub':
      'Rozległ się końcowy sygnał. Drabinka turniejowa została zamknięta. Z 30 drużyn została 1: wyłoniono ostatecznego MVP tradingu.',
    'hero.chipLabel': 'Okres turnieju',
    'hero.chipValue': '1 czerwca 2026 – 13 sierpnia 2026',
    'hero.chipState': 'Zakończono',

    'champions.title': 'Poznaj Swoich Mistrzów MVP',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'Większość drużyn rywalizowała. Zdominowali turniej. Drużyna z najwyższą stopą zysku we wszystkich 5 etapach STAR Trading League.',
    'champions.winners': 'Zwycięzcy',
    'champions.profitRate': 'Stopa Zysku:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Zdobywcy Nagrody Głównej',
    'tier.first.meta': 'Top 2',
    'tier.first.prizes': [
      'Bilety NBA',
      'Zestaw Upominkowy Koszykarski',
      'Koszulka NBA z Autografem',
      'Nagroda Gotówkowa 10 000 USD',
    ],
    'tier.second.title': 'Drugie Miejsce',
    'tier.second.meta': 'Bon NBA Store o wartości 200 USD (4 osoby)',
    'tier.second.prizes': ['Koszulka NBA lub Buty Koszykarskie NBA — wybór należy do Ciebie.'],
    'tier.third.title': 'Trzecie Miejsce',
    'tier.third.meta': 'Bon NBA Store o wartości 150 USD (4 osoby)',
    'tier.third.prizes': ['Koszulka NBA lub Buty Koszykarskie NBA — wybór należy do Ciebie.'],

    'road.title': 'Droga Do Finału',
    'road.regular.name': 'Sezon Regularny',
    'road.regular.east': 'KONFERENCJA WSCHODNIA – 15 drużyn',
    'road.regular.west': 'KONFERENCJA ZACHODNIA – 15 drużyn',
    'road.playoff.name': 'Playoff',
    'road.playoff.east': 'KONFERENCJA WSCHODNIA – 8 drużyn',
    'road.playoff.west': 'KONFERENCJA ZACHODNIA – 8 drużyn',
    'road.quarter.name': 'Ćwierćfinał',
    'road.quarter.east': 'KONFERENCJA WSCHODNIA – 4 drużyny',
    'road.quarter.west': 'KONFERENCJA ZACHODNIA – 4 drużyny',
    'road.semi.name': 'Półfinał',
    'road.semi.east': 'KONFERENCJA WSCHODNIA – 2 drużyny',
    'road.semi.west': 'KONFERENCJA ZACHODNIA – 2 drużyny',
    'road.mvp.name': 'Finał MVP',
    'road.mvp.east': 'KONFERENCJA WSCHODNIA – Finalista',
    'road.mvp.west': 'KONFERENCJA ZACHODNIA – Finalista',
    'road.champion': 'Mistrz MVP',

    'more.title': 'Więcej niż turniej',
    'more.lead':
      'STAR Liga Tradingowa: Zawody definiowane przez wyniki rynkowe i ducha rywalizacji.',
    'more.line1': 'Rywalizowałeś. Reprezentowałeś. Handlowałeś.',
    'more.line2':
      'Niezależnie od tego, czy dotarłeś do finałów, czy odpadłeś we wczesnych rundach, każdy uczestnik był częścią czegoś większego.',

    'footer.tagline':
      'Strategia. Umiejętności. Drużyna. STAR Liga Tradingowa: gdzie rynek spotyka boisko.',
    'footer.signoff': 'Bądźcie gotowi na kolejny sezon.',
  },

  // Nederlands — verbatim from the reference sheet.
  NL: {
    'hero.eyebrow': 'STAR Handelscompetitie',
    'hero.headline': ['Het Seizoen Heeft Zijn Laatste Moment Bereikt'],
    'hero.sub':
      'De zoemer heeft geklonken. Het toernooischema is compleet. Van 30 teams naar 1: de ultieme trading-MVP is bepaald.',
    'hero.chipLabel': 'Toernooiperiode',
    'hero.chipValue': '1 juni 2026 – 13 augustus 2026',
    'hero.chipState': 'Voltooid',

    'champions.title': 'Maak Kennis Met Jouw MVP-Kampioenen',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      'De meeste teams deden mee. Zij domineerden de competitie. Het team met het hoogste winstpercentage over alle 5 fasen van de STAR Handelscompetitie.',
    'champions.winners': 'Winnaars',
    'champions.profitRate': 'Winstpercentage:',
    'champions.uid': 'UID:',

    'tier.first.title': 'Hoofdprijswinnaars',
    'tier.first.meta': 'Top 2',
    'tier.first.prizes': [
      'NBA-tickets',
      'Basketbalgeschenkset',
      'Gesigneerd NBA-shirt',
      'Contante Beloning van USD 10.000',
    ],
    'tier.second.title': 'Tweede Plaats',
    'tier.second.meta': 'NBA Store Voucher ter waarde van USD 200 (4 personen)',
    'tier.second.prizes': ['NBA-shirt of NBA-basketbalschoenen — jij kiest.'],
    'tier.third.title': 'Derde Plaats',
    'tier.third.meta': 'NBA Store Voucher ter waarde van USD 150 (4 personen)',
    'tier.third.prizes': ['NBA-shirt of NBA-basketbalschoenen — jij kiest.'],

    'road.title': 'De Weg Naar De Finale',
    'road.regular.name': 'Regulier Seizoen',
    'road.regular.east': 'EASTERN CONFERENCE – 15 teams',
    'road.regular.west': 'WESTERN CONFERENCE – 15 teams',
    'road.playoff.name': 'Playoffs',
    'road.playoff.east': 'EASTERN CONFERENCE – 8 teams',
    'road.playoff.west': 'WESTERN CONFERENCE – 8 teams',
    'road.quarter.name': 'Kwartfinale',
    'road.quarter.east': 'EASTERN CONFERENCE – 4 teams',
    'road.quarter.west': 'WESTERN CONFERENCE – 4 teams',
    'road.semi.name': 'Halve Finale',
    'road.semi.east': 'EASTERN CONFERENCE – 2 teams',
    'road.semi.west': 'WESTERN CONFERENCE – 2 teams',
    'road.mvp.name': 'MVP Finale',
    'road.mvp.east': 'EASTERN CONFERENCE – Finalist',
    'road.mvp.west': 'WESTERN CONFERENCE – Finalist',
    'road.champion': 'MVP-kampioen',

    'more.title': 'Meer dan een toernooi',
    'more.lead':
      'STAR Handelscompetitie: Een competitie bepaald door marktprestaties en competitieve geest.',
    'more.line1': 'Je hebt meegedaan. Je hebt jezelf vertegenwoordigd. Je hebt gehandeld.',
    'more.line2':
      'Of je nu de finale hebt gehaald of in de vroege rondes bent uitgevallen, elke deelnemer maakte deel uit van iets groters.',

    'footer.tagline':
      'Strategie. Vaardigheid. Team. STAR Handelscompetitie: waar de markt het veld ontmoet.',
    'footer.signoff': 'Blijf op de hoogte voor het volgende seizoen.',
  },
}
