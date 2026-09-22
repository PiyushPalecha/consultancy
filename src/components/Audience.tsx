import { motion } from 'framer-motion';

export default function Audience() {
  const profiles = [
    {
      title: 'Young Professionals',
      desc: 'Building financial protection and long-term goals.'
    },
    {
      title: 'Families',
      desc: 'Protecting dependents and planning major life milestones.'
    },
    {
      title: 'Parents',
      desc: 'Preparing for children\'s future education and financial needs.'
    },
    {
      title: 'Pre-Retirees & Retirees',
      desc: 'Planning retirement income and long-term financial security.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-12 text-center">
          Planning for every stage of life
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 border border-gray-100 rounded flex flex-col items-center text-center group hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                {profile.title}
              </h3>
              <p className="text-sm text-charcoal-light">
                {profile.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
