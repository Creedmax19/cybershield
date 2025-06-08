import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "99",
      period: "month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 25 endpoints",
        "24/7 AI monitoring",
        "Basic threat detection",
        "Email support",
        "Monthly security reports",
        "Malware protection",
        "Basic firewall"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "299",
      period: "month",
      description: "Advanced protection for growing businesses",
      features: [
        "Up to 100 endpoints",
        "Advanced AI threat detection",
        "Real-time incident response",
        "24/7 phone support",
        "Weekly security reports",
        "Advanced threat hunting",
        "Network security",
        "Compliance dashboards",
        "Priority support"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "499",
      period: "month",
      description: "Complete security for established businesses",
      features: [
        "Unlimited endpoints",
        "AI + human analyst team",
        "Instant incident response",
        "Dedicated security manager",
        "Daily security briefings",
        "Advanced threat intelligence",
        "Zero-trust architecture",
        "Custom compliance",
        "Penetration testing",
        "White-glove onboarding"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transparent Pricing, <span className="text-blue-400">Maximum Protection</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business size. All plans include our core AI protection 
            with 30-day money-back guarantee.
          </p>
          
          {/* ROI Calculator */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-2">Average ROI: 4,200%</h3>
            <p className="text-gray-300 text-sm">
              Our customers save an average of $2.5M annually compared to the cost of a single breach
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500/20' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500'
                    : 'border border-gray-600 text-white hover:bg-gray-700'
                }`}>
                  {plan.cta}
                </button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-yellow-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">Implementation Guarantee</h3>
            </div>
            <p className="text-gray-300 mb-6">
              We guarantee full deployment within 24 hours or your first month is free. 
              Our team handles 100% of the setup process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">24h</div>
                <div className="text-gray-400">Setup Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-2">30 Days</div>
                <div className="text-gray-400">Money Back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;