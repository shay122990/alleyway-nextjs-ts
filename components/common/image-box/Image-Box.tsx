import styles from './Image-Box.module.css';
import Image, { StaticImageData } from 'next/image';

interface ImageBoxProps {
  imageSrc: StaticImageData | string;
  altText?: string;
  className?: string; 
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageSrc, altText = 'Event Image', className }) => {
  return (
    <Image 
      src={imageSrc} 
      alt={altText}
      priority={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`${styles.imageBox} ${className}`}
    />
  );
};

export default ImageBox;
