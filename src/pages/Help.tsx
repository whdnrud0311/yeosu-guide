import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Section {
  title: string;
  info: string;
}

export default function Help() {
  const { t } = useTranslation();
  const sections = t('help.sections', { returnObjects: true }) as Section[];

  return (
    <div className="page">
      <h2>{t('help.title')}</h2>
      <div className="card-list">
        {sections.map((sec, i) => (
          <motion.div
            className="info-card"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>{sec.title}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{sec.info}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
