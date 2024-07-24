import { StaticImageData } from 'next/image';
import styles from './Hero.module.css';
import Logo from '../../logo/Logo';

interface HeroProps {
  image: string | StaticImageData; 
}

const Hero = ({ image }: HeroProps) => {
  const backgroundImage = typeof image === 'string' ? image : image.src;

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Logo />
    </div>
  );
};

export default Hero;
