"use client"
import styles from "./ProjectSections.module.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageBox from "@/components/common/image-box/Image-Box";
import { projectsPageImages } from '@/data/ProjectsPageData';

const sectionVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const ProjectSections = () => {
  const [refExhibition, inViewExhibition] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refPrivate, inViewPrivate] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refCreative, inViewCreative] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refAudio, inViewAudio] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <main className={styles.main}>
      <motion.div
        ref={refExhibition}
        variants={sectionVariants}
        initial="hiddenRight"
        animate={inViewExhibition ? "visible" : "hiddenRight"}
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
      </motion.div>

      <motion.div
        ref={refPrivate}
        variants={sectionVariants}
        initial="hiddenLeft"
        animate={inViewPrivate ? "visible" : "hiddenLeft"}
        className={styles.projectSection3}
        id="private-events"
      >
        <div className={styles.privateSection}>
          <ImageBox imageSrc={projectsPageImages.image3} />
          <ImageBox imageSrc={projectsPageImages.image2} />
          <ImageBox imageSrc={projectsPageImages.image1} />
        </div>
      </motion.div>

      <motion.div
        ref={refCreative}
        variants={sectionVariants}
        initial="hiddenRight"
        animate={inViewCreative ? "visible" : "hiddenRight"}
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
      </motion.div>

      <motion.div
        ref={refAudio}
        variants={sectionVariants}
        initial="hiddenLeft"
        animate={inViewAudio ? "visible" : "hiddenLeft"}
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
      </motion.div>
    </main>
  );
};

export default ProjectSections;
