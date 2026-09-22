import { motion } from 'framer-motion';

export default function PlanningProcess() {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We begin by understanding your family responsibilities, financial goals and priorities.'
    },
    {
      num: '02',
      title: 'Assess',
      desc: 'We discuss your protection needs, time horizon and existing arrangements.'
    },
    {
      num: '03',
      title: 'Plan',
      desc: 'We explore relevant insurance and financial planning options based on your requirements.'
    },
    {
      num: '04',
      title: 'Review',
      desc: 'Life changes. Your financial protection should be reviewed as your goals and responsibilities evolve.'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
              Financial Planning Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">
            How We Help
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mt-16 md:mt-24">
          
          {/* Vertical connecting line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-accent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12 md:space-y-24 relative z-10">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              
              return (
                <div key={idx} className={`relative flex w-full justify-end ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[24px] md:left-1/2 top-10 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-accent rounded-full border-[3px] border-white shadow-sm z-20" />
                  
                  {/* Content Card */}
                  <motion.div 
                    className="w-[calc(100%-60px)] md:w-[45%] bg-white p-8 md:p-10 rounded-2xl shadow-premium border border-gray-50 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="font-heading font-bold text-accent text-lg mb-2">Step {step.num}</div>
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-charcoal-light leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
          
        </div>

      </div>
    </section>
  );
}
