import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Only run on client to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    
    // Check if user has seen the language banner before
    const hasSeenBanner = localStorage.getItem('hasSeenLanguageBanner');
    const detectedLanguage = navigator.language.startsWith('de') ? 'de' : 'en';
    const savedLanguage = localStorage.getItem('i18nextLng');
    
    if (!hasSeenBanner && !savedLanguage && detectedLanguage !== 'en') {
      setShowBanner(true);
    }
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowBanner(false);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
    localStorage.setItem('hasSeenLanguageBanner', 'true');
  };

  if (!isClient) {
    return null; // Don't render anything during SSR
  }

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-3 z-50 flex justify-between items-center">
          <span>{t('language.banner', 'Would you like to view this site in your language?')}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => changeLanguage('de')}
              className="px-3 py-1 bg-white text-blue-600 rounded hover:bg-blue-100 transition-colors"
            >
              {t('language.switchToGerman', 'Deutsch')}
            </button>
            <button
              onClick={handleCloseBanner}
              className="px-3 py-1 text-white hover:bg-blue-700 rounded transition-colors"
            >
              {t('language.noThanks', 'No thanks')}
            </button>
          </div>
        </div>
      )}
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => changeLanguage('en')}
          className={`flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            i18n.language === 'en' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
          aria-label={t('language.switchToEnglish', 'Switch to English')}
        >
          <span className="mr-1">🇬🇧</span>
          <span>EN</span>
        </button>
        <button
          onClick={() => changeLanguage('de')}
          className={`flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            i18n.language === 'de' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
          aria-label={t('language.switchToGerman', 'Switch to German')}
        >
          <span className="mr-1">🇩🇪</span>
          <span>DE</span>
        </button>
      </div>
    </>
  );
};

export default LanguageSwitcher;
