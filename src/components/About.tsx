import { client } from '../config/client';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="aspect-[3/4] bg-background border border-gray-100 rounded shadow-premium p-6 flex flex-col justify-end">
              <div className="absolute top-0 right-0 p-8 text-primary/10 font-heading text-9xl leading-none rotate-180">
                "
              </div>
              
              <div className="relative z-10 space-y-6">
                <p className="font-heading italic text-xl md:text-2xl text-primary leading-relaxed">
                  "Financial decisions are deeply personal. The right insurance plan is not simply about selecting a policy — it is about understanding your responsibilities, goals and the people you want to protect."
                </p>
                
                <div className="pt-6 border-t border-primary/10">
                  <h4 className="font-heading font-semibold text-xl text-primary">{client.name}</h4>
                  <p className="text-sm text-charcoal-light uppercase tracking-wide mt-1">Insurance & Financial Advisory</p>
                </div>
              </div>
            </div>
            {/* Subtle background rectangle behind the card */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-accent/5 -z-10 rounded"></div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
              Guidance that begins with understanding you.
            </h2>
            
            <div className="space-y-6 text-charcoal-light leading-relaxed">
              <p>
                {client.name} is an {client.organization} advisor with a client-focused approach to life insurance, protection and long-term financial planning.
              </p>
              
              <div className="py-6 my-6 border-y border-gray-100">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Professional Recognition</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-charcoal">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                    {client.designation}
                  </li>
                  <li className="flex items-center text-charcoal">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                    {client.achievement}
                  </li>
                  <li className="flex items-center text-charcoal">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                    LIC Advisor
                  </li>
                </ul>
              </div>
              
              <p>
                Every individual's journey is different. By combining industry experience with a structured advisory process, we help clients navigate their options and choose plans that align with their distinct financial priorities.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
