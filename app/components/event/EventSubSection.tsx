// // EventSubsection.jsx
// import React from 'react';
// import styles from './Events-Section.module.css';
// import ImageBox from '@/components/common/image-box/Image-Box';
// import Links from '@/components/common/links/Links';
// import { IoIosArrowDown } from 'react-icons/io';

// const EventSubsection = ({ title, images, links, sectionClass }) => {
//   return (
//     <section className={`${styles.eventSection} ${sectionClass}`}>
//       <h2>{title}</h2>
//       <div className={`${styles.imageAndLinksContainer} ${sectionClass}`}>
//         <div className={`${sectionClass}Images`}>
//           {images.map((image, index) => (
//             <ImageBox key={index} imageSrc={image} />
//           ))}
//         </div>
//         <ul className={styles.linksContainer}>
//           <IoIosArrowDown className={styles.arrowIconDown} />
//           {links.map((link, index) => (
//             <li key={index}>
//               <Links href={link.href}>{link.name}</Links>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default EventSubsection;
