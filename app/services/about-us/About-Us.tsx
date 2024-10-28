import styles from "./About-Us.module.css";
import Card from "../components/card/Card";


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
        {aboutUsData.map((section, index) => (
          <Card 
            key={index} 
            title={section.title} 
            description={section.description} 
            stylesClass={section.stylesClass}  
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
