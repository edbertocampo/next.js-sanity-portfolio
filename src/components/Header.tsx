'use client';

import React, { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close menu on mobile after clicking
    }
  };

  return (
    <header className="w-full bg-[#0a192f]/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-[#112240]">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:py-5">
        {/* Logo (refresh on click) */}
        <button
          type="button"
          aria-label="Refresh page"
          onClick={() => window.location.reload()}
          className="flex items-center cursor-pointer"
        >
          <Image
            src="https://edbert-ocampo.vercel.app/assets/eo_logo-DxAxFzvo.png"
            alt="Edbert Ocampo Logo"
            width={40}
            height={40}
            priority
          />
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleScroll(link.href)}
                className="text-[#8892b0] hover:text-[#64ffda] relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#64ffda] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full transition-all"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#64ffda] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm uppercase tracking-wide font-medium bg-[#0a192f]/95 border-t border-[#112240]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleScroll(link.href)}
                className="w-full text-left text-[#8892b0] hover:text-[#64ffda] transition-all"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
