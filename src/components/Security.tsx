import { Shield, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Security = () => {
  const { t } = useTranslation();
  
  // Type assertion for the threat types array
  const threatTypes = t('security.threatTypes', { returnObjects: true }) as string[];

  return (
    <section id="security" className="relative py-24 overflow-hidden bg-gray-900">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/60 to-gray-900/85"></div>
        
        {/* Grid Container */}
        <div className="absolute inset-0">
          {/* Vertical Lines */}
          <div className="absolute inset-0 flex justify-between">
            {[...Array(25)].map((_, i) => (
              <div key={`v-${i}`} className="h-full w-px bg-blue-500/10"></div>
            ))}
          </div>
          
          {/* Horizontal Lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(25)].map((_, i) => (
              <div key={`h-${i}`} className="w-full h-px bg-blue-500/10"></div>
            ))}
          </div>
        </div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-moveRight"></div>
          <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-moveDown"></div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/20 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-blue-500/20 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-blue-500/20 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/20 rounded-br-lg"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t('security.title')}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            {t('security.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Security dashboard mockup */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">{t('security.dashboard.title')}</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">{t('security.dashboard.activeProtection')}</span>
                </div>
              </div>

              {/* Threat detection panel */}
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <div>
                    <div className="text-green-400 font-medium">{t('security.dashboard.alerts.malwareBlocked')}</div>
                    <div className="text-gray-400 text-sm">{t('security.dashboard.alerts.workstation')}</div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <div>
                    <div className="text-yellow-400 font-medium">{t('security.dashboard.alerts.suspiciousLogin')}</div>
                    <div className="text-gray-400 text-sm">{t('security.dashboard.alerts.adminLogin')}</div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-4 flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <div className="text-blue-400 font-medium">{t('security.dashboard.alerts.scoreImproved')}</div>
                    <div className="text-gray-400 text-sm">{t('security.dashboard.alerts.networkHardening')}</div>
                  </div>
                </div>
              </div>

              {/* Security metrics */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">847</div>
                  <div className="text-gray-400 text-sm">{t('security.dashboard.metrics.threatsBlocked')}</div>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">98.7%</div>
                  <div className="text-gray-400 text-sm">{t('security.dashboard.metrics.securityScore')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-white mb-4" dangerouslySetInnerHTML={{
                __html: t('security.dashboard.headings.stopThreats')
                  .replace('<1>', '<span class="text-blue-400">')
                  .replace('</1>', '</span>')
              }} />
              <p className="text-xl text-gray-300 mb-6">
                Small businesses are 3x more likely to be targeted by cybercriminals than large enterprises. 
                Don't become a statistic.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t('security.dashboard.headings.threatsWeNeutralize')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {threatTypes.map((threat: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{threat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-white mb-2">
                {t('security.dashboard.headings.costOfInaction')}
              </h4>
              <ul className="text-gray-300 space-y-1">
                {(t('security.dashboard.statistics', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 flex items-center">
                {t('security.dashboard.cta')}
                <Shield className="ml-2 h-5 w-5" />
              </button>
              
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">{t('security.dashboard.compliance.title')}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">{t('security.dashboard.compliance.gdpr')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">{t('security.dashboard.compliance.nis2')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">{t('security.dashboard.compliance.bsi')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">{t('security.dashboard.compliance.iso')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">{t('security.dashboard.compliance.c5')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">IT-SiG 2.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;