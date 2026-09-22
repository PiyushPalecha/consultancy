import { client } from '../config/client';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  const isPlaceholder = client.googleMapsUrl === "ADD CLIENT GOOGLE MAPS LOCATION" || client.googleMapsUrl === "";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-2">
              Visit / Connect With Us
            </h2>
            <p className="text-charcoal-light flex items-center">
              <MapPin size={18} className="mr-2 text-accent" />
              {isPlaceholder ? "Office Address to be updated" : client.address}
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] bg-background rounded overflow-hidden border border-gray-200 relative">
          {isPlaceholder ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-background">
              <MapPin size={48} className="text-gray-300 mb-4" />
              <p className="text-charcoal font-medium mb-2">Map Location Pending</p>
              <p className="text-sm text-charcoal-light max-w-md">
                Configure the <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">googleMapsUrl</code> in the client configuration to display the interactive map here.
              </p>
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

      </div>
    </section>
  );
}
