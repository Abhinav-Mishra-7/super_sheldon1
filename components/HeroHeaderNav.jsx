// // "use client";

// // import Image from "next/image";
// // import { useState } from "react";
// // import Popup from "./Popup";


// // import Link from "next/link";

// // // Button stays in Header
// // export const Button = ({ children, className = "", variant = "primary", ...props }) => {
// //   const base = "px-4 py-2 rounded-full font-bold transition-colors text-xs focus:outline-none shadow-sm";
// //   const variants = {
// //     primary: "bg-gradient-to-r from-[#FFD700] to-[#FF9500] hover:from-[#FFC93C] hover:to-[#FF8C00] text-white",
// //     outline: "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-400 shadow-none",
// //     login: "bg-[#FF8C00] hover:bg-[#FF9933] text-white",
// //   };
// //   return (
// //     <button className={`${base} ${variants[variant]} ${className}`} {...props}>
// //       {children}
// //     </button>
// //   );
// // };

// // const quicksand = {
// //   fontFamily: "'Quicksand', Arial, sans-serif",
// //   fontWeight: 700,
// //   fontStyle: "bold",
// // };

// // export default function Header() {
// //   return (
// //     <header style={quicksand}>
// //       <Popup></Popup>
// //       <nav className="flex items-center justify-between pl-2   shadow-lg">
// //         <Link href="/"><Image src="/logo.png" alt="SuperSheldon Logo" width={170} height={20} /></Link>
// //     <div className="hidden lg:flex flex-1 justify-center items-center space-x-4">
// //         <Link href="/">
// //          <Button variant="outline">Home</Button>
// //         </Link>
// //         <Link href="/courses">
// //          <Button variant="outline">Course</Button>
// //         </Link>
// //         <a href="#testimonial">
// //          <Button variant="outline">Testimonial</Button>
// //         </a>
// //         {/* <a href="#blog">
// //           <Button variant="outline">Blog</Button>
// //         </a> */}
// //     </div>


// //         <div className="hidden md:flex items-center space-x-7 mr-3">
// //           {/* <a href="#course"> 
// //            <span className="text-xs font-bold text-gray-600 cursor-pointer hover:text-black transition-colors">
// //             Join Class
// //           </span> 
// //            </a> */}
// //           <Button variant="primary">Login</Button>
// //           <a href="#try a free class">
// //           <Button variant="primary">Try a free Class</Button>
// //           </a>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // }



// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Popup from "./Popup";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/courses", label: "Courses" },
//   { href: "/#testimonial", label: "Testimonial" }, // fixed slug to match earlier version
// ];

// export const Button = ({ children, className = "", variant = "primary", ...props }) => {
//   const base =
//     "px-6 py-2 rounded-full font-medium transition-all text-sm focus:outline-none shadow-sm";
//   const variants = {
//     primary:
//       "bg-gradient-to-r from-[#FFD700] to-[#FF9500] hover:from-[#FFC93C] hover:to-[#FF8C00] text-white",
//     outline:
//       "border border-gray-300 text-gray-700 hover:border-black hover:text-black",
//     login: "bg-[#FF8C00] hover:bg-[#FF9933] text-white",
//   };
//   return (
//     <button className={`${base} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 w-full z-50 flex justify-center">
//       <Popup />
//       <nav
//         className={`flex items-center justify-between transition-all duration-300 ${
//           scrolled
//             ? "mt-4 w-[95%] rounded-full bg-white/80 backdrop-blur-lg shadow-lg px-12 py-4"
//             : "w-full px-12 py-6"
//         }`}
//       >
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/logo.png"
//             alt="SuperSheldon Logo"
//             width={180}
//             height={45}
//             priority
//           />
//         </Link>

//         {/* Center Nav inside grey pill */}
//         <div className="hidden md:flex bg-gray-100 rounded-full px-8 py-2 space-x-12">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className="text-gray-700 font-medium hover:text-black transition-colors"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Right side buttons */}
//         <div className="hidden md:flex items-center space-x-5">
//           <Link href="/login">
//             <Button variant="primary" className="px-5 py-2 text-sm">
//               Login
//             </Button>
//           </Link>
//           <Link href="/free-class">
//             <Button variant="primary" className="px-5 py-2 text-sm">
//               Try a free Class
//             </Button>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }




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
    "px-6 py-2 rounded-full font-medium transition-all text-sm focus:outline-none shadow-sm";
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
            ? "mt-4 w-[95%] rounded-full bg-white/80 backdrop-blur-lg shadow-lg px-12 py-4"
            : "w-full px-12 py-6"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SuperSheldon Logo"
            width={180}
            height={45}
            priority
          />
        </Link>

        {/* Center Nav inside grey pill */}
        <div className="hidden md:flex bg-gray-100 rounded-full px-8 py-2 space-x-12">
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
        <div className="hidden md:flex items-center space-x-5">
          <Link href="/login">
            <Button variant="primary" className="px-5 py-2 text-sm">
              Login
            </Button>
          </Link>
          <a href="#try a free class">
            <Button variant="primary" className="px-5 py-2 text-sm">
              Try a free Class
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
