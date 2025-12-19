import React from 'react';
import Icon from '../../../components/AppIcon';

const QualityPhilosophy = () => {
  const philosophyPillars = [
    {
      icon: "Leaf",
      title: "Organic First",
      description: "100% certified organic cultivation without synthetic pesticides or fertilizers. We believe in working with nature, not against it.",
      principles: [
        "Natural pest management",
        "Soil health preservation",
        "Biodiversity protection",
        "Chemical-free processing"
      ]
    },
    {
      icon: "Eye",
      title: "Traceability",
      description: "Complete transparency from farm to table. Every batch can be traced back to the specific farm and harvest date.",
      principles: [
        "Blockchain-enabled tracking",
        "Harvest documentation",
        "Quality test records",
        "Farmer identification"
      ]
    },
    {
      icon: "Award",
      title: "Quality Standards",
      description: "Rigorous testing and grading processes that exceed international standards for purity, flavor, and aroma.",
      principles: [
        "Multi-stage quality checks",
        "Laboratory testing",
        "Sensory evaluation",
        "Certification compliance"
      ]
    },
    {
      icon: "Heart",
      title: "Fair Trade",
      description: "Ethical sourcing that ensures farmers receive fair compensation and work in safe, dignified conditions.",
      principles: [
        "Premium pricing",
        "Long-term contracts",
        "Community development",
        "Worker welfare"
      ]
    }
  ];

  const qualityProcess = [
    {
      step: "01",
      title: "Farm Selection",
      description: "Partner farms undergo rigorous evaluation for organic practices and quality standards"
    },
    {
      step: "02",
      title: "Harvest Timing",
      description: "Spices harvested at peak maturity for optimal flavor and aroma compounds"
    },
    {
      step: "03",
      title: "Processing",
      description: "Traditional methods combined with modern hygiene standards for purity"
    },
    {
      step: "04",
      title: "Testing",
      description: "Comprehensive laboratory analysis for quality, purity, and safety parameters"
    },
    {
      step: "05",
      title: "Grading",
      description: "Expert sensory evaluation and classification according to international standards"
    },
    {
      step: "06",
      title: "Packaging",
      description: "Food-grade materials and controlled environment to preserve freshness"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Target" size={20} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">Our Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Quality Without Compromise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is built on four fundamental pillars that guide every decision we make
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {philosophyPillars?.map((pillar, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={pillar?.icon} size={28} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {pillar?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar?.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 pl-18">
                {pillar?.principles?.map((principle, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Icon name="CheckCircle2" size={18} className="text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Our Quality Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six rigorous stages ensure every spice meets our exacting standards before reaching your kitchen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityProcess?.map((process, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                      {process.step}
                    </div>
                    {index < qualityProcess?.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-6 w-0.5 h-20 bg-border"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {process.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" size={24} color="var(--color-primary-foreground)" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Quality Guarantee
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  We stand behind every shipment with our quality guarantee. If any product doesn't meet your expectations, we'll make it right—no questions asked. Our reputation is built on trust, and we're committed to maintaining the highest standards in every aspect of our business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPhilosophy;