
import styles from './Image-Box.module.css';
import Image, { StaticImageData } from 'next/image';

interface ImageBoxProps {
  imageSrc: StaticImageData | string;
  altText?: string;
  className?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageSrc, altText = 'Event Image', className }) => {
  return (
    <div className={`${styles.imageContainer} ${className}`}>
      <Image 
        src={imageSrc} 
        alt={altText}  
        priority={true}
      />
    </div>
  );
};

export default ImageBox;
