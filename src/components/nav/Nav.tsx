"use client";
import React, { useState } from "react";
import Link from "next/link";

interface NavProps {
  // You can define any additional props needed for the navigation
}

const Nav: React.FC<NavProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/features", text: "Features" },
    { path: "/faqs", text: "FAQs" },
    { path: "/contact", text: "Contact" },
    { path: "/sign up", text: "sign up" },
  ];

  return (
    <nav className={" h-full  "}>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="block md:hidden text-gray-100 focus:outline-none"
      >
        {!isMobileMenuOpen ? " ☰" : "  ✕"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute backdrop-blur-3xl top-20 left-0   bg-blue-00/80 z-50 w-screen flex items-center justify-center transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "" : "translate-x-full "
        }`}
      >
        <ul className="flex gap-4 flex-col items-center py-[1rem] h-full w-full backdrop-blur-3xl bg-blue-00/80">
          {navLinks.map((link, index) => (
            <li key={index} className=" w-full text-center bg-black ">
              <Link
                className="text-sm text-gray-100 w-full hover:underline underline-offset-2 hover:border-b hover:border-b-blue-300"
                href={link.path}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Close Button for Mobile Menu */}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4">
        {navLinks.slice(0, 4).map((link, index) => (
          <li key={index}>
            <Link
              className="text-sm hover:underline underline-offset-2"
              href={link.path}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
