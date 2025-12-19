import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const navigationLinks = [
    { path: '/homepage', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products-catalog', label: 'Products' },
    { path: '/why-choose-us', label: 'Why Choose Us' },
    { path: '/quality-assurance', label: 'Quality Assurance' },
    { path: '/contact-hub', label: 'Contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Linkedin', icon: 'Linkedin', url: '#' },
  ];

  const certifications = [
    'Organic Certified',
    'Fair Trade',
    'Export Quality',
    'ISO 9001:2015',
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/homepage" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                <Icon name="Leaf" size={24} color="var(--color-primary)" />
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">Spice Heritage</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Authentic spices from source to table. Connecting traditional cultivation with modern quality standards since 2010.
            </p>
            <div className="flex space-x-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks?.map((link) => (
                <li key={link?.path}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group"
                  >
                    <Icon name="ChevronRight" size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <Icon name="MapPin" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>123 Spice Garden Lane, Kerala, India 682001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Icon name="Phone" size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors duration-300">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Icon name="Mail" size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@spiceheritage.com" className="hover:text-primary transition-colors duration-300">
                  info@spiceheritage.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications?.map((cert) => (
                <li key={cert} className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Award" size={16} className="text-accent flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-foreground mb-2">Business Hours</h4>
              <p className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Sat: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Spice Heritage. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;