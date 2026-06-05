import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed, Landmark, Brain,
  Sunset, Map, HelpCircle
} from 'lucide-react';

const menuItems = [
  { navKey: 'restaurants', icon: UtensilsCrossed, path: '/restaurants', gradient: 'linear-gradient(135deg, #FF6B6B, #ee5a24)' },
  { navKey: 'attractions', icon: Landmark,        path: '/attractions', gradient: 'linear-gradient(135deg, #4ecdc4, #2d98da)' },
  { navKey: 'aiCourse',    icon: Brain,           path: '/ai-course',   gradient: 'linear-gradient(135deg, #a55eea, #8854d0)' },
  { navKey: 'oceanView',   icon: Sunset,          path: '/ocean-view',  gradient: 'linear-gradient(135deg, #f9ca24, #f0932b)' },
  { navKey: 'transport',   icon: Map,             path: '/transport',   gradient: 'linear-gradient(135deg, #20bf6b, #0a3d62)' },
  { navKey: 'help',        icon: HelpCircle,      path: '/help',        gradient: 'linear-gradient(135deg, #778ca3, #4b6584)' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 260, damping: 20 } },
} as const;

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="hero-emoji"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          🏝️
        </motion.div>
        <h2 className="hero-title">{t('app.title')}</h2>
        <p className="hero-sub">{t('home.subtitle')}</p>
      </motion.section>

      {/* Menu Grid */}
      <motion.section
        className="menu-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {menuItems.map((menu) => (
          <motion.div
            key={menu.navKey}
            variants={item}
            className="menu-card"
            style={{ background: menu.gradient }}
            onClick={() => navigate(menu.path)}
            whileTap={{ scale: 0.95 }}
          >
            <menu.icon size={32} color="#fff" />
            <span className="menu-label">{t(`nav.${menu.navKey}`)}</span>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
