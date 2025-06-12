import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github, ShieldCheck, Lock, Cpu } from 'lucide-react';

const Footer = () => {
  const complianceBadges = [
    { label: 'NIS2 Compliant', icon: ShieldCheck },
    { label: 'ISO 27001:2022', icon: Cpu },
    { label: 'GDPR Certified', icon: Lock },
    { label: 'BSI Standards', icon: Shield },
    { label: 'C5:2020', icon: ShieldCheck },
    { label: 'IT-SiG 2.0', icon: ShieldCheck }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-400">123 Example Street</p>
                <p className="text-gray-400">10115 Berlin, Germany</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Cybersecurity solutions for German and European companies,
              ensuring compliance with NIS2, GDPR, and German security standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
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
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Contact'].map((item) => (
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
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Example Street, 10115 Berlin, Germany</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@degshield.ai" className="text-gray-400 hover:text-white transition-colors duration-200">info@degshield.ai</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+4930123456789" className="text-gray-400 hover:text-white transition-colors duration-200">+49 30 123456789</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Compliance & Security</h4>
              <div className="grid grid-cols-2 gap-2">
                {complianceBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center text-xs text-gray-400">
                      <Icon className="h-3 w-3 mr-1 text-green-400" />
                      <span>{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 DEG Security GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Datenschutzerklärung
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Impressum
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                AGB
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Cookie-Richtlinie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;