import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, Zap, Eye, Brain, Play, Pause } from 'lucide-react';

type DemoStep = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  status: string;
  details: string;
  color: string;
};

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const demoSteps: DemoStep[] = [
    {
      title: "Threat Detection",
      description: "AI identifies suspicious network activity",
      icon: Eye,
      status: "scanning",
      details: "Analyzing 2.3M network packets per second",
      color: "blue"
    },
    {
      title: "Threat Analysis",
      description: "Advanced ML algorithms classify the threat",
      icon: Brain,
      status: "analyzing",
      details: "Malware signature detected: Trojan.Win32.Agent",
      color: "yellow"
    },
    {
      title: "Instant Response",
      description: "Automated containment and neutralization",
      icon: Shield,
      status: "blocking",
      details: "Threat isolated and quarantined in 0.3 seconds",
      color: "red"
    },
    {
      title: "Threat Neutralized",
      description: "System secured, incident logged",
      icon: CheckCircle,
      status: "secured",
      details: "Network integrity restored, zero data loss",
      color: "green"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, demoSteps.length]);

  const getStatusColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500 to-cyan-400",
      yellow: "from-yellow-500 to-orange-400",
      red: "from-red-500 to-pink-400",
      green: "from-green-500 to-emerald-400"
    };
    return colors[color] || '';
  };

  const getStatusBg = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-500/10 border-blue-500/30",
      yellow: "bg-yellow-500/10 border-yellow-500/30",
      red: "bg-red-500/10 border-red-500/30",
      green: "bg-green-500/10 border-green-500/30"
    };
    return colors[color] || '';
  };
  
  // Get current step data
  const currentStepData = demoSteps[currentStep];

  return (
    <section id="demo" className="relative py-20 overflow-hidden bg-gray-900">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-blue-900/40"></div>
        {/* Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
      </div>
      <style jsx>{`
        .bg-grid {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
        }
        @media (max-width: 640px) {
          .bg-grid {
            background-size: 30px 30px;
          }
        }
      `}</style>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            See CyberGuard AI <span className="text-blue-400">In Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Watch our AI agent detect, analyze, and neutralize a real cyber threat in under 30 seconds.
            This is what happens behind the scenes to keep your business safe.
          </p>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
              isPlaying 
                ? 'bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30' 
                : 'bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30'
            }`}
          >
            {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
            {isPlaying ? 'Pause Demo' : 'Play Demo'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Visualization */}
          <div className="relative">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">CyberGuard AI Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Live Protection</span>
                </div>
              </div>

              {/* Current Step Display */}
              <div className={`${getStatusBg(currentStepData.color)} border rounded-2xl p-6 mb-6 transition-all duration-500`}>
                <div className="flex items-center mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${getStatusColor(currentStepData.color)} rounded-full mr-4`}>
                    <currentStepData.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{currentStepData.title}</h4>
                    <p className="text-gray-300">{currentStepData.description}</p>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-3">
                  <p className="text-sm text-gray-300 font-mono">{demoSteps[currentStep].details}</p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="space-y-3">
                {demoSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-all duration-300 ${
                        index <= currentStep 
                          ? `bg-gradient-to-r ${getStatusColor(step.color)}` 
                          : 'bg-gray-700'
                      }`}>
                        <StepIcon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium transition-colors duration-300 ${
                          index <= currentStep ? 'text-white' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </div>
                      </div>
                      {index <= currentStep && (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Demo Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Real-Time Threat Response
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                This simulation shows how CyberGuard AI handles a typical malware attack. 
                In reality, this entire process happens automatically without any human intervention.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Zap className="h-6 w-6 text-yellow-400 mr-3" />
                  <h4 className="text-lg font-semibold text-white">Lightning Fast</h4>
                </div>
                <p className="text-gray-300">
                  Average response time of 0.3 seconds from detection to neutralization. 
                  Faster than any human security team could ever respond.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Brain className="h-6 w-6 text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold text-white">AI-Powered Intelligence</h4>
                </div>
                <p className="text-gray-300">
                  Machine learning models trained on millions of threat patterns 
                  ensure 99.9% accuracy in threat identification.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-green-400 mr-3" />
                  <h4 className="text-lg font-semibold text-white">Zero Downtime</h4>
                </div>
                <p className="text-gray-300">
                  Threats are contained and neutralized without disrupting 
                  your business operations or user experience.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 shadow-xl">
                Experience Full Demo
              </button>
            </div>
          </div>
        </div>

        {/* Demo Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">0.3s</div>
            <div className="text-gray-300">Average Response Time</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Threat Detection Rate</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">Continuous Monitoring</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">0</div>
            <div className="text-gray-300">False Positives</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;