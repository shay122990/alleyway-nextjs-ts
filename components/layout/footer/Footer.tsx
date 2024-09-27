'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import Icons from "@/components/common/icons/Icons";
import styles from "./Footer.module.css";
import Logo from "@/components/logo/Logo";
import Button from "@/components/common/buttons/Button";

export default function Footer() {
  const pathname = usePathname(); 

  const footerNavItems = [
    { href: '/services', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/exhibitions', label: 'Exhibitions & Trade Shows' },
    { href: '/private-events', label: 'Private Events' },
    { href: '/creative-services', label: 'Creative Services' },
    { href: '/audio-visual', label: 'Audio & Visual' }
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoIconContainer}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.socialMedia}>
          <Icons />
          <p className={styles.socialIntro}>
            Stay connected with us for the latest updates, exclusive offers, and more! <br/> Follow us on our social media platforms and be part of our community.
          </p>
        </div>
      </div>
      <div className={styles.companyContactContainer}>
        <div className={styles.quoteContainer}>
          <h3>Ready to launch your next project?</h3>
          <p>We make event and project management a seamless experience.</p>
          <Link href="/contact#contact-form">
            <Button buttonType="primary">Book Us</Button>
          </Link>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.company}>
            <h4>Company</h4>
            <ul>
              {footerNavItems.slice(0, 3).map(({ href, label }, index) => (
                <li key={index} className={pathname === href ? styles.active : ''}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.services}>
            <h4>Services</h4>
            <ul>
              {footerNavItems.slice(3).map(({ href, label }, index) => (
                <li key={index} className={pathname === href ? styles.active : ''}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
