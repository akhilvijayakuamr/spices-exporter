import React from 'react';
import '../styles/About.css';

const About = () => {
    const cards = [
        {
            title: "Premium Quality",
            icon: "🌱",
            desc: "Source direct from the best plantations in Kerala, ensuring top-grade spices."
        },
        {
            title: "Global Reach",
            icon: "🌍",
            desc: "Efficient export network delivering fresh spices to every corner of the world."
        },
        {
            title: "Fair Trade",
            icon: "🤝",
            desc: "Supporting local farmers with fair pricing and sustainable practices."
        }
    ];

    return (
        <section id="about" className="section bg-white about-section">
            <div className="container">
                <div className="text-center mb-5 reveal fade-bottom">
                    <span className="section-subtitle">Excellence in Export</span>
                    <h2 className="section-title">Why Choose Me?</h2>
                    <p className="section-desc">
                        With years of experience and deep roots in the spice lands of Kerala, I ensure that you get nothing but the finest, most aromatic spices.
                    </p>
                </div>

                <div className="grid-3">
                    {cards.map((card, index) => (
                        <div className={`feature-card reveal zoom-in delay-${(index + 1) * 100}`} key={index}>
                            <div className="icon-box">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
