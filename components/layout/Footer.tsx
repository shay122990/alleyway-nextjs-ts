"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/alleyway-1.png";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";


const footerNavItems = [
  { href: '/', label: 'Home' },
  { href: '/services/#about-us', label: 'About Us' },
  { href: '/fabrics', label: 'Fabrics' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/services/#brand-activations', label: 'Brand Activation' },
  { href: '/services/#event-production', label: 'Event Production' },
  { href: '/services/#exhibitions-custom', label: 'Exhibitions' },
  { href: '/services/#event-logistics', label: 'Event Logistics' },
  { href: '/services/#vip-experience', label: 'Vip Experience' }
];

const companyLinks = footerNavItems.slice(0, 5);
const serviceLinks = footerNavItems.slice(4);

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="flex flex-col items-center justify-center w-full p-4 gap-12  bg-grayCustom 
      md:flex-row md:items-end md:justify-center md:gap-0 md:py-16
    ">
      <div className="flex flex-row justify-between items-end w-full md:flex-col md:items-start md:w-2/5 md:gap-4">
        <div className="w-28">
          <Image src={logo} alt="Company Logo" />
        </div>

        <div className="flex flex-col gap-4 w-3/5 md:w-11/12 md:flex-col-reverse md:items-start">
          <p className="text-eggshell text-sm md:text-lg md:w-4/5">
            Stay connected with us for the latest updates, exclusive offers, and more!<br />
            Follow us on our social media platforms and be part of our community.
          </p>
        </div>
          <div className="lg:flex gap-4">
          <a href="mailto:hello@alleywaydxb.com" className="text-white hover:text-tealCustom transition text-2xl">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/" target="_blank" className="text-white hover:text-tealCustom transition text-2xl">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/" target="_blank" className="text-white hover:text-tealCustom transition text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 md:flex-row-reverse md:justify-between md:items-end md:w-4/5">
        <div className="flex flex-col max-w-md min-h-[100px] gap-4 w-full md:w-3/5 lg:w-2/3  text-eggshell">
          <h3 className="text-2xl font-bold lg:text-4xl">Ready to launch your next project?</h3>
          <p className="text-base">
            We make event and project management a seamless experience.
          </p>
          <Link href="/contact#contact-form">
            <button className="text-2xl bg-lightMustard w-full py-4 rounded hover:bg-mustard text-grayCustom uppercase font-bold">Book Us</button>
          </Link>
        </div>
        <div className="flex flex-row justify-between w-full md:w-2/3 lg:w-1/2">
          <div className="w-1/2">
            <h4 className="text-base font-bold pb-4 md:text-xl text-tealCustom">Company</h4>
            <ul>
              {companyLinks.map(({ href, label }, index) => (
                <li key={index} className="pb-2">
                  <Link
                    href={href}
                    className={`relative inline-block capitalize text-white
                      after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-mustard after:transition-all after:duration-300 hover:after:w-full
                      ${pathname === href ? 'text-tealCustom font-bold' : ''}
                    `}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <h4 className="text-base font-bold pb-4 md:text-xl text-tealCustom">Services</h4>
            <ul>
              {serviceLinks.map(({ href, label }, index) => (
                <li key={index} className="pb-2">
                  <Link
                    href={href}
                    className={`relative inline-block capitalize text-white
                      after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-mustard after:transition-all after:duration-300 hover:after:w-full
                      ${pathname === href ? 'text-tealCustom font-bold' : ''}
                    `}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
