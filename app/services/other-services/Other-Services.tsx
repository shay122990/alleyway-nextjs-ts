import styles from "./Other-Services.module.css";
import Card from "../components/card/Card";

interface Service {
  title: string;
  list: string[];
  stylesClass: string;
}

interface OtherServicesProps {
  title: string;
  services: Service[];
}

const OtherServices: React.FC<OtherServicesProps> = ({ title, services }) => {
  return (
    <div className={styles.otherServicesContainer} id="other-services">
      <h2>{title}</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <Card 
            key={index} 
            title={service.title} 
            list={service.list} 
            stylesClass={service.stylesClass} 
          />
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
