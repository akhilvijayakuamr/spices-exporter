import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FarmingPartners = () => {
  const partners = [
  {
    id: 1,
    name: "Suresh Menon",
    location: "Idukki, Kerala",
    specialty: "Organic Cardamom",
    experience: "35 years",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c71fc28e-1763295834392.png",
    imageAlt: "Elderly Indian farmer with gray hair and warm smile wearing traditional white shirt standing in lush green cardamom plantation",
    story: "Third-generation cardamom farmer maintaining traditional cultivation methods while embracing organic certification standards."
  },
  {
    id: 2,
    name: "Lakshmi Nair",
    location: "Wayanad, Kerala",
    specialty: "Black Pepper",
    experience: "28 years",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1991a1fec-1763300922786.png",
    imageAlt: "Middle-aged Indian woman farmer wearing colorful saree and bright smile holding black pepper vines in traditional spice garden",
    story: "Pioneer in sustainable pepper cultivation, leading women farmers' cooperative focused on quality and environmental conservation."
  },
  {
    id: 3,
    name: "Arun Kumar",
    location: "Coorg, Karnataka",
    specialty: "Premium Cloves",
    experience: "22 years",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11640e478-1763295121216.png",
    imageAlt: "Young Indian farmer in casual shirt with confident expression standing near clove trees with mountains in background",
    story: "Young innovator combining ancestral knowledge with modern agricultural techniques to produce award-winning organic cloves."
  },
  {
    id: 4,
    name: "Radha Krishnan",
    location: "Munnar, Kerala",
    specialty: "Turmeric & Ginger",
    experience: "30 years",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_127142f62-1763299279133.png",
    imageAlt: "Senior Indian farmer wearing traditional turban and white kurta with gentle smile standing in golden turmeric field at sunset",
    story: "Expert in rhizome cultivation, specializing in high-curcumin turmeric varieties and premium ginger for international markets."
  }];


  const partnershipBenefits = [
  {
    icon: "HandshakeIcon",
    title: "Fair Trade Pricing",
    description: "Guaranteed premium prices above market rates"
  },
  {
    icon: "GraduationCap",
    title: "Training & Support",
    description: "Continuous education in organic practices"
  },
  {
    icon: "Shield",
    title: "Quality Assurance",
    description: "Technical support and quality testing"
  },
  {
    icon: "TrendingUp",
    title: "Market Access",
    description: "Direct connection to global buyers"
  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Users" size={20} color="var(--color-secondary)" />
            <span className="text-sm font-medium text-secondary">Our Network</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Trusted Farming Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building lasting relationships with dedicated farmers who share our commitment to quality, sustainability, and traditional cultivation methods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners?.map((partner) =>
          <div
            key={partner?.id}
            className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">

              <div className="relative h-64 overflow-hidden">
                <Image
                src={partner?.image}
                alt={partner?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">{partner?.name}</h3>
                  <p className="text-sm text-white/90 flex items-center">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {partner?.location}
                  </p>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Leaf" size={18} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{partner?.specialty}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-accent">
                    <Icon name="Award" size={16} />
                    <span className="text-xs font-medium">{partner?.experience}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner?.story}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Partnership Benefits
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in creating value for our farming partners through fair practices and continuous support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits?.map((benefit, index) =>
            <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={benefit?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground">{benefit?.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit?.description}</p>
              </div>
            )}
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={24} color="var(--color-primary-foreground)" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Join Our Farming Network
                  </h4>
                  <p className="text-muted-foreground">
                    Are you a spice farmer interested in partnering with us? We're always looking to expand our network of quality-focused cultivators.
                  </p>
                </div>
              </div>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap flex items-center space-x-2">
                <span>Contact Us</span>
                <Icon name="ArrowRight" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FarmingPartners;