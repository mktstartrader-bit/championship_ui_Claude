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
}
