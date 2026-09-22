import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  const featuredServices = services.filter(s => s.isFeatured && !s.isB2B);
  const compactServices = services.filter(s => !s.isFeatured && !s.isB2B);
  const b2bService = services.find(s => s.isB2B);

  return (
    <section id="services" className="py-20 lg:py-32 bg-background border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
            Solutions for every stage of life.
          </h2>
          <p className="text-lg text-charcoal-light">
            From protecting your family today to preparing for tomorrow, choose a plan aligned with your goals.
          </p>
        </div>

        {/* Featured Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {featuredServices.map(service => (
            <ServiceCard 
              key={service.id} 
              {...service} 
              variant="featured" 
            />
          ))}
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 lg:mb-12">
          {compactServices.map(service => (
            <ServiceCard 
              key={service.id} 
              {...service} 
              variant="compact" 
            />
          ))}
        </div>

        {/* B2B Banner */}
        {b2bService && (
          <div className="grid grid-cols-1">
            <ServiceCard 
              {...b2bService} 
              variant="banner" 
            />
          </div>
        )}

      </div>
    </section>
  );
}
