
interface EventTitleProps {
  title: string;
}

const EventTitle: React.FC<EventTitleProps> = ({ title }) => {
  return <h2>{title}</h2>;
};

export default EventTitle;
