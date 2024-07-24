"use client";

import { useState } from 'react';
import Link from 'next/link';
import Icons from '../../common/icons/Icons';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Using react-icons for hamburger and close icons
import WhatsApp from '@/components/common/whatsapp/WhatsApp';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>     
        </ul>
        <Icons />
      </div>
      <WhatsApp/>
    </nav>
  );
}
