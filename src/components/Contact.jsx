import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GlowingEffect } from './ui/glowing-effect.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.name === 'phone') {
      // Only allow digits and limit to 10 characters
      const value = e.target.value.replace(/\D/g, '').slice(0, 10);
      setFormData({
        ...formData,
        [e.target.name]: value
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      if (observer) {
        animatedElements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <section className="contact section animate-on-scroll" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info animate-on-scroll stagger-1">
            <h2>Let's Build Something Amazing Together</h2>
            <div className="info-wrapper">
              <p className="info-description">
                Ready to transform your ideas into digital reality? We're here to help you 
                navigate the digital landscape and create solutions that drive growth.
              </p>
            
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Our Location</h4>
                    <p>Dimapur, Nagaland, India</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@nititechnologies.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 9876543210</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <div className="social-link-wrapper">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={50}
                    inactiveZone={0.01}
                  />
                  <a href="#" className="social-link">
                    <Facebook size={18} className="social-icon" />
                  </a>
                </div>
                
                <div className="social-link-wrapper">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={50}
                    inactiveZone={0.01}
                  />
                  <a href="#" className="social-link">
                    <Linkedin size={18} className="social-icon" />
                  </a>
                </div>
                
                <div className="social-link-wrapper">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={50}
                    inactiveZone={0.01}
                  />
                  <a href="#" className="social-link">
                    <Twitter size={18} className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container animate-on-scroll stagger-2">
            <div className="form-wrapper">
              <GlowingEffect
                spread={60}
                glow={true}
                disabled={false}
                proximity={100}
                inactiveZone={0.01}
              />
              <form className="contact-form glass-card" onSubmit={handleSubmit}>
                <h3>Start Your Project</h3>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                  />
                  <label>Your Name</label>
                </div>
                
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    required
                    placeholder=" "
                    maxLength="10"
                  />
                  <label>Phone Number</label>
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder=" "
                  ></textarea>
                  <label>Message</label>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-magnetic"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* <div className="contact-map animate-on-scroll stagger-3">
          <div className="map-container glass-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.4167887446487!2d93.7368!3d25.9044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU0JzE2LjAiTiA5M8KwNDQnMTIuNSJF!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NITI Technologies Location"
            ></iframe>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .contact {
          position: relative;
          background: var(--background);
          padding: 4rem 0;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .contact-info h2 {
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-size: 2.5rem;
          line-height: 1.2;
        }
        
        .info-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-description {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin: 0;
          transition: transform 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-accent), var(--hover-highlight));
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
          box-shadow: 0 5px 15px rgba(65, 146, 203, 0.3);
          transition: all 0.3s ease;
        }
        
        .contact-item:hover .contact-icon {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(65, 146, 203, 0.5);
        }

        .contact-item h4 {
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          font-size: 1.1rem;
        }

        .contact-item p {
          color: var(--text-secondary);
          margin: 0;
        }

        .contact-social {
          color: var(--text-primary);
          margin-top: 2rem;
        }
        
        .contact-social h4 {
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-link-wrapper {
          position: relative;
          height: 45px;
          width: 45px;
          border-radius: 50%;
          padding: 0.2rem;
          transition: var(--transition-smooth);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .social-link:hover {
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          color: white;
          transform: translateY(-2px);
        }
        
        .social-icon {
          transition: transform 0.3s ease;
        }
        
        .social-link:hover .social-icon {
          transform: scale(1.2);
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .form-wrapper {
          position: relative;
          height: 100%;
          display: flex;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          transition: var(--transition-smooth);
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .form-wrapper:hover {
          border-color: var(--primary-accent);
          transform: translateY(-5px);
        }

        .contact-form {
          position: relative;
          padding: 3rem 2rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid transparent;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .contact-form h3 {
          color: var(--text-primary);
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .form-group {
          position: relative;
          margin-bottom: 2rem;
        }

        /* Last form group should have no extra bottom margin */
        .form-group:last-of-type {
          margin-bottom: 2.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: var(--text-primary);
          font-size: 1rem;
          transition: var(--transition-smooth);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-accent);
          background: rgba(255, 255, 255, 0.08);
        }

        /* Fix for autofill background color */
        .form-group input:-webkit-autofill,
        .form-group input:-webkit-autofill:hover,
        .form-group input:-webkit-autofill:focus,
        .form-group input:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s;
          -webkit-text-fill-color: var(--text-primary) !important;
          -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.05) inset;
        }

        .form-group label {
          position: absolute;
          top: 1rem;
          left: 1rem;
          color: var(--text-secondary);
          font-size: 1rem;
          transition: var(--transition-smooth);
          pointer-events: none;
          background: var(--background);
          padding: 0 0.5rem;
        }

        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label,
        .form-group textarea:focus + label,
        .form-group textarea:not(:placeholder-shown) + label {
          top: -0.5rem;
          left: 0.5rem;
          font-size: 0.8rem;
          color: var(--primary-accent);
        }

        .contact-form button {
          width: 100%;
          justify-content: center;
          margin-top: auto;
        }

        .contact-form button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        /* Animation classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-on-scroll.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stagger-1 {
          transition-delay: 0.1s;
        }
        
        .stagger-2 {
          transition-delay: 0.3s;
        }
        
        .stagger-3 {
          transition-delay: 0.5s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info h2 {
            font-size: 2rem;
          }

          .social-links {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
