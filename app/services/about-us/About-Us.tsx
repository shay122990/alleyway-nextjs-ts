import styles from "./About-Us.module.css";
import CardFlip from "../components/card-flip/CardFlip";


interface AboutUsProps {
  aboutUsData: {
    title: string;
    description: string;
    stylesClass: string;  
  }[];
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutUsData }) => {
  return (
    <div id="about-us" className={styles.aboutUsContainer}>
      <div className={styles.aboutUsGrid}>
        <div className={styles.aboutUsTitle}>
          <h2>Who we are</h2>
        </div>
        <div className={styles.aboutInfo}>
        {aboutUsData.map((section, index) => (
          <CardFlip 
            key={index} 
            title={section.title} 
            description={section.description} 
            stylesClass={section.stylesClass}  
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
