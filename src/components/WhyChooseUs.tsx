import { motion } from 'framer-motion';

export default function WhyChooseUs() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
            Why clients choose personal guidance
          </h2>
          <div className="w-24 h-[1px] bg-accent mx-auto"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm hover:shadow-xl hover:scale-105 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group/card"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-primary-light font-heading text-4xl opacity-20 mb-4 transition-all duration-300 group-hover/card:opacity-40 group-hover/card:translate-x-2 relative z-10">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wide">
                {reason.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
