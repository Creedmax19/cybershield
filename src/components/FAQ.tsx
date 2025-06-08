import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can CyberGuard AI be deployed in my business?",
      answer: "CyberGuard AI can be fully deployed in under 24 hours. Our automated setup process handles 95% of the configuration, while our experts fine-tune the remaining settings for your specific business needs. Most clients are fully protected within 2-4 hours of signup."
    },
    {
      question: "Do I need a dedicated IT team to manage CyberGuard AI?",
      answer: "No. CyberGuard AI is designed to be completely autonomous. The AI handles threat detection, response, and system maintenance automatically. You'll receive clear, non-technical reports and alerts, but no day-to-day management is required from your team."
    },
    {
      question: "What happens if a threat is detected?",
      answer: "When a threat is detected, CyberGuard AI responds within 30 seconds with automatic containment and neutralization. You'll receive an immediate alert with a plain-English explanation of what happened and what actions were taken. Our team is also notified for any advanced threats requiring human analysis."
    },
    {
      question: "How does pricing work as my business grows?",
      answer: "Our pricing scales with your business size based on the number of endpoints (devices) you need to protect. You can easily upgrade or downgrade your plan at any time. We also offer volume discounts for larger deployments and custom enterprise pricing for 500+ endpoints."
    },
    {
      question: "Is my business data safe with CyberGuard AI?",
      answer: "Absolutely. CyberGuard AI uses zero-trust architecture and encrypts all data both in transit and at rest. We're SOC 2 Type II certified, ISO 27001 compliant, and GDPR ready. Your data never leaves your network unless you explicitly configure cloud backups."
    },
    {
      question: "What's included in the 30-day money-back guarantee?",
      answer: "If you're not completely satisfied within 30 days, we'll provide a full refund, no questions asked. We'll also help you migrate to another solution if needed. Our goal is your complete satisfaction and security, not just a sale."
    },
    {
      question: "Can CyberGuard AI integrate with my existing systems?",
      answer: "Yes. CyberGuard AI integrates with virtually all business applications, cloud services, and existing security tools. Our platform includes pre-built integrations for Office 365, Google Workspace, AWS, Azure, Salesforce, and hundreds of other business applications."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include 24/7 technical support via chat and email. Professional and Enterprise plans include phone support. Enterprise clients get a dedicated security manager and quarterly security reviews. We also provide comprehensive onboarding and training for your team."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to the most common questions about CyberGuard AI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-blue-400 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-blue-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-200">
            Contact Our Security Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;