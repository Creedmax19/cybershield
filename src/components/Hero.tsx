import { Shield, Zap, Eye, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2020/03/12/33577-397143942_tiny.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-emerald-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">AI-Powered Cybersecurity</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Protect Your Business with
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent block">
              Intelligent AI Security
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy enterprise-grade cybersecurity in minutes. Our AI agent continuously monitors, 
            detects, and neutralizes threats while you focus on growing your business.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 flex items-center shadow-xl backdrop-blur-sm">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="border border-gray-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800/50 transition-all duration-200 backdrop-blur-sm">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center bg-gray-900/30 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Threat Detection</div>
          </div>
          <div className="text-center bg-gray-900/30 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-3xl font-bold text-white mb-2">{'<30s'}</div>
            <div className="text-gray-300">Response Time</div>
          </div>
          <div className="text-center bg-gray-900/30 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-3xl font-bold text-white mb-2">5000+</div>
            <div className="text-gray-300">Protected SMEs</div>
          </div>
        </div>

        {/* Floating security indicators */}
        <div className="absolute top-20 left-10 z-30">
          <div className="animate-bounce bg-green-500/30 border border-green-500/50 rounded-full p-3 backdrop-blur-sm">
            <Shield className="h-6 w-6 text-green-400" />
          </div>
        </div>
        <div className="absolute top-32 right-16 z-30">
          <div className="animate-bounce animation-delay-500 bg-blue-500/30 border border-blue-500/50 rounded-full p-3 backdrop-blur-sm">
            <Eye className="h-6 w-6 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;