import { client } from '../config/client';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Or statically 2026 as per prompt if needed
  
  return (
    <footer className="bg-primary text-white pt-20 pb-8 border-t-[6px] border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Identity */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6 bg-white p-2 rounded">
              <img src="/images/Logo.png" alt={client.name} className="h-14 w-auto object-contain" />
            </a>
            <h4 className="font-heading text-lg font-semibold mb-1">{client.name}</h4>
            <p className="text-accent text-xs tracking-widest uppercase mb-1">{client.designation}</p>
            <p className="text-white/60 text-xs uppercase tracking-wide">LIC Insurance Advisor</p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Why Choose Us', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-').replace('home', 'home')}`} 
                    className="text-white/70 hover:text-white hover:pl-1 transition-all text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-white/70">
                <Phone size={16} className="mr-3 mt-0.5 text-accent shrink-0" />
                <div>
                  <a href={`tel:+91${client.phonePrimary}`} className="block hover:text-white transition-colors">{client.phonePrimary}</a>
                  <a href={`tel:+91${client.phoneSecondary}`} className="block hover:text-white transition-colors">{client.phoneSecondary}</a>
                </div>
              </li>
              <li className="flex items-start text-sm text-white/70">
                <Mail size={16} className="mr-3 mt-0.5 text-accent shrink-0" />
                <a href={`mailto:${client.email}`} className="hover:text-white transition-colors">{client.email}</a>
              </li>
              <li className="flex items-start text-sm text-white/70">
                <MapPin size={16} className="mr-3 mt-0.5 text-accent shrink-0" />
                <span>
                  {client.address === "ADD CLIENT GOOGLE MAPS LOCATION" || !client.address 
                    ? "Address available upon consultation request." 
                    : client.address}
                </span>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Disclaimers & Copyright */}
        <div className="pt-8 border-t border-white/10 text-xs text-white/50 leading-relaxed">
          <p className="mb-4">
            Insurance solutions are subject to applicable policy terms, conditions, exclusions and regulatory guidelines. Information on this website is for general informational purposes and does not constitute a guarantee of returns or benefits.
          </p>
          <p className="mb-6">
            This website represents the personal advisory practice of {client.name}. {client.organization} (LIC) should not be represented as if this website is the official corporate website of Life Insurance Corporation of India.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5">
            <p>&copy; {currentYear} {client.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Trust & Protection</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
