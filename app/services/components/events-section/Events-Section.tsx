import styles from "./Events-Section.module.css";
import ImageBox from '@/components/common/image-box/Image-Box';
import { StaticImageData } from 'next/image';

interface EventSectionsProps {
  title: string;
  imageSrc1: StaticImageData;
  imageSrc2?: StaticImageData; 
  links: { name: string; href: string }[];
  className?: string;
  image1ClassName?: string;
  image2ClassName?: string;
}

const EventsSection: React.FC<EventSectionsProps> = ({
  title,
  imageSrc1,
  imageSrc2,
  links,
  className,
  image1ClassName,
  image2ClassName
}) => {
  return (
    <section className={`${className} ${styles.eventsSection}`}>
      <h2>{title}</h2>
      <div className={styles.imageBoxContainer}>
        <ImageBox imageSrc={imageSrc1} className={image1ClassName} />
        {imageSrc2 && <ImageBox imageSrc={imageSrc2} className={image2ClassName} />}
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventsSection;
