import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderStory = () => {
  const founderDetails = {
    name: "Rajesh Kumar",
    title: "Founder & Chief Spice Curator",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e79874ce-1763295572482.png",
    imageAlt: "Portrait of middle-aged Indian man with warm smile wearing traditional white kurta standing in spice plantation with green foliage background",
    story: `Growing up in the heart of Kerala's spice country, I was surrounded by the intoxicating aromas of cardamom, pepper, and cloves from my earliest memories. My grandfather, a respected spice farmer, taught me that every spice tells a story—of the soil it grew in, the hands that nurtured it, and the traditions that shaped its cultivation.\n\nAfter completing my studies in agricultural science and spending years working with international spice traders, I realized there was a disconnect between the farmers who grew these precious spices and the chefs and consumers who used them. Too often, quality was compromised, farmers were undervalued, and the rich heritage of spice cultivation was being lost.\n\nIn 2010, I founded Spice Heritage with a simple mission: to create a direct bridge between traditional spice farmers and discerning customers worldwide. We work exclusively with farmers who share our commitment to organic practices, sustainable cultivation, and the preservation of heirloom spice varieties.\n\nToday, we're proud to partner with over 50 farming families across Kerala and Karnataka, ensuring they receive fair compensation while delivering the finest spices to kitchens and businesses around the world. Every shipment we send carries not just premium spices, but the legacy of generations of expertise and the promise of authentic quality.`,
    expertise: [
    "25+ years in spice cultivation and trading",
    "Certified organic farming specialist",
    "International quality standards expert",
    "Sustainable agriculture advocate"]

  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="User" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">Meet Our Founder</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              A Journey Rooted in Heritage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connecting traditional wisdom with modern excellence through three generations of spice expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={founderDetails?.image}
                    alt={founderDetails?.imageAlt}
                    className="w-full h-[400px] object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-semibold text-white mb-1">
                      {founderDetails?.name}
                    </h3>
                    <p className="text-white/90">{founderDetails?.title}</p>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 border border-border space-y-4">
                  <h4 className="font-serif text-lg font-semibold text-foreground flex items-center">
                    <Icon name="Award" size={20} className="mr-2 text-accent" />
                    Expertise & Credentials
                  </h4>
                  <ul className="space-y-3">
                    {founderDetails?.expertise?.map((item, index) =>
                    <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle2" size={18} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              {founderDetails?.story?.split('\n\n')?.map((paragraph, index) =>
              <div key={index} className="bg-background rounded-xl p-6 border border-border">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {paragraph}
                  </p>
                </div>
              )}

              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Quote" size={24} color="var(--color-primary-foreground)" />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-foreground mb-2">
                      "Every spice we source carries the dedication of farmers who have perfected their craft over generations. Our role is to honor that legacy by ensuring their exceptional quality reaches those who truly appreciate it."
                    </p>
                    <p className="text-sm text-muted-foreground">— {founderDetails?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FounderStory;