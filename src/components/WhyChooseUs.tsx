import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      title: 'Personal Attention',
      desc: 'One-to-one conversations focused on your financial priorities.'
    },
    {
      title: 'Goal-Based Thinking',
      desc: 'Insurance discussions begin with your needs and responsibilities, not just a product.'
    },
    {
      title: 'Clear Explanations',
      desc: 'Understand what a plan covers, how it works and what its important conditions are.'
    },
    {
      title: 'Long-Term Relationship',
      desc: 'Insurance is a long-term commitment. Ongoing communication matters.'
    },
    {
      title: 'Experienced Advisory Perspective',
      desc: 'Professional experience and documented industry recognition support a structured advisory approach.'
    },
    {
      title: 'Family-Centric Planning',
      desc: 'Protection planning considers the people and responsibilities that depend on you.'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-[#F9F8F6] border-t border-[rgba(11,31,51,0.05)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent font-light text-lg">│</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight font-heading font-semibold text-primary">
              Personal guidance for decisions that matter.
            </h2>
          </div>
          <div className="max-w-md lg:pb-2">
            <p className="text-base text-charcoal-light leading-relaxed">
              Insurance planning is more meaningful when it begins with understanding your priorities, responsibilities and long-term goals.
            </p>
          </div>
        </div>

        {/* Card Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, idx) => {
            const isFirst = idx === 0;
            const isEven = idx % 2 !== 0; // 0-indexed, so idx 1 is visually card 2 (even)
            
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className={`group relative flex flex-col p-8 md:p-10 rounded-[14px] bg-white border border-[rgba(11,31,51,0.08)] shadow-[0_10px_30px_rgba(11,31,51,0.04)] hover:shadow-[0_18px_40px_rgba(11,31,51,0.08)] hover:border-accent/30 hover:-translate-y-[5px] transition-all duration-400 ease-out overflow-hidden ${isFirst ? 'bg-[#FCFAF8]' : ''}`}
              >
                {/* Subtle Inner Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${isEven ? 'top left' : 'top right'}, rgba(184,155,94,0.05), transparent 50%)`
                  }}
                ></div>
                
                {/* Number & Accent Line */}
                <div className="mb-10 relative z-10 flex flex-col items-start">
                  <div className="font-heading text-5xl text-accent/50 group-hover:text-accent group-hover:-translate-y-[3px] transition-all duration-400 ease-out mb-4">
                    0{idx + 1}
                  </div>
                  <div className="h-[2px] w-6 bg-accent/40 group-hover:bg-accent group-hover:w-12 transition-all duration-500 ease-out"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 mt-auto">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-[16px] text-charcoal-light leading-[1.7]">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
