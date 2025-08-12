import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const form = new FormData(e.target);

    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: form,
      headers: { 'Accept': 'application/json' },
    });

    const data = await res.json();
    if (res.ok) {
      setStatus('Message sent — thank you!');
      e.target.reset();
    } else {
      setStatus(data?.error || 'Failed to send — try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Nashidhi Designs</title>
        <meta name="description" content="Contact Nashidhi Designs to request a quote for mechanical, civil or elevator design projects." />
      </Helmet>

      <div className="container py-5">
        <h2 data-aos="fade-up">Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up">
          <input name="name" className="form-control mb-2" placeholder="Your Name" required />
          <input name="email" type="email" className="form-control mb-2" placeholder="Your Email" required />
          <input name="subject" className="form-control mb-2" placeholder="Subject" />
          <textarea name="message" className="form-control mb-2" rows="6" placeholder="Your Message" required></textarea>
          <button className="btn btn-primary" type="submit">Send Message</button>
          {status && <p className="mt-2">{status}</p>}
        </form>
      </div>
    </>
  );
};

export default Contact;
