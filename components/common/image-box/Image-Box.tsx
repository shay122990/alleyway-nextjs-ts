import styles from "./Image-Box.module.css"
interface ImageBoxProps {
  imageSrc: string;
  altText?: string; 
  customStyle?: React.CSSProperties; 
  className?: string;  
}

const ImageBox: React.FC<ImageBoxProps> = ({
  imageSrc,
  altText = 'Event Image', 
  customStyle = {} ,
  className
}) => {
  return (
    <div className={`${styles.imageBox} ${className}`}  style={{ ...customStyle }}>
      <img
        src={imageSrc}
        alt={altText}
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default ImageBox;
