import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products-catalog', label: 'Products' },
    { path: '/why-choose-us', label: 'Why Us' },
    { path: '/quality-assurance', label: 'Quality' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/homepage" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <Icon name="Leaf" size={24} color="var(--color-primary)" />
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">Spice Heritage</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item?.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.location.href = '/contact-hub'}
              >
                Contact
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="ShoppingBag"
                iconPosition="left"
                className="animate-pulse-subtle"
              >
                Request Sample
              </Button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} color="var(--color-foreground)" />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={toggleMobileMenu}
        >
          <div
            className="fixed top-16 right-0 bottom-0 w-64 bg-card shadow-modal overflow-y-auto"
            onClick={(e) => e?.stopPropagation()}
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={toggleMobileMenu}
                  className={`px-4 py-3 rounded text-sm font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item?.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => {
                    window.location.href = '/contact-hub';
                    toggleMobileMenu();
                  }}
                >
                  Contact
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="ShoppingBag"
                  iconPosition="left"
                  onClick={toggleMobileMenu}
                >
                  Request Sample
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;