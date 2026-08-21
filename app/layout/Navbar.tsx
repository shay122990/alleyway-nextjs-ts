"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/images/logo-icons/alleyway-1.png";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="absolute top-10 z-40 w-full flex items-center justify-between px-4 py-4 lg:px-10">
      <div className="flex items-center gap-4">
        <div
          onClick={toggleMenu}
          className="block cursor-pointer text-4xl transition lg:hidden"
        >
          {isMenuOpen ? (
            <IoCloseOutline className="text-eggshell hover:text-tealCustom transition" />
          ) : (
            <IoMenuOutline className="text-eggshell hover:text-tealCustom transition" />
          )}
        </div>
        <ul className="hidden lg:flex gap-4 list-none uppercase">
          {["Home", "Services", "Projects", "Contact"].map((label, index) => {
            const href = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <li key={index} className="relative tracking-widest group">
                <Link href={href} className="text-white text-lg transition">
                  {label}
                </Link>
                <span
                  className={`block h-[2px] bg-tealCustom transition-transform origin-left ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>

      {pathname !== "/" && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 flex justify-center items-center z-10">
          <Link
            href="/"
            className="w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] block"
          >
            <Image
              src={logo}
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      )}

      <div className="flex items-center">
        <a
          href="https://wa.me/+971528182368"
          target="_blank"
          aria-label="Chat with Alleyway on WhatsApp (opens in a new tab)"
          className="block text-4xl text-eggshell hover:text-tealCustom transition lg:hidden"
        >
          <FaWhatsapp />
        </a>

        <div className="hidden lg:flex gap-4">
          <a
            href="mailto:hello@alleywaydxb.com"
            aria-label="Email Alleyway (opens in a new tab)"
            className="text-white hover:text-tealCustom transition text-2xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            aria-label="Go to Alleyway Instagram  (opens in a new tab)"
            className="text-white hover:text-tealCustom transition text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            aria-label="Go to Alleyway LinkedIn  (opens in a new tab)"
            className="text-white hover:text-tealCustom transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/5 bg-[#df8a16] transform text-white ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col items-center text-center pt-24 gap-10 z-50 lg:hidden`}
      >
        <ul className="flex flex-col gap-8 list-none uppercase">
          {["Home", "Services", "Projects", "Contact"].map((label, index) => {
            const href = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <li
                key={index}
                onClick={closeMenu}
                className="relative text-lg tracking-widest group"
              >
                <Link href={href} className="relative inline-block text-white">
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-tealCustom transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-row gap-4 mt-8">
          <a
            href="mailto:hello@alleywaydxb.com"
            className="text-eggshell hover:text-tealCustom transition text-2xl"
            aria-label="Email Alleyway (opens in a new tab)"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            aria-label="Go to Alleyway Instagram  (opens in a new tab)"
            className="text-eggshell hover:text-tealCustom transition text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            aria-label="Go to Alleyway LinkedIn  (opens in a new tab)"
            className="text-eggshell hover:text-tealCustom transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
