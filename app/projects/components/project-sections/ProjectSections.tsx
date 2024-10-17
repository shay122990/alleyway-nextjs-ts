"use client"
import styles from "./ProjectSections.module.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageBox from "@/components/common/image-box/Image-Box";
import { projectsPageImages } from '@/data/ProjectsPageData';

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 0 }, 
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.6 } },
};


const ProjectSections = () => {
  const [refExhibition, inViewExhibition] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refPrivate, inViewPrivate] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refCreative, inViewCreative] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refAudio, inViewAudio] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className={styles.projectSectionsContainer}>
      <motion.section
        ref={refExhibition}
        variants={sectionVariants}
        initial={{ ...sectionVariants.hidden, x: 100 }} 
        animate={inViewExhibition ? sectionVariants.visible : sectionVariants.exit}
        className={styles.projectSection1}
        id="exhibitions&tradeshows"
      >
        <div className={styles.exhibitionsRow1}>
          <ImageBox imageSrc={projectsPageImages.image3} />
          <ImageBox imageSrc={projectsPageImages.image2} />
        </div>
        <div className={styles.exhibitionsRow2}>
          <h2>The flawless design with effortless solutions</h2>
          <ImageBox imageSrc={projectsPageImages.image1} />
        </div>
      </motion.section>

      <motion.section
        ref={refPrivate}
        variants={sectionVariants}
        initial={{ ...sectionVariants.hidden, x: -100 }} 
        animate={inViewPrivate ? sectionVariants.visible : sectionVariants.exit}
        className={styles.projectSection3}
        id="private-events"
      >
        <div className={styles.privateSection}>
          <ImageBox imageSrc={projectsPageImages.image3} />
          <ImageBox imageSrc={projectsPageImages.image2} />
          <ImageBox imageSrc={projectsPageImages.image1} />
        </div>
      </motion.section>

      <motion.section
        ref={refCreative}
        variants={sectionVariants}
        initial={{ ...sectionVariants.hidden, x: -100 }} 
        animate={inViewCreative ? sectionVariants.visible : sectionVariants.exit}
        className={styles.projectSection4}
        id="creative-services"
      >
        <div className={styles.creativeSection}>
          <div className={styles.creativeSectionInfo}>
            <h2>Stage Up</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <ImageBox imageSrc={projectsPageImages.image1} />
        </div>
      </motion.section>

      <motion.section
        ref={refAudio}
        variants={sectionVariants}
        initial={{ ...sectionVariants.hidden, x: -100 }} 
        animate={inViewAudio ? sectionVariants.visible : sectionVariants.exit}
        className={styles.projectSection5}
        id="audio&visual"
      >
        <hr className={styles.section5Hr} />
        <div className={styles.audioSection}>
          <ImageBox imageSrc={projectsPageImages.image1} />
          <ImageBox imageSrc={projectsPageImages.image2} />
          <ImageBox imageSrc={projectsPageImages.image3} />
          <ImageBox imageSrc={projectsPageImages.image4} />
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectSections;
