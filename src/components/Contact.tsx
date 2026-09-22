import { useState } from 'react';
import { client } from '../config/client';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      const message = `Hello Bhajan Ji,\n\nI am reaching out from your website.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'Not provided'}\n*Interested In:* ${formData.interest}\n\n*Message:*\n${formData.message}`;
      
      const waUrl = `https://wa.me/${client.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      
      setFormData({ name: '', phone: '', email: '', interest: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
            Let's discuss your financial priorities.
          </h2>
          <p className="text-lg text-charcoal-light">
            Have a question about protection, savings, retirement or your existing policy? Start with a conversation.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12">
            <a href={`tel:+91${client.phonePrimary}`} className="flex items-center text-charcoal hover:text-primary transition-colors">
              <Phone size={20} className="text-accent mr-3" />
              <span className="font-medium">{client.phonePrimary}</span>
            </a>
            <a href={`mailto:${client.email}`} className="flex items-center text-charcoal hover:text-primary transition-colors">
              <Mail size={20} className="text-accent mr-3" />
              <span className="font-medium">{client.email}</span>
            </a>
            <a href={`https://wa.me/${client.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-charcoal hover:text-[#25D366] transition-colors">
              <MessageCircle size={20} className="text-accent hover:text-[#25D366] mr-3" />
              <span className="font-medium">WhatsApp Us</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Map */}
          <div className="lg:col-span-5 bg-white rounded-2xl shadow-premium overflow-hidden flex flex-col relative min-h-[400px]">
            {client.googleMapsUrl === "ADD CLIENT GOOGLE MAPS LOCATION" || client.googleMapsUrl === "" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-background">
                <MapPin size={48} className="text-gray-300 mb-4" />
                <p className="text-charcoal font-medium mb-2">Map Location Pending</p>
              </div>
            ) : (
              <iframe 
                src={client.googleMapsUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="absolute inset-0"
              ></iframe>
            )}
          </div>
          
          {/* Right: Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-premium p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-primary mb-1.5">Interested In</label>
                  <select 
                    id="interest" 
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-gray-200 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-charcoal appearance-none"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="Term Protection">Term Protection</option>
                    <option value="Savings / Endowment">Savings / Endowment</option>
                    <option value="Retirement / Pension">Retirement / Pension</option>
                    <option value="Child Future Planning">Child Future Planning</option>
                    <option value="Existing Policy Review">Existing Policy Review</option>
                    <option value="Group Insurance">Group Insurance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-gray-200 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3.5 bg-primary text-white rounded font-medium hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Request a Consultation'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-800 rounded text-sm">
                  Thank you for your message. We will get back to you shortly.
                </div>
              )}
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
