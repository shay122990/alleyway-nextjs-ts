import styles from "./ImageInfoBox.module.css"
import ImageBox from "@/components/common/image-box/Image-Box";
import Links from "@/components/common/links/Links";
import serviceImage1 from '@/public/images/projects-image1.jpg';
import { div } from "framer-motion/client";

const ImageInfoBox = () => {
  return (
    <div className={styles.exhibitionsContainer}>
        <h2>Exhibitions & trade shows</h2>
        <div className={styles.exhibitionsInfoContainer}>
            <div className={styles.exhibitionSection}>
              <div className={styles.exhibitionImageContainer}>
                <ImageBox imageSrc={serviceImage1} />
                <Links href="/projects/#exhibitions&tradeshows">
                  <span className={styles.viewMoreLink}>View More</span>
                </Links>
              </div>
              <div className={styles.exhibitionInfoSection}>
                <h3>Booth Design & Set up</h3>
                <p>We create eye-catching, custom booth designs that make your brand stand out. From concept to setup, we ensure your booth captures attention and delivers a memorable experience, driving engagement and leaving a lasting impact.</p>
              </div>
            </div>

            <div className={styles.exhibitionSection}>
              <div className={styles.exhibitionImageContainer}>
                <ImageBox imageSrc={serviceImage1} />
                <Links href="/projects/#exhibitions&tradeshows">
                  <span className={styles.viewMoreLink}>View More</span>
                </Links>
              </div>
              <div className={styles.exhibitionInfoSection}>
                <h3>Logistics Management</h3>
                <p>We manage all logistical aspects of your event, ensuring smooth operations and timely deliveries.</p>
              </div>
            </div>

            <div className={styles.exhibitionSection}>
              <div className={styles.exhibitionImageContainer}>
                <ImageBox imageSrc={serviceImage1} />
                <Links href="/projects/#exhibitions&tradeshows">
                  <span className={styles.viewMoreLink}>View More</span>
                </Links>
              </div>
              <div className={styles.exhibitionInfoSection}>
                <h3>On-site Coordination</h3>
                <p>Our experienced team ensures everything runs smoothly on the event day, from setup to teardown.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ImageInfoBox
