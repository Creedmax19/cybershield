import { Brain, Zap, Eye, Lock, AlertTriangle, Cpu, Network, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Brain,
      title: t('features.items.0.title'),
      description: t('features.items.0.description')
    },
    {
      icon: Zap,
      title: t('features.items.1.title'),
      description: t('features.items.1.description')
    },
    {
      icon: Eye,
      title: t('features.items.2.title'),
      description: t('features.items.2.description')
    },
    {
      icon: Lock,
      title: t('features.items.3.title'),
      description: t('features.items.3.description')
    },
    {
      icon: AlertTriangle,
      title: t('features.items.4.title'),
      description: t('features.items.4.description')
    },
    {
      icon: Cpu,
      title: t('features.items.5.title'),
      description: t('features.items.5.description')
    },
    {
      icon: Network,
      title: t('features.items.6.title'),
      description: t('features.items.6.description')
    },
    {
      icon: Shield,
      title: t('features.items.7.title'),
      description: t('features.items.7.description')
    }
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden bg-gray-900">
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
        
        {/* Floating elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 text-sm font-medium rounded-full mb-4">
            {t('features.title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('features.subtitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deploy military-grade cybersecurity with the simplicity of a plug-and-play solution.
            No expertise required, full protection guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="h-full"
            >
              <div className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 h-full">
                {/* Light ray effect */}
                <div className="absolute top-0 right-0 w-40 h-40 -mr-16 -mt-16 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                      style={{
                        width: '120%',
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 12 - 30}deg) translateX(-50%)`,
                        transformOrigin: 'left center',
                        opacity: 0.6
                      }}
                    />
                  ))}
                </div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-500">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
            <span className="relative z-10">See All Features</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;