import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate email sending
        console.log("Sending email...", formData);
        setTimeout(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            alert(`Thank you ${formData.name}! Your message has been sent to Anandhu P Ravi.`);
        }, 1000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="text-center mb-5 reveal fade-bottom">
                    <span className="section-subtitle">Get in Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                </div>

                <div className="contact-container">
                    <div className="contact-info reveal fade-right">
                        <h3>Let's Talk Business</h3>
                        <p>Ready to order premium spices? Have questions about shipping or bulk pricing? Reach out to us directly.</p>

                        <div className="info-item">
                            <span className="icon">📍</span>
                            <div>
                                <h4>Location</h4>
                                <p>Kochi, Kerala, India - 682001</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <span className="icon">📧</span>
                            <div>
                                <h4>Email</h4>
                                <p>anandhu.raviexports@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <span className="icon">📞</span>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper reveal fade-left">
                        {submitted ? (
                            <div className="success-message">
                                <h3>Message Sent Successfully!</h3>
                                <p>We will get back to you within 24 hours.</p>
                                <button className="btn btn-outline mt-3" onClick={() => setSubmitted(false)}>Send Another</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us what you need..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
