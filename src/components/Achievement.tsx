import { client } from '../config/client';

export default function Achievement() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-2xl md:text-3xl font-heading font-medium text-white mb-12">
          Recognition built through professional performance
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-12">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
              M.D.R.T.
            </span>
            <span className="text-sm tracking-[0.2em] uppercase text-white/70">
              (USA)
            </span>
          </div>
          
          <div className="hidden md:block w-[1px] h-20 bg-white/10"></div>
          
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
              COT
            </span>
            <span className="text-sm tracking-[0.2em] uppercase text-white/70">
              Court of the Table
            </span>
          </div>
        </div>
        
        <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
          {client.name} is recognized as a COT (Court of the Table) agent and holds the M.D.R.T. (USA) credential shown in the supplied client profile.
        </p>
        
      </div>
    </section>
  );
}
