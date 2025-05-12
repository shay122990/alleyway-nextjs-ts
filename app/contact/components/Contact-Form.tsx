"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendEmail } from "@/utils/send-email";
import MessageDisplay from "./message-display/Message-Display";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const teamMembers = [
  {
    name: "Ali",
    position: "CEO & Founder",
    image: "/images/homeHero.webp",
  },
  {
    name: "Miriam",
    position: "Creative Director",
    image: "/images/header-home.jpg",
  },
];

export default function ContactSection() {
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
    <>
      {/* Meet the Team Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-grayCustom">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2bbfbb10] to-[#df8a1610] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[url('/images/logo-icons/alleyway%20logo_icon_teal%20variation.png')] bg-cover bg-right opacity-10 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-mustard">Meet the Team</h2>
          <p className="text-lg text-white">Passionate, talented, and ready to deliver exceptional results.</p>

          <div className="bg-teal-500/40 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">Our Journey</h3>
            <p className="text-base text-white">
              From Freelancers to Global Leaders —<br />
              Now, you will partner with the experts who make things happen directly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-lightMustard">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative py-24 px-6 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2bbfbb10] to-[#df8a1610] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[url('/images/logo-icons/alleyway%20logo_icon_teal%20variation.png')] bg-cover bg-right opacity-10 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">LET US TAKE IT FROM HERE ...</h2>
            <p className="text-base text-white mb-8">
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

          {/* Right: Form */}
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
    </>
  );
}