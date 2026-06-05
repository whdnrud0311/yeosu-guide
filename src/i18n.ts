import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'ko',
  fallbackLng: 'ko',
  interpolation: { escapeValue: false },
  returnObjects: true,
  resources: {
    ko: {
      translation: {
        app: { title: '여수 관광 가이드' },
        nav: {
          restaurants: '맛집 추천',
          attractions: '관광 명소',
          transport: '교통 안내',
          expo: '2026 세계섬박람회',
          aiCourse: 'AI 코스 추천',
          oceanView: '바다 뷰 명소',
          help: '여행 도우미',
        },
        home: {
          subtitle: '남도의 보석, 여수에서 특별한 여행을 시작하세요',
        },
        restaurants: {
          title: '여수 맛집 추천',
          list: [
            { name: '여수 게장골목', desc: '신선한 간장게장과 양념게장의 성지. 돌산대교 인근에 위치하며 현지인도 즐겨 찾는 맛집 거리입니다.', icon: '🦀' },
            { name: '서대회센터', desc: '여수 특산물 서대회를 맛볼 수 있는 곳. 쫄깃한 식감과 초장의 조화가 일품입니다.', icon: '🐟' },
            { name: '중앙시장 장터국밥', desc: '여수 중앙시장 안의 소울푸드. 뜨끈한 국밥 한 그릇에 여행 피로가 풀립니다.', icon: '🍲' },
            { name: '이순신광장 해물탕거리', desc: '푸짐한 해물탕과 갈치조림으로 유명한 먹거리 거리입니다.', icon: '🦞' },
            { name: '돌산 갓김치 삼합', desc: '돌산 갓김치와 삼겹살, 굴을 함께 즐기는 여수 대표 삼합요리입니다.', icon: '🥬' },
          ],
        },
        attractions: {
          title: '여수 관광 명소',
          list: [
            { name: '향일암', desc: '일출 명소로 유명한 사찰. 남해 수평선 위로 떠오르는 일출이 장관입니다.\n📍 돌산읍 향일암로 60', icon: '🌅' },
            { name: '오동도', desc: '동백꽃의 섬. 3월이면 섬 전체가 붉은 동백으로 물듭니다.\n📍 수정동 산1', icon: '🌺' },
            { name: '여수 해상케이블카', desc: '바다 위를 가로지르는 케이블카. 크리스탈 바닥으로 짜릿한 경험을!\n📍 돌산읍 돌산로 3600-1', icon: '🚡' },
            { name: '이순신광장', desc: '충무공 이순신 장군의 동상과 거북선 모형이 있는 해변 광장입니다.\n📍 중앙동 일대', icon: '⚓' },
            { name: '돌산대교 야경', desc: '여수의 상징! 밤에 보는 조명이 환상적입니다.\n📍 돌산읍 우두리', icon: '🌉' },
          ],
        },
        transport: {
          title: '교통 안내',
          sections: [
            { title: '🚄 KTX / SRT', info: '서울(용산) → 여수엑스포 약 2시간 40분\n첫차 05:15 / 막차 21:30\n요금: 약 46,800원 (일반실)' },
            { title: '🚌 시외·고속버스', info: '서울 센트럴시티 → 여수 약 4시간\n배차간격: 30~60분\n요금: 약 23,000원~33,000원' },
            { title: '🚗 자가용', info: '서울 → 여수 약 4시간 (순천완주고속도로)\n통행료: 약 25,000원\n주차: 엑스포장 무료주차 가능' },
            { title: '🚌 시내버스 & 택시', info: '시내버스 1,300원 / 택시 기본 4,800원\n관광지 순환버스 운행 (1일권 5,000원)' },
          ],
        },
        expo: {
          title: '2026 여수 세계섬박람회',
          sections: [
            { title: '📅 행사 개요', info: '기간: 2026년 8월 8일 ~ 9월 7일 (31일간)\n장소: 여수 엑스포 해양공원 일대\n주제: "섬, 바다와 미래 (Islands, Ocean and Future)"' },
            { title: '🎪 주요 프로그램', info: '• 세계 섬 문화 전시관\n• 해양 미래기술 체험관\n• K-POP 아일랜드 콘서트\n• 세계 해산물 축제\n• 섬 생태 체험 투어' },
            { title: '🎟️ 입장권 정보', info: '일반 입장권: 25,000원\n시즌권: 80,000원\n청소년/어린이: 50% 할인\n여수시민: 무료 (신분증 지참)' },
          ],
        },
        aiCourse: {
          title: 'AI 맞춤 코스 추천',
          duration: '여행 기간',
          style: '여행 스타일',
          days: ['당일치기', '1박 2일', '2박 3일'],
          styles: ['힐링', '액티비티', '맛집투어', '문화탐방'],
          generate: '코스 추천받기',
          result: 'AI 추천 코스',
          courses: {
            '0-0': '🌅 오전: 향일암 일출 → 🍵 오후: 해변 카페에서 힐링 → 🌉 저녁: 돌산대교 야경 산책',
            '0-1': '🚡 오전: 해상케이블카 → 🚴 오후: 해양레일바이크 → 🌊 저녁: 해양수산과학관',
            '0-2': '🦀 오전: 게장골목 → 🐟 점심: 서대회센터 → 🍲 저녁: 중앙시장 장터국밥',
            '0-3': '⚓ 오전: 이순신광장 → 📚 오후: 진남관 → 🎭 저녁: 여수예술랜드',
            '1-0': '1일차: 향일암 → 돌산공원 → 무술목해변\n2일차: 오동도 → 해변카페 → 돌산대교 야경',
            '1-1': '1일차: 해상케이블카 → 해양레일바이크 → 아쿠아플라넷\n2일차: 경도해양관광단지 → 해양수산과학관',
            '1-2': '1일차: 게장골목 → 서대회 → 갓김치삼합\n2일차: 중앙시장 장터국밥 → 해물탕거리 → 돌산 횟집',
            '1-3': '1일차: 이순신광장 → 진남관 → 고소동 벽화마을\n2일차: 여수해양공원 → 자산공원 → 예술랜드',
            '2-0': '1일차: 향일암 일출 → 돌산공원\n2일차: 오동도 → 해변카페 → 무술목해변\n3일차: 경도 → 돌산대교 야경',
            '2-1': '1일차: 해상케이블카 → 아쿠아플라넷\n2일차: 해양레일바이크 → 경도해양단지\n3일차: 수산과학관 → 엑스포공원',
            '2-2': '1일차: 게장골목 → 서대회센터\n2일차: 중앙시장 → 갓김치삼합 → 해물탕거리\n3일차: 돌산 횟집 → 전통시장 투어',
            '2-3': '1일차: 이순신광장 → 진남관\n2일차: 고소동 벽화마을 → 자산공원\n3일차: 해양공원 → 예술랜드 → 흥국사',
          },
        },
        oceanView: {
          title: '바다 뷰 명소',
          list: [
            { name: '장등 해수욕장', desc: '여수 시내에서 가장 가까운 해수욕장. 소나무 숲과 잔잔한 바다가 어우러집니다.', icon: '🏖️' },
            { name: '만성리 검은모래해변', desc: '검은 모래로 유명한 해변. 해풍과 함께 걷기 좋은 산책로가 있습니다.', icon: '🖤' },
            { name: '돌산공원 전망대', desc: '돌산대교와 여수 시내를 한눈에 볼 수 있는 최고의 전망 포인트.', icon: '🏔️' },
            { name: '무술목 해변', desc: '한려해상국립공원 내 위치한 조용하고 아름다운 해변입니다.', icon: '🌊' },
            { name: '경도 해양관광단지', desc: '리조트와 해양레저를 함께 즐길 수 있는 복합 관광단지입니다.', icon: '🏝️' },
          ],
        },
        help: {
          title: '여행 도우미',
          sections: [
            { title: '🏥 응급 의료', info: '여수전남병원: 061-680-1114\n여수적십자병원: 061-640-7575\n응급전화: 119' },
            { title: '🚔 치안·안전', info: '여수경찰서: 061-659-0112\n여수해양경찰: 061-660-0112\n관광불편신고: 1330' },
            { title: '📞 관광 안내', info: '여수시 관광안내: 061-659-3871\n관광통역안내: 1330\n여수엑스포역 관광안내소: 061-664-8978' },
            { title: '🌦️ 날씨 참고', info: '여수 연평균 기온: 14.5°C\n여름(7~8월): 평균 26°C\n겨울(12~2월): 평균 3°C\n우산 필수 (연강수량 1,400mm)' },
          ],
        },
      },
    },
    en: {
      translation: {
        app: { title: 'Yeosu Travel Guide' },
        nav: {
          restaurants: 'Restaurants',
          attractions: 'Attractions',
          transport: 'Transport',
          expo: '2026 World Island Expo',
          aiCourse: 'AI Course',
          oceanView: 'Ocean View',
          help: 'Travel Help',
        },
        home: {
          subtitle: 'Start your special journey in Yeosu, the gem of South Korea',
        },
        restaurants: {
          title: 'Yeosu Restaurant Guide',
          list: [
            { name: 'Gejang Alley', desc: 'A mecca for soy sauce and spicy marinated crab. Located near Dolsan Bridge.', icon: '🦀' },
            { name: 'Seodae-hoe Center', desc: "Famous for Yeosu's specialty flatfish sashimi with a chewy texture.", icon: '🐟' },
            { name: 'Jungang Market Gukbap', desc: "Soul food in Yeosu's central market. A warm bowl of rice soup to refresh you.", icon: '🍲' },
            { name: 'Haemul-tang Street', desc: 'A food street famous for hearty seafood stew and grilled hairtail fish.', icon: '🦞' },
            { name: 'Dolsan Gat-kimchi Samhap', desc: "Yeosu's signature trio: mustard-leaf kimchi, pork belly, and oysters.", icon: '🥬' },
          ],
        },
        attractions: {
          title: 'Yeosu Attractions',
          list: [
            { name: 'Hyangiram Hermitage', desc: 'A temple famous for sunrise views over the South Sea.\n📍 60 Hyangiram-ro, Dolsan', icon: '🌅' },
            { name: 'Odongdo Island', desc: 'The island of camellias. The whole island turns red with camellia flowers in March.\n📍 San 1, Sujeong-dong', icon: '🌺' },
            { name: 'Yeosu Maritime Cable Car', desc: 'A cable car crossing the sea. Try the crystal floor for a thrilling ride!\n📍 3600-1 Dolsan-ro', icon: '🚡' },
            { name: 'Yi Sun-sin Square', desc: "A seaside plaza with Admiral Yi's statue and a turtle ship replica.\n📍 Jungang-dong area", icon: '⚓' },
            { name: 'Dolsan Bridge Night View', desc: 'The symbol of Yeosu! The night illumination is breathtaking.\n📍 Udu-ri, Dolsan', icon: '🌉' },
          ],
        },
        transport: {
          title: 'Transport Guide',
          sections: [
            { title: '🚄 KTX / SRT', info: 'Seoul (Yongsan) → Yeosu-Expo: ~2h 40m\nFirst train 05:15 / Last 21:30\nFare: ~46,800 KRW' },
            { title: '🚌 Express Bus', info: 'Seoul Central City → Yeosu: ~4h\nInterval: 30~60 min\nFare: 23,000~33,000 KRW' },
            { title: '🚗 By Car', info: 'Seoul → Yeosu: ~4h\nToll: ~25,000 KRW\nFree parking at Expo area' },
            { title: '🚌 Local Bus & Taxi', info: 'City bus 1,300 KRW / Taxi base 4,800 KRW\nTourist loop bus available (Day pass 5,000 KRW)' },
          ],
        },
        expo: {
          title: '2026 Yeosu World Island Expo',
          sections: [
            { title: '📅 Overview', info: 'Date: Aug 8 – Sep 7, 2026 (31 days)\nVenue: Yeosu Expo Ocean Park\nTheme: "Islands, Ocean and Future"' },
            { title: '🎪 Programs', info: '• World Island Culture Exhibition\n• Marine Future Tech Experience\n• K-POP Island Concert\n• World Seafood Festival\n• Island Eco Tour' },
            { title: '🎟️ Tickets', info: 'General: 25,000 KRW\nSeason Pass: 80,000 KRW\nYouth/Child: 50% off\nYeosu Residents: Free (with ID)' },
          ],
        },
        aiCourse: {
          title: 'AI Course Recommendation',
          duration: 'Duration',
          style: 'Travel Style',
          days: ['Day Trip', '2 Days', '3 Days'],
          styles: ['Healing', 'Activity', 'Food Tour', 'Culture'],
          generate: 'Get Recommendation',
          result: 'AI Recommended Course',
          courses: {
            '0-0': '🌅 AM: Hyangiram Sunrise → 🍵 PM: Healing at beach café → 🌉 Eve: Dolsan Bridge walk',
            '0-1': '🚡 AM: Cable Car → 🚴 PM: Ocean Rail Bike → 🌊 Eve: Marine Science Museum',
            '0-2': '🦀 AM: Crab Alley → 🐟 Lunch: Flatfish Sashimi → 🍲 Dinner: Market Gukbap',
            '0-3': '⚓ AM: Yi Sun-sin Square → 📚 PM: Jinnamgwan → 🎭 Eve: Yeosu Art Land',
            '1-0': 'Day 1: Hyangiram → Dolsan Park → Musurmok Beach\nDay 2: Odongdo → Beach café → Dolsan Bridge',
            '1-1': 'Day 1: Cable Car → Rail Bike → Aqua Planet\nDay 2: Gyeongdo Resort → Marine Museum',
            '1-2': 'Day 1: Crab Alley → Flatfish → Gat-kimchi Samhap\nDay 2: Market Gukbap → Seafood Stew → Sashimi',
            '1-3': 'Day 1: Yi Square → Jinnamgwan → Gosodong Mural Village\nDay 2: Ocean Park → Jasan Park → Art Land',
            '2-0': 'Day 1: Hyangiram Sunrise → Dolsan Park\nDay 2: Odongdo → Beach café → Musurmok\nDay 3: Gyeongdo → Dolsan Bridge',
            '2-1': 'Day 1: Cable Car → Aqua Planet\nDay 2: Rail Bike → Gyeongdo\nDay 3: Marine Museum → Expo Park',
            '2-2': 'Day 1: Crab Alley → Flatfish Center\nDay 2: Market → Samhap → Seafood Stew\nDay 3: Dolsan Sashimi → Market Tour',
            '2-3': 'Day 1: Yi Square → Jinnamgwan\nDay 2: Mural Village → Jasan Park\nDay 3: Ocean Park → Art Land → Heungguksa',
          },
        },
        oceanView: {
          title: 'Ocean View Spots',
          list: [
            { name: 'Jangdeung Beach', desc: 'Closest beach to downtown Yeosu with pine trees and calm waters.', icon: '🏖️' },
            { name: 'Manseongri Black Sand Beach', desc: 'Famous for its black sand. Great walking path along the coast.', icon: '🖤' },
            { name: 'Dolsan Park Observatory', desc: 'The best viewpoint to see Dolsan Bridge and Yeosu cityscape.', icon: '🏔️' },
            { name: 'Musurmok Beach', desc: 'A quiet, beautiful beach within Hallyeohaesang National Park.', icon: '🌊' },
            { name: 'Gyeongdo Marine Tourism', desc: 'A complex combining resort facilities and ocean leisure activities.', icon: '🏝️' },
          ],
        },
        help: {
          title: 'Travel Help',
          sections: [
            { title: '🏥 Emergency Medical', info: 'Yeosu Jeonnam Hospital: 061-680-1114\nRed Cross Hospital: 061-640-7575\nEmergency: 119' },
            { title: '🚔 Safety', info: 'Yeosu Police: 061-659-0112\nCoast Guard: 061-660-0112\nTourism Complaint: 1330' },
            { title: '📞 Tourist Info', info: 'Yeosu Tourism: 061-659-3871\nTravel Hotline: 1330\nExpo Station Info: 061-664-8978' },
            { title: '🌦️ Weather', info: 'Avg temp: 14.5°C\nSummer (Jul-Aug): avg 26°C\nWinter (Dec-Feb): avg 3°C\nBring umbrella (annual rain 1,400mm)' },
          ],
        },
      },
    },
    ja: {
      translation: {
        app: { title: '麗水観光ガイド' },
        nav: {
          restaurants: 'グルメ',
          attractions: '観光スポット',
          transport: '交通案内',
          expo: '2026世界島博覧会',
          aiCourse: 'AIコース',
          oceanView: '海ビュー',
          help: '旅行ヘルプ',
        },
        home: {
          subtitle: '南道の宝石、麗水で特別な旅を始めましょう',
        },
        restaurants: {
          title: '麗水グルメガイド',
          list: [
            { name: 'ケジャン通り', desc: '新鮮なカンジャンケジャンとヤンニョムケジャンの聖地。突山大橋近くに位置。', icon: '🦀' },
            { name: 'ソデフェセンター', desc: '麗水特産のヒラメ刺身を味わえる場所。コリコリした食感が絶品。', icon: '🐟' },
            { name: '中央市場クッパ', desc: '麗水中央市場のソウルフード。温かいクッパ一杯で旅の疲れが癒されます。', icon: '🍲' },
            { name: '海鮮鍋通り', desc: '豪華な海鮮鍋とカルチ煮で有名なグルメストリート。', icon: '🦞' },
            { name: '突山カッキムチサムハプ', desc: 'カラシナキムチ、豚バラ、牡蠣を一緒に楽しむ麗水名物。', icon: '🥬' },
          ],
        },
        attractions: {
          title: '麗水観光スポット',
          list: [
            { name: '向日庵', desc: '日の出の名所として有名な寺院。南海の水平線から昇る朝日が絶景。\n📍 突山邑 向日庵路60', icon: '🌅' },
            { name: '梧桐島', desc: '椿の島。3月には島全体が赤い椿で染まります。\n📍 水晶洞 山1', icon: '🌺' },
            { name: '麗水海上ケーブルカー', desc: '海の上を横切るケーブルカー。クリスタル床でスリル満点！\n📍 突山路 3600-1', icon: '🚡' },
            { name: '李舜臣広場', desc: '忠武公李舜臣将軍の像と亀甲船模型がある海辺の広場。\n📍 中央洞一帯', icon: '⚓' },
            { name: '突山大橋夜景', desc: '麗水のシンボル！夜のライトアップが幻想的。\n📍 突山邑 牛頭里', icon: '🌉' },
          ],
        },
        transport: {
          title: '交通案内',
          sections: [
            { title: '🚄 KTX / SRT', info: 'ソウル(龍山) → 麗水エキスポ 約2時間40分\n始発 05:15 / 終電 21:30\n料金: 約46,800ウォン' },
            { title: '🚌 高速バス', info: 'ソウル → 麗水 約4時間\n配車間隔: 30~60分\n料金: 約23,000~33,000ウォン' },
            { title: '🚗 車', info: 'ソウル → 麗水 約4時間\n通行料: 約25,000ウォン\n駐車: エキスポ場無料駐車可能' },
            { title: '🚌 市内バス＆タクシー', info: '市内バス 1,300ウォン / タクシー基本 4,800ウォン\n観光循環バス (1日券 5,000ウォン)' },
          ],
        },
        expo: {
          title: '2026麗水世界島博覧会',
          sections: [
            { title: '📅 概要', info: '期間: 2026年8月8日～9月7日 (31日間)\n場所: 麗水エキスポ海洋公園\nテーマ: "島、海と未来"' },
            { title: '🎪 プログラム', info: '• 世界島文化展示館\n• 海洋未来技術体験館\n• K-POPアイランドコンサート\n• 世界海産物祭り\n• 島エコ体験ツアー' },
            { title: '🎟️ チケット', info: '一般: 25,000ウォン\nシーズン券: 80,000ウォン\n青少年/子供: 50%割引\n麗水市民: 無料 (身分証持参)' },
          ],
        },
        aiCourse: {
          title: 'AIコース推薦',
          duration: '旅行期間',
          style: '旅行スタイル',
          days: ['日帰り', '1泊2日', '2泊3日'],
          styles: ['ヒーリング', 'アクティビティ', 'グルメ', '文化探訪'],
          generate: 'コースを推薦',
          result: 'AI推薦コース',
          courses: {
            '0-0': '🌅 午前: 向日庵の日の出 → 🍵 午後: 海辺カフェでヒーリング → 🌉 夜: 突山大橋散策',
            '0-1': '🚡 午前: ケーブルカー → 🚴 午後: 海洋レールバイク → 🌊 夜: 海洋科学館',
            '0-2': '🦀 午前: ケジャン通り → 🐟 昼: ソデフェ → 🍲 夜: 中央市場クッパ',
            '0-3': '⚓ 午前: 李舜臣広場 → 📚 午後: 鎮南館 → 🎭 夜: 麗水芸術ランド',
            '1-0': '1日目: 向日庵 → 突山公園 → 無述木海辺\n2日目: 梧桐島 → 海辺カフェ → 突山大橋夜景',
            '1-1': '1日目: ケーブルカー → レールバイク → アクアプラネット\n2日目: 慶島リゾート → 海洋科学館',
            '1-2': '1日目: ケジャン → ソデフェ → カッキムチサムハプ\n2日目: 市場クッパ → 海鮮鍋 → 刺身',
            '1-3': '1日目: 李舜臣広場 → 鎮南館 → 古所洞壁画村\n2日目: 海洋公園 → 自山公園 → 芸術ランド',
            '2-0': '1日目: 向日庵の日の出 → 突山公園\n2日目: 梧桐島 → 海辺カフェ → 無述木\n3日目: 慶島 → 突山大橋夜景',
            '2-1': '1日目: ケーブルカー → アクアプラネット\n2日目: レールバイク → 慶島\n3日目: 海洋科学館 → エキスポ公園',
            '2-2': '1日目: ケジャン → ソデフェセンター\n2日目: 市場 → サムハプ → 海鮮鍋\n3日目: 突山刺身 → 市場ツアー',
            '2-3': '1日目: 李舜臣広場 → 鎮南館\n2日目: 壁画村 → 自山公園\n3日目: 海洋公園 → 芸術ランド → 興国寺',
          },
        },
        oceanView: {
          title: '海ビュースポット',
          list: [
            { name: '長登ビーチ', desc: '麗水市内から最も近いビーチ。松林と穏やかな海が調和。', icon: '🏖️' },
            { name: '万成里黒砂浜', desc: '黒い砂で有名なビーチ。海風と共に歩ける散策路。', icon: '🖤' },
            { name: '突山公園展望台', desc: '突山大橋と麗水市内を一望できる最高のビューポイント。', icon: '🏔️' },
            { name: '無述木ビーチ', desc: '閑麗海上国立公園内の静かで美しいビーチ。', icon: '🌊' },
            { name: '慶島海洋観光団地', desc: 'リゾートと海洋レジャーを同時に楽しめる複合観光地。', icon: '🏝️' },
          ],
        },
        help: {
          title: '旅行ヘルプ',
          sections: [
            { title: '🏥 緊急医療', info: '麗水全南病院: 061-680-1114\n赤十字病院: 061-640-7575\n緊急電話: 119' },
            { title: '🚔 安全', info: '麗水警察署: 061-659-0112\n海洋警察: 061-660-0112\n観光苦情: 1330' },
            { title: '📞 観光案内', info: '麗水市観光案内: 061-659-3871\n観光通訳案内: 1330\nエキスポ駅案内所: 061-664-8978' },
            { title: '🌦️ 天気', info: '年平均気温: 14.5°C\n夏 (7~8月): 平均26°C\n冬 (12~2月): 平均3°C\n傘必須 (年降水量1,400mm)' },
          ],
        },
      },
    },
    zh: {
      translation: {
        app: { title: '丽水旅游指南' },
        nav: {
          restaurants: '美食推荐',
          attractions: '旅游景点',
          transport: '交通指南',
          expo: '2026世界岛屿博览会',
          aiCourse: 'AI路线',
          oceanView: '海景名胜',
          help: '旅行帮助',
        },
        home: {
          subtitle: '在韩国的宝石丽水，开启您的特别之旅',
        },
        restaurants: {
          title: '丽水美食指南',
          list: [
            { name: '酱蟹一条街', desc: '新鲜酱油蟹和辣酱蟹的圣地。位于突山大桥附近。', icon: '🦀' },
            { name: '比目鱼生鱼片中心', desc: '品尝丽水特产比目鱼刺身的地方，口感Q弹。', icon: '🐟' },
            { name: '中央市场汤饭', desc: '丽水中央市场的灵魂美食。一碗热汤饭消除旅途疲劳。', icon: '🍲' },
            { name: '海鲜汤一条街', desc: '以丰盛的海鲜锅和烤带鱼闻名的美食街。', icon: '🦞' },
            { name: '突山芥菜泡菜三合', desc: '芥菜泡菜、五花肉、牡蛎一起享用的丽水代表菜。', icon: '🥬' },
          ],
        },
        attractions: {
          title: '丽水旅游景点',
          list: [
            { name: '向日庵', desc: '以日出闻名的寺庙。南海水平线上升起的朝阳壮观。\n📍 突山邑 向日庵路60号', icon: '🌅' },
            { name: '梧桐岛', desc: '山茶花之岛。三月整个岛被红色山茶花染红。\n📍 水晶洞 山1号', icon: '🌺' },
            { name: '丽水海上缆车', desc: '横跨大海的缆车。水晶地板带来刺激体验！\n📍 突山路 3600-1', icon: '🚡' },
            { name: '李舜臣广场', desc: '有忠武公李舜臣将军铜像和龟船模型的海滨广场。\n📍 中央洞一带', icon: '⚓' },
            { name: '突山大桥夜景', desc: '丽水的象征！夜晚灯光璀璨。\n📍 突山邑 牛头里', icon: '🌉' },
          ],
        },
        transport: {
          title: '交通指南',
          sections: [
            { title: '🚄 KTX / SRT', info: '首尔(龙山) → 丽水世博 约2小时40分\n首班车 05:15 / 末班车 21:30\n票价: 约46,800韩元' },
            { title: '🚌 高速巴士', info: '首尔 → 丽水 约4小时\n发车间隔: 30~60分钟\n票价: 约23,000~33,000韩元' },
            { title: '🚗 自驾', info: '首尔 → 丽水 约4小时\n过路费: 约25,000韩元\n停车: 世博场免费停车' },
            { title: '🚌 市内巴士 & 出租车', info: '市内巴士 1,300韩元 / 出租车起步 4,800韩元\n旅游循环巴士 (一日券 5,000韩元)' },
          ],
        },
        expo: {
          title: '2026丽水世界岛屿博览会',
          sections: [
            { title: '📅 活动概要', info: '日期: 2026年8月8日~9月7日 (31天)\n地点: 丽水世博海洋公园\n主题: "岛屿、海洋与未来"' },
            { title: '🎪 主要节目', info: '• 世界岛屿文化展览馆\n• 海洋未来科技体验馆\n• K-POP岛屿演唱会\n• 世界海鲜节\n• 岛屿生态体验游' },
            { title: '🎟️ 门票信息', info: '普通票: 25,000韩元\n季票: 80,000韩元\n青少年/儿童: 50%折扣\n丽水市民: 免费 (需带身份证)' },
          ],
        },
        aiCourse: {
          title: 'AI路线推荐',
          duration: '旅行天数',
          style: '旅行风格',
          days: ['一日游', '两天一夜', '三天两夜'],
          styles: ['治愈', '活动', '美食之旅', '文化探访'],
          generate: '获取推荐',
          result: 'AI推荐路线',
          courses: {
            '0-0': '🌅 上午: 向日庵日出 → 🍵 下午: 海边咖啡厅治愈 → 🌉 晚上: 突山大桥散步',
            '0-1': '🚡 上午: 海上缆车 → 🚴 下午: 海洋轨道自行车 → 🌊 晚上: 海洋科学馆',
            '0-2': '🦀 上午: 酱蟹街 → 🐟 午餐: 比目鱼刺身 → 🍲 晚餐: 市场汤饭',
            '0-3': '⚓ 上午: 李舜臣广场 → 📚 下午: 镇南馆 → 🎭 晚上: 丽水艺术乐园',
            '1-0': '第1天: 向日庵 → 突山公园 → 无术木海滩\n第2天: 梧桐岛 → 海边咖啡厅 → 突山大桥夜景',
            '1-1': '第1天: 海上缆车 → 轨道自行车 → 水族馆\n第2天: 庆岛度假村 → 海洋科学馆',
            '1-2': '第1天: 酱蟹 → 比目鱼 → 芥菜泡菜三合\n第2天: 市场汤饭 → 海鲜锅 → 刺身',
            '1-3': '第1天: 李舜臣广场 → 镇南馆 → 古所洞壁画村\n第2天: 海洋公园 → 自山公园 → 艺术乐园',
            '2-0': '第1天: 向日庵日出 → 突山公园\n第2天: 梧桐岛 → 海边咖啡 → 无术木\n第3天: 庆岛 → 突山大桥夜景',
            '2-1': '第1天: 缆车 → 水族馆\n第2天: 轨道自行车 → 庆岛\n第3天: 海洋科学馆 → 世博公园',
            '2-2': '第1天: 酱蟹 → 比目鱼中心\n第2天: 市场 → 三合 → 海鲜锅\n第3天: 突山刺身 → 市场游',
            '2-3': '第1天: 李舜臣广场 → 镇南馆\n第2天: 壁画村 → 自山公园\n第3天: 海洋公园 → 艺术乐园 → 兴国寺',
          },
        },
        oceanView: {
          title: '海景名胜',
          list: [
            { name: '长登海水浴场', desc: '距离丽水市区最近的海滩。松林与平静大海交相辉映。', icon: '🏖️' },
            { name: '万成里黑沙滩', desc: '以黑沙闻名的海滩。有适合散步的海滨小道。', icon: '🖤' },
            { name: '突山公园瞭望台', desc: '可以一览突山大桥和丽水市区的最佳观景点。', icon: '🏔️' },
            { name: '无术木海滩', desc: '位于闲丽海上国立公园内的安静美丽海滩。', icon: '🌊' },
            { name: '庆岛海洋观光园区', desc: '集度假村和海洋休闲于一体的综合观光区。', icon: '🏝️' },
          ],
        },
        help: {
          title: '旅行帮助',
          sections: [
            { title: '🏥 紧急医疗', info: '丽水全南医院: 061-680-1114\n红十字医院: 061-640-7575\n急救电话: 119' },
            { title: '🚔 安全', info: '丽水警察署: 061-659-0112\n海洋警察: 061-660-0112\n旅游投诉: 1330' },
            { title: '📞 旅游咨询', info: '丽水市旅游咨询: 061-659-3871\n旅游翻译热线: 1330\n世博站咨询处: 061-664-8978' },
            { title: '🌦️ 天气', info: '年均温: 14.5°C\n夏季 (7~8月): 平均26°C\n冬季 (12~2月): 平均3°C\n必备雨伞 (年降水量1,400mm)' },
          ],
        },
      },
    },
  },
});

export default i18n;
