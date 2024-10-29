import styles from './CardFlip.module.css';

interface CardFlipProps {
  title: string;
  description: string;
  stylesClass: string;
}

const CardFlip: React.FC<CardFlipProps> = ({ title, description, stylesClass }) => {
  return (
    <div className={`${styles.flipCardContainer} ${stylesClass ? styles[stylesClass] : ''}`}>
      <div className={styles.cardInner}>
        <div className={`${styles.cardFront} ${styles.cardFace}`}>
          <h3>{title}</h3>
        </div>
        <div className={`${styles.cardBack} ${styles.cardFace}`}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
