import { useTranslation } from 'react-i18next';

const langs = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
];

export default function LanguageModal({ onClose }: { onClose: () => void }) {
  const { i18n } = useTranslation();
  const change = (code: string) => { i18n.changeLanguage(code); onClose(); };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-xl p-6 w-64 space-y-2" onClick={e => e.stopPropagation()}>
        {langs.map(l => (
          <button key={l.code} onClick={() => change(l.code)}
            className="w-full py-2 rounded hover:bg-blue-50 text-gray-800">
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
