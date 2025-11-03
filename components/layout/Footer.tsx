"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo-icons/alleyway-1.png";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const footerNavItems = [
  { href: "/", label: "Home" },
  { href: "/services#why-choose-us", label: "Why Us?" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/services#brand-activations", label: "Brand Activation" },
  { href: "/services#event-production", label: "Event Production" },
  { href: "/services#exhibitions", label: "Exhibitions" },
  { href: "/services#event-logistics", label: "Event Logistics" },
  { href: "/services#vip-experience", label: "Vip Experience" },
  { href: "/services#creative-development", label: "Creative Development" },
];

const companyLinks = footerNavItems.slice(0, 5);
const serviceLinks = footerNavItems.slice(5);

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="flex flex-col items-center justify-center w-full p-4 gap-12 bg-grayCustom 
                 md:flex-row md:items-end md:justify-center md:gap-0 md:py-16"
    >
      {/* Brand + Social */}
      <div className="flex flex-row justify-between items-end w-full md:flex-col md:items-start md:w-2/5 md:gap-4">
        <div className="w-28">
          <Link
            href="/"
            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard focus-visible:ring-offset-2 focus-visible:ring-offset-grayCustom"
          >
            <Image src={logo} alt="Alleyway — Logo" />
          </Link>
        </div>

        <address className="not-italic flex flex-col gap-4 w-3/5 md:w-11/12 md:flex-col-reverse md:items-start">
          <p className="text-eggshell text-sm md:text-lg md:w-4/5">
            Stay connected with us for the latest updates and more! Follow us on
            our social platforms.
          </p>
          <ul className="flex flex-row gap-4">
            <li>
              <a
                href="mailto:hello@alleywaydxb.com"
                className="text-white hover:text-tealCustom transition text-2xl
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard
                  focus-visible:ring-offset-2 focus-visible:ring-offset-grayCustom"
                aria-label="Email Alleyway (opens in a new tab)"
              >
                <span className="sr-only">Email Alleyway</span>
                <FaEnvelope aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alleyway on Instagram (opens in a new tab)"
                className="text-white hover:text-tealCustom transition text-2xl
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard
                  focus-visible:ring-offset-2 focus-visible:ring-offset-grayCustom"
              >
                <span className="sr-only">
                  Alleyway on Instagram (opens in a new tab)
                </span>
                <FaInstagram aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alleyway on LinkedIn (opens in a new tab)"
                className="text-white hover:text-tealCustom transition text-2xl
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard
                  focus-visible:ring-offset-2 focus-visible:ring-offset-grayCustom"
              >
                <span className="sr-only">
                  Alleyway on LinkedIn (opens in a new tab)
                </span>
                <FaLinkedin aria-hidden="true" />
              </a>
            </li>
          </ul>
        </address>
      </div>

      {/*  Navs */}
      <div className="flex flex-col w-full gap-8 md:flex-row-reverse md:justify-between md:items-end md:w-4/5">
        <section
          aria-labelledby="footer-cta-heading"
          className="flex flex-col max-w-md min-h-[100px] gap-4 w-full md:w-3/5 lg:w-2/3 text-eggshell"
        >
          <h2
            id="footer-cta-heading"
            className="text-2xl font-bold lg:text-4xl"
          >
            Ready to launch your next project?
          </h2>
          <p className="text-base">
            We make event and project management a seamless experience.
          </p>

          <Link
            href="/contact#contact-form"
            className="block text-center text-2xl bg-lightMustard w-full py-4 rounded hover:text-tealCustom text-grayCustom uppercase font-bold"
          >
            Book Us
          </Link>
        </section>

        <nav
          aria-labelledby="footer-nav-heading"
          className="flex flex-row justify-between w-full md:w-2/3 lg:w-1/2"
        >
          <h2 id="footer-nav-heading" className="sr-only">
            Footer navigation
          </h2>

          <section aria-labelledby="company-links-heading" className="w-1/2">
            <h3
              id="company-links-heading"
              className="text-base font-bold pb-4 md:text-xl text-tealCustom"
            >
              Company
            </h3>
            <ul>
              {companyLinks.map(({ href, label }) => (
                <li key={href} className="pb-2">
                  <Link
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    className={`relative inline-block capitalize text-white
                      after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-mustard after:transition-all after:duration-300 hover:after:w-full
                      ${pathname === href ? "text-tealCustom font-bold" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="service-links-heading" className="w-1/2">
            <h3
              id="service-links-heading"
              className="text-base font-bold pb-4 md:text-xl text-tealCustom"
            >
              Services
            </h3>
            <ul>
              {serviceLinks.map(({ href, label }) => (
                <li key={href} className="pb-2">
                  <Link
                    href={href}
                    className="relative inline-block capitalize text-white
                               after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-mustard after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </div>
    </footer>
  );
}
