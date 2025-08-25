"use client";

import Image from "next/image";
import { useState } from "react";

// Button stays in Header
export const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const base = "px-4 py-2 rounded-full font-bold transition-colors text-xs focus:outline-none shadow-sm";
  const variants = {
    primary: "bg-gradient-to-r from-[#FFD700] to-[#FF9500] hover:from-[#FFC93C] hover:to-[#FF8C00] text-white",
    outline: "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-400 shadow-none",
    login: "bg-[#FF8C00] hover:bg-[#FF9933] text-white",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const quicksand = {
  fontFamily: "'Quicksand', Arial, sans-serif",
  fontWeight: 700,
  fontStyle: "bold",
};

export default function Header() {
  return (
    <header style={quicksand}>
      <nav className="flex items-center justify-between">
        <Image src="/logo.png" alt="SuperSheldon Logo" width={170} height={20} />
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-2">
          <Button variant="outline">Home</Button>
          <Button variant="outline">Course</Button>
          <Button variant="outline">Testimonial</Button>
          <Button variant="outline">Blog</Button>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <span className="text-xs font-bold text-gray-600 cursor-pointer hover:text-black transition-colors">
            Join Class
          </span>
          <Button variant="primary">Login</Button>
          <Button variant="primary">Try a free Class</Button>
        </div>
      </nav>
    </header>
  );
}
