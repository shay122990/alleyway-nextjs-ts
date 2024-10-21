import styles from "./Card.module.css";

interface CardProps {
  title: string;
  list: string[];
  stylesClass: string; 
}

const Card: React.FC<CardProps> = ({ title, list, stylesClass }) => {
  return (
    <div className={`${styles.card} ${styles[stylesClass]}`}> 
      <h3>{title}</h3>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
