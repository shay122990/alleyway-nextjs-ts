'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icons from '../../common/icons/Icons';
import styles from './Navbar.module.css';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import WhatsApp from '@/components/common/whatsapp/WhatsApp';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const closeMenu = () => setIsMenuOpen(false);

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
            <li key={index}>
              <Link href={href} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Icons />
      </div>
      <WhatsApp />
    </nav>
  );
}
