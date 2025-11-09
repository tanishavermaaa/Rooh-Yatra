import React from 'react';
import { motion } from 'framer-motion';
import styles from './Mission.module.css'; 
import MissionImage from '../assets/r3.jpg'; 
// You can move this to its own file (e.g., FadeInWhenVisible.jsx)
// or keep it here if you only use it in this component.
const FadeInWhenVisible = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const Mission = () => {
  return (
    <section id="mission" className={styles.missionSection}>
      <div className="container">
        <FadeInWhenVisible>
          <div className={styles.grid}>
            
            {/* Text Content */}
            <div className={styles.content}>
              <h2 className={styles.title}>
                Our Journey is Your Inspiration
              </h2>
              <p className={styles.text}>
                We aren't just travelers; we're story-seekers. We believe that
                India is not just a place, but a feeling. A mosaic of ancient
                traditions, vibrant cultures, and profound stories.
              </p>
              <p className={styles.text}>
                Our mission is to capture this essence. Through vlogs, photography,
                and art, we hope to inspire you to explore, dream, and find a
                piece of yourself along the way.
              </p>
            </div>
            
            {/* Image */}
            <div className={styles.imageWrapper}>
              <img
                src={MissionImage} // Use the imported image
                alt="Our Mission"
                className={styles.image}
              />
            </div>

          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Mission;