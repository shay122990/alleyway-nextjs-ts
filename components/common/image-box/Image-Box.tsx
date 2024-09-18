import styles from './Image-Box.module.css';
import Image, { StaticImageData } from 'next/image';

interface ImageBoxProps {
  imageSrc: StaticImageData;
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
        layout='fill'
      />
    </div>
  );
};

export default ImageBox;
