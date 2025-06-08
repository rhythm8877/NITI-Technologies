import { motion, useAnimation, useInView } from "framer-motion";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { GlowingEffect } from "./ui/glowing-effect.jsx";

const gridItems = [
  {
    areaClass: "grid-area-1",
    icon: <Box className="icon" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
  },
  {
    areaClass: "grid-area-2",
    icon: <Settings className="icon" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
  },
  {
    areaClass: "grid-area-3",
    icon: <Lock className="icon" />,
    title: "UI/UX Design",
    description: "User-centered design that delivers exceptional digital experiences",
  },
  {
    areaClass: "grid-area-4",
    icon: <Sparkles className="icon" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions",
  },
  {
    areaClass: "grid-area-5",
    icon: <Search className="icon" />,
    title: "Digital Strategy",
    description: "Comprehensive digital transformation consulting and strategy",
  },
];

// Animation variants for grid container
const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Animation variants for individual grid items
const itemVariants = {
  hidden: { 
    y: 50, 
    opacity: 0,
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.7
    }
  }
};

const Services = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>What We Do</h2>
          <p>We craft digital solutions that empower businesses and transform ideas into reality</p>
        </motion.div>

        <motion.ul 
          className="grid-container"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              areaClass={item.areaClass}
              icon={item.icon}
              title={item.title}
              description={item.description}
              variants={itemVariants}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

const GridItem = ({ areaClass, icon, title, description, variants }) => {
  return (
    <motion.li 
      className={`grid-item ${areaClass}`}
      variants={variants}
    >
      <div className="item-wrapper">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="content-wrapper">
          <div className="content">
            <div className="icon-wrapper">{icon}</div>
            <div className="text-container">
              <h3 className="title">{title}</h3>
              <h2 className="description">{description}</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default Services;

// Add the CSS styles
const styles = `
  .services {
    position: relative;
    padding: var(--section-padding);
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
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

  /* Grid Container */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 0;
    margin: 0 auto;
    max-width: 1200px;
  }

  @media (min-width: 768px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(2, minmax(180px, auto));
      gap: 1.25rem;
    }
    
    .grid-area-1 {
      grid-column: 1 / span 6;
      grid-row: 1;
    }
    
    .grid-area-2 {
      grid-column: 7 / span 6;
      grid-row: 1;
    }
    
    .grid-area-3 {
      grid-column: 9 / span 4;
      grid-row: 2;
    }
    
    .grid-area-4 {
      grid-column: 1 / span 4;
      grid-row: 2;
    }
    
    .grid-area-5 {
      grid-column: 5 / span 4;
      grid-row: 2;
    }
  }

  /* Grid Item */
  .grid-item {
    min-height: 180px;
    list-style: none;
    display: flex;
  }

  @media (max-width: 767px) {
    .grid-item {
      margin-bottom: 1rem;
    }
    .grid-item:last-child {
      margin-bottom: 0;
    }
  }

  .item-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    transition: border-color 0.3s ease;
  }

  .item-wrapper:hover {
    border-color: var(--primary-accent);
    background: rgba(255, 255, 255, 0.05);
  }

  .content-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    overflow: hidden;
    border-radius: 0.75rem;
    padding: 1.25rem;
    border: 0.75px solid transparent;
  }

  .content {
    position: relative;
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
  }

  .icon-wrapper {
    width: fit-content;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.625rem;
    background: rgba(255, 255, 255, 0.05);
    transition: background-color 0.3s ease;
    margin-bottom: 0.5rem;
  }

  .item-wrapper:hover .icon-wrapper {
    background: rgba(255, 255, 255, 0.1);
  }

  .icon {
    height: 1.25rem;
    width: 1.25rem;
    color: var(--primary-accent);
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title {
    padding-top: 0;
    font-family: var(--font-primary);
    font-size: 1.25rem;
    line-height: 1.375rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    color: var(--text-primary);
    margin: 0;
  }

  .description {
    font-family: var(--font-secondary);
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--text-secondary);
    margin: 0;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 1.5rem;
      line-height: 1.875rem;
    }
    .description {
      font-size: 1rem;
      line-height: 1.375rem;
    }
    .description b,
    .description strong {
      font-weight: 600;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
