
import TopContactBar from './components/TopContactBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Services from './components/Services';
import PlanningProcess from './components/PlanningProcess';
import WhyChooseUs from './components/WhyChooseUs';
import Audience from './components/Audience';
import Achievement from './components/Achievement';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-background">
      <TopContactBar />
      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <PlanningProcess />
        <WhyChooseUs />
        <Audience />
        <Achievement />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
