
import EventTitle from '@/components/common/events-title/Events-Title';
import ImageBox from '@/components/common/image-box/Image-Box';
import Links from '@/components/common/links/Links';

interface EventSectionsProps {
    title: string;
    imageSrc1: string;
    imageSrc2: string;
    links: { name: string; href: string }[];
    backgroundColor: string;
    fontColor: string;
    fontStyle?: React.CSSProperties; 
  }
  
  const EventsSection: React.FC<EventSectionsProps> = ({
    title,
    imageSrc1,
    imageSrc2,
    links,
    backgroundColor,
    fontColor,
    fontStyle
  }) => {
    return (
      <section style={{ backgroundColor, padding: '2rem', color: fontColor }}>
        <EventTitle title={title} />
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
          <ImageBox imageSrc={imageSrc1} />
          <ImageBox imageSrc={imageSrc2} />
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
