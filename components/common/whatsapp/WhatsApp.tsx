import React from 'react';
import styles from "./WhatsApp.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const whatsappURL = "https://wa.me/1234567890"; 

  const handleClick = () => {
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={styles.whatsapp} 
      onClick={handleClick}
      aria-label="Open WhatsApp"
    >
      <FaWhatsapp />
    </div>
  );
}

export default WhatsApp;
