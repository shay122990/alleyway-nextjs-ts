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
      priority={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`${className}`}
      width={width} 
      height={height}
    />
  );
};

export default ImageBox;
