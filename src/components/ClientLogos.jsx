import { useEffect, useRef } from 'react';

const ClientLogos = () => {
  const scrollerRef = useRef(null);

  const clients = [
    { name: 'Government of Nagaland', logo: '🏛️' },
    { name: 'NBSE', logo: '🎓' },
    { name: 'Hornbill Festival', logo: '🦅' },
    { name: 'Nagaland Tourism', logo: '🏔️' },
    { name: 'Baptist Church', logo: '⛪' },
    { name: 'Dimapur Smart City', logo: '🏙️' },
    { name: 'Nagaland Police', logo: '👮' },
    { name: 'Health Department', logo: '🏥' }
  ];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollContent = scroller.querySelector('.scroll-content');
    const scrollWidth = scrollContent.scrollWidth;
    const containerWidth = scroller.offsetWidth;

    if (scrollWidth > containerWidth) {
      scroller.classList.add('animate');
    }
  }, []);

  return (
    <section className="section" id="clients">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by Leading Organizations</h2>
          <p>We've had the privilege of working with prestigious clients across Nagaland</p>
        </div>

        <div className="logos-scroller" ref={scrollerRef}>
          <div className="scroll-content">
            {clients.map((client, index) => (
              <div key={index} className="client-logo">
                <span className="logo-icon">{client.logo}</span>
                <span className="logo-name">{client.name}</span>
              </div>
            ))}
            {clients.map((client, index) => (
              <div key={`duplicate-${index}`} className="client-logo">
                <span className="logo-icon">{client.logo}</span>
                <span className="logo-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          background: var(--section-bg);
          padding: var(--section-padding);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .logos-scroller {
          overflow-x: hidden;
          overflow-y: visible;
          white-space: nowrap;
          position: relative;
          mask-image: linear-gradient(90deg, transparent, black 20%, black 80%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 20%, black 80%, transparent);
          padding: 1rem 0; /* gives vertical space for hover animation */
        }

        .logos-scroller.animate .scroll-content {
          animation: marquee 30s linear infinite;
        }

        .scroll-content {
          display: inline-flex;
          gap: 3rem;
          animation-play-state: running;
          overflow: visible;
          position: relative;
        }

        .logos-scroller:hover .scroll-content {
          animation-play-state: paused;
        }

        .client-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          height: 120px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          transition: var(--transition-smooth);
          cursor: pointer;
          padding: 1rem;
          position: relative;
          z-index: 1;
        }

        .client-logo:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
          border-color: var(--primary-accent);
          box-shadow: 0 0 16px var(--primary-accent);
          z-index: 10;
        }

        .logo-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .logo-name {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-align: center;
          font-weight: 500;
          white-space: normal;
          line-height: 1.3;
        }

        .client-logo:hover .logo-name {
          color: var(--text-primary);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .scroll-content {
            gap: 2rem;
          }

          .client-logo {
            min-width: 120px;
            height: 100px;
            padding: 0.8rem;
          }

          .logo-icon {
            font-size: 2rem;
          }

          .logo-name {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
