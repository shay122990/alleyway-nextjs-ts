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
        image={aboutImage} 
        title="Always up to the challenge!" 
        paragraph="The Projects we've successfully completed"
        titleClassName={styles.projectsTitle}
        paragraphClassName={styles.projectsParagraph}
      />
      <main className={styles.main}>
        <div className={styles.projectSection} id="exhibitions&tradeshows">
          <div className={styles.section1ProjectsImages}>
            <ImageBox imageSrc={projectsPageImages.image1} />
            <ImageBox imageSrc={projectsPageImages.image2} />
            <ImageBox imageSrc={projectsPageImages.image3} />
            <h2>The flawless design with effortless solutions</h2>
          </div>
        </div>
        <div className={styles.projectSection}>
          <div className={styles.section2ProjectsImages}>
            <ImageBox imageSrc={projectsPageImages.image1} />
            <div className={styles.section2Info}>
              <h2>The experience</h2>
              <p>Praesent efficitur sodales elit, sed porta nisl dignissim eget. Fusce vitae pretium ante.</p> 
            </div>
          </div>
        </div>
        <hr className={styles.section2Hr} />
        <div className={styles.projectSection} id="private-events">
          <div className={styles.section3ProjectsImages}>
            <ImageBox imageSrc={projectsPageImages.image1} />
            <ImageBox imageSrc={projectsPageImages.image2} />
            <ImageBox imageSrc={projectsPageImages.image3} />
          </div>
        </div>
        <div className={styles.projectSection} id="creative-services">
          <div className={styles.section4ProjectsImages}>
            <div className={styles.section4Info}>
              <h2>Stage Up</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <ImageBox imageSrc={projectsPageImages.image1} />
          </div>
        </div>
        <div className={styles.projectSection} id="audio&visual">
          <hr className={styles.section5Hr} />
          <div className={styles.section5ProjectsImages}>
            <ImageBox imageSrc={projectsPageImages.image1} />
            <ImageBox imageSrc={projectsPageImages.image2} />
            <ImageBox imageSrc={projectsPageImages.image3} />
            <ImageBox imageSrc={projectsPageImages.image4} />
          </div>
        </div>
      </main>
    </>
  );
}
