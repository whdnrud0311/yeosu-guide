import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiCourse() {
  const { t } = useTranslation();
  const [duration, setDuration] = useState(0);
  const [style, setStyle] = useState(0);
  const [result, setResult] = useState('');

  const days = t('aiCourse.days', { returnObjects: true }) as string[];
  const styles = t('aiCourse.styles', { returnObjects: true }) as string[];

  const handleGenerate = () => {
    const key = `${duration}-${style}`;
    const course = t(`aiCourse.courses.${key}`);
    setResult(course);
  };

  return (
    <div className="page">
      <h2>{t('aiCourse.title')}</h2>

      <div className="ai-form">
        <label>{t('aiCourse.duration')}</label>
        <div className="btn-group">
          {days.map((d, i) => (
            <button
              key={i}
              className={duration === i ? 'active' : ''}
              onClick={() => setDuration(i)}
            >
              {d}
            </button>
          ))}
        </div>

        <label>{t('aiCourse.style')}</label>
        <div className="btn-group">
          {styles.map((s, i) => (
            <button
              key={i}
              className={style === i ? 'active' : ''}
              onClick={() => setStyle(i)}
            >
              {s}
            </button>
          ))}
        </div>

        <button className="generate-btn" onClick={handleGenerate}>
          {t('aiCourse.generate')}
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            className="ai-result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3>{t('aiCourse.result')}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{result}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
