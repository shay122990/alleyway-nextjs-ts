import styles from "./Events-Section.module.css";
import ImageBox from '@/components/common/image-box/Image-Box';
import { StaticImageData } from 'next/image';
import projectImage1 from '@/public/images/projects-image.jpg';
import projectImage2 from '@/public/images/projects-image.jpg';

interface EventSectionsProps {
  title: string;
  eventType: 'exhibitions' | 'private-events' | 'creative-services' | 'audio-visual';
}

const EventsSection: React.FC<EventSectionsProps> = ({ title, eventType }) => {
  const getSectionContent = () => {
    const containerClass = styles[`${eventType}Container`];

    switch (eventType) {
      case 'exhibitions':
        return {
          images: [{ src: projectImage1, className: styles.exhibitionImage }],
          links: [
            { name: 'Booth Design & Set Up', href: '/services#exhibitions' },
            { name: 'Logistics Management', href: '/services#exhibitions' },
            { name: 'On-site Coordination', href: '/services#exhibitions' },
          ],
        };
      case 'private-events':
        return {
          images: [
            { src: projectImage1, className: styles.privateEventImage },
            { src: projectImage2, className: styles.privateEventImage },
          ],
          links: [
            { name: 'Anniversary', href: '/services/private-events' },
            { name: 'Birthday Parties', href: '/services#private-events' },
            { name: 'Weddings', href: '/services#private-events' },
            { name: 'Social Events', href: '/services#private-events' },
          ],
        };
      case 'creative-services':
        return {
          images: [
            { src: projectImage1, className: styles.creativeServiceImage },
            { src: projectImage2, className: styles.creativeServiceImage },
          ],
          links: [
            { name: 'Event Concept & Design', href: '/services#creative-services' },
            { name: 'Thematic Decor', href: '/services#creative-services' },
            { name: 'Entertainment Planning', href: '/services#creative-services' },
          ],
        };
      case 'audio-visual':
        return {
          images: [
            { src: projectImage1, className: styles.audioVisualImage },
            { src: projectImage2, className: styles.audioVisualImage },
          ],
          links: [
            { name: 'Sound Systems', href: '/services#audio-visual' },
            { name: 'Lighting Design', href: '/services#audio-visual' },
            { name: 'LED Screens', href: '/services#audio-visual' },
            { name: 'Technical Support', href: '/services#audio-visual' },
          ],
        };
      default:
        return { images: [], links: [] };
    }
  };

  const sectionContent = getSectionContent();

  return (
    <section className={styles.eventsContainer}>
      <h2>{title}</h2>
      <div className={`${styles.imageAndLinksContainer} ${styles[`${eventType}Container`]}`}>
        <div className={styles.imagesContainer}>
          {sectionContent.images.map((image, index) => (
            <ImageBox key={index} imageSrc={image.src} className={image.className} />
          ))}
        </div>
        <ul className={styles.linksContainer}>
          {sectionContent.links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventsSection;
