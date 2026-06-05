import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-100 text-center text-xs text-gray-500 py-3">
      {t('footer_copy')}
    </footer>
  );
}
