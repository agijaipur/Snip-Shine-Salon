import React from 'react';
import './Services.css';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Haircut & Styling',
      items: [
        { name: 'Signature Cut', duration: '45 Min', price: '$85', desc: 'Consultation, wash, tailored cut, and style.' },
        { name: 'Restyle Cut', duration: '60 Min', price: '$110', desc: 'Complete transformation with a new style.' },
        { name: 'Blowout & Style', duration: '45 Min', price: '$65', desc: 'Wash and professional blowout.' }
      ]
    },
    {
      title: 'Hair Coloring',
      items: [
        { name: 'Full Color', duration: '90 Min', price: '$150+', desc: 'All-over custom color application.' },
        { name: 'Balayage', duration: '120 Min', price: '$220+', desc: 'Hand-painted highlights for a natural look.' },
        { name: 'Highlights', duration: '90 Min', price: '$180+', desc: 'Foil highlights for dimension.' }
      ]
    },
    {
      title: 'Beard Grooming',
      items: [
        { name: 'Classic Trim', duration: '20 Min', price: '$35', desc: 'Shape and trim with clippers and scissors.' },
        { name: 'Luxury Hot Towel Shave', duration: '45 Min', price: '$60', desc: 'Straight razor shave with hot towels and oils.' },
      ]
    },
    {
      title: 'Spa & Treatments',
      items: [
        { name: 'Deep Conditioning', duration: '30 Min', price: '$45', desc: 'Intensive moisture treatment.' },
        { name: 'Scalp Massage', duration: '20 Min', price: '$30', desc: 'Relaxing massage to promote hair health.' }
      ]
    }
  ];

  return (
    <div className="page animate-fade-in services-page">
      <div className="page-header text-center">
        <h1>Our Services</h1>
        <p className="text-muted">Explore our extensive range of luxury treatments.</p>
      </div>
      
      <div className="container">
        {serviceCategories.map((category, index) => (
          <div key={index} className="service-category animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <h2 className="category-title">{category.title}</h2>
            <div className="pricing-grid">
              {category.items.map((item, idx) => (
                <div key={idx} className="pricing-card hover-card">
                  <div className="pricing-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <span className="duration">{item.duration}</span>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
