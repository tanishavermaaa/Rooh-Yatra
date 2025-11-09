import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css'; // Import Hero styles
import HeroBg from '../assets/r2.jpg';

const Hero = () => {
  return (
    <section 
      className={styles.hero}
      style={{ backgroundImage: `url(${HeroBg})` }}
      
      // style={{ backgroundImage: `url(${HeroBg})` }} // Uncomment for BG image
    >
      {/* <div className={styles.overlay}></div> */} {/* Uncomment for BG image overlay */}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.heroContent}
      >
        <h1 className={styles.headline}>
          Discover India. <br />
          <span className={styles.highlight}>Discover Yourself.</span>
        </h1>
        <p className={styles.subheadline}>
          We're documenting our journey through India's culture and traditions. 
          Follow along to find your own inspiration.
        </p>
        <motion.a
          href="#gallery"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className={`button-primary ${styles.heroButton}`} // Use global button, add local tweaks
        >
          Explore Our Journey
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;