import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Star, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: 'url(/hero-bg.png)' }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="animate-slide-up">Where Style Meets Perfection</h1>
          <p className="animate-slide-up delay-100">Experience luxury grooming and styling in an atmosphere of pure elegance.</p>
          <div className="animate-slide-up delay-200">
            <Link to="/booking" className="btn btn-gold">Book Appointment</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-white services-preview">
        <div className="container">
          <div className="section-header text-center animate-slide-up">
            <h2>Our Signature Services</h2>
            <p className="text-muted">Discover the art of refined grooming</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card hover-card animate-slide-up delay-100">
              <Scissors className="service-icon" size={32} />
              <h3>Haircut & Styling</h3>
              <p>Precision cuts tailored to your facial structure and lifestyle.</p>
              <Link to="/services" className="service-link">Learn More</Link>
            </div>
            <div className="service-card hover-card animate-slide-up delay-200">
              <Scissors className="service-icon" size={32} />
              <h3>Hair Coloring</h3>
              <p>Expert color application using premium, nourishing products.</p>
              <Link to="/services" className="service-link">Learn More</Link>
            </div>
            <div className="service-card hover-card animate-slide-up delay-300">
              <Scissors className="service-icon" size={32} />
              <h3>Spa & Treatments</h3>
              <p>Revitalize your hair and scalp with our signature treatments.</p>
              <Link to="/services" className="service-link">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section bg-pink testimonials-preview">
        <div className="container text-center">
          <h2 className="animate-slide-up">Client Experiences</h2>
          <div className="testimonial-card animate-slide-up delay-100">
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--color-soft-gold)" color="var(--color-soft-gold)" />)}
            </div>
            <p className="testimonial-text">"Absolutely the best salon experience I've ever had. The attention to detail and the luxurious atmosphere make every visit special."</p>
            <p className="testimonial-author">- Sarah Jenkins</p>
          </div>
          <Link to="/testimonials" className="btn btn-outline animate-slide-up delay-200" style={{ marginTop: '2rem' }}>View All Reviews</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
