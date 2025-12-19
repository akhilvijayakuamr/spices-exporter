import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Icon name="MessageSquare" size={32} color="var(--color-primary)" />
          </div>
          
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Let's Connect
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you're seeking premium spices for your business, exploring partnership opportunities, or simply want to learn more about our heritage, we're here to help. Reach out through your preferred channel.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={18} color="var(--color-primary)" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Globe" size={18} color="var(--color-primary)" />
              <span>International support</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Shield" size={18} color="var(--color-primary)" />
              <span>Secure communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;