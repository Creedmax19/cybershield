import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO, TechFlow Solutions",
      company: "125 employees",
      content: "CyberGuard AI saved us from a ransomware attack that could have shut us down for weeks. The ROI was immediate and the peace of mind is priceless.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      title: "CEO, Rodriguez Manufacturing",
      company: "85 employees",
      content: "We went from constant security worries to completely hands-off protection. The AI catches threats we never would have seen coming.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Lisa Thompson",
      title: "Operations Director, MedCare Plus",
      company: "200 employees",
      content: "HIPAA compliance was a nightmare before CyberGuard AI. Now we're not just compliant, we're ahead of the curve on security standards.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Kim",
      title: "IT Manager, Kim & Associates",
      company: "45 employees",
      content: "The setup took literally 20 minutes. We've blocked over 2,000 threats in the first month alone. This is enterprise security made simple.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-blue-400">5,000+ SMEs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of business leaders who sleep better knowing their company is protected 
            by the most advanced AI cybersecurity platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-blue-400">{testimonial.title}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-blue-400/30 mb-4" />
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Certified & Trusted</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl px-6 py-3">
              <span className="text-white font-semibold">SOC 2 Type II</span>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl px-6 py-3">
              <span className="text-white font-semibold">ISO 27001</span>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl px-6 py-3">
              <span className="text-white font-semibold">HIPAA Compliant</span>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl px-6 py-3">
              <span className="text-white font-semibold">GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;