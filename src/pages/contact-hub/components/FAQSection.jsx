import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is your minimum order quantity for bulk purchases?',
      answer: `Our minimum order quantity varies by product and destination. For cardamom, we typically require a minimum of 50kg, while black pepper and cloves have a 100kg minimum. However, we're flexible for first-time buyers and can accommodate sample orders starting from 5kg. Contact us to discuss your specific requirements and we'll work out the best solution for your needs.`
    },
    {
      id: 2,
      question: 'How long does international shipping take?',
      answer: `International shipping times depend on your location and chosen shipping method. Standard sea freight typically takes 3-6 weeks, while air freight delivers within 5-10 business days. We provide full tracking information and handle all export documentation. Express shipping options are available for urgent orders. All shipments are fully insured and packaged to maintain product quality during transit.`
    },
    {
      id: 3,
      question: 'Do you provide quality certificates and lab reports?',
      answer: `Yes, we provide comprehensive quality documentation with every shipment. This includes organic certification, fair trade certificates, lab test reports for purity and quality parameters, phytosanitary certificates, and certificates of origin. All our products undergo rigorous testing for pesticide residues, moisture content, and quality grading. We maintain complete traceability from farm to export.`
    },
    {
      id: 4,
      question: 'Can I request product samples before placing a bulk order?',
      answer: `Absolutely! We encourage potential buyers to request samples before committing to bulk orders. Sample packs (typically 100-500g per spice) are available at nominal costs to cover packaging and shipping. For serious buyers, we often waive sample costs and deduct them from your first bulk order. Samples include the same quality documentation as full shipments so you can verify our standards.`
    },
    {
      id: 5,
      question: 'What payment methods do you accept for international orders?',
      answer: `We accept multiple payment methods for international transactions including bank wire transfers (T/T), Letters of Credit (L/C), and for established customers, we offer credit terms. Payment terms are typically 30% advance with balance against shipping documents, though we're flexible based on order size and customer relationship. All transactions are conducted in USD with transparent pricing and no hidden fees.`
    },
    {
      id: 6,
      question: 'How do you ensure consistent quality across shipments?',
      answer: `Quality consistency is our top priority. We maintain direct relationships with certified farmers, implement strict quality control at every stage from harvest to packaging, conduct regular lab testing for all batches, use standardized grading systems, and maintain climate-controlled storage facilities. Each shipment is accompanied by detailed quality reports, and we offer quality guarantees with our products. Our traceability system allows us to track every batch back to its source farm.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common inquiries about our products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs?.map((faq, index) => (
              <div
                key={faq?.id}
                className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors duration-300"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq?.question}
                  </span>
                  <Icon
                    name={openIndex === index ? 'ChevronUp' : 'ChevronDown'}
                    size={20}
                    color="var(--color-primary)"
                    className="flex-shrink-0 transition-transform duration-300"
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq?.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <Icon name="HelpCircle" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:info@spiceheritage.com"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                <Icon name="Mail" size={18} className="mr-2" />
                Email Us
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-success text-success-foreground rounded-lg hover:bg-success/90 transition-colors duration-300"
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
