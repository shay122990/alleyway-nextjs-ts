// "use client";

// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// interface WhatsAppProps {
//   className?: string;
//   isFloating?: boolean;
// }

// const WhatsApp: React.FC<WhatsAppProps> = ({
//   className = "",
//   isFloating = false,
// }) => {
//   const whatsappURL = "https://wa.me/+971528182368";

//   return (
//     <a
//       href={whatsappURL}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Open WhatsApp"
//       className={`
//         ${className}
//         ${
//           isFloating
//             ? `hidden md:inline fixed left-5 top-[80%] -translate-y-1/2 z-[1000] bg-transparent text-tealCustom text-[43px] cursor-pointer transition-transform duration-300 hover:scale-125`
//             : ""
//         }
//       `}
//     >
//       <FaWhatsapp />
//     </a>
//   );
// };

// export default WhatsApp;

"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppProps {
  className?: string;
  isFloating?: boolean;
}

const WhatsApp: React.FC<WhatsAppProps> = ({
  className = "",
  isFloating = false,
}) => {
  const whatsappURL = "https://wa.me/+971528182368";

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Alleyway on WhatsApp (opens in a new tab)"
      className={`
        ${className}
        ${
          isFloating
            ? `hidden md:inline fixed left-5 top-[80%] -translate-y-1/2 z-[1000]
               bg-transparent text-tealCustom text-[43px] cursor-pointer 
               transition-transform duration-300 hover:scale-125 
               focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard
               focus-visible:ring-offset-2 focus-visible:ring-offset-grayCustom`
            : ""
        }
      `}
    >
      <span className="sr-only">
        Chat with Alleyway on WhatsApp (opens in a new tab)
      </span>
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
};

export default WhatsApp;
