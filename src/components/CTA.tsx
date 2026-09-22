import { client } from '../config/client';
import { PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary mb-6">
          Your questions deserve a conversation.
        </h2>
        
        <p className="text-lg text-charcoal-light mb-10 leading-relaxed max-w-2xl mx-auto">
          Insurance decisions can feel complicated. A personal discussion can help you understand your options, compare what matters to you and make an informed decision.
        </p>
        
        <a 
          href={`tel:+91${client.phonePrimary}`}
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary hover:bg-primary-light rounded shadow-premium hover:shadow-lg transition-all group"
        >
          <PhoneCall size={20} className="mr-3 group-hover:animate-pulse" />
          Talk to {client.name}
        </a>
      </div>
    </section>
  );
}
