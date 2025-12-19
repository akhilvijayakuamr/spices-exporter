import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SustainabilityCommitment = () => {
  const initiatives = [
  {
    icon: "Droplets",
    title: "Water Conservation",
    description: "Implementing drip irrigation and rainwater harvesting systems across partner farms",
    impact: "40% reduction in water usage",
    color: "primary"
  },
  {
    icon: "Trees",
    title: "Biodiversity Protection",
    description: "Maintaining natural forest corridors and promoting mixed cultivation practices",
    impact: "15+ native species protected",
    color: "success"
  },
  {
    icon: "Recycle",
    title: "Zero Waste",
    description: "Composting organic waste and using biodegradable packaging materials",
    impact: "95% waste diversion rate",
    color: "accent"
  },
  {
    icon: "Wind",
    title: "Carbon Neutral",
    description: "Offsetting emissions through reforestation and renewable energy investments",
    impact: "100% carbon neutral shipping",
    color: "secondary"
  }];


  const environmentalImpact = [
  {
    metric: "500+",
    label: "Trees Planted",
    icon: "TreePine"
  },
  {
    metric: "75%",
    label: "Renewable Energy",
    icon: "Zap"
  },
  {
    metric: "30 Acres",
    label: "Forest Restored",
    icon: "Sprout"
  },
  {
    metric: "Zero",
    label: "Chemical Runoff",
    icon: "Shield"
  }];


  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success"
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Leaf" size={20} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">Sustainability</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Committed to Our Planet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a sustainable future through responsible farming practices and environmental stewardship
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            {initiatives?.map((initiative, index) =>
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">

                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses?.[initiative?.color]}`}>
                    <Icon name={initiative?.icon} size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {initiative?.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {initiative?.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-success/10 px-3 py-1 rounded-full">
                      <Icon name="TrendingUp" size={14} className="text-success" />
                      <span className="text-sm font-medium text-success">{initiative?.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1bf0e8fb6-1764750721254.png"
                alt="Lush green sustainable spice plantation with diverse vegetation, natural water streams, and traditional farming methods in Kerala hills"
                className="w-full h-[600px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border">
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Environmental Impact
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {environmentalImpact?.map((item, index) =>
                    <div key={index} className="text-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Icon name={item?.icon} size={20} color="var(--color-primary)" />
                        </div>
                        <p className="text-2xl font-semibold text-foreground">{item?.metric}</p>
                        <p className="text-xs text-muted-foreground">{item?.label}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                Our Sustainability Roadmap
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={18} color="var(--color-primary-foreground)" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">2025 Goals</h4>
                    <p className="text-sm text-muted-foreground">Achieve 100% renewable energy across all operations and expand organic certification to all partner farms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Target" size={18} color="var(--color-primary-foreground)" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">2027 Vision</h4>
                    <p className="text-sm text-muted-foreground">Restore 100 acres of degraded forest land and establish community-based conservation programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Sparkles" size={18} color="var(--color-primary-foreground)" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">2030 Commitment</h4>
                    <p className="text-sm text-muted-foreground">Become a net-positive environmental contributor through carbon sequestration and ecosystem restoration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={24} color="var(--color-primary-foreground)" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Community Impact
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our sustainability initiatives extend beyond environmental protection to include community development, education, and economic empowerment for farming families.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-sm font-medium text-foreground">Farmer Training Programs</span>
                  <span className="text-sm font-semibold text-primary">200+ participants</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-sm font-medium text-foreground">School Scholarships</span>
                  <span className="text-sm font-semibold text-primary">50+ students</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-sm font-medium text-foreground">Healthcare Access</span>
                  <span className="text-sm font-semibold text-primary">500+ families</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SustainabilityCommitment;