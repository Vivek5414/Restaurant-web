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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
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

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2 className="section-title">Get in <span>touch</span></h2>
          <p>Have a question, special request, or catering inquiry? Send us a message and our team will get back to you quickly.</p>
          <div className="contact-details">
            <div>
              <h4>Email</h4>
              <p>hello@deliciousbites.com</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>123 Food Street, NY 10001</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="about"
            rows="6"
            placeholder="Tell us about your inquiry..."
            value={formData.about}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
