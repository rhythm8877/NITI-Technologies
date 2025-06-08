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
  const navItems = [
    { name: "Home", section: "hero", href: "/" },
    { name: "About", section: "services", href: "/#services" },
    { name: "Projects", section: "projects", href: "/projects" },
    { name: "Contact", section: "contact", href: "/#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(isProjectsPage ? "projects" : "hero");
  const navbarRef = useRef(null);
  
  // Set active section based on URL or current page
  useEffect(() => {
    // If on projects page, set active section to projects
    if (isProjectsPage) {
      setActiveSection("projects");
      return;
    }
    
    // Handle hash-based navigation for home page
    const hash = window.location.hash.replace('#', '');
    
    if (hash) {
      const sectionExists = navItems.some(item => item.section === hash);
      if (sectionExists) {
        setActiveSection(hash);
        
        // Scroll to the section after a short delay to ensure components are rendered
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (isHomePage) {
      setActiveSection("hero");
    }
  }, [location.pathname, isProjectsPage, isHomePage]);
  
  // Use Framer Motion to detect scroll position
  const { scrollY } = useScroll({
    target: navbarRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Function to check which section is currently in view (only on homepage)
  // This only updates the active visual state, not the URL
  useEffect(() => {
    if (!isHomePage) return;
    
    const sections = navItems.map(item => document.getElementById(item.section));
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            setActiveSection(navItems[i].section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, navItems]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Function to handle navigation
  const handleNavigation = (e, sectionId, href) => {
    e.preventDefault();
    closeMobileMenu();
    
    // For home section, don't add a hash
    if (sectionId === "hero") {
      navigate('/');
      setActiveSection("hero");
      window.scrollTo(0, 0);
      return;
    }
    
    // If section is Projects and we're not already on projects page
    if (sectionId === "projects" && !isProjectsPage) {
      navigate('/projects');
      setActiveSection("projects");
      return;
    }
    
    // If section is not Projects but we're on projects page, go to homepage and scroll
    if (sectionId !== "projects" && isProjectsPage) {
      navigate(`/#${sectionId}`);
      return;
    }
    
    // Update URL hash when clicking navigation items (not during scroll)
    navigate(`/#${sectionId}`);
    
    // Scroll to section
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
    
    // If on home page, scroll to contact section and update URL
    navigate('/#contact');
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
          isProjectsPage={isProjectsPage}
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
          isProjectsPage={isProjectsPage}
        />
      </motion.div>
    </motion.div>
  );
}

// --- Desktop Navigation Items ---
const NavItemsDesktop = ({ items, onNavigation, activeSection, isProjectsPage }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={styles.navItems}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.href}
          onClick={(e) => onNavigation(e, item.section, item.href)}
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
const NavMenuMobile = ({ isOpen, items, onClose, onNavigation, onStartProject, activeSection, isProjectsPage }) => (
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
            href={item.href}
            onClick={(e) => onNavigation(e, item.section, item.href)}
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
