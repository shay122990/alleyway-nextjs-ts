import styles from "./Projects.module.css";
import Head from 'next/head';
import aboutImage from "@/public/images/about-image.jpg";
import Hero from "@/components/layout/hero/Hero";
import ImageBox from "@/components/common/image-box/Image-Box";
import projectImage1 from '@/public/images/projects-image1.jpg';
import projectImage2 from '@/public/images/projects-image2.jpg';
import projectImage3 from '@/public/images/projects-image3.jpg';
import projectImage4 from '@/public/images/projects-image4.jpg';


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
        <div className={styles.projectSections}>
          <div className={styles.projectSection} id="exhibitions&tradeshows">
            <div className={styles.section1ProjectsImages}>
              <ImageBox imageSrc={projectImage1}/>
              <ImageBox imageSrc={projectImage2}/>
              <ImageBox imageSrc={projectImage3}/>
              <h2>The flawless design with effortless solutions</h2>
            </div>
          </div>
          <div className={styles.projectSection}>
            <div className={styles.section2ProjectsImages}>
              <ImageBox imageSrc={projectImage1}/>
              <div className={styles.section2Info}>
              <h2>The experience</h2>
              <p>Praesent efficitur sodales elit, sed porta nisl dignissim eget. Fusce vitae pretium ante.</p> 
              </div>
            </div>
          </div>
          <hr className={styles.section2Hr}/>
          <div className={styles.projectSection}>
            <div className={styles.section3ProjectsImages}>
              <ImageBox imageSrc={projectImage1}/>
              <ImageBox imageSrc={projectImage2}/>
              <ImageBox imageSrc={projectImage3}/>
            </div>
          </div>
          <div className={styles.projectSection}>
            <div className={styles.section4ProjectsImages}>
              <div className={styles.section4Info}>
                <h2>Stage Up</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <ImageBox imageSrc={projectImage1}/>
            </div>
          </div>
          <div className={styles.projectSection}>
            <hr className={styles.section5Hr}/>
            <div className={styles.section5ProjectsImages}>
              <ImageBox imageSrc={projectImage1}/>
              <ImageBox imageSrc={projectImage2}/>
              <ImageBox imageSrc={projectImage3}/>
              <ImageBox imageSrc={projectImage4}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
