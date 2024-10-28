'use client';

import { usePathname } from 'next/navigation';
import Links from "@/components/common/links/Links";
import styles from "@/components/layout/footer/Footer.module.css";

const footerNavItems = [
  { href: '/services/#about-us', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/services/#exhibitions', label: 'Exhibitions & Trade Shows' },
  { href: '/services/#private-events', label: 'Private Events' },
  { href: '/services/#creative-services', label: 'Creative Services' },
  { href: '/services/#audio-visual', label: 'Audio & Visual' }
];

const companyLinks = footerNavItems.slice(0, 3);
const serviceLinks = footerNavItems.slice(3);

export default function FooterNavLinks() {
  const pathname = usePathname();

  return (
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
  );
}
