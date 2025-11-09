import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* We add the global 'container' class here */}
      <div className={`container ${styles.navbarContainer}`}>
        <div className={styles.brand}>Rooh Yatra</div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <a href="#gallery" className={styles.navLink}>Our Work</a>
          <a href="#mission" className={styles.navLink}>Mission</a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`button-primary ${styles.contactButton}`} // Mix global and local styles
          >
            Contact Us
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuButton}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.mobileMenu}
        >
          <a href="#gallery" onClick={() => setIsOpen(false)} className={styles.navLink}>Our Work</a>
          <a href="#mission" onClick={() => setIsOpen(false)} className={styles.navLink}>Mission</a>
          <motion.a
            href="#contact"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`button-primary ${styles.contactButton}`}
          >
            Contact Us
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;