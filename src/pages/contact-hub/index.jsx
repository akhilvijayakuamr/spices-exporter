import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import InquiryForm from './components/InquiryForm';
import ConsultationBooking from './components/ConsultationBooking';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';

const ContactHub = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Spice Heritage | Get in Touch with Premium Spice Experts</title>
        <meta 
          name="description" 
          content="Contact Spice Heritage for bulk orders, samples, partnerships, and inquiries. Multiple communication channels including phone, email, WhatsApp, and consultation booking. Response within 24 hours." 
        />
        <meta 
          name="keywords" 
          content="contact spice supplier, bulk spice inquiry, spice export contact, premium spice consultation, spice partnership, sample request" 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ContactHero />
          <ContactMethods />
          <InquiryForm />
          <ConsultationBooking />
          <LocationMap />
          <FAQSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactHub;