import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  cta: string;
  icon: React.ElementType;
  variant?: 'featured' | 'compact' | 'banner';
}

export default function ServiceCard({ title, description, features, cta, icon: Icon, variant = 'compact' }: ServiceCardProps) {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (variant === 'featured') {
    return (
      <div className="group bg-white p-8 md:p-10 border border-gray-100 rounded-sm shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        
        <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:text-accent transition-all duration-300">
          <Icon size={26} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl font-heading font-semibold text-primary mb-4 pr-4">{title}</h3>
        <p className="text-charcoal-light mb-8 leading-relaxed flex-grow">{description}</p>
        
        <div className="mt-auto">
          <ul className="space-y-2.5">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-charcoal">
                <span className="text-accent mr-2 mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className="col-span-full group bg-primary p-8 md:p-12 rounded-sm relative overflow-hidden text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Icon size={120} strokeWidth={1} />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-2xl font-heading font-semibold text-white mb-3">{title}</h3>
          <p className="text-white/80 mb-6">{description}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
             {features.map((feature, idx) => (
              <span key={idx} className="text-sm text-white/70 flex items-center">
                <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 shrink-0">
          <button onClick={handleScrollToContact} className="inline-flex items-center px-6 py-3 bg-white text-primary rounded text-sm font-medium hover:bg-background transition-colors cursor-pointer">
            {cta}
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-background p-6 md:p-8 rounded-sm hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center mb-5">
        <div className="w-10 h-10 bg-white group-hover:bg-background rounded-full flex items-center justify-center mr-4 text-primary transition-colors">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <h3 className="font-heading font-semibold text-primary leading-tight flex-1">{title}</h3>
      </div>
      
      <p className="text-sm text-charcoal-light mb-6 flex-grow">{description}</p>
      
      <button onClick={handleScrollToContact} className="inline-flex items-center text-primary text-xs font-semibold uppercase tracking-wider hover:text-accent transition-colors mt-auto group/link cursor-pointer">
        {cta}
        <ArrowRight size={14} className="ml-1.5 group-hover/link:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
