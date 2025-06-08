import React from 'react';
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-main">
          {/* Left section - Logo & Description */}
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/images/NITI-logo.png" alt="NITI Technologies" />
            </div>
            <p className="footer-description">
              Empowering digital transformation in Nagaland and beyond with innovative solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon-wrapper" aria-label="Facebook">
                <span className="social-icon-inner">
                  <FaFacebookF />
                </span>
              </a>
              <a href="#" className="social-icon-wrapper" aria-label="Twitter">
                <span className="social-icon-inner">
                  <FaTwitter />
                </span>
              </a>
              <a href="#" className="social-icon-wrapper" aria-label="LinkedIn">
                <span className="social-icon-inner">
                  <FaLinkedinIn />
                </span>
              </a>
            </div>
          </div>

          {/* Right section - Links and Contact */}
          <div className="footer-right">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#hero"><span>Home</span></a></li>
                <li><a href="#services"><span>About</span></a></li>
                <li><Link to="/projects"><span>Projects</span></Link></li>
                <li><a href="#contact"><span>Contact</span></a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#services"><span>Web Development</span></a></li>
                <li><a href="#services"><span>Mobile Apps</span></a></li>
                <li><a href="#services"><span>UI/UX Design</span></a></li>
                <li><a href="#services"><span>Cloud Solutions</span></a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <div className="contact-info">
                <p><FaPhoneAlt /> +91 12345 67890</p>
                <p><FaEnvelope /> info@niti.com</p>
                <p><FaMapMarkerAlt /> Kohima, Nagaland - 797001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final accurate bottom footer */}
        <div className="footer-bottom-content">
          <p>© 2025 NITI Technologies. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          background: linear-gradient(135deg, var(--section-bg), var(--background));
          color: #ffffff;
          padding: 2rem;
          font-family: 'Segoe UI', sans-serif;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-left {
          flex: 1;
          min-width: 250px;
          max-width: 400px;
        }

        .footer-logo img {
          width: 80px;
          margin-bottom: 1rem;
        }

        .footer-description {
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .social-links {
          margin-top: 1.5rem;
          display: flex;
          gap: 1rem;
        }

        .social-icon-wrapper {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          padding: 0.2rem;
          transition: all 0.3s ease;
          display: block;
        }

        .social-icon-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .social-icon-wrapper:hover .social-icon-inner {
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(65, 146, 203, 0.3);
        }

        .social-icon-wrapper:hover svg {
          transform: scale(1.2);
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        .footer-right {
          flex: 2;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-section {
          min-width: 150px;
          flex: 1;
        }

        .footer-section h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--primary-accent);
          position: relative;
          display: inline-block;
        }

        .footer-section h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 2px;
          background: var(--primary-accent);
          transition: width 0.3s ease;
        }

        .footer-section:hover h4::after {
          width: 100%;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: #e5e7eb;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
          padding: 2px 0;
          overflow: hidden;
        }

        .footer-links a span {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--primary-accent);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--primary-accent);
        }

        .footer-links a:hover span {
          transform: translateX(5px);
        }

        .footer-links a:hover::before {
          transform: translateX(0);
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: #e5e7eb;
          transition: transform 0.3s ease;
        }

        .contact-info p:hover {
          transform: translateX(5px);
          color: var(--primary-accent);
        }

        /* Exact original bottom footer */
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.85rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .footer-bottom-content p {
          margin: 0;
          color: #cbd5e1;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-legal-links a {
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding: 2px 0;
        }

        .footer-legal-links a::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: var(--primary-accent);
          transform-origin: bottom right;
          transition: transform 0.3s ease;
        }

        .footer-legal-links a:hover {
          color: var(--primary-accent);
        }

        .footer-legal-links a:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        @media (max-width: 768px) {
          .footer-main {
            flex-direction: column;
          }

          .footer-right {
            flex-direction: column;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal-links {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
