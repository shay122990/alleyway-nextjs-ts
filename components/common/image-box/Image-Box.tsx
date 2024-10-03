// import styles from './Image-Box.module.css';
import Image, { StaticImageData } from 'next/image';

interface ImageBoxProps {
  imageSrc: StaticImageData | string;
  altText?: string;
  className?: string;
  width?: number;   
  height?: number;  
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageSrc, altText = 'Event Image', className, width, height }) => {
  return (
    <div>
      <Image 
        src={imageSrc} 
        alt={altText}
        priority={true}
        width={width}   
        height={height} 
        objectFit='fill'
      />
    </div>
  );
};

export default ImageBox;
