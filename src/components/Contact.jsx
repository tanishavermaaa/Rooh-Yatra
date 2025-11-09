import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from './Contact.module.css'; 
//import ContactBg from '../assets/r4.jpg';

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

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState(null);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setIsSuccess(false);
    setApiError(null);
    try {
      const response = await axios.post(
        'https://vernanbackend.ezlab.in/api/contact-us/',
        data
      );
      if (response.status === 200 || response.status === 201) {
        setIsSuccess(true);
        reset();
      } else {
        setApiError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error); 
      setApiError('Failed to send message. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <FadeInWhenVisible>
          <div className={styles.header}>
            <h2 className={styles.title}>Connect With Us</h2>
            <p className={styles.subtitle}>
              Have a story to share, a place we must visit, or just want to talk?
              We'd love to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            noValidate
          >
            {isSuccess && (
              <div className={styles.successMessage}>
                Form Submitted! We'll be in touch soon.
              </div>
            )}
            {apiError && (
              <div className={styles.errorMessage}>
                {apiError}
              </div>
            )}

            <div className={styles.grid}>
              
              <div className={styles.fieldWrapper}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className={styles.errorText}>{errors.name.message}</p>
                )}
              </div>

              
              <div className={styles.fieldWrapper}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                  })}
                />
                {errors.email && (
                  <p className={styles.errorText}>{errors.email.message}</p>
                )}
              </div>
            </div>

            
            <div className={styles.fieldWrapper}>
              <label htmlFor="phone" className={styles.label}>Phone</label>
              <input
                type="tel"
                id="phone"
                
                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                {...register('phone', { required: 'Phone number is required' })}
              />
              {errors.phone && (
                <p className={styles.errorText}>{errors.phone.message}</p>
              )}
            </div>

            
            <div className={styles.fieldWrapper}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                rows="5"
                
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && (
                <p className={styles.errorText}>{errors.message.message}</p>
              )}
            </div>

            
            <div className={styles.buttonWrapper}>
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`button-primary ${styles.submitButton}`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Contact;