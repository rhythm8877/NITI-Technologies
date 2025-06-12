import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section - Logo and Description */}
          <div className="footer-section footer-brand">
            <div className="brand-logo">
              <img src="/images/NITI-logo.png" alt="NITI Technologies" />
            </div>
            <p className="brand-description">
              Empowering digital transformation in Nagaland and beyond with innovative solutions.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Middle Section - Other Links */}
          <div className="footer-section footer-links">
            <h3 className="section-title">OTHER LINKS</h3>
            <ul className="links-list">
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile Apps</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Right Section - Address */}
          <div className="footer-section footer-address">
            <h3 className="section-title">ADDRESS</h3>
            <div className="address-text">
              <p>Opp. Ram Janaki School, Marwari Patti</p>
              <p>Dimapur - 797112,</p>
              <p>Nagaland, India</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; 2025 NITI Technologies. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        /* Footer Container */
        .footer {
          background: linear-gradient(135deg, var(--section-bg), var(--background));
          color: var(--text-primary);
          font-family: var(--font-secondary);
          position: relative;
          min-height: 25vh;
          width: 100%;
          padding: 1.5rem 0 1rem;
          display: flex;
          align-items: center;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary-accent), transparent);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Main Content Grid */
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 3rem;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Brand Section */
        .brand-logo img {
          height: 32px;
          width: auto;
          margin-bottom: 1rem;
          object-fit: contain;
        }

        .brand-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 280px;
        }

        .social-icons {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-smooth);
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          color: white;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(65, 146, 203, 0.3);
        }

        /* Links Section */
        .section-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-accent);
          margin-bottom: 1rem;
          letter-spacing: 0.5px;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--primary-accent);
          border-radius: 1px;
        }

        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .links-list a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.25rem 0;
          transition: var(--transition-smooth);
          position: relative;
        }

        .links-list a:hover {
          color: var(--primary-accent);
          padding-left: 8px;
        }

        .links-list a::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: var(--primary-accent);
          transition: var(--transition-smooth);
          border-radius: 1px;
        }

        .links-list a:hover::before {
          width: 6px;
        }

        /* Address Section */
        .address-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .address-text p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.4;
          transition: var(--transition-smooth);
        }

        .address-text p:hover {
          color: var(--primary-accent);
        }

        /* Copyright */
        .footer-copyright {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
          text-align: center;
          position: relative;
        }

        .footer-copyright::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 1px;
          background: var(--primary-accent);
        }

        .footer-copyright p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 400;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .footer-container {
            padding: 0 1.5rem;
          }

          .footer-content {
            gap: 2rem;
          }

          .brand-description {
            max-width: 240px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .footer {
            min-height: auto;
            padding: 2rem 0 1.5rem;
          }

          .footer-container {
            padding: 0 1.5rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-section {
            align-items: center;
          }

          .section-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .brand-description {
            max-width: 100%;
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }

          .links-list a:hover {
            padding-left: 0;
          }

          .links-list a::before {
            display: none;
          }

          .address-text {
            align-items: center;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .footer {
            padding: 1.5rem 0 1rem;
          }

          .footer-container {
            padding: 0 1rem;
          }

          .footer-content {
            gap: 1.5rem;
          }

          .brand-logo img {
            height: 28px;
          }

          .social-link {
            width: 32px;
            height: 32px;
          }

          .section-title {
            font-size: 0.9rem;
          }

          .links-list a,
          .address-text p {
            font-size: 0.85rem;
          }

          .footer-copyright p {
            font-size: 0.8rem;
          }
        }

        /* Animation Preservation */
        .social-link,
        .links-list a,
        .address-text p {
          transition: var(--transition-smooth);
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
