import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2>Anandhu P Ravi</h2>
                    <p>Premium Spice Exporter</p>
                </div>
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-social">
                    {/* Add social icons if needed */}
                </div>
                <div className="footer-copyright">
                    <p>&copy; {year} Anandhu P Ravi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
