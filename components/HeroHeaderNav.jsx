




"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Popup from "./Popup";

const navLinks = [
  { href: "/", label: "Home", type: "link" },
  { href: "/courses", label: "Courses", type: "link" },
  { href: "#testimonial", label: "Testimonial", type: "anchor" },
];

export const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const base =
    "px-5 py-1.5 rounded-full font-medium transition-all text-sm focus:outline-none shadow-sm";
  const variants = {
    primary:
      "bg-gradient-to-r from-[#FFD700] to-[#FF9500] hover:from-[#FFC93C] hover:to-[#FF8C00] text-white",
    outline:
      "border border-gray-300 text-gray-700 hover:border-black hover:text-black",
    login: "bg-[#FF8C00] hover:bg-[#FF9933] text-white",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center">
      <Popup />
      <nav
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "mt-3 w-[94%] rounded-full bg-white/80 backdrop-blur-lg shadow-md px-10 py-0.1"
            : "w-full px-10 py-5"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SuperSheldon Logo"
            width={160} // slightly smaller
            height={40}
            priority
          />
        </Link>

        {/* Center Nav inside grey pill */}
        <div className="hidden md:flex bg-gray-100 rounded-full px-6 py-1.5 space-x-10">
          {navLinks.map((link) =>
            link.type === "link" ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 font-medium hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 font-medium hover:text-black transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button variant="primary" className="px-4 py-1.5 text-sm">
              Login
            </Button>
          </Link>
          <a href="#try a free class">
            <Button variant="primary" className="px-4 py-1.5 text-sm">
              Try a free Class
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
