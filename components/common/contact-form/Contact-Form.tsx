'use client';

import { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import Button from '../buttons/Button';
import WhatsApp from '../whatsapp/WhatsApp';
import styles from './Contact-Form.module.css';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.contactInfo}>
        <h2 className={styles.formTitle}>Contact Us</h2>
        <p className={styles.formDescription}>
          Please fill out the form with your event requirements and we will contact you shortly.
          <br />
          Alternatively, you can contact us directly through{' '}
           WhatsApp
        </p>
        {isMounted && <span className={styles.contactFormWhatsApp}><WhatsApp /></span>}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <div className={styles.field}>
          <label htmlFor='name' className={styles.label}>
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className={styles.input}
            {...register('name', { required: true })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor='email' className={styles.label}>
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className={styles.input}
            {...register('email', { required: true })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor='message' className={styles.label}>
            Message
          </label>
          <textarea
            rows={5}
            placeholder='Type your message'
            className={styles.inputMessage}
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <Button buttonType="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
