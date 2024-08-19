import React, { useState, useEffect } from 'react';
import './Contact.css';
import axios from 'axios'; 

const DeveloperContactPopup = ({ onClose }) => {
  return (
    <div className="developer-popup">
      <div className="developer-popup-content">
        <img src="Profile Picture.jpeg" alt="Developer" className="developer-image" />
        <h2>Contact Developer</h2>
        <p>If you have any web-related complaints or queries, feel free to contact the developer.</p>
        <p>Email: arjha2002np@gmail.com</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Form Sent!</h2>
        <p>Your Form has been sent successfully.</p>
        <button onClick={onClose} style={{background:"var(--color-bg)"}}>Close</button>
      </div>
    </div>
  );
};

const EligibilityPopup = ({ onClose }) => {
  return (
    <div className="eligibility-popup">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111936.93231595191!2d76.97984933853151!3d28.748547073511652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0187a8b50817%3A0x3fb991887e014819!2sOffice%20of%20external%20affairs%2C%20DTU!5e0!3m2!1sen!2sin!4v1706899215132!5m2!1sen!2sin" ></iframe>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Contact = () => {
  const [developerContactPopupOpen, setDeveloperContactPopupOpen] = useState(false); 
  const [isEligibilityPopupOpen, setEligibilityPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleEligibilityClick = () => {
    setEligibilityPopupOpen(true);
  };

  const closeEligibilityPopup = () => {
    setEligibilityPopupOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); 
    try {
      const response = await axios.post('http://localhost:5001/send-email', formData);
      setSubmitStatus('success');
      setShowSuccessPopup(true);
      setFormData({ firstName: '', middleName: '', lastName: '', email: '', message: '' }); 
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSending(false); 
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const handleDeveloperContactClick = () => {
    setDeveloperContactPopupOpen(true); 
  };

  const closeDeveloperContactPopup = () => {
    setDeveloperContactPopupOpen(false); 
  };

  return (
    <div>
      <section className="contact">
        <a href="#" className='modeanchor' onClick={handleEligibilityClick}>Map Location</a>
        <div className="contact__container">
          <aside className="contact__aside">
            <div className="aside__image"></div>
            <h2>Contact Us</h2>
            <ul className="contact__details">
              <li>
                <i className="fa-solid fa-envelope"></i>
                <h5>international[dot]dtu[at]dtu[dot]ac[dot]in</h5>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <h5>oia[at]dtu[dot]ac[dot]in</h5>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <h5>Mechanical Department,<br/> Delhi Technological University</h5>
                <h5>Bawana Road,<br/> New Delhi, 110042</h5>
              </li>
            </ul>
            <ul className="contact__social">
              <li>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
              </li>
              <li>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
              </li>
            </ul>
          </aside>
          <form
            className="contact__form"
            onSubmit={handleSubmit}
          >
            <div className="form__name">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Middle Name"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="7"
              placeholder="Message"
              className='comment'
              required
            ></textarea>
            <button type="submit" className="btn3" disabled={isSending}> 
              {isSending ? "Sending..." : "Send Message"} 
            </button>
          </form>
        </div>
        <button onClick={handleDeveloperContactClick} className="btn-developer-contact">
          Contact Developer
        </button>
      </section>
      {isEligibilityPopupOpen && <EligibilityPopup onClose={closeEligibilityPopup} />}
      {showSuccessPopup && <SuccessPopup onClose={closeSuccessPopup} />}
      {developerContactPopupOpen && <DeveloperContactPopup onClose={closeDeveloperContactPopup} />}
    </div>
  );
};

export default Contact;
