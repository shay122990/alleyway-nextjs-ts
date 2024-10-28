import React from 'react';
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  list?: string[];
  description?: string;
  stylesClass?: string; 
}

const Card: React.FC<CardProps> = ({ title, list, description, stylesClass }) => {
  return (
    <div className={`${styles.card} ${stylesClass ? styles[stylesClass] : ''}`}> 
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {list && (
        <ul>
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
