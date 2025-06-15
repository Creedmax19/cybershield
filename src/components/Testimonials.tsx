import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: t('testimonials.items.0.name'),
      title: t('testimonials.items.0.title'),
      company: t('testimonials.items.0.company'),
      content: t('testimonials.items.0.content'),
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: t('testimonials.items.1.name'),
      title: t('testimonials.items.1.title'),
      company: t('testimonials.items.1.company'),
      content: t('testimonials.items.1.content'),
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: t('testimonials.items.2.name'),
      title: t('testimonials.items.2.title'),
      company: t('testimonials.items.2.company'),
      content: t('testimonials.items.2.content'),
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: t('testimonials.items.3.name'),
      title: t('testimonials.items.3.title'),
      company: t('testimonials.items.3.company'),
      content: t('testimonials.items.3.content'),
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-gray-900">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          {t('testimonials.title')}
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
          {t('testimonials.subtitle')}
        </p>
      </div>
      
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/60 to-gray-900/85"></div>
        
        {/* Grid Container */}
        <div className="absolute inset-0">
          {/* Vertical Lines */}
          <div className="absolute inset-0 flex justify-between">
            {[...Array(25)].map((_, i) => (
              <div key={`v-${i}`} className="h-full w-px bg-blue-500/10"></div>
            ))}
          </div>
          
          {/* Horizontal Lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(25)].map((_, i) => (
              <div key={`h-${i}`} className="w-full h-px bg-blue-500/10"></div>
            ))}
          </div>
        </div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-moveRight"></div>
          <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-moveDown"></div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/20 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-blue-500/20 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-blue-500/20 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/20 rounded-br-lg"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
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
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
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