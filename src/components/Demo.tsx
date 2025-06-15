import { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Shield, Eye, Zap, AlertTriangle, CheckCircle, Brain } from 'lucide-react';

type DemoStep = {
  title: string;
  description: string;
  status: string;
  details: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
};

type TranslatedStep = {
  title: string;
  description: string;
  status: string;
  details: string;
  color?: string;
  icon: string;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Eye,
  Zap,
  AlertTriangle,
  CheckCircle,
  Brain
};

const Demo = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Get translated steps with type safety
  const translatedSteps = t('demo.steps', { returnObjects: true }) as unknown as TranslatedStep[];
  
  // Map translated steps to DemoStep with icons and proper typing
  const demoSteps: DemoStep[] = translatedSteps.map((step, index) => {
    // Default color sequence if not provided in translation
    const colors = ["blue", "yellow", "red", "green"];
    const iconNames = ["Eye", "Brain", "Shield", "CheckCircle"];
    
    // Get the icon component, falling back to a default if not found
    const iconKey = step.icon || iconNames[index];
    const IconComponent = iconKey ? (iconMap[iconKey] || Shield) : Shield;
    
    // Create the step object with proper typing
    const demoStep: DemoStep = {
      title: step.title,
      description: step.description,
      status: step.status,
      details: step.details,
      color: step.color || colors[index % colors.length],
      icon: IconComponent
    };
    
    return demoStep;
  });
  
  // Toggle play/pause state with proper type annotation
  const togglePlayPause = (): void => {
    setIsPlaying(prev => !prev);
  };
  
  // Get play/pause aria label based on current state
  const getPlayPauseLabel = (): string => {
    return isPlaying ? t('demo.controls.pause') : t('demo.controls.play');
  };

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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-emerald-500/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <Trans i18nKey="demo.title" components={{ 1: <span className="text-blue-400" /> }} />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('demo.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Visualization */}
          <div className="relative">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">DEG Shield AI Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">{t('demo.status.live')}</span>
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
                        <button 
                          type="button"
                          onClick={togglePlayPause}
                          className="p-1 rounded-full hover:bg-white/10 transition-colors"
                          aria-label={getPlayPauseLabel()}
                        >
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </button>
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
                {t('demo.realTimeThreatResponse')}
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {t('demo.realTimeThreatResponseDescription')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Zap className="h-6 w-6 text-yellow-400 mr-3" />
                  <h4 className="text-lg font-semibold text-white">{t('demo.lightningFast')}</h4>
                </div>
                <p className="text-gray-300">
                  {t('demo.lightningFastDescription')}
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Brain className="h-6 w-6 text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold text-white">{t('demo.aiPoweredIntelligence')}</h4>
                </div>
                <p className="text-gray-300">
                  {t('demo.aiPoweredIntelligenceDescription')}
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