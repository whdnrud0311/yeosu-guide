// src/pages/OceanView.tsx

import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Star,
  Phone,
  MapPin,
  Clock,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Tag,
  Navigation,
} from 'lucide-react';
import { oceanviewData } from '../data/oceanviewData';
import type { OceanViewItem } from '../data/oceanviewData';
import '../styles/oceanview.css';

type CategoryType = 'all' | OceanViewItem['category'];

interface CategoryInfo {
  label: { ko: string; en: string; ja: string; zh: string };
  emoji: string;
  color: string;
}

const categoryMap: Record<CategoryType, CategoryInfo> = {
  all: {
    label: { ko: '전체', en: 'All', ja: 'すべて', zh: '全部' },
    emoji: '🌊',
    color: '#0ea5e9',
  },
  cable_car: {
    label: { ko: '케이블카', en: 'Cable Car', ja: 'ケーブルカー', zh: '缆车' },
    emoji: '🚡',
    color: '#f59e0b',
  },
  observatory: {
    label: { ko: '전망대', en: 'Observatory', ja: '展望台', zh: '观景台' },
    emoji: '🔭',
    color: '#8b5cf6',
  },
  park: {
    label: { ko: '공원', en: 'Park', ja: '公園', zh: '公园' },
    emoji: '🌳',
    color: '#22c55e',
  },
  beach: {
    label: { ko: '해변', en: 'Beach', ja: '海辺', zh: '海滩' },
    emoji: '🏖️',
    color: '#06b6d4',
  },
  pocha: {
    label: { ko: '포차', en: 'Pojangmacha', ja: 'ポチャ', zh: '大排档' },
    emoji: '🌃',
    color: '#ef4444',
  },
  cafe_street: {
    label: { ko: '카페거리', en: 'Cafe Street', ja: 'カフェ通り', zh: '咖啡街' },
    emoji: '🌹',
    color: '#ec4899',
  },
  activity: {
    label: { ko: '액티비티', en: 'Activity', ja: 'アクティビティ', zh: '活动' },
    emoji: '🎨',
    color: '#f97316',
  },
  island: {
    label: { ko: '섬', en: 'Island', ja: '島', zh: '岛屿' },
    emoji: '🏝️',
    color: '#14b8a6',
  },
  trekking: {
    label: { ko: '트레킹', en: 'Trekking', ja: 'トレッキング', zh: '徒步' },
    emoji: '🥾',
    color: '#84cc16',
  },
  cafe: {
    label: { ko: '카페', en: 'Cafe', ja: 'カフェ', zh: '咖啡馆' },
    emoji: '☕',
    color: '#a16207',
  },
};

const OceanView = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'ko') as 'ko' | 'en' | 'ja' | 'zh';

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 스크롤 감지
  useState(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // 필터 + 검색
  const filteredData = useMemo(() => {
    return oceanviewData.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        item.name[lang].toLowerCase().includes(q) ||
        item.description[lang].toLowerCase().includes(q) ||
        item.address[lang].toLowerCase().includes(q) ||
        item.tags[lang].some((tag) => tag.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openKakaoMap = (address: string) => {
    window.open(
      `https://map.kakao.com/link/search/${encodeURIComponent(address)}`,
      '_blank'
    );
  };

  const labels = {
    title: { ko: '🌊 여수 오션뷰', en: '🌊 Ocean View', ja: '🌊 オーシャンビュー', zh: '🌊 海景' },
    subtitle: {
      ko: '여수의 아름다운 바다 풍경을 만나보세요',
      en: 'Discover the beautiful sea views of Yeosu',
      ja: '麗水の美しい海の風景に出会いましょう',
      zh: '探索丽水美丽的海景',
    },
    searchPlaceholder: {
      ko: '장소, 키워드로 검색...',
      en: 'Search by place, keyword...',
      ja: '場所、キーワードで検索...',
      zh: '按地点、关键词搜索...',
    },
    hours: { ko: '운영시간', en: 'Hours', ja: '営業時間', zh: '营业时间' },
    tip: { ko: '꿀팁', en: 'Tip', ja: 'ヒント', zh: '小贴士' },
    call: { ko: '전화', en: 'Call', ja: '電話', zh: '电话' },
    map: { ko: '카카오맵', en: 'KakaoMap', ja: 'カカオマップ', zh: '카카오地图' },
    noResult: {
      ko: '검색 결과가 없습니다 😢',
      en: 'No results found 😢',
      ja: '検索結果がありません 😢',
      zh: '没有搜索结果 😢',
    },
    count: { ko: '개 장소', en: ' places', ja: ' 件', zh: ' 个地点' },
  };

  return (
    <div className="oceanview-container">
      {/* 헤더 */}
      <motion.div
        className="oceanview-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="oceanview-title">{labels.title[lang]}</h1>
        <p className="oceanview-subtitle">{labels.subtitle[lang]}</p>
      </motion.div>

      {/* 검색바 */}
      <motion.div
        className="oceanview-search-bar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Search size={20} className="search-icon" />
        <input
          type="text"
          placeholder={labels.searchPlaceholder[lang]}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </motion.div>

      {/* 카테고리 필터 */}
      <motion.div
        className="oceanview-categories"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {(Object.keys(categoryMap) as CategoryType[]).map((cat) => (
          <button
            key={cat}
            className={`category-chip ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            style={
              selectedCategory === cat
                ? { backgroundColor: categoryMap[cat].color, color: '#fff', borderColor: categoryMap[cat].color }
                : {}
            }
          >
            <span>{categoryMap[cat].emoji}</span>
            <span>{categoryMap[cat].label[lang]}</span>
          </button>
        ))}
      </motion.div>

      {/* 결과 카운트 */}
      <div className="oceanview-count">
        <span className="count-number">{filteredData.length}</span>
        {labels.count[lang]}
      </div>

      {/* 카드 리스트 */}
      <div className="oceanview-list">
        <AnimatePresence>
          {filteredData.length === 0 ? (
            <motion.div
              className="no-result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {labels.noResult[lang]}
            </motion.div>
          ) : (
            filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`oceanview-card ${expandedId === item.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                layout
              >
                {/* 카드 헤더 */}
                <div
                  className="card-header"
                  onClick={() => handleToggle(item.id)}
                >
                  <div className="card-header-left">
                    <span className="card-emoji">{item.image}</span>
                    <div className="card-info">
                      <h3 className="card-name">{item.name[lang]}</h3>
                      <div className="card-meta">
                        <span
                          className="card-category-badge"
                          style={{ backgroundColor: categoryMap[item.category].color }}
                        >
                          {categoryMap[item.category].emoji}{' '}
                          {categoryMap[item.category].label[lang]}
                        </span>
                        <span className="card-rating">
                          <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-toggle">
                    {expandedId === item.id ? (
                      <ChevronUp size={22} />
                    ) : (
                      <ChevronDown size={22} />
                    )}
                  </div>
                </div>

                {/* 카드 바디 */}
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      className="card-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="card-description">{item.description[lang]}</p>

                      <div className="card-details">
                        <div className="detail-row">
                          <MapPin size={16} />
                          <span>{item.address[lang]}</span>
                        </div>
                        <div className="detail-row">
                          <Clock size={16} />
                          <span>{item.hours[lang]}</span>
                        </div>
                        <div className="detail-row tip-row">
                          <Lightbulb size={16} />
                          <span>{item.tip[lang]}</span>
                        </div>
                      </div>

                      {/* 태그 */}
                      <div className="card-tags">
                        {item.tags[lang].map((tag, i) => (
                          <span key={i} className="tag-item">
                            <Tag size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* 액션 버튼 */}
                      <div className="card-actions">
                        {item.phone && (
                          <a href={`tel:${item.phone}`} className="action-btn call-btn">
                            <Phone size={16} />
                            {labels.call[lang]}
                          </a>
                        )}
                        <button
                          className="action-btn map-btn"
                          onClick={() => openKakaoMap(item.address.ko)}
                        >
                          <Navigation size={16} />
                          {labels.map[lang]}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OceanView;
