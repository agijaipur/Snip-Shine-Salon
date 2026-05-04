import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Share2, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <Scissors className="brand-icon" size={28} />
            <span className="brand-text">Snip & Shine</span>
          </Link>
          <p className="footer-tagline text-muted">Where Style Meets Perfection.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Share2 size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><MapPin size={16} /> 123 Luxury Avenue, NY 10001</li>
            <li><Phone size={16} /> +1 (555) 123-4567</li>
            <li><Mail size={16} /> hello@snipandshine.com</li>
          </ul>
        </div>

        <div className="footer-hours">
          <h3>Opening Hours</h3>
          <ul>
            <li><span>Mon - Fri:</span> 9:00 AM - 8:00 PM</li>
            <li><span>Saturday:</span> 9:00 AM - 6:00 PM</li>
            <li><span>Sunday:</span> Closed</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Snip & Shine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
