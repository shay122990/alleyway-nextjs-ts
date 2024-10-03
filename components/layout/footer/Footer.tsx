'use client';

import { usePathname } from 'next/navigation'; 
import Icons from "@/components/common/icons/Icons";
import styles from "./Footer.module.css";
import Logo from "@/components/logo/Logo";
import Button from "@/components/common/buttons/Button";
import Links from "@/components/common/links/Links"

export default function Footer() {
  const pathname = usePathname(); 

  const footerNavItems = [
    { href: '/services/#about-us', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/services/#exhibitions&tradeshows', label: 'Exhibitions & Trade Shows' },
    { href: '/services/#private-events', label: 'Private Events' },
    { href: '/services/#creative-services', label: 'Creative Services' },
    { href: '/services/#audio-visual', label: 'Audio & Visual' }
  ];

  const companyLinks = footerNavItems.slice(0, 3);
  const serviceLinks = footerNavItems.slice(3);

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoIconContainer}>
        <div className={styles.logoFooterContainer}>
          <Logo />
        </div>
        <div className={styles.socialMedia}>
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
        <div className={styles.linksContainer}>
          <div className={styles.company}>
            <h4>Company</h4>
            <ul>
              {companyLinks.map(({ href, label }, index) => (
                <li key={index} className={pathname === href ? styles.active : ''}>
                  <Links href={href}>{label}</Links> 
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.services}>
            <h4>Services</h4>
            <ul>
              {serviceLinks.map(({ href, label }, index) => (
                <li key={index} className={pathname === href ? styles.active : ''}>
                  <Links href={href}>{label}</Links> 
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
