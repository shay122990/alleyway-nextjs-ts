// "use client";
// import styles from './Hero.module.css';
// import { motion } from "framer-motion";
// import { StaticImageData } from 'next/image';
// import Logo from "@/components/logo/Logo"


// interface HeroProps {
//   image: string | StaticImageData;
//   title: string;
//   paragraph: string;
//   titleClassName?: string;
//   paragraphClassName?: string;
// }

// const Hero = ({ image, title, paragraph, titleClassName, paragraphClassName }: HeroProps) => {
//   const backgroundImage = typeof image === 'string' ? image : image.src;

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className={styles.hero}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     > 
//       <div className={styles.heroContent}>
//           <Logo />
//         <div className={styles.heroInfo}>
//           <motion.h1
//             initial={{ x: "100vw", opacity: 0 }} 
//             animate={{ x: 0, opacity: 1 }} 
//             transition={{ type: "tween", duration: 0.7 }}  
//             className={`${styles.heroTitle} ${titleClassName}`}
//           >
//             {title}
//           </motion.h1>
//           <motion.p
//             initial={{ x: "-100vw", opacity: 0 }}  
//             animate={{ x: 0, opacity: 1 }} 
//             transition={{ type: "tween", duration: 0.8, delay: 0.3 }}  
//             className={`${styles.heroParagraph} ${paragraphClassName}`}
//           >
//             {paragraph}
//           </motion.p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;

"use client";
import styles from './Hero.module.css';
import { motion } from "framer-motion";
import { StaticImageData } from 'next/image';
import Logo from "@/components/logo/Logo";

interface HeroProps {
  image?: string | StaticImageData; // Make image prop optional
  video?: string; // New video prop
  title: string;
  paragraph: string;
  titleClassName?: string;
  paragraphClassName?: string;
}

const Hero = ({ image, video, title, paragraph, titleClassName, paragraphClassName }: HeroProps) => {
  const background = video ? (
    <video autoPlay loop muted className={styles.backgroundVideo}>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <div 
      className={styles.backgroundImage}
      style={{ backgroundImage: `url(${typeof image === 'string' ? image : image?.src})` }} 
    />
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.hero}
    >
      {background}
      <div className={styles.heroContent}>
        <Logo />
        <div className={styles.heroInfo}>
          <motion.h1
            initial={{ x: "100vw", opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ type: "tween", duration: 0.7 }}  
            className={`${styles.heroTitle} ${titleClassName}`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ x: "-100vw", opacity: 0 }}  
            animate={{ x: 0, opacity: 1 }} 
            transition={{ type: "tween", duration: 0.8, delay: 0.3 }}  
            className={`${styles.heroParagraph} ${paragraphClassName}`}
          >
            {paragraph}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
