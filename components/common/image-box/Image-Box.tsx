
interface ImageBoxProps {
  imageSrc: string;
  altText?: string; 
  width?: string;
  height?: string;
  borderRadius?: string;
  customStyle?: React.CSSProperties; 
}

const ImageBox: React.FC<ImageBoxProps> = ({
  imageSrc,
  altText = 'Event Image', 
  width = '300px', 
  height = '200px', 
  borderRadius = '10px', 
  customStyle = {} 
}) => {
  return (
    <div style={{ width, height, ...customStyle }}>
      <img
        src={imageSrc}
        alt={altText}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: borderRadius
        }}
      />
    </div>
  );
};

export default ImageBox;
