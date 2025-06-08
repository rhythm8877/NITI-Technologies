import React from 'react';
import styles from './Header.module.css';

const NavItemsDesktop = ({ items, onNavigation, activeSection, isProjectsPage }) => {
  return (
    <div className={styles.desktopNavItems}>
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
  );
};

export default NavItemsDesktop; 