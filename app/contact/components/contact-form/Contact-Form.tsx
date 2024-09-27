"use client";
import styles from './Contact-Form.module.css';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { motion } from 'framer-motion';
import Button from '@/components/common/buttons/Button';
import MessageDisplay from '../message-display/Message-Display';
import ReCAPTCHA from 'react-google-recaptcha'; // Import the reCAPTCHA component

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null); 

  async function onSubmit(data: FormData) {
    if (!captchaValue) {
      setMessage({ text: 'Please complete the reCAPTCHA.', type: 'error' });
      return;
    }

    try {
      await sendEmail(data);
      setMessage({ text: 'Your message was sent successfully! We will contact you shortly', type: 'success' });
      reset(); 
      setCaptchaValue(null); 
    } catch (error) {
      setMessage({ text: 'There was an error sending your message. Please try again, or WhatsApp us. ', type: 'error' });
    }
  }

  const handleCloseMessage = () => {
    setMessage(null); 
  };

  return (
    <motion.div 
      className={styles.formContainer} 
      id="contact-form"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.contactInfo}>
        <h2 className={styles.formTitle}>LET US TAKE IT FROM HERE ...</h2>
        <motion.div 
          className={styles.formDescription}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            Please fill out the form with your event requirements and we will contact you shortly.
            <br />
            Alternatively, you can contact us directly through{' '}
            <a href="https://wa.me/+971528182368" target="_blank" rel="noopener noreferrer" className={styles.waLink}>
              WhatsApp
            </a>
          </p>
        </motion.div>
      </div>

      {!message && (
        <motion.form 
          onSubmit={handleSubmit(onSubmit)} 
          className={styles.contactForm}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div className={styles.field} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.4 }}>
            <label htmlFor='name' className={styles.label}>
              Full Name
            </label>
            <input
              type='text'
              placeholder='Name'
              className={styles.input}
              {...register('name', { required: true })}
            />
          </motion.div>
          <motion.div className={styles.field} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
            <label htmlFor='email' className={styles.label}>
              Email Address
            </label>
            <input
              type='email'
              placeholder='example@domain.com'
              className={styles.input}
              {...register('email', { required: true })}
            />
          </motion.div>
          <motion.div className={styles.field} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.6 }}>
            <label htmlFor='message' className={styles.label}>
              Message
            </label>
            <textarea
              rows={5}
              placeholder='How can we assist you?'
              className={styles.inputMessage}
              {...register('message', { required: true })}
            ></textarea>
          </motion.div>
          
          {/* continue set up after  google set up*/}
          <motion.div className={styles.field} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.7 }}>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || ""}
              onChange={(value: string | null) => setCaptchaValue(value)} 
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <Button buttonType="submit">Submit</Button>
          </motion.div>
        </motion.form>
      )}

      {message && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MessageDisplay message={message.text} type={message.type} onClose={handleCloseMessage} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactForm;
