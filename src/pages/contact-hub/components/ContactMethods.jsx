import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      icon: 'Phone',
      title: 'Phone',
      description: 'Speak directly with our team',
      value: '+91 123 456 7890',
      action: 'Call Now',
      link: 'tel:+911234567890',
      availability: 'Mon-Fri: 9:00 AM - 6:00 PM IST',
      color: 'var(--color-primary)'
    },
    {
      id: 2,
      icon: 'Mail',
      title: 'Email',
      description: 'Send us a detailed inquiry',
      value: 'info@spiceheritage.com',
      action: 'Send Email',
      link: 'mailto:info@spiceheritage.com',
      availability: 'Response within 24 hours',
      color: 'var(--color-secondary)'
    },
    {
      id: 3,
      icon: 'MessageCircle',
      title: 'WhatsApp',
      description: 'Quick chat for instant queries',
      value: '+91 123 456 7890',
      action: 'Chat on WhatsApp',
      link: 'https://wa.me/911234567890',
      availability: 'Mon-Sat: 9:00 AM - 8:00 PM IST',
      color: 'var(--color-success)'
    },
    {
      id: 4,
      icon: 'MapPin',
      title: 'Visit Us',
      description: 'Schedule an in-person meeting',
      value: '123 Spice Garden Lane, Kerala',
      action: 'Get Directions',
      link: '#location',
      availability: 'By appointment only',
      color: 'var(--color-accent)'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Choose Your Preferred Channel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer multiple ways to connect with us. Select the method that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-muted rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={method?.icon} size={28} color={method?.color} />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {method?.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                {method?.description}
              </p>
              
              <p className="text-sm font-medium text-foreground mb-2">
                {method?.value}
              </p>
              
              <p className="text-xs text-muted-foreground mb-4 flex items-center">
                <Icon name="Clock" size={14} className="mr-1" />
                {method?.availability}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => window.location.href = method?.link}
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;