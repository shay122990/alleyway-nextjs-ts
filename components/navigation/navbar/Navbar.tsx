'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; 
import Icons from '../../common/icons/Icons';
import Links from '@/components/common/links/Links'; 
import styles from './Navbar.module.css';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import WhatsApp from '@/components/common/whatsapp/WhatsApp';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </div>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.menu}>
          {navItems.map(({ href, label }, index) => (
            <li key={index} className={pathname === href ? styles.active : ''}>
              <Links href={href} onClick={closeMenu}>
                {label}
              </Links>
            </li>
          ))}
        </ul>
        <Icons />
      </div>
      {isMobile && <WhatsApp className={styles.navbarWhatsApp}/>}
    </nav>
  );
}
