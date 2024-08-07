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
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/exhibitions', label: 'Exhibitions & Trade Shows' },
    { href: '/private-events', label: 'Private Events' },
    { href: '/creative-services', label: 'Creative Services' },
    { href: '/audio-visual', label: 'Audio & Visual' }
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.logoIconContainer}>
        <div className={styles.logoInfo}>
          <Logo />
          <p className={styles.footerIntro}>
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
        </div>
        <div className={styles.socialMedia}>
          <Icons />
        </div>
      </div>
      <div className={styles.companyContactContainer}>
        <div className={styles.quoteContainer}>
          <h3>Ready to launch your next project?</h3>
          <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          <Button buttonType="primary">Get A Quote</Button>
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
    </div>
  );
}
