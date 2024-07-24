import styles from './Header.module.css';
import Logo from '../../logo/Logo';

const Header = () => {
 
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
};

export default Header;
