// import styles from "./Events-Section.module.css";
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
  linksClassName?: string;  
}

const EventsSection: React.FC<EventSectionsProps> = ({
  title,
  imageSrc1,
  imageSrc2,
  links,
  className,
  image1ClassName,
  image2ClassName,
  linksClassName
}) => {
  return (
    <section className={`${className}`}>
      <h2>{title}</h2>
      <div>
        <ImageBox imageSrc={imageSrc1} className={image1ClassName} />
        {imageSrc2 && <ImageBox imageSrc={imageSrc2} className={image2ClassName} />}
        <ul>
          {links.map((link, index) => (
            <li key={index} className={linksClassName}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
     
    </section>
  );
};

export default EventsSection;
