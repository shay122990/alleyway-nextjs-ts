"use client";
import styles from "./Private-Events.module.css";
import Carousel from "../components/carousel/Carousel";
import { StaticImageData } from "next/image";

interface PrivateEventsProps {
  title: string,
  privateEventData: { src: StaticImageData }[]; 
}

const PrivateEvents: React.FC<PrivateEventsProps> = ({title, privateEventData }) => {
  return (
    <div className={styles.privateEventsContainer}>
      <h2>{title}</h2>
      <h3>Wedding, Birthdays, Special Events & more</h3>
      <Carousel images={privateEventData} />
      <p>
        We specialize in creating unforgettable weddings, birthdays, and special events tailored to your unique vision. Whether you're dreaming of an elegant wedding, a fun-filled birthday bash, or a one-of-a-kind celebration, our team takes care of every detail...
      </p>
    </div>
  );
}

export default PrivateEvents;
