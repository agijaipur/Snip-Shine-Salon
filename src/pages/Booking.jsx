import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';
import './Booking.css';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    stylist: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const services = ['Signature Cut', 'Restyle Cut', 'Full Color', 'Balayage', 'Luxury Hot Towel Shave', 'Deep Conditioning'];
  const stylists = ['Alexander', 'Isabella', 'Marcus', 'Sophia'];
  const timeSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="booking-step animate-fade-in">
            <h2>Select a Service</h2>
            <div className="options-grid">
              {services.map((svc) => (
                <button 
                  key={svc} 
                  className={`option-btn ${bookingData.service === svc ? 'selected' : ''}`}
                  onClick={() => setBookingData({...bookingData, service: svc})}
                >
                  {svc}
                </button>
              ))}
            </div>
            {bookingData.service && <button className="btn btn-gold mt-4" onClick={handleNext}>Next Step</button>}
          </div>
        );
      case 2:
        return (
          <div className="booking-step animate-fade-in">
            <h2>Choose a Stylist</h2>
            <div className="options-grid">
              {stylists.map((stylist) => (
                <button 
                  key={stylist} 
                  className={`option-btn ${bookingData.stylist === stylist ? 'selected' : ''}`}
                  onClick={() => setBookingData({...bookingData, stylist: stylist})}
                >
                  <User size={24} style={{marginBottom: '0.5rem'}} />
                  {stylist}
                </button>
              ))}
            </div>
            <div className="booking-actions mt-4">
              <button className="btn btn-outline" onClick={handlePrev}>Back</button>
              {bookingData.stylist && <button className="btn btn-gold" onClick={handleNext}>Next Step</button>}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="booking-step animate-fade-in">
            <h2>Pick Date & Time</h2>
            <div className="datetime-selection">
              <div className="form-group">
                <label><Calendar size={16} /> Select Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                />
              </div>
              <div className="time-slots">
                <label><Clock size={16} /> Available Slots</label>
                <div className="options-grid time-grid">
                  {timeSlots.map((time) => (
                    <button 
                      key={time} 
                      className={`option-btn ${bookingData.time === time ? 'selected' : ''}`}
                      onClick={() => setBookingData({...bookingData, time: time})}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="booking-actions mt-4">
              <button className="btn btn-outline" onClick={handlePrev}>Back</button>
              {bookingData.date && bookingData.time && <button className="btn btn-gold" onClick={handleNext}>Next Step</button>}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="booking-step animate-fade-in">
            <h2>Your Details</h2>
            <div className="details-form">
              <div className="form-group">
                <input type="text" placeholder="Full Name" className="form-control" value={bookingData.name} onChange={(e) => setBookingData({...bookingData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" className="form-control" value={bookingData.email} onChange={(e) => setBookingData({...bookingData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" className="form-control" value={bookingData.phone} onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} />
              </div>
            </div>
            <div className="booking-actions mt-4">
              <button className="btn btn-outline" onClick={handlePrev}>Back</button>
              {bookingData.name && bookingData.email && bookingData.phone && <button className="btn btn-gold" onClick={handleNext}>Confirm Booking</button>}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="booking-step text-center animate-fade-in">
            <CheckCircle size={64} className="text-gold" style={{margin: '0 auto 1.5rem'}} />
            <h2>Booking Confirmed!</h2>
            <p className="text-muted mb-4">Thank you, {bookingData.name}. Your appointment for {bookingData.service} with {bookingData.stylist} is confirmed for {bookingData.date} at {bookingData.time}.</p>
            <p>We've sent a confirmation email to {bookingData.email}.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page booking-page">
      <div className="page-header text-center">
        <h1>Book Appointment</h1>
      </div>
      <div className="container">
        <div className="booking-container">
          {/* Progress Bar */}
          <div className="booking-progress">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`progress-step ${step >= i ? 'active' : ''} ${step === i ? 'current' : ''}`}>
                <span>{i}</span>
              </div>
            ))}
          </div>
          
          <div className="booking-content">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
