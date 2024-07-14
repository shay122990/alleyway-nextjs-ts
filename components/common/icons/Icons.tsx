import { IconType } from 'react-icons';
import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './Icons.module.css';

interface IconProps {
  name?: 'instagram' | 'tiktok' | 'facebook' | 'linkedin'; 
}

const iconMap: { [key in NonNullable<IconProps['name']>]: IconType } = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
};

const Icons: React.FC<IconProps> = ({ name }) => {
  if (!name) {
    return (
      <div className={styles.icons}>
        <FaInstagram className={styles.icon} />
        <FaTiktok className={styles.icon} />
        <FaFacebook className={styles.icon} />
        <FaLinkedin className={styles.icon} />
      </div>
    );
  }

  const IconComponent = iconMap[name];
  if (!IconComponent) return null; 

  return <IconComponent className={styles.icon} />;
};

export default Icons;
