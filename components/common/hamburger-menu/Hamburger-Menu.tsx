// components/Hamburger.tsx
'use client';
import { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import NavbarNavLinks from '@/components/layout/navigation-links/navbar-nav-links/Navbar-Nav-Links';
import WhatsApp from '@/components/common/whatsapp/WhatsApp';
import styles from '@/components/layout/navbar/Navbar.module.css';

export default function Hamburger() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false); // No need to rename, since it's not conflicting anymore
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 1024);
      
      handleResize(); // Check initial size
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </div>
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <NavbarNavLinks closeMenu={closeMenu} /> {/* Pass closeMenu to NavLinks */}
        </div>
        {isMobile && <WhatsApp className={styles.navbarWhatsApp} />}
      </>
    );
  }