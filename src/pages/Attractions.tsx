import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { attractions } from '../data/attractionData';
import type { Attraction } from '../data/attractionData';
import '../styles/attractions.css';

type Category = 'all' | 'nature' | 'culture' | 'experience' | 'landmark';

/* ── 카테고리 라벨 ── */
const catLabels: Record<Category, Record<string, string>> = {
  all:        { ko: '전체',       en: 'All',        ja: 'すべて',     zh: '全部' },
  nature:     { ko: '🌿 자연',    en: '🌿 Nature',   ja: '🌿 自然',    zh: '🌿 自然' },
  culture:    { ko: '🏛️ 문화',    en: '🏛️ Culture',  ja: '🏛️ 文化',    zh: '🏛️ 文化' },
  experience: { ko: '🎯 체험',    en: '🎯 Experience',ja: '🎯 体験',    zh: '🎯 体验' },
  landmark:   { ko: '🗼 랜드마크', en: '🗼 Landmark', ja: '🗼 ランドマーク', zh: '🗼 地标' },
};

const catBadge: Record<string, Record<string, string>> = {
  nature:     { ko: '자연',     en: 'Nature',     ja: '自然',       zh: '自然' },
  culture:    { ko: '문화',     en: 'Culture',    ja: '文化',       zh: '文化' },
  experience: { ko: '체험',     en: 'Experience', ja: '体験',       zh: '体验' },
  landmark:   { ko: '랜드마크', en: 'Landmark',   ja: 'ランドマーク', zh: '地标' },
};

const searchPH: Record<string, string> = {
  ko: '관광지 이름·키워드 검색...',
  en: 'Search attraction or keyword...',
  ja: '観光地名・キーワード検索...',
  zh: '搜索景点或关键词...',
};

export default function Attractions() {
  const { i18n } = useTranslation();
  const lang = (['ko','en','ja','zh'].includes(i18n.language) ? i18n.language : 'ko') as 'ko'|'en'|'ja'|'zh';

  const [category, setCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filtered = useMemo(() => {
    let list = attractions;
    if (category !== 'all') list = list.filter(a => a.category === category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(a =>
        a.name[lang].toLowerCase().includes(q) ||
        a.description[lang].toLowerCase().includes(q) ||
        a.highlights[lang].some(h => h.toLowerCase().includes(q))
      );
    }
    return list;
  }, [category, search, lang]);

  const kakaoMapUrl = (a: Attraction) =>
    `https://map.kakao.com/link/search/${encodeURIComponent(a.name.ko)}`;

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
        {lang === 'ko' && <><strong>{filtered.length}</strong>개의 관광지</>}
        {lang === 'en' && <><strong>{filtered.length}</strong> attractions found</>}
        {lang === 'ja' && <><strong>{filtered.length}</strong>件の観光地</>}
        {lang === 'zh' && <>找到<strong>{filtered.length}</strong>个景点</>}
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
            {filtered.map((a, i) => (
              <motion.div
                className="attr-card"
                key={a.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* 카드 헤더 */}
                <div className={`attr-card-header ${a.category}`}>
                  <span className="category-badge">{catBadge[a.category]?.[lang] || a.category}</span>
                  <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>{a.emoji}</span>
                  <span className="fee-badge">{a.fee[lang]}</span>
                </div>

                {/* 카드 바디 */}
                <div className="attr-card-body">
                  <div className="attr-card-title">
                    <h3>{a.name[lang]}</h3>
                    <span className="attr-rating">⭐ {a.rating}</span>
                  </div>

                  <p className="attr-desc">{a.description[lang]}</p>

                  {/* 하이라이트 태그 */}
                  <div className="attr-highlights">
                    {a.highlights[lang].map((h, idx) => (
                      <span className="highlight-tag" key={idx}>#{h}</span>
                    ))}
                  </div>

                  <div className="attr-address">
                    📍 {a.address[lang]}
                  </div>

                  {/* 액션 버튼 */}
                  <div className="attr-actions">
                    <a href={`tel:${a.phone}`} className="attr-btn call">
                      📞 {a.phone}
                    </a>
                    <a href={kakaoMapUrl(a)} target="_blank" rel="noopener noreferrer" className="attr-btn map">
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
