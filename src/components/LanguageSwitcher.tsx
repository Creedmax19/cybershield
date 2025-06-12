import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm font-medium ${
          i18n.language === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-gray-400">/</span>
      <button
        onClick={() => changeLanguage('de')}
        className={`px-2 py-1 rounded-md text-sm font-medium ${
          i18n.language === 'de' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
