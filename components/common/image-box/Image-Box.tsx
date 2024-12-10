import styles from './Image-Box.module.css';
import Image, { StaticImageData } from 'next/image';

interface ImageBoxProps {
  imageSrc: StaticImageData | string;
  altText?: string;
  className?: string; 
  width?: number; 
  height?: number;
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageSrc, altText = 'Event Image', className , width, height}) => {
  return (
    <Image
    src={imageSrc}
    alt={altText}
    width={width || 1920}
    height={height || 1080}
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
    priority={false}
    className={`${styles.imageBox} ${className}`}
  />
  
  );
};

export default ImageBox;
