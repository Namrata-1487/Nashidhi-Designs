import React from 'react'

const Contact = () => {

    const handleSubmit = (event) => {
      event.preventDefault();
      alert('Thank you for your message!');
      event.target.reset(); // Reset the form after submission
    };
  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact