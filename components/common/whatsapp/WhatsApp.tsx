"use client";
import styles from "./WhatsApp.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = ({ className = '', isFloating = false }) => {
  const whatsappURL = "https://wa.me/+971528182368";

  const handleClick = () => {
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`${isFloating ? styles['floating-whatsapp'] : ''} ${className}`} 
      onClick={handleClick}
      aria-label="Open WhatsApp"
    >
      <FaWhatsapp />
    </div>
  );
}

export default WhatsApp;
