'use client'; 
import { usePathname } from 'next/navigation'; 
import Links from '@/components/common/links/Links'; 
import styles from '../../navbar/Navbar.module.css';
import { MdOutlineEmail } from "react-icons/md";

interface NavbarNavLinksProps {
  closeMenu: () => void; 
}

export default function NavbarNavLinks({ closeMenu }: NavbarNavLinksProps) {
  const pathname = usePathname(); 

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: 'mailto:hello@alleywaydxb.com', label: <MdOutlineEmail size={20} /> }
  ];

  return (
    <ul className={styles.menu}>
      {navItems.map(({ href, label }, index) => (
        <li key={index} className={pathname === href ? styles.active : ''}>
          <Links href={href} onClick={closeMenu}>
            {label}
          </Links>
        </li>
      ))}
    </ul>
  );
}



