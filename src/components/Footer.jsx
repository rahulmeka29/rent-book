import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Welcome to Our Rent-A-Book Web-App.</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/AboutUs">About Us</a>
            </li>
            <li>
              <a href="/ContactUs">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Connect With Us</h2>
          <p>Email: Sohamhi06gmail.com</p>
          <p>Phone: +8928426488</p>
          <p>Place: Mumbai,Maharastra</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Rent-A-Book. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
