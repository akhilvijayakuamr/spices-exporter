import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Icon name="Award" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">Three Generations of Excellence</span>
            </div>
            
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-tight">
              Bridging Ancient Wisdom with Modern Excellence
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the lush spice gardens of Kerala to tables across the globe, our journey represents a commitment to authenticity, quality, and the preservation of traditional spice cultivation methods that have been perfected over generations.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Farmer Partners</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Globe" size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground">25+</p>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={24} color="var(--color-secondary)" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Organic Certified</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1bf0e8fb6-1764750721254.png"
                alt="Experienced spice curator examining premium cardamom pods in traditional Kerala spice garden with lush green vegetation in background"
                className="w-full h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border">
                <p className="text-sm font-medium text-primary mb-2">Our Founder's Vision</p>
                <p className="text-foreground font-serif text-lg">"Quality you can trace, authenticity you can taste"</p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Sparkles" size={40} color="var(--color-accent-foreground)" />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;