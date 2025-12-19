import React from 'react';
import Icon from '../../../components/AppIcon';

const Certifications = () => {
  const certifications = [
    {
      name: "USDA Organic",
      authority: "United States Department of Agriculture",
      year: "2012",
      icon: "Award",
      description: "Certified organic production and handling standards"
    },
    {
      name: "Fair Trade Certified",
      authority: "Fair Trade International",
      year: "2014",
      icon: "HandshakeIcon",
      description: "Ethical sourcing and fair farmer compensation"
    },
    {
      name: "ISO 9001:2015",
      authority: "International Organization for Standardization",
      year: "2016",
      icon: "Shield",
      description: "Quality management system certification"
    },
    {
      name: "FSSAI License",
      authority: "Food Safety and Standards Authority of India",
      year: "2010",
      icon: "CheckCircle2",
      description: "Food safety and quality standards compliance"
    },
    {
      name: "Export License",
      authority: "Spices Board of India",
      year: "2010",
      icon: "Globe",
      description: "Authorized spice exporter certification"
    },
    {
      name: "Rainforest Alliance",
      authority: "Rainforest Alliance Certified",
      year: "2018",
      icon: "Leaf",
      description: "Sustainable agriculture and environmental protection"
    }
  ];

  const qualityStandards = [
    {
      standard: "ASTA Standards",
      description: "American Spice Trade Association quality specifications",
      icon: "FileCheck"
    },
    {
      standard: "ESA Standards",
      description: "European Spice Association purity and quality guidelines",
      icon: "FileCheck"
    },
    {
      standard: "HACCP Certified",
      description: "Hazard Analysis Critical Control Point food safety system",
      icon: "FileCheck"
    },
    {
      standard: "GMP Certified",
      description: "Good Manufacturing Practices for food processing",
      icon: "FileCheck"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Award" size={20} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">Certifications</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Recognized Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality and sustainability is validated by leading international certification bodies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications?.map((cert, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={cert?.icon} size={28} color="var(--color-primary)" />
                </div>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  Since {cert?.year}
                </span>
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {cert?.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {cert?.authority}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Quality Standards Compliance
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We adhere to the most stringent international quality and safety standards in the spice industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {qualityStandards?.map((standard, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={standard?.icon} size={20} color="var(--color-success)" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{standard?.standard}</h4>
                  <p className="text-sm text-muted-foreground">{standard?.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" size={24} color="var(--color-primary-foreground)" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Request Certification Documents
                  </h4>
                  <p className="text-muted-foreground">
                    Need copies of our certifications for your records? We're happy to provide complete documentation.
                  </p>
                </div>
              </div>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap flex items-center space-x-2">
                <span>Download Certificates</span>
                <Icon name="Download" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;