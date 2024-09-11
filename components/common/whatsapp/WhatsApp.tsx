import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = ({ className = '' }) => {
  const whatsappURL = "https://wa.me/1234567890"; 

  const handleClick = () => {
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`${className}`} 
      onClick={handleClick}
      aria-label="Open WhatsApp"
    >
      <FaWhatsapp />
    </div>
  );
}

export default WhatsApp;
