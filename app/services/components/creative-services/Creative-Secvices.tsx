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
      {creativeServicesData.map((service, index) => (
        <section key={index} className={styles[`creativeSection${index + 1}`]}>
          <ImageBox imageSrc={service.imageSrc} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </section>
      ))}
    </div>
  );
};

export default CreativeServices;
