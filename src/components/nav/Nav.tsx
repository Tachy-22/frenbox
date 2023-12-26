import Link from "next/link";
import React from "react";

interface NavProps {
  // You can define any additional props needed for the navigation
}

const Nav: React.FC<NavProps> = () => {
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/features", text: "Features" },
    { path: "/faqs", text: "FAQs" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <nav>
      <ul className="flex gap-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link className="text-sm hover:underline underline-offset-2" href={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
