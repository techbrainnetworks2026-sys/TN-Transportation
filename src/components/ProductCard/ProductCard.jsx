import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div 
      className="product-card glass-panel"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-overlay"></div>
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.shortDescription}</p>
        <Link to={`/transportation/${product.id}`} className="product-link">
          Learn More <FaArrowRight className="arrow-icon" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
