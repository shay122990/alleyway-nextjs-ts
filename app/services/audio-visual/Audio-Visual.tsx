import styles from "./Audio-Visual.module.css";
import { StaticImageData } from "next/image"; 
import Carousel from "../components/carousel/Carousel";
// import Links from "@/components/common/links/Links";

interface CarouselProps {
  images: { src: StaticImageData }[];
}

const AudioVisual = ({ audioVisualData }: { audioVisualData: CarouselProps['images'] }) => {
  return (
    <div className={styles.audioVisualSection}>
        {/* <Links /> */}
        <p>We offer top-notch audio-visual services to elevate your event. From sound and lighting to video production and live streaming, we provide high-quality AV solutions that ensure a clear, engaging, and memorable experience for your audience.</p>
      <Carousel images={audioVisualData} />
    </div>
  );
}

export default AudioVisual;
