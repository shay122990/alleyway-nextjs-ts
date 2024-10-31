import styles from "./Footer.module.css";
import Icons from "@/components/common/icons/Icons";
import Logo from "@/components/common/logo/Logo";
import Button from "@/components/common/buttons/Button";
import Links from "@/components/common/links/Links";
import FooterNavLinks from '../navigation-links/footer-nav-links/Footer-Nav-Links';  

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoIconContainer}>
        <div className={styles.logoFooterContainer}>
          <Logo />
        </div>
        <div className={styles.socialMediaContainer}>
          <Icons />
          <p className={styles.socialIntro}>
            Stay connected with us for the latest updates, exclusive offers, and more! <br /> Follow us on our social media platforms and be part of our community.
          </p>
        </div>
      </div>
      <div className={styles.companyContactContainer}>
        <div className={styles.quoteContainer}>
          <h3>Ready to launch your next project?</h3>
          <p>We make event and project management a seamless experience.</p>
          <Links href="/contact#contact-form">
            <Button buttonType="primary">Book Us</Button>
          </Links>
        </div>
        <FooterNavLinks />  
      </div>
    </footer>
  );
}
