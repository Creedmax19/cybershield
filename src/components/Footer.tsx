import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github, ShieldCheck, Lock, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const complianceBadges = [
    { 
      label: 'NIS 2', 
      icon: ShieldCheck,
      description: 'Fully compliant with NIS 2 Directive for cybersecurity and incident reporting',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'GDPR', 
      icon: Lock,
      description: 'EU General Data Protection Regulation compliant data processing',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      label: 'ISO 27001:2022', 
      icon: Cpu,
      description: 'Certified information security management system',
      color: 'from-green-500 to-green-600'
    },
    { 
      label: 'C5:2020', 
      icon: ShieldCheck,
      description: 'Cloud Computing Compliance Criteria Catalog',
      color: 'from-cyan-500 to-cyan-600'
    },
    { 
      label: 'BSI Standards', 
      icon: Shield,
      description: 'German Federal Office for Information Security standards',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      label: 'IT-SiG 2.0', 
      icon: ShieldCheck,
      description: 'German IT Security Act 2.0 compliance',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-start space-x-3 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">{t('footer.company.name')}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.about')}
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
            <h3 className="text-white font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t('header.features')}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-white transition-colors">{t('header.security')}</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Example Street, 10115 Berlin, Germany</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@degshield.com" className="text-gray-400 hover:text-white transition-colors duration-200">info@degshield.com</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+4930123456789" className="text-gray-400 hover:text-white transition-colors duration-200">+49 30 123456789</a>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-white font-semibold text-lg mb-4">{t('footer.certifications')}</h4>
              <div className="space-y-4">
                {complianceBadges.slice(0, 4).map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-start group">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-r ${badge.color} mr-3 flex-shrink-0`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{badge.label}</div>
                        <p className="text-gray-400 text-xs">{badge.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500 mb-3">{t('footer.additionalCompliance')}</p>
                <div className="flex flex-wrap gap-2">
                  {complianceBadges.slice(4).map((badge, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      <badge.icon className="h-3 w-3 mr-1" />
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {t('footer.company.name')}. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{t('footer.privacy')}</span>
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{t('footer.terms')}</span>
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;