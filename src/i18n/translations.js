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
    'hero.sub': '哨声已响。排位已定。30队血战，1队登顶：终极交易MVP已然诞生',
    'hero.chipLabel': '赛事周期',
    'hero.chipValue': '2026年6月1日 – 2026年8月13日',
    'hero.chipState': '已结束',

    'champions.title': '认识您的MVP冠军',
    'champions.placeholder': '[Insert Champion Team Name & Conference]',
    'champions.body':
      '众队竞逐。他们傲视群雄。STAR交易联赛的5轮激战，他们以收益率笑到最后的交易MVP',
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
}
