export default function TrustStrip() {
  const values = [
    { num: '01', text: 'Personalized Guidance' },
    { num: '02', text: 'Protection Planning' },
    { num: '03', text: 'Retirement & Wealth Planning' },
    { num: '04', text: 'Long-Term Client Relationship' },
  ];

  return (
    <div className="bg-primary text-white py-12 border-b border-primary-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <p className="font-heading italic text-xl md:text-2xl text-accent">
            Guidance built around protection, planning and long-term confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.num} className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center group">
              <span className="text-3xl font-heading font-light text-primary-light group-hover:text-accent transition-colors duration-300 mb-2">
                {value.num}
              </span>
              <div className="h-px w-8 bg-accent/50 mb-4 group-hover:w-12 transition-all duration-300"></div>
              <h3 className="text-sm uppercase tracking-wider font-medium text-white/90">
                {value.text}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
