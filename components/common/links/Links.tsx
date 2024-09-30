import Link from 'next/link';

interface LinksProps {
  href: string;
  children: React.ReactNode; 
  onClick?: () => void;
}

const Links: React.FC<LinksProps> = ({ href, children,onClick }) => {
  return (
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Links;
