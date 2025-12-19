import React from 'react';
import '../styles/Products.css';
import cardamomImg from '../assets/cardamom_macro.png';
import pepperImg from '../assets/black_pepper_heap.png';
import clovesImg from '../assets/cloves_close_up.png';

const Products = () => {
    const products = [
        {
            id: 1,
            name: "Green Cardamom",
            image: cardamomImg,
            desc: "Handpicked, aromatic green cardamom pods. Known as the Queen of Spices.",
            tags: ["Aromatic", "Premium Grade", "Fresh"]
        },
        {
            id: 2,
            name: "Black Pepper",
            image: pepperImg,
            desc: "Bold, pungent, and spicy black peppercorns directly from the vines.",
            tags: ["Spicy", "Organic", "Whole"]
        },
        {
            id: 3,
            name: "Clove (Grambu)",
            image: clovesImg,
            desc: "Rich, dried cloves with intense flavor and medicinal properties.",
            tags: ["Flavorful", "Medicinal", "Hand-Sorted"]
        }
    ];

    return (
        <section id="products" className="section products-section">
            <div className="container">
                <div className="text-center mb-5 reveal fade-bottom">
                    <span className="section-subtitle">Our Collection</span>
                    <h2 className="section-title">Premium Spices</h2>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div className={`product-card reveal fade-bottom delay-${(index + 1) * 100}`} key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="overlay">
                                    <a href="#contact" className="btn btn-primary btn-sm">Enquire Now</a>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.desc}</p>
                                <div className="tags">
                                    {product.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
