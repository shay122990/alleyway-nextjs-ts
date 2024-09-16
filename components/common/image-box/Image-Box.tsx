interface ImageBoxProps {
  imageSrc: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} alt="Event Image" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ImageBox;
