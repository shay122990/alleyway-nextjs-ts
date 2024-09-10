'use client';

import styles from "./Contact-Form.module.css"

import {FC} from 'react';
import { useForm } from "react-hook-form";
import {sendEmail} from "@/utils/send-email";

export type FormData = {
    name: string;
    email: string;
    message: string;
  };

const ContactForm: FC = () => {

    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
      sendEmail(data);
    }

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
      <div className=''>
        <label
          htmlFor='name'
          className=''
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className=''
          {...register('name', { required: true })}
        />
      </div>
      <div className=''>
        <label
          htmlFor='email'
          className=''
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className=''
          {...register('email', { required: true })}
        />
      </div>
      <div className=''>
        <label
          htmlFor='message'
          className=''
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className=''
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className=''>
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
