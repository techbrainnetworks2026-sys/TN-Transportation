import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const statsData = [
  { value: "480", label: "Products" },
  { value: "24", label: "Industries" },
  { value: "30+", label: "Countries by 2027" },
  { value: "100+", label: "Experts" }
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <motion.div 
              className="stat-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
