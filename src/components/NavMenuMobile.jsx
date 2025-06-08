import { motion } from "framer-motion";
import React from "react";
import styles from "./Header.module.css";

const NavMenuMobile = ({ 
  isOpen, 
  items, 
  onClose, 
  onNavigation, 
  onStartProject, 
  activeSection,
  isProjectsPage
}) => {
  return (
    <motion.div
      className={styles.mobileMenu}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isOpen ? 1 : 0, 
        y: isOpen ? 0 : -20, 
        display: isOpen ? "flex" : "none" 
      }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.mobileNavItems}>
        {items.map(({ name, section, href }) => {
          const isActive = activeSection === section || 
                          (isProjectsPage && section === "projects");
          
          return (
            <a
              key={name}
              href={href}
              onClick={(e) => onNavigation(e, section, href)}
              className={isActive ? styles.activeNavItem : styles.navItem}
            >
              {name}
            </a>
          );
        })}
      </div>
      <div className={styles.mobileButtons}>
        <a
          className={styles.startProjectBtn}
          href="#contact"
          onClick={onStartProject}
        >
          Start Project
        </a>
      </div>
    </motion.div>
  );
};

export default NavMenuMobile; 