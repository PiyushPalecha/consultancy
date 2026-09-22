import { useState } from 'react';
import { client } from '../config/client';
import { Phone, Mail, MessageCircle } from 'lucide-react';

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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 bg-white rounded shadow-premium overflow-hidden">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 bg-primary text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-2">{client.name}</h3>
              <p className="text-accent text-sm tracking-widest uppercase mb-1">{client.designation}</p>
              <p className="text-white/80 text-sm mb-2">{client.achievement}</p>
              <p className="text-white/60 text-xs uppercase tracking-wide pb-8 border-b border-white/10 mb-8">{client.organization}</p>
              
              <div className="space-y-6">
                <a href={`tel:+91${client.phonePrimary}`} className="flex items-start group">
                  <Phone size={20} className="text-accent mt-1 mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-white/60 mb-0.5">Primary Phone</p>
                    <p className="font-medium">{client.phonePrimary}</p>
                  </div>
                </a>
                
                <a href={`tel:+91${client.phoneSecondary}`} className="flex items-start group">
                  <Phone size={20} className="text-accent mt-1 mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-white/60 mb-0.5">Secondary Phone</p>
                    <p className="font-medium">{client.phoneSecondary}</p>
                  </div>
                </a>
                
                <a href={`mailto:${client.email}`} className="flex items-start group">
                  <Mail size={20} className="text-accent mt-1 mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-white/60 mb-0.5">Email</p>
                    <p className="font-medium">{client.email}</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-4">
              <a href={`https://wa.me/${client.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-white/20 rounded text-sm hover:bg-[#25D366] hover:border-[#25D366] transition-colors">
                <MessageCircle size={16} className="mr-2" /> WhatsApp
              </a>
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="lg:col-span-7 p-10 md:p-14">
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
