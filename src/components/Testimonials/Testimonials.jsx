import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "John Doe",
    position: "CEO, Global Logistics",
    content: "Techbrain Networks transformed our supply chain with their AI optimization platform. Our efficiency increased by 40% in just six months.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Sarah Jenkins",
    position: "City Planner, Metropolis",
    content: "Their intelligent traffic management solutions have drastically reduced urban congestion. A true partner in building smart cities.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Michael Chen",
    position: "Director of Operations, Metro Rail",
    content: "The railway asset management software is a game-changer. Predictive maintenance has saved us millions in potential breakdowns.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our <span>Clients Say</span></h2>
          <p className="section-subtitle">Trusted by enterprise leaders worldwide.</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="testimonials-slider"
        >
          {testimonialsData.map((test, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card glass-panel">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-content">{test.content}</p>
                <div className="testimonial-author">
                  <img src={test.image} alt={test.name} className="author-image" />
                  <div className="author-info">
                    <h4 className="author-name">{test.name}</h4>
                    <span className="author-position">{test.position}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
