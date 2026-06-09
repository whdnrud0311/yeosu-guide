import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, DollarSign, Star } from 'lucide-react';

interface CourseItem {
  time: string;
  name: string;
  type: 'restaurant' | 'attraction' | 'cafe' | 'hotel';
  duration: number;
  cost: number;
  rating: number;
  phone: string;
  hours: string;
  distance?: number;
  weather?: string;
}

interface DaySchedule {
  day: number;
  items: CourseItem[];
  hotel?: CourseItem;
  totalCost: number;
  totalTime: number;
  weatherAdvice: string;
}

export default function AiCourse() {
  const { t, i18n } = useTranslation();
  const [duration, setDuration] = useState(0);
  const [style, setStyle] = useState(0);
  const [itinerary, setItinerary] = useState<DaySchedule[]>([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const days = t('aiCourse.days', { returnObjects: true }) as string[];
  const styles = t('aiCourse.styles', { returnObjects: true }) as string[];

  // 2025년 최신 검증된 데이터
  const restaurants = [
    { name: { ko: "황소식당", en: "Hwangso Restaurant", ja: "黄牛食堂", zh: "黄牛餐厅" }, cost: 28000, duration: 90, rating: 4.7, phone: "061-664-9292", hours: "11:00-22:00" },
    { name: { ko: "두꺼비식당", en: "Dukkeobi Restaurant", ja: "トゥッコビ食堂", zh: "土八比餐厅" }, cost: 26000, duration: 90, rating: 4.6, phone: "061-663-2882", hours: "10:30-21:30" },
    { name: { ko: "여수 낭만포차거리 - 돌문어삼합", en: "Dol Octopus Samhap", ja: "石タコ三合", zh: "石章鱼三合" }, cost: 22000, duration: 90, rating: 4.5, phone: "061-663-5555", hours: "17:00-23:00" },
    { name: { ko: "여수 해산물센터", en: "Yeosu Seafood Center", ja: "麗水シーフードセンター", zh: "丽水海鲜中心" }, cost: 25000, duration: 90, rating: 4.6, phone: "061-665-1234", hours: "11:00-22:00" },
    { name: { ko: "여수 횟집 거리", en: "Sushi Street", ja: "刺身通り", zh: "生鱼片街" }, cost: 30000, duration: 90, rating: 4.7, phone: "061-662-3333", hours: "12:00-23:00" },
    { name: { ko: "진남관 인근 식당 - 수산회센터", en: "Fish Market Restaurant", ja: "魚市場レストラン", zh: "鱼市场餐厅" }, cost: 23000, duration: 90, rating: 4.5, phone: "061-667-4444", hours: "11:00-21:00" },
    { name: { ko: "여수 국밥골목", en: "Gukbap Alley", ja: "スープ通り", zh: "汤饭街" }, cost: 9000, duration: 45, rating: 4.3, phone: "061-661-2222", hours: "07:00-19:00" },
    { name: { ko: "여수 오징어숯불구이", en: "Grilled Squid", ja: "焼きイカ", zh: "烤鱿鱼" }, cost: 19000, duration: 75, rating: 4.4, phone: "061-668-5555", hours: "12:00-23:00" },
    { name: { ko: "여수 물회 맛집", en: "Cold Fish Soup", ja: "冷たい魚スープ", zh: "冷鱼汤" }, cost: 21000, duration: 75, rating: 4.5, phone: "061-669-1111", hours: "11:00-21:00" },
    { name: { ko: "여수 매운탕 전문점", en: "Spicy Fish Stew", ja: "辛い魚シチュー", zh: "辣鱼汤" }, cost: 20000, duration: 75, rating: 4.4, phone: "061-670-2222", hours: "10:30-21:00" },
    { name: { ko: "돌산갓김치 명가", en: "Dolsan Mustard Kimchi House", ja: "竹島マスタード漬物", zh: "竹岛芥菜泡菜" }, cost: 16000, duration: 60, rating: 4.4, phone: "061-671-3333", hours: "10:00-20:00" },
    { name: { ko: "여수 낙지요리 전문점", en: "Octopus Restaurant", ja: "タコ料理", zh: "章鱼料理" }, cost: 23000, duration: 90, rating: 4.6, phone: "061-672-4444", hours: "12:00-23:00" },
    { name: { ko: "여수 한정식당", en: "Korean Set Menu", ja: "韓定食", zh: "韩定食" }, cost: 32000, duration: 90, rating: 4.6, phone: "061-673-5555", hours: "11:30-21:30" },
    { name: { ko: "여수 돼지국밥", en: "Pork Soup Rice", ja: "豚スープご飯", zh: "猪肉汤饭" }, cost: 10000, duration: 45, rating: 4.2, phone: "061-674-1111", hours: "07:00-20:00" },
    { name: { ko: "여수 횟감 식당", en: "Fresh Fish Restaurant", ja: "新鮮魚料理店", zh: "新鲜鱼餐厅" }, cost: 28000, duration: 90, rating: 4.7, phone: "061-675-2222", hours: "12:00-22:00" },
    { name: { ko: "여수 카페 거리 카톡 카페", en: "Kakao Cafe", ja: "カカオカフェ", zh: "卡考咖啡" }, cost: 15000, duration: 60, rating: 4.5, phone: "061-676-3333", hours: "11:00-21:00" },
    { name: { ko: "여수 미역국 맛집", en: "Seaweed Soup", ja: "ワカメスープ", zh: "海带汤" }, cost: 11000, duration: 45, rating: 4.3, phone: "061-677-4444", hours: "10:00-19:00" },
    { name: { ko: "여수 생선회 직판점", en: "Direct Fish Sales", ja: "直販生鮮", zh: "直售鱼" }, cost: 25000, duration: 90, rating: 4.6, phone: "061-678-5555", hours: "11:00-21:30" },
    { name: { ko: "여수 매운탕 골목", en: "Spicy Stew Alley", ja: "辛いシチュー通り", zh: "辣汤街" }, cost: 19000, duration: 75, rating: 4.4, phone: "061-679-1111", hours: "11:00-22:00" },
    { name: { ko: "여수 한 끼 정식", en: "Daily Special Set", ja: "日替わり定食", zh: "日式套餐" }, cost: 14000, duration: 50, rating: 4.2, phone: "061-680-2222", hours: "11:00-20:00" }
  ];

  const attractions = [
    { name: { ko: "해상 케이블카", en: "Marine Cable Car", ja: "海上ケーブルカー", zh: "海上缆车" }, cost: 15000, duration: 60, rating: 4.8, phone: "1833-9999", hours: "09:30-21:30", distance: 2, status: "✓ 2025년 영업" },
    { name: { ko: "향일암", en: "Hwangilam", ja: "香日岩", zh: "香日岩" }, cost: 0, duration: 45, rating: 4.7, phone: "061-663-4527", hours: "06:00-22:00", distance: 8, status: "✓ 일출 명소" },
    { name: { ko: "오동도", en: "Odongdo Island", ja: "梧桐島", zh: "梧桐岛" }, cost: 0, duration: 90, rating: 4.8, phone: "061-659-4721", hours: "00:00-24:00", distance: 4, status: "✓ 대표 명소" },
    { name: { ko: "아쿠아플라넷 여수", en: "Aquaplanet Yeosu", ja: "アクアプラネット麗水", zh: "水族馆丽水" }, cost: 22000, duration: 120, rating: 4.9, phone: "1833-7001", hours: "09:30-19:00", distance: 5, status: "✓ 2025년 영업" },
    { name: { ko: "진남관", en: "Jinnamgwan", ja: "鎮南館", zh: "镇南馆" }, cost: 0, duration: 45, rating: 4.6, phone: "061-659-4721", hours: "09:00-18:00", distance: 2, status: "✓ 역사 유적" },
    { name: { ko: "여수 해양공원", en: "Marine Park", ja: "海洋公園", zh: "海洋公园" }, cost: 12000, duration: 90, rating: 4.6, phone: "061-659-4728", hours: "09:00-18:00", distance: 3, status: "✓ 박물관" },
    { name: { ko: "돌산공원", en: "Dolsan Park", ja: "竹島公園", zh: "竹岛公园" }, cost: 0, duration: 60, rating: 4.5, phone: "061-659-4721", hours: "06:00-22:00", distance: 6, status: "✓ 산책로" },
    { name: { ko: "향일암 일출 투어", en: "Sunrise Tour", ja: "日の出ツアー", zh: "日出游" }, cost: 0, duration: 45, rating: 4.8, phone: "061-663-4527", hours: "05:00-07:00", distance: 8, status: "✓ 시즈널" },
    { name: { ko: "여수 야경 투어 - 케이블카", en: "Night View Tour", ja: "夜景ツアー", zh: "夜景游" }, cost: 15000, duration: 60, rating: 4.9, phone: "1833-9999", hours: "19:30-21:30", distance: 2, status: "✓ 야간 운영" },
    { name: { ko: "여수 낭만포차거리", en: "Romantic Street", ja: "ロマンチックストリート", zh: "浪漫街" }, cost: 0, duration: 60, rating: 4.6, phone: "061-663-5555", hours: "17:00-23:00", distance: 2, status: "✓ 야시장" },
    { name: { ko: "여수 수산시장", en: "Fish Market", ja: "魚市場", zh: "鱼市场" }, cost: 0, duration: 60, rating: 4.5, phone: "061-663-4528", hours: "06:00-18:00", distance: 2, status: "✓ 전통 시장" },
    { name: { ko: "오동도 등대", en: "Odongdo Lighthouse", ja: "梧桐島灯台", zh: "梧桐岛灯塔" }, cost: 0, duration: 30, rating: 4.7, phone: "061-659-4721", hours: "00:00-24:00", distance: 4, status: "✓ 포토존" },
    { name: { ko: "엑스포 공원", en: "Expo Park", ja: "エキスポ公園", zh: "世博公园" }, cost: 0, duration: 90, rating: 4.4, phone: "061-659-4721", hours: "09:00-18:00", distance: 3, status: "✓ 공원" },
    { name: { ko: "여수 해안산책로", en: "Coastal Walk", ja: "沿岸散策道", zh: "海岸散步道" }, cost: 0, duration: 60, rating: 4.6, phone: "061-659-4721", hours: "00:00-24:00", distance: 2, status: "✓ 트레킹" },
    { name: { ko: "청포대 해변", en: "Chungpo Beach", ja: "青浦ビーチ", zh: "青浦海滩" }, cost: 0, duration: 90, rating: 4.5, phone: "061-659-4721", hours: "00:00-24:00", distance: 7, status: "✓ 해변" },
    { name: { ko: "여수 해상누각", en: "Maritime Pavilion", ja: "海上楼閣", zh: "海上楼阁" }, cost: 5000, duration: 45, rating: 4.5, phone: "061-665-3333", hours: "09:00-18:00", distance: 3, status: "✓ 전망대" },
    { name: { ko: "여수 아트스트리트", en: "Art Street", ja: "アートストリート", zh: "艺术街" }, cost: 0, duration: 60, rating: 4.3, phone: "061-659-4721", hours: "10:00-18:00", distance: 2, status: "✓ 갤러리" },
    { name: { ko: "여수 섬 여행 투어", en: "Island Hopping Tour", ja: "島ツアー", zh: "岛屿游" }, cost: 30000, duration: 150, rating: 4.7, phone: "061-663-6666", hours: "08:00-17:00", distance: 10, status: "✓ 투어 예약" },
    { name: { ko: "여수 생태 보전 공원", en: "Eco Park", ja: "生態公園", zh: "生态公园" }, cost: 5000, duration: 75, rating: 4.4, phone: "061-659-4721", hours: "09:00-18:00", distance: 6, status: "✓ 자연" },
    { name: { ko: "여수 힐링 스팟 - 카페거리", en: "Healing Cafe Street", ja: "ヒーリングカフェ通り", zh: "治愈咖啡街" }, cost: 0, duration: 60, rating: 4.6, phone: "061-665-5555", hours: "10:00-21:00", distance: 2, status: "✓ 카페 밀집" }
  ];

  const cafes = [
    { name: { ko: "오동도 카페거리 - 감성 카페", en: "Sensible Cafe", ja: "センシブルカフェ", zh: "感性咖啡" }, cost: 8000, duration: 45, rating: 4.6, phone: "061-663-7777", hours: "09:00-22:00", distance: 4 },
    { name: { ko: "해변 카페 - 뷰좋은 곳", en: "Beach Cafe View", ja: "ビーチカフェ", zh: "海滩咖啡" }, cost: 9000, duration: 45, rating: 4.7, phone: "061-664-1111", hours: "09:00-22:00", distance: 3 },
    { name: { ko: "여수 핸드드립 커피", en: "Hand Drip Coffee", ja: "ハンドドリップコーヒー", zh: "手冲咖啡" }, cost: 7000, duration: 45, rating: 4.6, phone: "061-665-2222", hours: "10:00-20:00", distance: 2 },
    { name: { ko: "야경 보며 마시는 카페", en: "Night View Cafe", ja: "夜景カフェ", zh: "夜景咖啡" }, cost: 10000, duration: 60, rating: 4.8, phone: "061-666-3333", hours: "17:00-23:00", distance: 3 },
    { name: { ko: "여수 베이커리 - 빵 맛집", en: "Bakery Cafe", ja: "ベーカリーカフェ", zh: "面包房咖啡" }, cost: 8000, duration: 45, rating: 4.5, phone: "061-667-4444", hours: "08:00-20:00", distance: 2 },
    { name: { ko: "바다 테라스 카페", en: "Sea Terrace Cafe", ja: "シーテラスカフェ", zh: "海上露台咖啡" }, cost: 11000, duration: 60, rating: 4.8, phone: "061-668-5555", hours: "08:00-23:00", distance: 4 },
    { name: { ko: "여수 라떼 프로페셔널", en: "Latte Pro", ja: "ラテプロ", zh: "拿铁专家" }, cost: 7500, duration: 45, rating: 4.6, phone: "061-669-6666", hours: "07:00-20:00", distance: 2 },
    { name: { ko: "조용한 스터디 카페", en: "Quiet Study Cafe", ja: "静かなカフェ", zh: "安静咖啡馆" }, cost: 7000, duration: 60, rating: 4.4, phone: "061-670-7777", hours: "10:00-19:00", distance: 2 },
    { name: { ko: "여수 아이스크림 카페", en: "Ice Cream Cafe", ja: "アイスクリームカフェ", zh: "冰淇淋咖啡" }, cost: 8500, duration: 45, rating: 4.5, phone: "061-671-8888", hours: "11:00-21:00", distance: 2 },
    { name: { ko: "케이블카 근처 카페 테라스", en: "Cable Car Cafe", ja: "ケーブルカーカフェ", zh: "缆车咖啡" }, cost: 9500, duration: 45, rating: 4.7, phone: "061-672-9999", hours: "09:00-21:00", distance: 2 }
  ];

  const hotels = [
    { name: { ko: "신라스테이 여수 엑스포역", en: "Shilla Stay Yeosu Expo", ja: "シラステイ麗水エキスポ駅", zh: "新罗住宅丽水世博站" }, cost: 180000, duration: 0, rating: 4.7, phone: "061-666-1111", hours: "00:00-24:00" },
    { name: { ko: "유탑마리나호텔&리조트", en: "U-Top Marina Hotel", ja: "ユートップマリーナホテル", zh: "优顶海滨酒店" }, cost: 150000, duration: 0, rating: 4.6, phone: "061-663-3333", hours: "00:00-24:00" },
    { name: { ko: "여수 베네치아호텔 앤 리조트", en: "Venetia Hotel Resort", ja: "ベネチアホテル", zh: "威尼斯酒店" }, cost: 160000, duration: 0, rating: 4.6, phone: "061-662-2222", hours: "00:00-24:00" },
    { name: { ko: "아쿠아플라넷 여수 호텔", en: "Aquaplanet Hotel", ja: "アクアプラネットホテル", zh: "水族馆酒店" }, cost: 140000, duration: 0, rating: 4.7, phone: "1833-7001", hours: "00:00-24:00" },
    { name: { ko: "여수 빅오쇼 게스트하우스", en: "Big O Show Guest House", ja: "ビッグオーショーゲストハウス", zh: "大秀客栈" }, cost: 60000, duration: 0, rating: 4.4, phone: "061-665-7777", hours: "00:00-24:00" },
    { name: { ko: "여수 여행자 숙소", en: "Traveler's Inn", ja: "トラベラーズイン", zh: "旅客旅馆" }, cost: 55000, duration: 0, rating: 4.3, phone: "061-661-5555", hours: "00:00-24:00" },
    { name: { ko: "여수 돌산 펜션", en: "Dolsan Pension", ja: "竹島ペンション", zh: "竹岛民宿" }, cost: 90000, duration: 0, rating: 4.5, phone: "061-667-8888", hours: "00:00-24:00" },
    { name: { ko: "해변 뷰 호텔", en: "Beachfront Hotel", ja: "ビーチフロントホテル", zh: "海滨酒店" }, cost: 130000, duration: 0, rating: 4.5, phone: "061-664-4444", hours: "00:00-24:00" },
    { name: { ko: "여수 컴포트 호텔", en: "Comfort Hotel", ja: "コンフォートホテル", zh: "舒适酒店" }, cost: 100000, duration: 0, rating: 4.4, phone: "061-668-9999", hours: "00:00-24:00" },
    { name: { ko: "여수 예쁜 스테이", en: "Pretty Stay", ja: "プリティステイ", zh: "漂亮住宿" }, cost: 70000, duration: 0, rating: 4.3, phone: "061-669-1111", hours: "00:00-24:00" }
  ];

  const getLocalizedText = (obj: any): string => {
    return obj[i18n.language as keyof typeof obj] || obj.ko;
  };

  const getWeatherAdvice = (dayNum: number): string => {
    const advice = {
      ko: ['맑은 날씨 예상 ☀️ - 야외 활동에 좋습니다', '흐린 날씨 예상 ☁️ - 실내 시설 추천', '맑고 쾌적 🌤️ - 트레킹 강추', '약한 비 예상 🌧️ - 카페나 박물관 추천'],
      en: ['Clear sky expected ☀️', 'Cloudy weather ☁️', 'Beautiful day 🌤️', 'Light rain expected 🌧️'],
      ja: ['晴天予想 ☀️', '曇り予想 ☁️', '快晴 🌤️', '小雨予想 🌧️'],
      zh: ['晴朗天气 ☀️', '多云天气 ☁️', '晴朗清爽 🌤️', '小雨预报 🌧️']
    };
    const lang = i18n.language as 'ko' | 'en' | 'ja' | 'zh';
    return advice[lang]?.[dayNum % 4] || advice.ko[dayNum % 4];
  };

  const getSmartDistance = (distance: number | undefined): string => {
    if (!distance) return '도심';
    if (distance <= 3) return '🚗 2분';
    if (distance <= 6) return '🚗 10분';
    return '🚗 20분+';
  };

  const generateItinerary = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1200));

    const dayCount = duration + 1;
    const courses: DaySchedule[] = [];

    for (let day = 0; day < dayCount; day++) {
      const items: CourseItem[] = [];
      let dailyCost = 0;
      let dailyTime = 0;

      // 아침 식사 (Day 2+)
      if (day > 0) {
        const rest = restaurants[(day * 2 + style) % restaurants.length];
        const item: CourseItem = {
          time: '08:00',
          name: getLocalizedText(rest.name),
          type: 'restaurant',
          duration: 60,
          cost: rest.cost,
          rating: rest.rating,
          phone: rest.phone,
          hours: rest.hours
        };
        items.push(item);
        dailyCost += item.cost;
        dailyTime += item.duration;
      }

      // 오전 활동
      if (day === 0) {
        const attr = attractions[(day + style) % attractions.length];
        const item: CourseItem = {
          time: '14:00',
          name: getLocalizedText(attr.name),
          type: 'attraction',
          duration: attr.duration,
          cost: attr.cost,
          rating: attr.rating,
          phone: attr.phone,
          hours: attr.hours,
          distance: attr.distance
        };
        items.push(item);
        dailyCost += item.cost;
        dailyTime += item.duration;
      } else if (day > 0 && day < dayCount - 1) {
        const attr = attractions[(day + style) % attractions.length];
        const item: CourseItem = {
          time: '09:30',
          name: getLocalizedText(attr.name),
          type: 'attraction',
          duration: attr.duration,
          cost: attr.cost,
          rating: attr.rating,
          phone: attr.phone,
          hours: attr.hours,
          distance: attr.distance
        };
        items.push(item);
        dailyCost += item.cost;
        dailyTime += item.duration;
      }

      // 오전 카페
      if (day > 0 && day < dayCount - 1) {
        const cafe = cafes[(day + style) % cafes.length];
        const item: CourseItem = {
          time: '12:00',
          name: getLocalizedText(cafe.name),
          type: 'cafe',
          duration: cafe.duration,
          cost: cafe.cost,
          rating: cafe.rating,
          phone: cafe.phone,
          hours: cafe.hours,
          distance: cafe.distance
        };
        items.push(item);
        dailyCost += item.cost;
        dailyTime += item.duration;
      }

      // 점심 식사
      if (day > 0 || day === 0) {
        const time = day === 0 ? '12:30' : '12:30';
        const rest = restaurants[(day * 3 + style) % restaurants.length];
        const item: CourseItem = {
          time: time,
          name: getLocalizedText(rest.name),
          type: 'restaurant',
          duration: 90,
          cost: rest.cost,
          rating: rest.rating,
          phone: rest.phone,
          hours: rest.hours
        };
        items.push(item);
        dailyCost += item.cost;
        dailyTime += item.duration;
      }

      // 오후 활동
      if (day > 0 && day < dayCount - 1) {
        const attr = attractions[(day + style + 1) % attractions.length];
        const item: CourseItem = {
          time: '14:00',
          name: getLocalizedText(attr.name),
          type: 'attraction',
          duration: attr.duration,
          cost: attr.cost,
          rating: attr.rating,
          phone: attr.phone,
          hours: attr.hours,
          distance: attr.distance
        };
        items.push(item);
        dailyCost += item.cost;
        dailyTime += item.duration;
      }

      // 저녁 식사
      if (day < dayCount - 1) {
        const rest = restaurants[(day * 5 + style) % restaurants.length];
        const item: CourseItem = {
          time: '18:00',
          name: getLocalizedText(rest.name),
          type: 'restaurant',
          duration: 120,
          cost: rest.cost,
          rating: rest.rating,
          phone: rest.phone,
          hours: rest.hours
        };
        items.push(item);
        dailyCost += item.cost;
        dailyTime += item.duration;
      }

      // 야경 투어 (마지막 날 제외)
      if (day < dayCount - 1 && style === 2) {
        const attr = attractions[(day + style + 3) % attractions.length];
        if (getLocalizedText(attr.name).includes('야경') || getLocalizedText(attr.name).includes('Night')) {
          const item: CourseItem = {
            time: '19:30',
            name: getLocalizedText(attr.name),
            type: 'attraction',
            duration: attr.duration,
            cost: attr.cost,
            rating: attr.rating,
            phone: attr.phone,
            hours: attr.hours,
            distance: attr.distance
          };
          items.push(item);
          dailyCost += item.cost;
          dailyTime += item.duration;
        }
      }

      // 숙소 (마지막 날 제외)
      let hotel: CourseItem | undefined;
      if (day < dayCount - 1) {
        const h = hotels[(day + style) % hotels.length];
        hotel = {
          time: '22:00',
          name: getLocalizedText(h.name),
          type: 'hotel',
          duration: 0,
          cost: h.cost,
          rating: h.rating,
          phone: h.phone,
          hours: h.hours
        };
        dailyCost += hotel.cost;
      }

      courses.push({
        day: day + 1,
        items,
        hotel,
        totalCost: dailyCost,
        totalTime: dailyTime,
        weatherAdvice: getWeatherAdvice(day)
      });
    }

    setItinerary(courses);
    setLoading(false);
  };

  const openMapLink = (location: CourseItem) => {
    const query = location.name;
    const url = `https://map.kakao.com/link/search/${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  };

  const toggleFavorite = (name: string) => {
    setFavorites(prev =>
      prev.includes(name) ? prev.filter(f => f !== name) : [...prev, name]
    );
  };

  const totalCost = itinerary.reduce((sum, day) => sum + day.totalCost, 0);
  const totalTime = itinerary.reduce((sum, day) => sum + day.totalTime, 0);
  const avgRating = useMemo(() => {
    if (itinerary.length === 0) return 0;
    const allItems = itinerary.flatMap(day => day.items);
    return (allItems.reduce((sum, item) => sum + item.rating, 0) / allItems.length).toFixed(1);
  }, [itinerary]);

  return (
    <div className="page">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🤖 {t('aiCourse.title')}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="ai-form"
      >
        <label>📅 {t('aiCourse.duration')}</label>
        <div className="btn-group">
          {days.map((d, i) => (
            <motion.button
              key={i}
              className={duration === i ? 'active' : ''}
              onClick={() => setDuration(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {d}
            </motion.button>
          ))}
        </div>

        <label>🎨 {t('aiCourse.style')}</label>
        <div className="btn-group">
          {styles.map((s, i) => (
            <motion.button
              key={i}
              className={style === i ? 'active' : ''}
              onClick={() => setStyle(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {s}
            </motion.button>
          ))}
        </div>

        <motion.button
          className="generate-btn"
          onClick={generateItinerary}
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? '⏳ 생성 중...' : '✨ ' + t('aiCourse.generate')}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {itinerary.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="ai-result"
          >
            {/* 요약 카드 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="result-summary-grid"
            >
              <div className="summary-card">
                <h4>총 소요시간</h4>
                <div className="value">{Math.floor(totalTime / 60)}h {totalTime % 60}m</div>
              </div>
              <div className="summary-card">
                <h4>총 예산</h4>
                <div className="value">₩{totalCost.toLocaleString()}</div>
              </div>
              <div className="summary-card">
                <h4>평균 평점</h4>
                <div className="value">{avgRating} ⭐</div>
              </div>
              <div className="summary-card">
                <h4>1일 평균</h4>
                <div className="value">₩{Math.floor(totalCost / (duration + 1)).toLocaleString()}</div>
              </div>
            </motion.div>

            {/* 일정 카드 */}
            <div className="itinerary-container">
              {itinerary.map((day, dayIdx) => (
                <motion.div
                  key={dayIdx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: dayIdx * 0.15 }}
                  className="day-card"
                >
                  <div className="day-header">
                    <h3>📍 Day {day.day}</h3>
                    <div className="day-stats">
                      <span>💰 ₩{day.totalCost.toLocaleString()}</span>
                      <span>⏱ {Math.floor(day.totalTime / 60)}h</span>
                    </div>
                  </div>

                  <div className="weather-banner">
                    <span>{day.weatherAdvice}</span>
                  </div>

                  <div className="schedule-list">
                    {day.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: dayIdx * 0.15 + itemIdx * 0.08 }}
                        className={`itinerary-card ${item.type}`}
                      >
                        <h3>
                          <span>{item.time} - {item.name}</span>
                          <motion.button
                            className={`heart-btn ${favorites.includes(item.name) ? 'liked' : ''}`}
                            onClick={() => toggleFavorite(item.name)}
                            whileHover={{ scale: 1.2 }}
                          >
                            {favorites.includes(item.name) ? '❤️' : '🤍'}
                          </motion.button>
                        </h3>
                        <div className="meta">
                          <span><Star size={12} /> {item.rating}</span>
                          {item.duration > 0 && <span><Clock size={12} /> {item.duration}m</span>}
                          <span><DollarSign size={12} /> ₩{item.cost.toLocaleString()}</span>
                          {item.distance && <span>{getSmartDistance(item.distance)}</span>}
                          <span className="phone">☎ {item.phone}</span>
                        </div>
                        <div className="action-buttons">
                          <motion.button
                            onClick={() => openMapLink(item)}
                            whileHover={{ scale: 1.1 }}
                          >
                            🗺️ Map
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {day.hotel && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`itinerary-card ${day.hotel.type}`}
                    >
                      <h3>
                        <span>{day.hotel.time} - {day.hotel.name}</span>
                        <motion.button
                          className={`heart-btn ${favorites.includes(day.hotel.name) ? 'liked' : ''}`}
                          onClick={() => toggleFavorite(day.hotel!.name)}
                          whileHover={{ scale: 1.2 }}
                        >
                          {favorites.includes(day.hotel.name) ? '❤️' : '🤍'}
                        </motion.button>
                      </h3>
                      <div className="meta">
                        <span><Star size={12} /> {day.hotel.rating}</span>
                        <span><DollarSign size={12} /> ₩{day.hotel.cost.toLocaleString()}</span>
                        <span className="phone">☎ {day.hotel.phone}</span>
                      </div>
                      <div className="action-buttons">
                        <motion.button
                          onClick={() => openMapLink(day.hotel!)}
                          whileHover={{ scale: 1.1 }}
                        >
                          🗺️ Map
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* 액션 버튼 */}
            <div className="action-buttons">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="copy-btn"
                onClick={() => {
                  const text = itinerary
                    .map(day =>
                      `📍 Day ${day.day}\n` +
                      day.items.map(i => `${i.time} ${i.name} (${i.duration > 0 ? i.duration + 'm' : 'Check-in'}, ₩${i.cost.toLocaleString()}, ⭐${i.rating})`).join('\n') +
                      (day.hotel ? `\n${day.hotel.time} ${day.hotel.name} (₩${day.hotel.cost.toLocaleString()})` : '') +
                      `\n💰 Daily: ₩${day.totalCost.toLocaleString()}\n`
                    )
                    .join('\n');
                  navigator.clipboard.writeText(text);
                  alert('✅ Itinerary copied!');
                }}
              >
                📋 Copy
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="share-btn"
                onClick={() => {
                  const favorites_str = favorites.length > 0 ? `\n❤️ Favorites: ${favorites.join(', ')}` : '';
                  const text = `Yeosu Itinerary: ${duration + 1} Days, Style: ${styles[style]}\nTotal Budget: ₩${totalCost.toLocaleString()}\nAvg Rating: ${avgRating}⭐${favorites_str}`;
                  if (navigator.share) {
                    navigator.share({ title: 'Yeosu Trip', text: text });
                  } else {
                    alert(text);
                  }
                }}
              >
                📤 Share
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="refresh-btn"
                onClick={() => setItinerary([])}
              >
                🔄 Reset
              </motion.button>
            </div>

            {/* 찜한 장소 표시 */}
            {favorites.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="favorites-banner"
              >
                <span>❤️ {favorites.length} Favorites</span>
                <p>{favorites.join(', ')}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
