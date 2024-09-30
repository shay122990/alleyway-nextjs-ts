"use client"
import { useRouter } from 'next/navigation';
import styles from "./Logo.module.css";
import ImageBox from '../common/image-box/Image-Box';
import logoImg from "@/public/images/alleyway-1.png";

export default function Logo() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');  
  };
  return (
    <div className={styles.logoContainer} onClick={handleClick}>
      <ImageBox imageSrc={logoImg}  altText='Company logo' />
    </div>
  );
}
