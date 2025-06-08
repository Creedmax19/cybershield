import React from 'react';
import { Shield, ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Don't Wait for an Attack to 
            <span className="block text-blue-400">Secure Your Business</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Every day you delay is another day hackers have to find vulnerabilities in your systems. 
            Deploy enterprise-grade AI security in the next 24 hours.
          </p>
        </div>

        {/* Urgency indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4">
            <div className="text-2xl font-bold text-red-400 mb-2">Every 11 seconds</div>
            <div className="text-gray-300 text-sm">A business falls victim to ransomware</div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4">
            <div className="text-2xl font-bold text-yellow-400 mb-2">$4.35M</div>
            <div className="text-gray-300 text-sm">Average cost of a data breach</div>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-4">
            <div className="text-2xl font-bold text-orange-400 mb-2">277 days</div>
            <div className="text-gray-300 text-sm">Average time to detect a breach</div>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 flex items-center shadow-lg">
            Start 30-Day Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="border border-gray-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
            Schedule Demo Call
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            <span>Setup in under 24 hours</span>
          </div>
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            <span>30-day money-back guarantee</span>
          </div>
        </div>

        {/* Final urgency message */}
        <div className="mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-white font-semibold mb-2">⚠️ Limited Time: Implementation Guarantee</p>
          <p className="text-gray-300 text-sm">
            Sign up this month and get guaranteed 24-hour deployment or your first month is free. 
            This offer ends when we reach capacity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;