import { StaticImageData } from "next/image";
import styles from "./Creative-Services.module.css";
import ImageBox from "@/components/common/image-box/Image-Box";

interface CreativeService {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
}

interface CreativeServicesProps {
  creativeServicesData: CreativeService[];
}

const CreativeServices: React.FC<CreativeServicesProps> = ({ creativeServicesData }) => {
  return (
    <div className={styles.creativeServicesContainer}>
      <section className={styles.creativeSectionOne}>
        <ImageBox imageSrc={creativeServicesData[0].imageSrc} altText={creativeServicesData[0].title} />
        <div className={styles.textContainer}>
          <h3 className={styles.serviceTitle}>{creativeServicesData[0].title}</h3>
          <p className={styles.serviceDescription}>{creativeServicesData[0].description}</p>
        </div>
      </section>

      <section className={styles.creativeSectionTwo}>
        <div className={styles.textContainer}>
          <h3 className={styles.serviceTitle}>{creativeServicesData[1].title}</h3>
          <p className={styles.serviceDescription}>{creativeServicesData[1].description}</p>
        </div>
        <ImageBox imageSrc={creativeServicesData[1].imageSrc} altText={creativeServicesData[1].title} />
      </section>

      <section className={styles.creativeSectionThree}>
        <ImageBox imageSrc={creativeServicesData[2].imageSrc} altText={creativeServicesData[2].title} />
        <div className={styles.textContainer}>
          <h3 className={styles.serviceTitle}>{creativeServicesData[2].title}</h3>
          <p className={styles.serviceDescription}>{creativeServicesData[2].description}</p>
        </div>
      </section>
    </div>
  );
};

export default CreativeServices;
