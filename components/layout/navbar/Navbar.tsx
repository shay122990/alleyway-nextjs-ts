'use client';
import styles from './Navbar.module.css';

import { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import NavbarNavLinks from '../navigation-links/navbar-nav-links/Navbar-Nav-Links'; 
import Icons from '../../common/icons/Icons';
import Logo from '@/components/common/logo/Logo';
import WhatsApp from '@/components/common/whatsapp/WhatsApp';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </div>
      <div className={styles.heroLogoContainer}>
        <Logo />
      </div>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <NavbarNavLinks closeMenu={closeMenu} />
        <Icons />
      </div>
      {isMobile && <WhatsApp className={styles.navbarWhatsApp}/>}
    </nav>
  );
}
