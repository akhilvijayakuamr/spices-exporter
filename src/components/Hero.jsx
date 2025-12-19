import React from 'react';
import '../styles/Hero.css';
import profileImg from '../assets/profile.jpeg';
import cardamomImg from '../assets/cardamom_macro.png';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle reveal fade-bottom">Premium Indian Spices</span>
                    <h1 className="hero-title reveal fade-bottom delay-100">
                        Bringing the Essence of <span className="text-primary">Kerala</span> to the World
                    </h1>
                    <p className="hero-description reveal fade-bottom delay-200">
                        I am Anandhu P Ravi, your trusted partner for premium Cardamom, Black Pepper, and Grambu from the heart of the spice coast.
                    </p>
                    <div className="hero-buttons reveal fade-bottom delay-300">
                        <a href="#products" className="btn btn-primary">Our Products</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>

                <div className="hero-image-wrapper reveal zoom-in delay-200">
                    <div className="image-blob"></div>
                    <img src={profileImg} alt="Anandhu P Ravi" className="hero-profile-img" />
                    <img src={cardamomImg} alt="Fresh Cardamom" className="floating-spice spice-1" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
