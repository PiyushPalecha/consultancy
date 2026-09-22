import { Phone, Mail } from 'lucide-react';
import { client } from '../config/client';

export default function TopContactBar() {
  return (
    <div className="bg-primary text-white/80 py-2 text-xs font-body hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <span className="tracking-wide uppercase text-[10px] font-semibold text-accent/90">
            Personal Financial & Insurance Advisory
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <a href={`tel:+91${client.phonePrimary}`} className="flex items-center hover:text-white transition-colors duration-200">
            <Phone size={12} className="mr-1.5 text-accent" />
            {client.phonePrimary}
          </a>
          <a href={`mailto:${client.email}`} className="flex items-center hover:text-white transition-colors duration-200">
            <Mail size={12} className="mr-1.5 text-accent" />
            {client.email}
          </a>
        </div>
      </div>
    </div>
  );
}
