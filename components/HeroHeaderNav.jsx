"use client";

import Image from "next/image";
import { useState } from "react";
import Popup from "./Popup";


import Link from "next/link";

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
      <Popup></Popup>
      <nav className="flex items-center justify-between pl-2   shadow-lg">
        <Image src="/logo.png" alt="SuperSheldon Logo" width={170} height={20} />
    <div className="hidden lg:flex flex-1 justify-center items-center space-x-4">
        <a href="#home">
         <Button variant="outline">Home</Button>
        </a>
        <a href="/courses">
         <Button variant="outline">Course</Button>
        </a>
        <a href="#testimonial">
         <Button variant="outline">Testimonial</Button>
        </a>
        {/* <a href="#blog">
          <Button variant="outline">Blog</Button>
        </a> */}
    </div>


        <div className="hidden md:flex items-center space-x-7 mr-3">
          {/* <a href="#course"> 
           <span className="text-xs font-bold text-gray-600 cursor-pointer hover:text-black transition-colors">
            Join Class
          </span> 
           </a> */}
          <Button variant="primary">Login</Button>
          <a href="#try a free class">
          <Button variant="primary">Try a free Class</Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
