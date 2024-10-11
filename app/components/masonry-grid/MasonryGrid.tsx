import styles from './MasonryGrid.module.css';
import ImageBox from '@/components/common/image-box/Image-Box';
import Links from '@/components/common/links/Links'; 
import image1 from "@/public/images/image1.jpg";

const MasonryGrid = () => {
  return (
    <div className={styles.masonryContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.imageOverlay}></div>
        <ImageBox
          imageSrc={image1}
          altText="Project image 1"
          className={styles.image1}
        />
        <Links href="/projects">
          <h2 className={styles.titleText}>The projects we've done</h2>
        </Links>
      </div>
    </div>
  );
};

export default MasonryGrid;
