import styles from './Header.module.css';
import Navbar from '../../navigation/navbar/Navbar';
import Logo from '../../logo/Logo';

const Header = () => {
 
  return (
    <div className={styles.header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
