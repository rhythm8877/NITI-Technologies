import { useNavigate } from 'react-router-dom';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      title: 'NBSE Connect',
      description: 'Digital platform for Nagaland Board of School Education connecting students, teachers, and administrators',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      category: 'Education',
      androidLink: '#', // To be updated with actual Android download link
      iosLink: '#' // To be updated with actual iOS download link
    },
    {
      id: 2,
      title: 'Hornbill Festival App',
      description: 'Official mobile application for Nagaland\'s premier cultural festival with live updates and booking',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      category: 'Cultural',
      androidLink: '#', // To be updated with actual Android download link
      iosLink: '#' // To be updated with actual iOS download link
    }
  ];

  // Function to navigate to projects page
  const handleViewAllProjects = (e) => {
    e.preventDefault();
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  return (
    <section className="featured-projects section animate-on-scroll" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Showcasing our latest work that's making a difference in Nagaland</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card animate-on-scroll stagger-${index + 1}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="app-download-buttons">
                      <a 
                        href={project.androidLink}
                        className="download-button android-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7Z"></path>
                          <path d="M12 18h.01"></path>
                        </svg>
                        Android
                      </a>
                      <a 
                        href={project.iosLink}
                        className="download-button ios-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                          <path d="M10 2c1 .5 2 2 2 5"></path>
                        </svg>
                        iOS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta animate-on-scroll stagger-3">
          <button 
            className="btn btn-primary btn-magnetic"
            onClick={handleViewAllProjects}
          >
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .featured-projects {
          position: relative;
          padding: var(--section-padding);
          margin-top: 4rem;
          margin-bottom: 4rem;
          background: var(--background);
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .project-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .project-card:hover {
          transform: scale(1.02) rotateX(2deg) rotateY(2deg);
        }

        .project-image {
          position: relative;
          height: 350px;
          overflow: hidden;
          border-radius: 20px;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(15, 26, 34, 0.8), rgba(65, 146, 203, 0.3));
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);
          padding: 2rem;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-overlay-content {
          text-align: center;
          transform: translateY(20px);
          transition: var(--transition-smooth);
        }

        .project-card:hover .project-overlay-content {
          transform: translateY(0);
        }

        .project-category {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          background: var(--primary-accent);
          color: white;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .project-overlay h3 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .project-overlay p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .app-download-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 0.5rem;
          width: 100%;
        }

        .download-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
          width: 140px;
          height: 45px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          white-space: nowrap;
          box-sizing: border-box;
        }

        .android-button {
          background: rgba(65, 146, 203, 0.2);
          color: white;
        }

        .ios-button {
          background: rgba(65, 146, 203, 0.2);
          color: white;
        }

        .download-button svg {
          transition: transform 0.3s ease;
        }

        .download-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(65, 146, 203, 0.3);
          background: var(--primary-accent);
          border-color: var(--primary-accent);
        }
        
        .download-button:hover svg {
          transform: scale(1.2);
        }

        .download-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.7s ease;
        }
        
        .download-button:hover::before {
          left: 100%;
        }

        .projects-cta {
          text-align: center;
          padding-bottom: 0;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: var(--primary-accent);
          color: white;
          text-decoration: none;
          border: none;
          border-radius: 25px;
          font-weight: 500;
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(65, 146, 203, 0.3);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary-accent), var(--hover-highlight));
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .project-image {
            height: 250px;
          }

          .project-overlay {
            padding: 1.5rem;
          }

          .project-overlay h3 {
            font-size: 1.5rem;
          }
          
          .app-download-buttons {
            flex-direction: row;
            gap: 0.5rem;
            align-items: center;
            justify-content: center;
          }
          
          .download-button {
            width: 110px;
            height: 40px;
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 400px) {
          .download-button {
            width: 100px;
            height: 36px;
            padding: 0.5rem 0.7rem;
            font-size: 0.8rem;
          }
          
          .download-button svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;

