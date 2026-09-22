import { client } from '../config/client';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative bg-background pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
                Personal Insurance & Financial Guidance
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-primary leading-[1.15] mb-6 text-balance">
              Protect What Matters.<br />
              <span className="italic font-normal text-primary-light">Plan What’s Ahead.</span>
            </h1>
            
            <p className="text-lg text-charcoal-light mb-10 max-w-xl leading-relaxed">
              Thoughtful insurance and financial planning for individuals, families and the future they are building.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 mb-12">
              <a 
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded text-white bg-primary hover:bg-primary-light transition-all shadow-premium hover:shadow-lg group"
              >
                Book a Consultation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col space-y-1 border-l-2 border-accent pl-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                {client.designation} &bull; {client.achievement}
              </span>
              <span className="text-xs text-charcoal-light">
                {client.organization}
              </span>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[4/5] rounded-t-full rounded-b-md overflow-hidden border-4 border-white shadow-premium">
              <img 
                src="/images/LIC.png" 
                alt={client.name}
                className="absolute inset-0 w-full h-full object-cover object-top" 
                onError={(e) => {
                  (e.currentTarget.style.display = 'none');
                  const parent = e.currentTarget.parentElement;
                  if(parent) parent.innerHTML = '<div class="absolute inset-0 bg-primary-light/10 flex items-center justify-center"><span class="text-primary/40 font-heading text-xl">Image Not Found</span></div>';
                }}
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent rounded-full -z-10"></div>
            <div className="absolute top-1/4 -right-8 w-24 h-24 border border-primary/20 rounded-full -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
