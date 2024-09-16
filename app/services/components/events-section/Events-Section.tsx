
import EventTitle from '@/app/services/components/events-title/Events-Title';
import ImageBox from '@/components/common/image-box/Image-Box';
import Links from '@/app/services/components/links/Links';

interface EventSectionsProps {
    title: string;
    imageSrc1: string;
    imageSrc2?: string;
    links: { name: string; href: string }[];
    imageStyle?: React.CSSProperties;
    className?: string; 
  }
  
  const EventsSection: React.FC<EventSectionsProps> = ({
    title,
    imageSrc1,
    imageSrc2,
    links,
    imageStyle,
    className
  }) => {
    return (
      <section className={className}>
        <EventTitle title={title} />
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
        <ImageBox imageSrc={imageSrc1} customStyle={imageStyle} />
        {imageSrc2 && <ImageBox imageSrc={imageSrc2} customStyle={imageStyle} />}
        </div>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {links.map((link, index) => (
              <li key={index} style={{ margin: '1rem 0' }}>
                <Links name={link.name} href={link.href} />
              </li>
            ))}
          </ul>
        </nav>
      </section>
    );
  };

export default EventsSection;
