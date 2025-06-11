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
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Cloud Solutions</a></li>
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
            <p>© 2025 NITI Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Main footer container */
        .footer {
          background: linear-gradient(135deg, var(--section-bg), var(--background));
          color: #ffffff;
          padding: 2.5rem 0 1.5rem;
          font-family: var(--font-secondary);
          position: relative;
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
          padding: 0 5rem;
          box-sizing: border-box;
        }
        
        /* Main footer content area */
        .footer-main {
          display: flex;
          align-items: flex-start;
          position: relative;
          width: 100%;
        }
        
        /* Left section with logo - Fixed spacing from left edge */
        .footer-left {
          flex: 0 0 300px;
        }
        
        .footer-logo img {
          width: 70px;
          margin-bottom: 0.75rem;
        }
        
        .footer-description {
          font-size: 0.9rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }
        
        /* Social links section */
        .social-links {
          margin-top: 1rem;
          display: flex;
          gap: 0.75rem;
        }
        
        .social-icon-wrapper {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          padding: 0.2rem;
          transition: var(--transition-smooth);
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
          transition: var(--transition-smooth);
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
        
        /* Middle section - Services (Centered between left and right) */
        .footer-middle {
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* Right section - Contact (Equal spacing from right edge) */
        .footer-right {
          flex: 0 0 300px;
          text-align: left;
        }
        
        /* Common heading styles - Removed problematic line effects */
        .footer-middle h4,
        .footer-right h4 {
          font-size: 1.05rem;
          margin-bottom: 0.75rem;
          color: var(--primary-accent);
          font-weight: 600;
        }
        
        /* Links list styling */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: #e5e7eb;
          text-decoration: none;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
          display: inline-block;
          padding: 2px 0;
        }
        
        .footer-links a:hover {
          color: var(--primary-accent);
          transform: translateX(3px);
        }
        
        /* Contact info styling */
        .contact-info p {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #e5e7eb;
          transition: var(--transition-smooth);
        }
        
        .contact-info p:hover {
          transform: translateX(3px);
          color: var(--primary-accent);
        }
        
        /* Bottom footer styling */
        .footer-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }
        
        .footer-bottom p {
          margin: 0;
          color: #cbd5e1;
        }
        
        /* Responsive Mobile Styles */
        @media (max-width: 768px) {
          .footer-container {
            padding: 0 1.5rem;
          }
          
          .footer-main {
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
            text-align: center;
          }
          
          .footer-left,
          .footer-middle,
          .footer-right {
            width: 100%;
            max-width: 300px;
            text-align: center;
            margin: 0 auto;
          }
          
          .footer-description {
            margin-left: auto;
            margin-right: auto;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .footer-middle h4,
          .footer-right h4 {
            text-align: center;
          }
          
          .footer-links {
            text-align: center;
          }
          
          .contact-info p {
            justify-content: center;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            padding: 1.25rem 0 0;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
