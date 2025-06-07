import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from "./Header.module.css";

// Helper function to combine class names conditionally
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// --- Reusable Button Component ---
const NavbarButton = ({
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
  };
  return (
    <Tag className={cn(styles.navbarButton, variantClasses[variant], className)} {...props}>
      {children}
    </Tag>
  );
};

// --- Logo Component ---
const NavbarLogo = () => (
  <img src="/images/NITI-logo.png" alt="NITI Technologies" className={styles.navbarLogo} />
);

// --- Main Header Component ---
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/' || location.pathname === '';
  const isProjectsPage = location.pathname === '/projects';
  
  // Define navigation items
  const homeNavItems = [
    { name: "Home", section: "hero" },
    { name: "About", section: "services" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];
  
  // Only show Home button on projects page
  const projectsNavItems = [
    { name: "Home", section: "hero" },
  ];
  
  // Choose which nav items to display based on current page
  const navItems = isProjectsPage ? projectsNavItems : homeNavItems;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navbarRef = useRef(null);
  
  // Reset active section when navigating to home page
  useEffect(() => {
    if (isHomePage) {
      setActiveSection("hero");
    }
  }, [location.pathname, isHomePage]);
  
  // Use Framer Motion to detect scroll position
  const { scrollY } = useScroll({
    target: navbarRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Function to check which section is currently in view (only on homepage)
  useEffect(() => {
    if (!isHomePage) return;
    
    const sections = homeNavItems.map(item => document.getElementById(item.section));
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            setActiveSection(homeNavItems[i].section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Function to handle navigation
  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    closeMobileMenu();
    
    // If we're on the Projects page and clicking Home
    if (isProjectsPage) {
      setActiveSection("hero");
      navigate('/');
      return;
    }
    
    // If on home page, scroll to section
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle the Start Project button click
  const handleStartProject = (e) => {
    e.preventDefault();
    closeMobileMenu();
    
    if (isProjectsPage) {
      navigate('/#contact');
      return;
    }
    
    // If on home page, scroll to contact section
    setActiveSection("contact");
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div ref={navbarRef} className={styles.navbarContainer}>
      {/* Desktop Navigation */}
      <motion.div
        className={cn(styles.navBody, isScrolled && styles.navBodyScrolled)}
        animate={{
          backdropFilter: isScrolled ? "blur(10px)" : "blur(10px)",
          boxShadow: isScrolled
            ? "0 2px 20px rgba(0, 0, 0, 0.3)"
            : "none",
          width: isScrolled ? "60%" : "100%",
          y: isScrolled ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
      >
        <Link 
          to="/" 
          onClick={() => {
            window.scrollTo(0, 0);
            setActiveSection("hero");
          }}
        >
          <NavbarLogo />
        </Link>
        <NavItemsDesktop 
          items={navItems} 
          onNavigation={handleNavigation} 
          activeSection={activeSection}
        />
        <div className={styles.desktopButtons}>
          <NavbarButton 
            as="a"
            variant="primary"
            href="#contact"
            onClick={handleStartProject}
          >
            Start Project
          </NavbarButton>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        className={cn(styles.mobileNav, isScrolled && styles.mobileNavScrolled)}
        animate={{
          backdropFilter: isScrolled ? "blur(10px)" : "blur(10px)",
          boxShadow: isScrolled
            ? "0 2px 20px rgba(0, 0, 0, 0.3)"
            : "none",
          width: isScrolled ? "90%" : "100%",
          paddingRight: isScrolled ? "12px" : "0px",
          paddingLeft: isScrolled ? "12px" : "0px",
          borderRadius: isScrolled ? "4px" : "2rem",
          y: isScrolled ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
      >
        <div className={styles.mobileNavHeader}>
          <Link 
            to="/" 
            onClick={() => {
              window.scrollTo(0, 0);
              setActiveSection("hero");
            }}
          >
            <NavbarLogo />
          </Link>
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <IconX className={styles.menuIcon} /> : <IconMenu2 className={styles.menuIcon} />}
          </div>
        </div>
        <NavMenuMobile 
          isOpen={isMobileMenuOpen} 
          items={navItems} 
          onClose={closeMobileMenu} 
          onNavigation={handleNavigation}
          onStartProject={handleStartProject}
          activeSection={activeSection}
        />
      </motion.div>
    </motion.div>
  );
}

// --- Desktop Navigation Items ---
const NavItemsDesktop = ({ items, onNavigation, activeSection }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={styles.navItems}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={`#${item.section}`}
          onClick={(e) => onNavigation(e, item.section)}
          onMouseEnter={() => setHovered(idx)}
          className={cn(
            styles.navLink, 
            activeSection === item.section && styles.active
          )}
        >
          {(hovered === idx || activeSection === item.section) && (
            <motion.div
              layoutId="hovered"
              className={styles.hoveredBackground}
            />
          )}
          <span className={styles.navLinkText}>{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

// --- Mobile Navigation Menu ---
const NavMenuMobile = ({ isOpen, items, onClose, onNavigation, onStartProject, activeSection }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.mobileMenu}
      >
        {items.map((item, idx) => (
          <a
            key={`mobile-link-${idx}`}
            href={`#${item.section}`}
            onClick={(e) => onNavigation(e, item.section)}
            className={cn(
              styles.mobileNavLink,
              activeSection === item.section && styles.active
            )}
          >
            {item.name}
          </a>
        ))}
        <div className={styles.mobileMenuButtons}>
          <NavbarButton 
            href="#contact"
            onClick={onStartProject} 
            variant="primary" 
            className={styles.fullWidth}
          >
            Start Project
          </NavbarButton>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
