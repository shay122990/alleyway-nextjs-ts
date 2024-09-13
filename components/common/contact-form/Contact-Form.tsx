"use client";
import styles from './Contact-Form.module.css';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import Button from '../buttons/Button';
import MessageDisplay from '../message-display/Message-Display';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data);
      setMessage({ text: 'Your message was sent successfully!', type: 'success' });
      reset(); 
    } catch (error) {
      setMessage({ text: 'There was an error sending your message. Please try again.', type: 'error' });
    }
  }

  const handleCloseMessage = () => {
    setMessage(null); 
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.contactInfo}>
        <h2 className={styles.formTitle}>LET US TAKE IT FROM HERE ...</h2>
        <div className={styles.formDescription}>
          <p>
            Please fill out the form with your event requirements and we will contact you shortly.
            <br />
            Alternatively, you can contact us directly through{' '}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.waLink}>
              WhatsApp
            </a>
          </p>
        </div>
      </div>

      {!message && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
          <div className={styles.field}>
            <label htmlFor='name' className={styles.label}>
              Full Name
            </label>
            <input
              type='text'
              placeholder='Name'
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
              placeholder='How can we assist you?'
              className={styles.inputMessage}
              {...register('message', { required: true })}
            ></textarea>
          </div>
          <div>
            <Button buttonType="submit">Submit</Button>
          </div>
        </form>
      )}

      {message && (
        <MessageDisplay message={message.text} type={message.type} onClose={handleCloseMessage} />
      )}
    </div>
  );
};

export default ContactForm;
