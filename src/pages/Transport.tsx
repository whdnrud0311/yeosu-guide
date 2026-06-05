import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, MapPin, ChevronUp, Search,
  Clock, CreditCard, Lightbulb,
  Navigation,
} from 'lucide-react';
import type { TransportItem } from '../data/transportData';  // ← type import
import { transportData } from '../data/transportData';        // ← value import
import '../styles/transport.css';

type Category = 'all' | 'bus' | 'train' | 'airport' | 'ferry' | 'local';

export default function Transport() {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.slice(0, 2) || 'ko') as 'ko' | 'en' | 'ja' | 'zh';  // ✅ 안전한 lang 파싱

  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories: { key: Category; emoji: string; label: Record<string, string> }[] = [
    { key: 'all', emoji: '🗺️', label: { ko: '전체', en: 'All', ja: '全て', zh: '全部' } },
    { key: 'bus', emoji: '🚌', label: { ko: '버스', en: 'Bus', ja: 'バス', zh: '巴士' } },
    { key: 'train', emoji: '🚄', label: { ko: '기차', en: 'Train', ja: '鉄道', zh: '火车' } },
    { key: 'airport', emoji: '✈️', label: { ko: '항공', en: 'Flight', ja: '航空', zh: '航空' } },
    { key: 'ferry', emoji: '⛴️', label: { ko: '여객선', en: 'Ferry', ja: 'フェリー', zh: '渡轮' } },
    { key: 'local', emoji: '🚍', label: { ko: '시내', en: 'Local', ja: '市内', zh: '市内' } },
  ];

  const filtered = transportData.filter((item) => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      item.name[lang].toLowerCase().includes(q) ||
      item.description[lang].toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const kakaoMapUrl = (item: TransportItem) =>
    `https://map.kakao.com/link/search/${encodeURIComponent(item.address[lang])}`;

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'bus': return 'tp-cat-bus';
      case 'train': return 'tp-cat-train';
      case 'airport': return 'tp-cat-airport';
      case 'ferry': return 'tp-cat-ferry';
      case 'local': return 'tp-cat-local';
      default: return '';
    }
  };

  return (
    <div className="transport-container">
      {/* Hero */}
      <div className="tp-hero">
        <div className="tp-hero-emoji">🚆</div>
        <h2 className="tp-hero-title">
          {{ ko: '여수 교통 가이드', en: 'Yeosu Transport Guide', ja: '麗水交通ガイド', zh: '丽水交通指南' }[lang]}
        </h2>
        <p className="tp-hero-sub">
          {{ ko: '여수까지, 여수 안에서 이동하는 모든 방법', en: 'Every way to get to & around Yeosu', ja: '麗水への、麗水内の全移動手段', zh: '到达丽水及市内的所有交通方式' }[lang]}
        </p>
      </div>

      {/* Search */}
      <div className="tp-search-bar">
        <Search size={18} className="tp-search-icon" />
        <input
          type="text"
          className="tp-search-input"
          placeholder={{ ko: '교통편 검색...', en: 'Search transport...', ja: '交通手段を検索...', zh: '搜索交通...' }[lang]}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="tp-categories">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`tp-cat-btn ${activeCategory === cat.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label[lang]}</span>
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="tp-result-count">
        {{ ko: `${filtered.length}개 교통편`, en: `${filtered.length} options`, ja: `${filtered.length}件`, zh: `${filtered.length}个交通方式` }[lang]}
      </p>

      {/* Cards */}
      <div className="tp-card-list">
        <AnimatePresence>
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`tp-card ${getCategoryStyle(item.category)}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: idx * 0.05 }}
              layout
            >
              {/* Card Header */}
              <div className="tp-card-header" onClick={() => toggleExpand(item.id)}>
                <div className="tp-card-emoji">{item.image}</div>
                <div className="tp-card-title-area">
                  <h3 className="tp-card-name">{item.name[lang]}</h3>
                  <p className="tp-card-desc">{item.description[lang]}</p>
                </div>
                <div className={`tp-expand-icon ${expandedId === item.id ? 'expanded' : ''}`}>
                  ▼
                </div>
              </div>

              {/* Quick Info */}
              <div className="tp-quick-info">
                <div className="tp-info-chip">
                  <CreditCard size={14} />
                  <span>{item.fare[lang]}</span>
                </div>
                <div className="tp-info-chip">
                  <Clock size={14} />
                  <span>{item.duration[lang]}</span>
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    className="tp-card-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="tp-detail-row">
                      <Navigation size={16} />
                      <div>
                        <span className="tp-detail-label">
                          {{ ko: '노선', en: 'Route', ja: '路線', zh: '路线' }[lang]}
                        </span>
                        <span className="tp-detail-value">{item.route[lang]}</span>
                      </div>
                    </div>
                    <div className="tp-detail-row">
                      <Clock size={16} />
                      <div>
                        <span className="tp-detail-label">
                          {{ ko: '운행 시간', en: 'Schedule', ja: '運行時間', zh: '运营时间' }[lang]}
                        </span>
                        <span className="tp-detail-value">{item.schedule[lang]}</span>
                      </div>
                    </div>
                    <div className="tp-detail-row">
                      <MapPin size={16} />
                      <div>
                        <span className="tp-detail-label">
                          {{ ko: '위치', en: 'Location', ja: '場所', zh: '位置' }[lang]}
                        </span>
                        <span className="tp-detail-value">{item.address[lang]}</span>
                      </div>
                    </div>
                    <div className="tp-detail-row tp-tip-row">
                      <Lightbulb size={16} />
                      <div>
                        <span className="tp-detail-label">💡 Tip</span>
                        <span className="tp-detail-value">{item.tip[lang]}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="tp-actions">
                      <a href={`tel:${item.phone}`} className="tp-btn tp-btn-call">
                        <Phone size={16} />
                        {{ ko: '전화', en: 'Call', ja: '電話', zh: '电话' }[lang]}
                      </a>
                      <a
                        href={kakaoMapUrl(item)}
                        target="_blank"
                        rel="noreferrer"
                        className="tp-btn tp-btn-map"
                      >
                        <MapPin size={16} />
                        {{ ko: '지도', en: 'Map', ja: '地図', zh: '地图' }[lang]}
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="tp-empty">
          <p>🔍</p>
          <p>
            {{ ko: '검색 결과가 없습니다', en: 'No results found', ja: '検索結果がありません', zh: '没有搜索结果' }[lang]}
          </p>
        </div>
      )}

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="tp-scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
