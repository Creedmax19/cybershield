import { Brain, Zap, Eye, Lock, AlertTriangle, Cpu, Network, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms identify and neutralize threats in real-time, learning from global attack patterns."
    },
    {
      icon: Zap,
      title: "Instant Response System",
      description: "Automated incident response within 30 seconds. Block attacks before they can cause damage to your systems."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous surveillance of your network, endpoints, and cloud infrastructure with zero downtime."
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Implement enterprise-grade zero-trust security policies with intelligent access controls."
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Real-time threat intelligence from global cybersecurity networks and government agencies."
    },
    {
      icon: Cpu,
      title: "Behavioral Analysis",
      description: "Advanced user and entity behavior analytics to detect insider threats and anomalous activities."
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Comprehensive network protection with intrusion detection and prevention systems."
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Built-in compliance frameworks for GDPR, HIPAA, SOC 2, and other industry standards."
    }
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/002/256/757/non_2x/futuristic-technology-background-vector.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 text-sm font-medium rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise Security, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SME Simple</span>
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
              <div className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
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