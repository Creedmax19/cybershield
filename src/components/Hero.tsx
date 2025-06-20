import { useTranslation } from 'react-i18next';
import { Shield, Zap, Eye, ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2020/03/12/33577-397143942_tiny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-emerald-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="mb-8">
          <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">{t('hero.tagline')}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-2">{t('hero.title.line1')}</span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t('hero.title.line2')}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 flex items-center shadow-xl">
            {t('hero.cta1')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="border border-gray-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800/50 transition-all duration-200">
            {t('hero.cta2')}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center bg-gray-900/30 backdrop-blur-sm rounded-2xl p-4 h-full">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Threat Detection</div>
          </div>
          <div className="text-center bg-gray-900/30 backdrop-blur-sm rounded-2xl p-4 h-full">
            <div className="text-3xl font-bold text-white mb-2">{'<30s'}</div>
            <div className="text-gray-300">Response Time</div>
          </div>
          <div className="text-center bg-gray-900/30 backdrop-blur-sm rounded-2xl p-4 h-full">
            <div className="text-3xl font-bold text-white mb-2">5000+</div>
            <div className="text-gray-300">Protected SMEs</div>
          </div>
        </div>

        {/* Floating security indicators */}
        <div className="absolute top-1/4 left-4 md:left-8 z-30">
          <div className="animate-bounce bg-green-500/30 border border-green-500/50 rounded-full p-2 md:p-3 backdrop-blur-sm">
            <Shield className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
          </div>
        </div>
        <div className="absolute top-1/3 right-4 md:right-8 z-30">
          <div className="animate-bounce animation-delay-500 bg-blue-500/30 border border-blue-500/50 rounded-full p-2 md:p-3 backdrop-blur-sm">
            <Eye className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;