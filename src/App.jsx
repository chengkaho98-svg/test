import { useState } from 'react';
import Approach from './components/Approach';
import Capabilities from './components/Capabilities';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Navbar from './components/Navbar';

export default function App() {
  const [enquiry, setEnquiry] = useState('');

  return (
    <div className="min-h-screen bg-ink font-sans text-cream selection:bg-gold selection:text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:font-medium focus:text-ink focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Capabilities onSelectService={setEnquiry} />
        <Approach />
        <Metrics />
        <Clients />
        <Faq />
        <Contact enquiry={enquiry} onEnquiryChange={setEnquiry} />
      </main>

      <Footer />
    </div>
  );
}
