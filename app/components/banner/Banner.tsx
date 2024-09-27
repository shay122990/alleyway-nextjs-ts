import styles from "./Banner.module.css"
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';


const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          <p>Our Services Are limitless</p>
          <MdOutlineKeyboardDoubleArrowRight  className={styles.bannerSideArrow} />
        </div>
    </div>
  )
}

export default Banner
