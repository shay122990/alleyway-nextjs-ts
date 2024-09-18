import { StaticImageData } from 'next/image';
import styles from './Hero.module.css';
import Logo from '../../logo/Logo';

interface HeroProps {
  image: string | StaticImageData; 
  title: string;
  paragraph: string;
}

const Hero = ({ image, title, paragraph }: HeroProps) => {
  const backgroundImage = typeof image === 'string' ? image : image.src;

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    > 
     <div className={styles.heroContent}>
        <Logo />
        <div className={styles.heroInfo}>
          <h1>{title}</h1>
          <p>{paragraph}</p>      
        </div>
      </div>
    </div>
  );
};

export default Hero;
