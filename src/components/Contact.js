import React, { useState } from 'react';
import './Contact.css';
import { supabase } from '../supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    about: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending your message...');

    if (!supabase) {
      setStatus('Supabase is not configured. Please add REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY to your .env file.');
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase
      .from('contacts')
      .insert([formData]);

    if (error) {
      console.error(error);
      setStatus('There was a problem saving your message. Please try again.');
    } else {
      setStatus('Thank you for reaching out! We will reply soon.');
      setFormData({ name: '', email: '', subject: '', about: '' });
    }

    setIsSubmitting(false);
    setTimeout(() => setStatus(''), 7000);
  };

  const contactDetails = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'hello@deliciousbites.com',
      color: '#ff6b6b'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: '#22c55e'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: '123 Food Street, NY 10001',
      color: '#3b82f6'
    },
    {
      icon: 'fas fa-clock',
      title: 'Hours',
      value: 'Mon-Sun: 11AM - 10PM',
      color: '#f59e0b'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get in <span>Touch</span></h2>
          <p className="contact-subtitle">Have a question, special request, or catering inquiry? We'd love to hear from you!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-content">
              <h3>Let's Start a Conversation</h3>
              <p>Send us a message and our team will get back to you within 24 hours.</p>

              <div className="contact-details">
                {contactDetails.map((detail, index) => (
                  <div
                    key={detail.title}
                    className="detail-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="detail-icon" style={{ backgroundColor: detail.color }}>
                      <i className={detail.icon}></i>
                    </div>
                    <div className="detail-content">
                      <h4>{detail.title}</h4>
                      <p>{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you soon.</p>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={focusedField === 'name' ? 'focused' : ''}
                    required
                  />
                  <i className="fas fa-user input-icon"></i>
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={focusedField === 'email' ? 'focused' : ''}
                    required
                  />
                  <i className="fas fa-envelope input-icon"></i>
                </div>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  className={focusedField === 'subject' ? 'focused' : ''}
                  required
                />
                <i className="fas fa-tag input-icon"></i>
              </div>

              <div className="input-group">
                <textarea
                  name="about"
                  rows="6"
                  placeholder="Tell us about your inquiry..."
                  value={formData.about}
                  onChange={handleChange}
                  onFocus={() => handleFocus('about')}
                  onBlur={handleBlur}
                  className={focusedField === 'about' ? 'focused' : ''}
                  required
                />
                <i className="fas fa-comment input-icon textarea-icon"></i>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                <span className="btn-text">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
              </button>

              {status && (
                <div className={`form-status ${status.includes('Thank you') ? 'success' : 'error'}`}>
                  <i className={`fas ${status.includes('Thank you') ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                  <span>{status}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
