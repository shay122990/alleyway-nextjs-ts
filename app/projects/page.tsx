import styles from "./Projects.module.css";
import Head from 'next/head';
import aboutImage from "@/public/images/about-image.jpg";
import Hero from "@/components/layout/hero/Hero";
import ImageBox from "@/components/common/image-box/Image-Box";
import { projectsPageImages } from '@/data/ProjectsPageData'; 

export default function Project() {
  return (
    <>
      <Head>
        <title>Projects - Alleyway</title>
        <meta name="description" content="The projects we've successfully completed" />
      </Head>
      <Hero 
        width={1920}
        height={1536}
        image={aboutImage} 
        title="Always up to the challenge!" 
        paragraph="The Projects we've successfully completed"
        titleClassName={styles.projectsTitle}
        paragraphClassName={styles.projectsParagraph}
      />
        <div className={styles.projectSection1} id="exhibitions&tradeshows">
          <div className={styles.exhibitionsRow1}>
            <ImageBox imageSrc={projectsPageImages.image3} />
            <ImageBox imageSrc={projectsPageImages.image2} />
          </div>
          <div className={styles.exhibitionsRow2}>
            <h2>The flawless design with effortless solutions</h2>
            <ImageBox imageSrc={projectsPageImages.image1}  />
          </div>
        </div>

        <div className={styles.projectSection2}>
          <div className={styles.exhibitionSection2}>
            <ImageBox imageSrc={projectsPageImages.image1} />
            <div className={styles.exhibitionSection2Info}>
              <h2>The experience</h2>
              <p>Praesent efficitur sodales elit, sed porta nisl dignissim eget. Fusce vitae pretium ante.</p> 
            </div>
          </div>
          <hr className={styles.section2Hr} />
        </div>
        <div className={styles.projectSection3} id="private-events">
          <div className={styles.privateSection}>
            <ImageBox imageSrc={projectsPageImages.image3} />
            <ImageBox imageSrc={projectsPageImages.image2} />
            <ImageBox imageSrc={projectsPageImages.image1} />
          </div>
        </div>
        <div className={styles.projectSection4} id="creative-services">
          <div className={styles.creativeSection}>
            <div className={styles.creativeSectionInfo}>
              <h2>Stage Up</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <ImageBox imageSrc={projectsPageImages.image1} />
          </div>
        </div>
        <div className={styles.projectSection5} id="audio&visual">
          <hr className={styles.section5Hr} />
          <div className={styles.audioSection}>
            <ImageBox imageSrc={projectsPageImages.image1} />
            <ImageBox imageSrc={projectsPageImages.image2} />
            <ImageBox imageSrc={projectsPageImages.image3} />
            <ImageBox imageSrc={projectsPageImages.image4} />
          </div>
        </div>
      </>
  );
}
