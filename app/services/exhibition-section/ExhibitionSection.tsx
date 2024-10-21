import React from "react";
import styles from "./ExhibitionSection.module.css";
import ImageBox from "@/components/common/image-box/Image-Box";
import Links from "@/components/common/links/Links";
import { StaticImageData } from "next/image";

interface Exhibition {
  title: string;
  description: string;
  imageSrc: StaticImageData; 
  href: string;
}

interface ExhibitionSectionProps {
  title:string;
  exhibitionData: Exhibition[];
}

const ExhibitionSection: React.FC<ExhibitionSectionProps> = ({ title, exhibitionData }) => {
  return (
    <div className={styles.exhibitionsContainer}>
      <h2>{title}</h2>
      <div className={styles.exhibitionsInfoContainer}>
        {exhibitionData.map((exhibition, index) => (
          <div key={index} className={styles.exhibitionSection}>
            <div className={styles.exhibitionImageContainer}>
              <ImageBox imageSrc={exhibition.imageSrc} className={styles.exhibitionImages} />
              <Links href={exhibition.href}>
                <span className={styles.viewMoreLink}>View More</span>
              </Links>
            </div>
            <div className={styles.exhibitionInfoSection}>
              <h3>{exhibition.title}</h3>
              <p>{exhibition.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionSection;
