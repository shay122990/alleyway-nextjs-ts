import Icons from "@/components/common/icons/Icons"
import styles from "./Footer.module.css"
import Logo from "@/components/logo/Logo"
import Button from "@/components/common/Button"


export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoIconContainer}>
        <div className={styles.logoInfo}>
          <Logo/>
          <p className={styles.footerIntro}>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>
        <div className={styles.socialMedia}>
          <Icons/>
        </div>
      </div>
      <div className={styles.companyContactContainer}>
      <div className={styles.quoteContainer}>
        <h3>Ready to launch your next project?</h3>
        <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        <Button />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.company}>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.services}>
          <h4>Services</h4>
          <ul>
            <li>Exhibitions & Trade Shows</li>
            <li>Private Events</li>
            <li>Creative Services</li>
            <li>Audio & Visual</li>
          </ul>
        </div>
      </div>
      </div>
      
      
    </div>
  )
}
