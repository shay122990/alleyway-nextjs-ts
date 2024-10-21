import styles from "./Audio-Visual.module.css";
import { StaticImageData } from "next/image"; 
import Carousel from "../components/carousel/Carousel";

interface CarouselProps {
  title: string,  
  images: { src: StaticImageData }[];
}

const AudioVisual = ({title, audioVisualData }: { audioVisualData: CarouselProps['images'], title:string }) => {
  return (
    <div className={styles.audioVisualSection}>
       <h2>{title}</h2>
       <div className={styles.audioVisualInfo}>
       <ul className={styles.audioVisualList}>
        <li>Sound Systems</li>
        <li>LED Screens</li>
        <li>Lighting Design</li>
        <li>Technical Support</li>
       </ul>
       <p>We offer top-notch audio-visual services to elevate your event. From sound and lighting to video production and live streaming, we provide high-quality AV solutions that ensure a clear, engaging, and memorable experience for your audience.</p>
       </div>
       <Carousel images={audioVisualData}/>
    </div>
  );
}

export default AudioVisual;
