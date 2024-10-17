"use client";
import styles from "./Private-Events.module.css";
import Carousel from "../carousel/Carousel";
import { servicesPageData } from "@/data/ServicesPageData"; 

const PrivateEvents = () => {
  const privateEventImages = servicesPageData.privateEvents.images;

  return (
    <div className={styles.privateEventsContainer}>
      <h2>Private Events</h2>
      <p>
        We specialize in creating unforgettable weddings, birthdays, and special events tailored to your unique vision. Whether you're dreaming of an elegant wedding, a fun-filled birthday bash, or a one-of-a-kind celebration, our team takes care of every detail. From stunning decor and personalized themes to seamless coordination and entertainment, we ensure your event is as extraordinary as the occasion itself. Let us turn your special moments into cherished memories that you and your guests will treasure forever.
      </p>
      <Carousel images={privateEventImages} />
    </div>
  );
}

export default PrivateEvents;
