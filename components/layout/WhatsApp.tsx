"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppProps {
  className?: string;
  isFloating?: boolean;
  nonce?: string;
}

const WhatsApp: React.FC<WhatsAppProps> = ({ className = '', isFloating = false, nonce }) => {
  const whatsappURL = "https://wa.me/+971528182368";

  const handleClick = () => {
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Open WhatsApp"
      className={`
        ${className}
        ${isFloating ? `hidden md:inline fixed left-5 top-[80%] -translate-y-1/2 z-[1000] bg-transparent text-tealCustom text-[43px] cursor-pointer border-none transition-transform duration-300 hover:scale-125` : ""}`}>
      <FaWhatsapp />
    </button>
  );
};

export default WhatsApp;
