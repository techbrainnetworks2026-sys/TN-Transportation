import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container text-center">
          <h2>Product Not Found</h2>
          <Link to="/transportation" className="btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      {/* Hero Banner */}
      <div className="product-hero">
        <img src={product.image} alt={product.title} className="product-hero-bg" />
        <div className="product-hero-overlay"></div>
        <div className="container product-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {product.title}
          </motion.h1>
        </div>
      </div>

      <div className="container product-content-container">
        <div className="product-main-content">
          <section className="detail-section">
            <h2>Product <span>Introduction</span></h2>
            <p>{product.introduction} {product.shortDescription} Designed to meet the high standards of modern transportation networks, this product stands as a testament to our commitment to innovation and enterprise-grade reliability.</p>
          </section>

          <section className="detail-section bg-card">
            <h2>Background & <span>Problem Statement</span></h2>
            <p>{product.backgroundProblem} In today's fast-paced environment, legacy systems fail to scale, creating operational bottlenecks and reducing overall efficiency. A new approach is necessary to tackle these systemic issues.</p>
          </section>

          <section className="detail-section">
            <h2>Problem & <span>Solution</span></h2>
            <p>{product.problemSolution} Our platform bridges the gap between hardware limitations and software capabilities, offering a holistic solution that not only addresses immediate pain points but also provides a foundation for future scalability.</p>
          </section>

          <section className="detail-section bg-card">
            <h2>Core <span>Functionalities</span></h2>
            <p>{product.coreFunctionalities} The system is built with high availability in mind, ensuring that critical operations never face downtime. From user-facing dashboards to backend processing, every component is optimized for speed and accuracy.</p>
          </section>

          <section className="detail-section">
            <h2>System <span>Workflow</span></h2>
            <p className="workflow-text">{product.workflow}</p>
            <p>This streamlined process reduces manual intervention, mitigates the risk of human error, and accelerates the overall execution cycle, allowing enterprises to focus on strategic growth rather than operational micromanagement.</p>
          </section>

          <section className="detail-section bg-card">
            <h2>System <span>Architecture</span></h2>
            <p>{product.systemArchitecture} We employ state-of-the-art security protocols and distributed computing paradigms to ensure that data integrity is maintained at all times, regardless of the load on the system.</p>
          </section>

          <section className="detail-section">
            <h2>Real-world <span>Applications</span></h2>
            <p>{product.realWorldApplications} By implementing our solution, these sectors have seen measurable improvements in their day-to-day operations, proving the versatility and robust nature of our technology in live environments.</p>
          </section>

          <section className="detail-section bg-card">
            <h2>Benefits & <span>Value Proposition</span></h2>
            <p>{product.benefits} Organizations adopting this technology report significant cost savings, enhanced user satisfaction, and a clearer path to achieving their long-term digital transformation objectives.</p>
          </section>

          <section className="detail-section">
            <h2>Challenges & <span>Limitations</span></h2>
            <p>{product.challengesLimitations} We are continuously working alongside industry partners and regulatory bodies to overcome these hurdles, ensuring that our deployment strategies remain compliant and effective.</p>
          </section>

          <section className="detail-section bg-card">
            <h2>Future <span>Scope</span></h2>
            <p>{product.futureScope} As technology evolves, we plan to integrate more advanced AI models and quantum computing algorithms to further enhance the capabilities and reach of this solution.</p>
          </section>

          <section className="detail-section">
            <h2>Industry <span>Impact</span></h2>
            <p>{product.industryImpact} This is more than just a software upgrade; it is a fundamental shift in how the industry operates, setting new benchmarks for performance, safety, and sustainability globally.</p>
          </section>

          <section className="detail-section bg-card">
            <h2>Conclusion</h2>
            <p>In summary, {product.title} represents a critical investment for any forward-looking enterprise in the transportation sector. It combines advanced technology with practical utility, ready to deploy and scale.</p>
          </section>
        </div>

        <div className="product-sidebar">
          <div className="sidebar-widget glass-panel">
            <h3>Key Features</h3>
            <ul className="feature-list">
              {product.keyFeatures.map((feature, idx) => (
                <li key={idx}><FaCheckCircle className="check-icon" /> {feature}</li>
              ))}
            </ul>
          </div>

          <div className="sidebar-widget glass-panel">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {product.technologiesUsed.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-widget glass-panel contact-widget">
            <h3>Interested?</h3>
            <p>Contact our sales team for a demo or custom implementation strategy.</p>
            <a href="/#contact" className="btn-primary w-100 text-center">Contact Sales <FaArrowRight className="sales-arrow-icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
