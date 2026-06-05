import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurants } from '../data/restaurantData';
import type { Restaurant } from '../data/restaurantData';
import '../styles/restaurants.css';

type Category = 'all' | 'seafood' | 'korean' | 'cafe' | 'pocha';

/* ── 카테고리 라벨 (다국어) ── */
const catLabels: Record<Category, Record<string, string>> = {
  all:     { ko: '전체',      en: 'All',       ja: 'すべて',    zh: '全部' },
  seafood: { ko: '🐟 해산물',  en: '🐟 Seafood', ja: '🐟 海鮮',   zh: '🐟 海鲜' },
  korean:  { ko: '🍚 한식',    en: '🍚 Korean',  ja: '🍚 韓食',   zh: '🍚 韩餐' },
  cafe:    { ko: '☕ 카페',    en: '☕ Cafe',    ja: '☕ カフェ',  zh: '☕ 咖啡' },
  pocha:   { ko: '🏮 포차',    en: '🏮 Pocha',   ja: '🏮 ポチャ',  zh: '🏮 大排档' },
};

/* ── 카테고리 뱃지 라벨 ── */
const catBadge: Record<string, Record<string, string>> = {
  seafood: { ko: '해산물', en: 'Seafood', ja: '海鮮',   zh: '海鲜' },
  korean:  { ko: '한식',   en: 'Korean',  ja: '韓食',   zh: '韩餐' },
  cafe:    { ko: '카페',   en: 'Cafe',    ja: 'カフェ',  zh: '咖啡' },
  pocha:   { ko: '포차',   en: 'Pocha',   ja: 'ポチャ',  zh: '大排档' },
};

/* ── 검색 placeholder ── */
const searchPH: Record<string, string> = {
  ko: '맛집 이름·메뉴 검색...',
  en: 'Search restaurant or menu...',
  ja: '店名・メニュー検索...',
  zh: '搜索餐厅或菜单...',
};

export default function Restaurants() {
  const { i18n } = useTranslation();
  const lang = (['ko','en','ja','zh'].includes(i18n.language) ? i18n.language : 'ko') as 'ko'|'en'|'ja'|'zh';

  const [category, setCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');
  const [showTop, setShowTop] = useState(false);

  /* 스크롤 감지 → Top 버튼 표시 */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* 필터링 로직 */
  const filtered = useMemo(() => {
    let list = restaurants;
    if (category !== 'all') list = list.filter(r => r.category === category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(r =>
        r.name[lang].toLowerCase().includes(q) ||
        r.description[lang].toLowerCase().includes(q) ||
        r.menu[lang].some(m => m.toLowerCase().includes(q))
      );
    }
    return list;
  }, [category, search, lang]);

  /* 카카오맵 URL */
  const kakaoMapUrl = (r: Restaurant) =>
    `https://map.kakao.com/link/search/${encodeURIComponent(r.name.ko)}`;

  return (
    <div className="page" style={{ paddingBottom: 32 }}>
      {/* 검색바 */}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder={searchPH[lang] || searchPH.ko}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* 카테고리 탭 */}
      <div className="category-tabs">
        {(Object.keys(catLabels) as Category[]).map(cat => (
          <button
            key={cat}
            className={`cat-tab ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {catLabels[cat][lang] || catLabels[cat].ko}
          </button>
        ))}
      </div>

      {/* 결과 수 */}
      <div className="result-count">
        {lang === 'ko' && <><strong>{filtered.length}</strong>개의 맛집</>}
        {lang === 'en' && <><strong>{filtered.length}</strong> restaurants found</>}
        {lang === 'ja' && <><strong>{filtered.length}</strong>件のお店</>}
        {lang === 'zh' && <>找到<strong>{filtered.length}</strong>家餐厅</>}
      </div>

      {/* 카드 리스트 */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            className="empty-state"
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="empty-icon">😢</div>
            <p>
              {lang === 'ko' && '검색 결과가 없습니다'}
              {lang === 'en' && 'No results found'}
              {lang === 'ja' && '検索結果がありません'}
              {lang === 'zh' && '未找到结果'}
            </p>
          </motion.div>
        ) : (
          <motion.div key={category + search} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {filtered.map((r, i) => (
              <motion.div
                className="rest-card"
                key={r.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* 카드 헤더 */}
                <div className={`rest-card-header ${r.category}`}>
                  <span className="category-badge">{catBadge[r.category]?.[lang] || r.category}</span>
                  <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>{r.image}</span>
                  <span className="price-badge">{r.priceRange}</span>
                </div>

                {/* 카드 바디 */}
                <div className="rest-card-body">
                  <div className="rest-card-title">
                    <h3>{r.name[lang]}</h3>
                    <span className="rest-rating">⭐ {r.rating}</span>
                  </div>

                  <p className="rest-desc">{r.description[lang]}</p>

                  <div className="rest-signature">
                    🍽️ {r.menu[lang].join(' · ')}
                  </div>

                  <div className="rest-address">
                    📍 {r.address[lang]}
                  </div>

                  {/* 액션 버튼 */}
                  <div className="rest-actions">
                    <a href={`tel:${r.phone}`} className="rest-btn call">
                      📞 {r.phone}
                    </a>
                    <a href={kakaoMapUrl(r)} target="_blank" rel="noopener noreferrer" className="rest-btn map">
                      🗺️ {lang === 'ko' ? '카카오맵' : lang === 'ja' ? 'カカオ' : lang === 'zh' ? '地图' : 'Kakao'}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="scroll-top-btn"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
