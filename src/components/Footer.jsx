import React from 'react';
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* Separator line at the top of footer */}
        <div className="section-separator"></div>
        
        <div className="footer-container">
          {/* Main footer content */}
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

            {/* Middle section - Services */}
            <div className="footer-middle">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile Apps</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Cloud Solutions</a></li>
              </ul>
            </div>

            {/* Right section - Contact */}
            <div className="footer-right">
              <h4>Contact</h4>
              <div className="contact-info">
                <p><FaPhoneAlt /> +91 7005291593</p>
                <p><FaEnvelope /> admin@nititechnologies.in</p>
                <p><FaMapMarkerAlt /> Dimapur, Nagaland - 797112</p>
              </div>
            </div>
          </div>
        
          {/* Bottom copyright footer */}
          <div className="footer-bottom">
            <p>&copy; 2025 NITI Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
       /* CSS Variables for consistency */
        /* Main footer container */
        .footer {
          background: linear-gradient(135deg, var(--section-bg), var(--background));
          color: #ffffff;
          padding: 3rem 0 1.5rem;
          font-family: var(--font-secondary);
          position: relative;
          min-height: auto;
          width: 100%;
        }
        
        /* Separator line at top of footer */
        .section-separator {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary-accent), transparent);
        }
        
        /* Inner container for proper spacing */
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          box-sizing: border-box;
        }
        
        /* Main footer content area - Grid layout for better responsiveness */
        .footer-main {
          display: grid;
          grid-template-columns: 1fr 200px 1fr;
          gap: 3rem;
          align-items: start;
          margin-bottom: 2rem;
        }
        
        /* Left section with logo */
        .footer-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .footer-logo img {
          width: 100px;
          height: 50px;
          margin-bottom: 1rem;
          border-radius: 8px;
        }
        
        .footer-description {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: white;
          max-width: 300px;
        }
        
        /* Social links section */
        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .social-icon-wrapper {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          transition: var(--transition-smooth);
          display: block;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .social-icon-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          color: white;
          transition: var(--transition-smooth);
          font-size: 1rem;
        }
        
        .social-icon-wrapper:hover {
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(65, 146, 203, 0.25);
        }
        
        .social-icon-wrapper:hover .social-icon-inner {
          color: white;
        }
        
        .social-icon-wrapper:active {
          transform: translateY(-1px) scale(1.02);
        }
        
         /* Middle section - Services */
        .footer-middle {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        /* Right section - Contact */
        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }
        
        /* Enhanced heading styles */
        .footer-middle h4,
        .footer-right h4 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--primary-accent);
          font-weight: 600;
          position: relative;
          letter-spacing: 0.5px;
        }
        
        .footer-middle h4::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 2px;
          background: var(--primary-accent);
          border-radius: 1px;
        }
        
        .footer-right h4::after {
          content: '';
          position: absolute;
          bottom: -8px;
          right: 0;
          width: 30px;
          height: 2px;
          background: var(--primary-accent);
          border-radius: 1px;
        }
        
        /* Links list styling */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-links li {
          position: relative;
        }
        
        .footer-links a {
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
          display: inline-block;
          padding: 0.5rem 0;
          position: relative;
          font-weight: 400;
        }
          
        .footer-links a::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: var(--primary-accent);
          transition: var(--transition-smooth);
          border-radius: 1px;
        }
               
        .footer-links a:hover {
          color: var(--primary-accent);
          padding-left: 5px;
        }
        

        
/* Contact info styling */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-end;
        }
        
        .contact-info p {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 0;
          font-size: 0.95rem;
          color: white;
          transition: var(--transition-smooth);
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          border-radius: 6px;
          font-weight: 400;
          position: relative;
        }
        
        .contact-info p::before {
          content: '';
          position: absolute;
          right: -15px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: var(--primary-accent);
          transition: var(--transition-smooth);
          border-radius: 1px;
        }
        
        .contact-info p:hover {
          color: var(--primary-accent);
          padding-right: 5px;
        }
        

        
        .contact-info p svg {
          color: inherit;
          font-size: 1rem;
          flex-shrink: 0;
        }

        /* Bottom footer styling */
        .footer-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }
        
        .footer-bottom::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 1px;
          background: var(--primary-accent);
        }
        
        .footer-bottom p {
          margin: 0;
          color: #94a3b8;
          font-size: 0.9rem;
          font-weight: 400;
          text-align: center;
        }

        /* Tablet Styles (768px - 1024px) */
        @media (max-width: 1024px) {
          .footer-container {
            padding: 0 1.5rem;
          }
          
          .footer-main {
            grid-template-columns: 1fr 180px 1fr;
            gap: 2rem;
          }
        }

        /* Mobile Styles (max-width: 768px) */
        @media (max-width: 768px) {
          .footer {
            padding: 2.5rem 0 1.5rem;
          }
          
          .footer-container {
            padding: 0 1.5rem;
          }
          
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          
          .footer-left,
          .footer-right {
            align-items: center;
            text-align: center;
          }
          
          .footer-right h4::after {
            left: 50%;
            transform: translateX(-50%);
            right: auto;
          }
          
          .contact-info {
            align-items: center;
          }
          
          .contact-info p {
            justify-content: center;
          }
          
          .contact-info p::before {
            right: -15px;
          }
          
          .contact-info p:hover {
            padding-right: 5px;
            padding-left: 0.75rem;
          }
        }

        /* Small Mobile Styles (max-width: 480px) */
        @media (max-width: 480px) {
          .footer {
            padding: 2rem 0 1.25rem;
          }
          
          .footer-container {
            padding: 0 1rem;
          }
          
          .footer-main {
            gap: 2rem;
          }
          
          .footer-logo img {
            width: 80px;
            height: 40px;
          }
          
          .footer-description {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .social-links {
            gap: 0.75rem;
            justify-content: center;
          }
          
          .social-icon-wrapper {
            width: 38px;
            height: 38px;
          }
          
          .social-icon-inner {
            font-size: 0.9rem;
          }
          
          .footer-middle h4,
          .footer-right h4 {
            font-size: 1rem;
            margin-bottom: 1.25rem;
          }
          
          .footer-links a {
            font-size: 0.9rem;
            padding: 0.4rem 0;
          }
          
          .contact-info p {
            font-size: 0.9rem;
            padding: 0.4rem 0.5rem;
          }
          
          .footer-bottom {
            padding-top: 1.5rem;
          }
          
          .footer-bottom p {
            font-size: 0.85rem;
          }
        }

        /* Extra Small Mobile (max-width: 320px) */
        @media (max-width: 320px) {
          .footer-container {
            padding: 0 0.75rem;
          }
          
          .footer-main {
            gap: 1.5rem;
          }
          
          .footer-logo img {
            width: 55px;
            height: 55px;
          }
          
          .footer-description {
            font-size: 0.85rem;
          }
          
          .social-icon-wrapper {
            width: 36px;
            height: 36px;
          }
          
          .contact-info p {
            font-size: 0.85rem;
            flex-direction: column;
            gap: 0.25rem;
            text-align: center;
          }
          
          .footer-bottom p {
            font-size: 0.8rem;
          }
        }

        /* Enhanced accessibility and focus states */
        .social-icon-wrapper:focus {
          outline: 2px solid var(--primary-accent);
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        .contact-info p:focus {
          outline: 2px solid var(--primary-accent);
          outline-offset: 2px;
          border-radius: 4px;
        }

        /* Reduced motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
