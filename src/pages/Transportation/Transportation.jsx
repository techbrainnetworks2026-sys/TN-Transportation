import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import './Transportation.css';

const Transportation = () => {
  return (
    <div className="transportation-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transportation <span>Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explore our comprehensive suite of 20 cutting-edge transportation technology solutions.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="products-grid-full">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;
