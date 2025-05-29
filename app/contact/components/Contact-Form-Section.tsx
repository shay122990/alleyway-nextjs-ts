"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendEmail } from "@/utils/send-email";
import MessageDisplay from "./Message-Display";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: FormData) {
    setLoading(true);
    try {
      await sendEmail(data);
      setMessage({ text: "Your message was sent successfully! We will contact you shortly.", type: "success" });
      setTimeout(() => {
        reset();
        setMessage(null);
      }, 3000);
    } catch (error) {
      setMessage({ text: "There was an error sending your message. Please try again, or WhatsApp us.", type: "error" });
    } finally {
      setLoading(false);
    }
  }

  const handleCloseMessage = () => {
    setMessage(null);
  };

  return (
    <section id="contact-form" className="relative py-24 px-6 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2bbfbb10] to-[#df8a1610] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/images/logo-icons/alleyway%20logo_icon_teal%20variation.png')] bg-cover bg-right opacity-10 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
        <div className="w-full md:w-1/2 mt-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6"> Let’s Build Something Extraordinary.</h2>
          <p className="tex-xl text-lightMustard pb-5">Whether you’re launching a game-changing brand activation, producing an unforgettable event, or orchestrating a seamless exhibition, we’re here to make it happen.</p>
          <p className="text-white mb-8 text-2xl">
            Please fill out the form with your event requirements and we will contact you shortly.
            <br />
            Alternatively, you can contact us directly through
            <a
              href="https://wa.me/+971528182368"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline underline-offset-4 decoration-tealCustom hover:decoration-mustard transition"
            >
              WhatsApp
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/2">
          {!message && (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="text-tealCustom mb-1 block">Full Name</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-3 py-2 border border-tealCustom rounded-md focus:outline-none focus:border-4 transition"
                  placeholder="Name"
                  autoComplete="name"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>

              <div>
                <label htmlFor="email" className="text-tealCustom mb-1 block">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-3 py-2 border border-tealCustom rounded-md focus:outline-none focus:border-4 transition"
                  placeholder="example@domain.com"
                  autoComplete="email"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>

              <div>
                <label htmlFor="message" className="text-tealCustom mb-1 block">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-3 py-2 border border-tealCustom rounded-md focus:outline-none focus:border-4 transition resize-vertical"
                  placeholder="How can we assist you?"
                  autoComplete="off"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-tealCustom text-white py-4 rounded-md font-semibold hover:bg-mustard transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          )}

          {message && (
            <div className="mt-6">
              <MessageDisplay message={message.text} type={message.type} onClose={handleCloseMessage} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
