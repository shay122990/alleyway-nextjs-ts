import styles from "./Events-Section.module.css";
import ImageBox from '@/components/common/image-box/Image-Box';
import projectImage1 from '@/public/images/projects-image.jpg';
import projectImage2 from '@/public/images/projects-image.jpg';

const EventsSection = () => {
  return (
    <div className={styles.eventsContainer}>
      {/* Exhibitions Section */}
      <section className={`${styles.eventSection} ${styles.exhibitionSection}`}>
        <h2>Exhibitions & Trade Shows</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.exhibition}`}>
          <div className={styles.imagesContainer}>
            <ImageBox imageSrc={projectImage1} className={styles.exhibitionImage} />
          </div>
          <ul className={styles.linksContainer}>
            <li><a href="/services#exhibitions">Booth Design & Set Up</a></li>
            <li><a href="/services#exhibitions">Logistics Management</a></li>
            <li><a href="/services#exhibitions">On-site Coordination</a></li>
          </ul>
        </div>
      </section>

      {/* Private Events Section */}
      <section className={`${styles.eventSection} ${styles.privateSection}`}>
        <h2>Private Events</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.private}`}>
          <div className={styles.imagesContainer}>
            <ImageBox imageSrc={projectImage1} className={styles.privateEventImage} />
            <ImageBox imageSrc={projectImage2} className={styles.privateEventImage} />
          </div>
          <ul className={styles.linksContainer}>
            <li><a href="/services/private-events">Anniversary</a></li>
            <li><a href="/services#private-events">Birthday Parties</a></li>
            <li><a href="/services#private-events">Weddings</a></li>
            <li><a href="/services#private-events">Social Events</a></li>
          </ul>
        </div>
      </section>

      {/* Creative Services Section */}
      <section className={`${styles.eventSection} ${styles.creativeSection}`}>
        <h2>Creative Services</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.creative}`}>
          <div className={styles.imagesContainer}>
            <ImageBox imageSrc={projectImage1} className={styles.creativeServiceImage} />
            <ImageBox imageSrc={projectImage2} className={styles.creativeServiceImage} />
          </div>
          <ul className={styles.linksContainer}>
            <li><a href="/services#creative-services">Event Concept & Design</a></li>
            <li><a href="/services#creative-services">Thematic Decor</a></li>
            <li><a href="/services#creative-services">Entertainment Planning</a></li>
          </ul>
        </div>
      </section>

      {/* Audio Visual Section */}
      <section className={`${styles.eventSection} ${styles.audioSection}`}>
        <h2>Audio Visual</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.audio}`}>
          <div className={styles.imagesContainer}>
            <ImageBox imageSrc={projectImage1} className={styles.audioVisualImage} />
          </div>
          <ul className={styles.linksContainer}>
            <li><a href="/services#audio-visual">Sound Systems</a></li>
            <li><a href="/services#audio-visual">Lighting Design</a></li>
            <li><a href="/services#audio-visual">LED Screens</a></li>
            <li><a href="/services#audio-visual">Technical Support</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EventsSection;
