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
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
              Financial Planning Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">
            How We Help
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-gray-200"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="w-12 h-12 bg-background border border-gray-200 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-accent group-hover:bg-white transition-all duration-300">
                <span className="font-heading font-semibold text-primary">{step.num}</span>
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                {step.title}
              </h3>
              
              <p className="text-charcoal-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
