"use client";

import { useState } from 'react';
import Link from 'next/link';
import Icons from '../../common/icons/Icons';
import styles from './Navbar.module.css';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import WhatsApp from '@/components/common/whatsapp/WhatsApp';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <IoCloseOutline/> : <IoMenuOutline/>  }
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
