export interface TransportItem {
  id: number;
  name: { ko: string; en: string; ja: string; zh: string };
  category: 'bus' | 'train' | 'airport' | 'ferry' | 'local';
  description: { ko: string; en: string; ja: string; zh: string };
  route: { ko: string; en: string; ja: string; zh: string };
  schedule: { ko: string; en: string; ja: string; zh: string };
  fare: { ko: string; en: string; ja: string; zh: string };
  duration: { ko: string; en: string; ja: string; zh: string };
  phone: string;
  address: { ko: string; en: string; ja: string; zh: string };
  tip: { ko: string; en: string; ja: string; zh: string };
  image: string;
}

export const transportData: TransportItem[] = [
  // ===== 🚌 시외/고속버스 =====
  {
    id: 1,
    name: {
      ko: '서울 → 여수 고속버스',
      en: 'Seoul → Yeosu Express Bus',
      ja: 'ソウル → 麗水 高速バス',
      zh: '首尔 → 丽水 高速巴士',
    },
    category: 'bus',
    description: {
      ko: '센트럴시티(호남) 또는 동서울터미널에서 출발. 여수종합버스터미널 도착.',
      en: 'Departs from Central City (Honam) or Dong Seoul Terminal. Arrives at Yeosu Bus Terminal.',
      ja: 'セントラルシティ(湖南)または東ソウルターミナル発。麗水総合バスターミナル着。',
      zh: '从Central City（湖南）或东首尔客运站出发，到达丽水综合客运站。',
    },
    route: {
      ko: '서울 센트럴시티 → 여수종합버스터미널',
      en: 'Seoul Central City → Yeosu Bus Terminal',
      ja: 'ソウル セントラルシティ → 麗水バスターミナル',
      zh: '首尔Central City → 丽水客运站',
    },
    schedule: {
      ko: '06:00 ~ 23:30 (30분~1시간 간격)',
      en: '06:00 ~ 23:30 (every 30min~1hr)',
      ja: '06:00〜23:30（30分〜1時間間隔）',
      zh: '06:00~23:30（每30分钟~1小时）',
    },
    fare: {
      ko: '우등 약 33,800원 / 일반 약 23,600원',
      en: 'Premium ≈ ₩33,800 / Standard ≈ ₩23,600',
      ja: '優等 約33,800ウォン / 一般 約23,600ウォン',
      zh: '豪华 约33,800韩元 / 普通 约23,600韩元',
    },
    duration: {
      ko: '약 3시간 50분 ~ 4시간 30분',
      en: 'Approx. 3h 50min ~ 4h 30min',
      ja: '約3時間50分〜4時間30分',
      zh: '约3小时50分~4小时30分',
    },
    phone: '1588-6900',
    address: {
      ko: '여수시 돌산로 65 (여수종합버스터미널)',
      en: '65 Dolsan-ro, Yeosu (Yeosu Bus Terminal)',
      ja: '麗水市 突山路65（麗水総合バスターミナル）',
      zh: '丽水市 突山路65（丽水综合客运站）',
    },
    tip: {
      ko: '금요일 오후/일요일은 매진 주의! 미리 예매하세요 (버스타고 앱)',
      en: 'Fri afternoon & Sun often sold out! Book in advance (Bustago app)',
      ja: '金曜午後・日曜は満席注意！事前予約推奨（Bustagoアプリ）',
      zh: '周五下午和周日容易售罄！请提前订票（Bustago APP）',
    },
    image: '🚌',
  },
  {
    id: 2,
    name: {
      ko: '광주 → 여수 시외버스',
      en: 'Gwangju → Yeosu Intercity Bus',
      ja: '光州 → 麗水 市外バス',
      zh: '光州 → 丽水 市外巴士',
    },
    category: 'bus',
    description: {
      ko: '광주종합버스터미널(유스퀘어)에서 출발. 가장 자주 운행되는 노선 중 하나.',
      en: 'Departs from Gwangju U-Square Terminal. One of the most frequent routes.',
      ja: '光州総合バスターミナル（Uスクエア）発。最も運行頻度の高い路線の一つ。',
      zh: '从光州综合客运站（U-Square）出发，最频繁的线路之一。',
    },
    route: {
      ko: '광주 유스퀘어 → 여수종합버스터미널',
      en: 'Gwangju U-Square → Yeosu Bus Terminal',
      ja: '光州 Uスクエア → 麗水バスターミナル',
      zh: '光州U-Square → 丽水客运站',
    },
    schedule: {
      ko: '06:10 ~ 21:40 (20~40분 간격)',
      en: '06:10 ~ 21:40 (every 20~40min)',
      ja: '06:10〜21:40（20〜40分間隔）',
      zh: '06:10~21:40（每20~40分钟）',
    },
    fare: {
      ko: '약 13,600원',
      en: 'Approx. ₩13,600',
      ja: '約13,600ウォン',
      zh: '约13,600韩元',
    },
    duration: {
      ko: '약 1시간 40분',
      en: 'Approx. 1h 40min',
      ja: '約1時間40分',
      zh: '约1小时40分',
    },
    phone: '062-360-8114',
    address: {
      ko: '여수시 돌산로 65 (여수종합버스터미널)',
      en: '65 Dolsan-ro, Yeosu (Yeosu Bus Terminal)',
      ja: '麗水市 突山路65（麗水総合バスターミナル）',
      zh: '丽水市 突山路65（丽水综合客运站）',
    },
    tip: {
      ko: '순천 경유 노선도 있으니 직행 확인하세요!',
      en: 'Some routes stop at Suncheon — check for direct buses!',
      ja: '順天経由もあるので直行便を確認！',
      zh: '有些班次经停顺天，请确认直达车！',
    },
    image: '🚌',
  },
  {
    id: 3,
    name: {
      ko: '부산 → 여수 시외버스',
      en: 'Busan → Yeosu Intercity Bus',
      ja: '釜山 → 麗水 市外バス',
      zh: '釜山 → 丽水 市外巴士',
    },
    category: 'bus',
    description: {
      ko: '부산종합(노포)터미널에서 출발. 남해고속도로 경유.',
      en: 'Departs from Busan Nopo Terminal via Namhae Expressway.',
      ja: '釜山総合（老圃）ターミナル発。南海高速道路経由。',
      zh: '从釜山综合（老圃）客运站出发，经南海高速公路。',
    },
    route: {
      ko: '부산 노포터미널 → 여수종합버스터미널',
      en: 'Busan Nopo Terminal → Yeosu Bus Terminal',
      ja: '釜山 老圃ターミナル → 麗水バスターミナル',
      zh: '釜山老圃客运站 → 丽水客运站',
    },
    schedule: {
      ko: '07:00 ~ 19:00 (1시간~1시간 30분 간격)',
      en: '07:00 ~ 19:00 (every 1~1.5hr)',
      ja: '07:00〜19:00（1時間〜1時間半間隔）',
      zh: '07:00~19:00（每1~1.5小时）',
    },
    fare: {
      ko: '약 22,500원',
      en: 'Approx. ₩22,500',
      ja: '約22,500ウォン',
      zh: '约22,500韩元',
    },
    duration: {
      ko: '약 3시간 30분',
      en: 'Approx. 3h 30min',
      ja: '約3時間30分',
      zh: '约3小时30分',
    },
    phone: '1588-6900',
    address: {
      ko: '여수시 돌산로 65 (여수종합버스터미널)',
      en: '65 Dolsan-ro, Yeosu (Yeosu Bus Terminal)',
      ja: '麗水市 突山路65（麗水総合バスターミナル）',
      zh: '丽水市 突山路65（丽水综合客运站）',
    },
    tip: {
      ko: '진주·사천 경유 노선이 대부분. 직행은 드물어요.',
      en: 'Most routes go via Jinju/Sacheon. Direct buses are rare.',
      ja: '晋州・泗川経由が多い。直行便は稀。',
      zh: '大部分经停晋州/泗川，直达车较少。',
    },
    image: '🚌',
  },

  // ===== 🚆 KTX / 기차 =====
  {
    id: 4,
    name: {
      ko: '서울 → 여수엑스포 KTX',
      en: 'Seoul → Yeosu-Expo KTX',
      ja: 'ソウル → 麗水エキスポ KTX',
      zh: '首尔 → 丽水世博 KTX',
    },
    category: 'train',
    description: {
      ko: '용산역에서 출발하는 KTX. 가장 빠르고 편한 여수 접근 방법!',
      en: 'KTX from Yongsan Station. The fastest and most convenient way to Yeosu!',
      ja: '龍山駅発のKTX。最も速く快適な麗水アクセス！',
      zh: '从龙山站出发的KTX，最快最便捷的丽水交通方式！',
    },
    route: {
      ko: '용산역 → 여수엑스포역',
      en: 'Yongsan Station → Yeosu-Expo Station',
      ja: '龍山駅 → 麗水エキスポ駅',
      zh: '龙山站 → 丽水世博站',
    },
    schedule: {
      ko: '06:05 ~ 21:10 (1일 약 10~12회)',
      en: '06:05 ~ 21:10 (approx. 10~12 daily)',
      ja: '06:05〜21:10（1日約10〜12本）',
      zh: '06:05~21:10（每天约10~12班）',
    },
    fare: {
      ko: '일반실 약 51,900원 / 특실 약 72,600원',
      en: 'Standard ≈ ₩51,900 / First Class ≈ ₩72,600',
      ja: '一般室 約51,900ウォン / 特室 約72,600ウォン',
      zh: '普通席 约51,900韩元 / 特等席 约72,600韩元',
    },
    duration: {
      ko: '약 2시간 50분 ~ 3시간 20분',
      en: 'Approx. 2h 50min ~ 3h 20min',
      ja: '約2時間50分〜3時間20分',
      zh: '约2小时50分~3小时20分',
    },
    phone: '1544-7788',
    address: {
      ko: '여수시 박람회길 1 (여수엑스포역)',
      en: '1 Bakramhoe-gil, Yeosu (Yeosu-Expo Station)',
      ja: '麗水市 博覧会路1（麗水エキスポ駅）',
      zh: '丽水市 博览会路1（丽水世博站）',
    },
    tip: {
      ko: '주말/연휴는 2주 전 예매 필수! 코레일톡 앱 할인 확인하세요.',
      en: 'Book 2 weeks ahead for weekends/holidays! Check Korail Talk app for discounts.',
      ja: '週末・連休は2週間前の予約必須！コレールトークアプリで割引確認。',
      zh: '周末/节假日请提前2周订票！在Korail Talk APP查看折扣。',
    },
    image: '🚄',
  },
  {
    id: 5,
    name: {
      ko: 'SRT 수서 → 여수엑스포',
      en: 'SRT Suseo → Yeosu-Expo',
      ja: 'SRT 水西 → 麗水エキスポ',
      zh: 'SRT 水西 → 丽水世博',
    },
    category: 'train',
    description: {
      ko: '수서역에서 출발하는 SRT. 강남권 출발 시 편리!',
      en: 'SRT from Suseo Station. Convenient from the Gangnam area!',
      ja: '水西駅発のSRT。江南エリアから便利！',
      zh: '从水西站出发的SRT，江南地区出发非常方便！',
    },
    route: {
      ko: '수서역 → 여수엑스포역',
      en: 'Suseo Station → Yeosu-Expo Station',
      ja: '水西駅 → 麗水エキスポ駅',
      zh: '水西站 → 丽水世博站',
    },
    schedule: {
      ko: '06:00 ~ 20:30 (1일 약 6~8회)',
      en: '06:00 ~ 20:30 (approx. 6~8 daily)',
      ja: '06:00〜20:30（1日約6〜8本）',
      zh: '06:00~20:30（每天约6~8班）',
    },
    fare: {
      ko: '일반실 약 46,800원 / 특실 약 65,500원',
      en: 'Standard ≈ ₩46,800 / First Class ≈ ₩65,500',
      ja: '一般室 約46,800ウォン / 特室 約65,500ウォン',
      zh: '普通席 约46,800韩元 / 特等席 约65,500韩元',
    },
    duration: {
      ko: '약 2시간 40분 ~ 3시간 10분',
      en: 'Approx. 2h 40min ~ 3h 10min',
      ja: '約2時間40分〜3時間10分',
      zh: '约2小时40分~3小时10分',
    },
    phone: '1800-1472',
    address: {
      ko: '여수시 박람회길 1 (여수엑스포역)',
      en: '1 Bakramhoe-gil, Yeosu (Yeosu-Expo Station)',
      ja: '麗水市 博覧会路1（麗水エキスポ駅）',
      zh: '丽水市 博览会路1（丽水世博站）',
    },
    tip: {
      ko: 'SRT 앱 회원 할인(최대 10%) + 카드사 프로모션 적극 활용!',
      en: 'SRT app member discount (up to 10%) + credit card promos!',
      ja: 'SRTアプリ会員割引（最大10%）＋カード会社プロモ活用！',
      zh: 'SRT APP会员折扣（最高10%）+ 信用卡优惠！',
    },
    image: '🚅',
  },
  {
    id: 6,
    name: {
      ko: '무궁화호 (익산/순천 경유)',
      en: 'Mugunghwa (via Iksan/Suncheon)',
      ja: 'ムグンファ号（益山/順天経由）',
      zh: '无穷花号（经益山/顺天）',
    },
    category: 'train',
    description: {
      ko: '느리지만 저렴한 선택. 전라선 풍경이 아름다워요!',
      en: 'Slower but budget-friendly. Beautiful Jeolla Line scenery!',
      ja: '遅いけどお得。全羅線の景色が美しい！',
      zh: '虽慢但便宜，全罗线风景优美！',
    },
    route: {
      ko: '용산 → 익산 → 순천 → 여수엑스포역',
      en: 'Yongsan → Iksan → Suncheon → Yeosu-Expo',
      ja: '龍山 → 益山 → 順天 → 麗水エキスポ',
      zh: '龙山 → 益山 → 顺天 → 丽水世博',
    },
    schedule: {
      ko: '1일 3~4회 운행',
      en: '3~4 trains daily',
      ja: '1日3〜4本運行',
      zh: '每天3~4班',
    },
    fare: {
      ko: '약 28,600원',
      en: 'Approx. ₩28,600',
      ja: '約28,600ウォン',
      zh: '约28,600韩元',
    },
    duration: {
      ko: '약 5시간 ~ 5시간 30분',
      en: 'Approx. 5h ~ 5h 30min',
      ja: '約5時間〜5時間30分',
      zh: '约5小时~5小时30分',
    },
    phone: '1544-7788',
    address: {
      ko: '여수시 박람회길 1 (여수엑스포역)',
      en: '1 Bakramhoe-gil, Yeosu (Yeosu-Expo Station)',
      ja: '麗水市 博覧会路1（麗水エキスポ駅）',
      zh: '丽水市 博览会路1（丽水世博站）',
    },
    tip: {
      ko: '내일로 티켓 사용 가능! 기차 여행 마니아에게 추천.',
      en: 'Naeillo ticket available! Recommended for train travel lovers.',
      ja: '内日路チケット利用可！鉄道旅行好きにおすすめ。',
      zh: '可使用内日路车票！推荐给火车旅行爱好者。',
    },
    image: '🚃',
  },

  // ===== ✈️ 항공 =====
  {
    id: 7,
    name: {
      ko: '여수공항 (제주/김포 노선)',
      en: 'Yeosu Airport (Jeju/Gimpo Routes)',
      ja: '麗水空港（済州/金浦路線）',
      zh: '丽水机场（济州/金浦航线）',
    },
    category: 'airport',
    description: {
      ko: '소형 국내공항. 제주/김포 노선 운항. 시내에서 택시 10분!',
      en: 'Small domestic airport. Jeju/Gimpo routes. 10min taxi from downtown!',
      ja: '小規模国内空港。済州/金浦路線。市内からタクシー10分！',
      zh: '小型国内机场，运营济州/金浦航线，距市区出租车10分钟！',
    },
    route: {
      ko: '김포공항 ↔ 여수공항 / 제주공항 ↔ 여수공항',
      en: 'Gimpo ↔ Yeosu / Jeju ↔ Yeosu Airport',
      ja: '金浦空港 ↔ 麗水空港 / 済州空港 ↔ 麗水空港',
      zh: '金浦机场 ↔ 丽水机场 / 济州机场 ↔ 丽水机场',
    },
    schedule: {
      ko: '김포: 1일 4~5편 / 제주: 1일 1~2편',
      en: 'Gimpo: 4~5 flights/day / Jeju: 1~2 flights/day',
      ja: '金浦: 1日4〜5便 / 済州: 1日1〜2便',
      zh: '金浦: 每天4~5班 / 济州: 每天1~2班',
    },
    fare: {
      ko: '편도 약 65,000원 ~ 120,000원 (시기/항공사별 상이)',
      en: 'One-way ≈ ₩65,000 ~ ₩120,000 (varies by season/airline)',
      ja: '片道 約65,000〜120,000ウォン（時期・航空会社により異なる）',
      zh: '单程 约65,000~120,000韩元（因季节/航空公司不同）',
    },
    duration: {
      ko: '김포 약 50분 / 제주 약 45분',
      en: 'Gimpo ≈ 50min / Jeju ≈ 45min',
      ja: '金浦 約50分 / 済州 約45分',
      zh: '金浦 约50分钟 / 济州 约45分钟',
    },
    phone: '061-683-8300',
    address: {
      ko: '여수시 율촌면 여수공항로 55',
      en: '55 Yeosu Airport-ro, Yulchon-myeon, Yeosu',
      ja: '麗水市 栗村面 麗水空港路55',
      zh: '丽水市 栗村面 丽水机场路55',
    },
    tip: {
      ko: '2026 박람회 기간 증편 예정! 대한항공·진에어·에어서울 운항.',
      en: 'More flights planned during 2026 Expo! Korean Air, Jin Air, Air Seoul.',
      ja: '2026博覧会期間中は増便予定！大韓航空・ジンエアー・エアソウル運航。',
      zh: '2026博览会期间计划增加航班！大韩航空、真航空、首尔航空运营。',
    },
    image: '✈️',
  },

  // ===== ⛴️ 연안여객선 =====
  {
    id: 8,
    name: {
      ko: '여수연안여객터미널 (섬 노선)',
      en: 'Yeosu Coastal Ferry Terminal',
      ja: '麗水沿岸旅客ターミナル',
      zh: '丽水沿岸客运码头',
    },
    category: 'ferry',
    description: {
      ko: '거문도, 금오도, 사도 등 여수 앞바다 섬으로 가는 여객선 터미널.',
      en: 'Ferry terminal for Geomundo, Geumo-do, Sa-do and nearby islands.',
      ja: '巨文島、金鰲島、沙島など麗水近海の島へ向かう旅客ターミナル。',
      zh: '前往巨文岛、金鳌岛、沙岛等丽水近海岛屿的客运码头。',
    },
    route: {
      ko: '여수 → 거문도/금오도/사도/개도/하화도 등',
      en: 'Yeosu → Geomundo / Geumo-do / Sa-do / Gae-do / Hahwa-do',
      ja: '麗水 → 巨文島/金鰲島/沙島/開島/下花島',
      zh: '丽水 → 巨文岛/金鳌岛/沙岛/开岛/下花岛',
    },
    schedule: {
      ko: '노선별 상이 (1일 1~4회, 기상 영향)',
      en: 'Varies by route (1~4 daily, weather dependent)',
      ja: '路線により異なる（1日1〜4回、天候影響あり）',
      zh: '因航线不同（每天1~4班，受天气影响）',
    },
    fare: {
      ko: '거문도 약 46,000원 / 금오도 약 8,500원 / 사도 약 14,000원',
      en: 'Geomundo ≈ ₩46,000 / Geumo-do ≈ ₩8,500 / Sa-do ≈ ₩14,000',
      ja: '巨文島 約46,000ウォン / 金鰲島 約8,500ウォン / 沙島 約14,000ウォン',
      zh: '巨文岛 约46,000韩元 / 金鳌岛 约8,500韩元 / 沙岛 约14,000韩元',
    },
    duration: {
      ko: '거문도 약 2시간 10분 / 금오도 약 30분 / 사도 약 1시간',
      en: 'Geomundo ≈ 2h 10min / Geumo-do ≈ 30min / Sa-do ≈ 1hr',
      ja: '巨文島 約2時間10分 / 金鰲島 約30分 / 沙島 約1時間',
      zh: '巨文岛 约2小时10分 / 金鳌岛 约30分 / 沙岛 约1小时',
    },
    phone: '061-663-0116',
    address: {
      ko: '여수시 여객선터미널길 17',
      en: '17 Yeogaekseon Terminal-gil, Yeosu',
      ja: '麗水市 旅客船ターミナル路17',
      zh: '丽水市 客船码头路17',
    },
    tip: {
      ko: '가고 싶은 섬 여객선 출항 시간 반드시 전화 확인! 기상에 따라 결항 잦음.',
      en: 'Always call to confirm departure times! Cancellations are common due to weather.',
      ja: '出航時間は必ず電話確認！天候による欠航が多い。',
      zh: '一定要电话确认出航时间！因天气取消航班频繁。',
    },
    image: '⛴️',
  },
  {
    id: 9,
    name: {
      ko: '돌산 ↔ 화태 도선 (금오도 가는 길)',
      en: 'Dolsan ↔ Hwatae Ferry (Route to Geumo-do)',
      ja: '突山 ↔ 花太 渡船（金鰲島への道）',
      zh: '突山 ↔ 花太 渡船（前往金鳌岛）',
    },
    category: 'ferry',
    description: {
      ko: '돌산 신기항에서 화태도까지 연결. 금오도 비렁길 가려면 이 배를 타야 해요!',
      en: 'Connects Dolsan Singi port to Hwatae-do. Take this ferry for Geumo-do Bireonggil trail!',
      ja: '突山新基港から花太島まで。金鰲島ビロンギル（海岸散策路）はこの船で！',
      zh: '连接突山新基港和花太岛。要去金鳌岛海岸路需要坐这艘船！',
    },
    route: {
      ko: '돌산 신기항 → 화태 → 월호 → 금오도',
      en: 'Dolsan Singi → Hwatae → Wolho → Geumo-do',
      ja: '突山新基 → 花太 → 月湖 → 金鰲島',
      zh: '突山新基 → 花太 → 月湖 → 金鳌岛',
    },
    schedule: {
      ko: '1일 6~8회 (첫배 07:00 / 막배 18:00 전후)',
      en: '6~8 daily (first boat ~07:00 / last ~18:00)',
      ja: '1日6〜8回（始発07:00前後 / 最終18:00前後）',
      zh: '每天6~8班（首班约07:00 / 末班约18:00）',
    },
    fare: {
      ko: '약 3,500원 (편도)',
      en: 'Approx. ₩3,500 (one-way)',
      ja: '約3,500ウォン（片道）',
      zh: '约3,500韩元（单程）',
    },
    duration: {
      ko: '화태까지 약 10분 / 금오도까지 약 25분',
      en: 'Hwatae ≈ 10min / Geumo-do ≈ 25min',
      ja: '花太まで約10分 / 金鰲島まで約25分',
      zh: '到花太约10分钟 / 到金鳌岛约25分钟',
    },
    phone: '061-644-9986',
    address: {
      ko: '여수시 돌산읍 신기길 일대',
      en: 'Singi-gil area, Dolsan-eup, Yeosu',
      ja: '麗水市 突山邑 新基路一帯',
      zh: '丽水市 突山邑 新基路一带',
    },
    tip: {
      ko: '비렁길 트레킹 후 돌아오는 배 시간 꼭 체크! 놓치면 낭패.',
      en: 'Check return ferry times after Bireonggil trekking! Missing it = stranded.',
      ja: 'ビロンギルトレッキング後の帰り便を必ず確認！乗り遅れ注意。',
      zh: '徒步海岸路后一定确认返程船时间！错过就麻烦了。',
    },
    image: '🚢',
  },

  // ===== 🚍 시내 교통 =====
  {
    id: 10,
    name: {
      ko: '여수 시내버스',
      en: 'Yeosu City Bus',
      ja: '麗水市内バス',
      zh: '丽水市内公交',
    },
    category: 'local',
    description: {
      ko: '여수 시내 주요 관광지 연결. 교통카드 필수!',
      en: 'Connects major Yeosu tourist spots. Transportation card required!',
      ja: '麗水市内の主要観光地を結ぶ。交通カード必須！',
      zh: '连接丽水市内主要景点，必须使用交通卡！',
    },
    route: {
      ko: '시내 전역 (100번대~600번대)',
      en: 'Citywide (routes 100~600)',
      ja: '市内全域（100番台〜600番台）',
      zh: '全市范围（100~600路）',
    },
    schedule: {
      ko: '06:00 ~ 22:00 (노선별 10~30분 간격)',
      en: '06:00 ~ 22:00 (every 10~30min by route)',
      ja: '06:00〜22:00（路線別10〜30分間隔）',
      zh: '06:00~22:00（按路线每10~30分钟）',
    },
    fare: {
      ko: '성인 1,300원 / 청소년 900원 / 어린이 600원',
      en: 'Adult ₩1,300 / Youth ₩900 / Child ₩600',
      ja: '大人 1,300ウォン / 青少年 900ウォン / 子供 600ウォン',
      zh: '成人 1,300韩元 / 青少年 900韩元 / 儿童 600韩元',
    },
    duration: {
      ko: '노선별 상이',
      en: 'Varies by route',
      ja: '路線により異なる',
      zh: '因路线而异',
    },
    phone: '061-659-3660',
    address: {
      ko: '여수시 전역 정류장',
      en: 'Bus stops throughout Yeosu',
      ja: '麗水市内全域のバス停',
      zh: '丽水市全区域公交站',
    },
    tip: {
      ko: '카카오맵/네이버지도 실시간 버스 위치 확인 가능! 2번 버스가 관광 핵심 노선.',
      en: 'Check real-time bus locations on KakaoMap/Naver! Bus #2 is the key tourist route.',
      ja: 'カカオマップ/NAVERでリアルタイム位置確認可！2番バスが観光メイン路線。',
      zh: '可在KakaoMap/Naver地图查看实时公交位置！2路是核心旅游线路。',
    },
    image: '🚍',
  },
  {
    id: 11,
    name: {
      ko: '여수 관광 투어버스',
      en: 'Yeosu Sightseeing Tour Bus',
      ja: '麗水観光ツアーバス',
      zh: '丽水观光旅游巴士',
    },
    category: 'local',
    description: {
      ko: '주요 관광지를 순환하는 투어버스. 관광객 필수!',
      en: 'Tour bus circling major attractions. A must for tourists!',
      ja: '主要観光地を巡回するツアーバス。観光客必須！',
      zh: '环绕主要景点的旅游巴士，游客必坐！',
    },
    route: {
      ko: '여수엑스포역 → 이순신광장 → 오동도 → 향일암 → 돌산대교 코스',
      en: 'Expo Stn → Yi Sun-sin Square → Odongdo → Hyangiram → Dolsan Bridge',
      ja: 'エキスポ駅 → 李舜臣広場 → 梧桐島 → 向日庵 → 突山大橋',
      zh: '世博站 → 李舜臣广场 → 梧桐岛 → 向日庵 → 突山大桥',
    },
    schedule: {
      ko: '토/일/공휴일 운행 (1일 3~4회)',
      en: 'Weekends & holidays (3~4 times daily)',
      ja: '土日祝運行（1日3〜4回）',
      zh: '周末及节假日运营（每天3~4班）',
    },
    fare: {
      ko: '성인 5,000원 / 1일 자유이용권 10,000원',
      en: 'Adult ₩5,000 / Day Pass ₩10,000',
      ja: '大人 5,000ウォン / 1日フリーパス 10,000ウォン',
      zh: '成人 5,000韩元 / 一日自由券 10,000韩元',
    },
    duration: {
      ko: '전체 순환 약 2시간',
      en: 'Full loop ≈ 2 hours',
      ja: '全周回 約2時間',
      zh: '全程循环 约2小时',
    },
    phone: '061-659-4742',
    address: {
      ko: '여수엑스포역 앞 출발',
      en: 'Departs from Yeosu-Expo Station',
      ja: '麗水エキスポ駅前発',
      zh: '丽水世博站前出发',
    },
    tip: {
      ko: '2026 박람회 기간에는 매일 운행 + 증편 예정!',
      en: 'Daily service + more buses planned during 2026 Expo!',
      ja: '2026博覧会期間は毎日運行＋増便予定！',
      zh: '2026博览会期间计划每天运营+增加班次！',
    },
    image: '🚎',
  },
  {
    id: 12,
    name: {
      ko: '택시 & 렌터카',
      en: 'Taxi & Rental Car',
      ja: 'タクシー & レンタカー',
      zh: '出租车 & 租车',
    },
    category: 'local',
    description: {
      ko: '자유여행의 필수템! 렌터카는 여수공항/여수엑스포역 앞에서 픽업 가능.',
      en: 'Essential for free travel! Car rentals available at Airport/Expo Station.',
      ja: '自由旅行の必須アイテム！レンタカーは空港/エキスポ駅前でピックアップ可。',
      zh: '自由行必备！租车可在机场/世博站前取车。',
    },
    route: {
      ko: '시내 전역 자유 이동',
      en: 'Free movement throughout the city',
      ja: '市内全域自由移動',
      zh: '全市自由移动',
    },
    schedule: {
      ko: '24시간 (택시) / 렌터카 업체별 상이',
      en: '24hr (taxi) / Rental car varies by company',
      ja: '24時間（タクシー）/ レンタカーは業者により異なる',
      zh: '24小时（出租车）/ 租车公司各异',
    },
    fare: {
      ko: '택시 기본 4,800원 / 렌터카 1일 약 50,000~80,000원',
      en: 'Taxi base ₩4,800 / Rental ≈ ₩50,000~80,000/day',
      ja: 'タクシー初乗り4,800ウォン / レンタカー1日約50,000〜80,000ウォン',
      zh: '出租车起步价4,800韩元 / 租车 约50,000~80,000韩元/天',
    },
    duration: {
      ko: '시내 이동 10~30분 / 향일암까지 약 40분',
      en: 'City rides 10~30min / Hyangiram ≈ 40min',
      ja: '市内移動10〜30分 / 向日庵まで約40分',
      zh: '市内行程10~30分钟 / 到向日庵约40分钟',
    },
    phone: '061-686-2255',
    address: {
      ko: '여수시 전역',
      en: 'Throughout Yeosu',
      ja: '麗水市全域',
      zh: '丽水市全区域',
    },
    tip: {
      ko: '카카오T 택시 호출 가능. 관광지 주차장은 여름 성수기 매우 혼잡!',
      en: 'Use KakaoT for taxi calls. Tourist area parking is very crowded in summer!',
      ja: 'カカオTでタクシー呼出可。観光地の駐車場は夏のピーク時非常に混雑！',
      zh: '可用KakaoT叫出租车。旅游景点停车场夏季旺季非常拥挤！',
    },
    image: '🚕',
  },
];
