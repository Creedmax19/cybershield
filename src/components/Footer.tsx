import React from 'react';
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">CyberGuard AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Protecting small and medium enterprises with enterprise-grade AI cybersecurity 
              that's simple to deploy and manage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Security', 'Pricing', 'API Documentation', 'Integrations', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press', 'Blog', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3" />
                <span>hello@cyberguard.ai</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3" />
                <span>1-800-CYBER-AI</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Security Hotline</h4>
              <p className="text-sm text-gray-400 mb-2">24/7 Incident Response</p>
              <p className="text-red-400 font-semibold">1-800-BREACH-1</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Security
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Compliance
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 CyberGuard AI. All rights reserved.
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="bg-gray-800/50 border border-gray-700 rounded-full px-3 py-2">
            <span className="text-xs text-gray-400">SOC 2 Type II</span>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-full px-3 py-2">
            <span className="text-xs text-gray-400">ISO 27001</span>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-full px-3 py-2">
            <span className="text-xs text-gray-400">HIPAA Compliant</span>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-full px-3 py-2">
            <span className="text-xs text-gray-400">GDPR Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;