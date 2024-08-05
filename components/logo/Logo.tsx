import styles from "./Logo.module.css"
import Image from 'next/image'
import logoImg from "@/public/images/alleyway-1.png"
export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image src={logoImg} alt='Company logo'/>
    </div>
  )
}
