import Link from 'next/link';
import styles from "./Banner.module.css";
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Link href="/services#other-services" scroll={false} className={styles.bannerContent}>
          <p>Our Services Are Limitless</p>
          <MdOutlineKeyboardDoubleArrowRight className={styles.bannerSideArrow} />
      </Link>
    </div>
  );
};

export default Banner;
