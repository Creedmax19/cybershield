import React from 'react';
import { Shield, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const Security = () => {
  const threatTypes = [
    "Malware & Ransomware",
    "Phishing Attacks",
    "DDoS Attacks",
    "Insider Threats",
    "Zero-Day Exploits",
    "Social Engineering"
  ];

  return (
    <section id="security" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Security dashboard mockup */}
          <div className="relative">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Security Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Active Protection</span>
                </div>
              </div>

              {/* Threat detection panel */}
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <div>
                    <div className="text-green-400 font-medium">Blocked Malware Attempt</div>
                    <div className="text-gray-400 text-sm">workstation-05 • 2 minutes ago</div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <div>
                    <div className="text-yellow-400 font-medium">Suspicious Login Detected</div>
                    <div className="text-gray-400 text-sm">admin@company.com • 5 minutes ago</div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-4 flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <div className="text-blue-400 font-medium">Security Score Improved</div>
                    <div className="text-gray-400 text-sm">Network hardening completed</div>
                  </div>
                </div>
              </div>

              {/* Security metrics */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">847</div>
                  <div className="text-gray-400 text-sm">Threats Blocked</div>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">98.7%</div>
                  <div className="text-gray-400 text-sm">Security Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">
                Stop Cyber Threats <span className="text-blue-400">Before They Start</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Small businesses are 3x more likely to be targeted by cybercriminals than large enterprises. 
                Don't become a statistic.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Threats We Neutralize:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {threatTypes.map((threat, index) => (
                  <div key={index} className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{threat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-white mb-2">The Cost of Doing Nothing</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Average ransomware payment: $812,000</li>
                <li>• Business downtime: 22 days average</li>
                <li>• Customer trust lost: 60% never return</li>
                <li>• Compliance fines: Up to $4.35M per breach</li>
              </ul>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 flex items-center">
              Get Protection Now
              <Shield className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;