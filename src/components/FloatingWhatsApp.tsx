import { MessageCircle } from 'lucide-react';
import { client } from '../config/client';

export default function FloatingWhatsApp() {
  const message = encodeURIComponent("Hello Bhajan Ji, I would like to discuss insurance and financial planning options.");
  const waUrl = `https://wa.me/${client.whatsapp}?text=${message}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-sm group-hover:ml-2 group-hover:mr-1">
        Chat with us
      </span>
    </a>
  );
}
