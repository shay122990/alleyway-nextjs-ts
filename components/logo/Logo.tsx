"use client"
import { useRouter } from 'next/navigation';
import styles from "./Logo.module.css";
import Image from 'next/image';
import logoImg from "@/public/images/alleyway-1.png";

export default function Logo() {
  const router = useRouter();


  const handleClick = () => {
    router.push('/');  
  };

  return (
    <div className={styles.logoContainer} onClick={handleClick}>
      <Image src={logoImg}  alt='Company logo' />
    </div>
  );
}
