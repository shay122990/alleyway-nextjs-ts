import Link from 'next/link';
import Icons from '../../common/icons/Icons';
import styles from './Navbar.module.css'; 

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <ul>
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
      </div>
      <div className={styles.navIcons}>
       <Icons  />
      </div>
    </nav>
  );
}
