import Link from 'next/link';

interface LinksProps {
  name: string;
  href: string;
}

const Links: React.FC<LinksProps> = ({ name, href }) => {
  return (
    <Link href={href}>
      {name}
    </Link>
  );
};

export default Links;
