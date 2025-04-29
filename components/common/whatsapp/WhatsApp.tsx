"use client"
import React from "react";
import styles from "./WhatsApp.module.css";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppProps {
  className?: string;
  isFloating?: boolean;
  nonce?: string; // Define nonce as optional if you are using it
}

const WhatsApp: React.FC<WhatsAppProps> = ({ className = '', isFloating = false, nonce }) => {
  const whatsappURL = "https://wa.me/+971528182368";

  const handleClick = () => {
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      className={`${isFloating ? styles['floating-whatsapp'] : ''} ${className}`} 
      onClick={handleClick}
      aria-label="Open WhatsApp"
    >
      <FaWhatsapp />
    </button>
  );
};

export default WhatsApp;
