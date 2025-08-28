// // components/Footer.jsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#FFF9F1] text-gray-800 py-10 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
//         {/* Logo and About */}
//         <div className="w-full md:w-2/5">
//           <Image
//             src="/Final-Logo-bg-removed.png"
//             alt="Super Sheldon Logo"
//             width={197}
//             height={124}
//             className="mb-3"
//             priority
//           />
//           <p className="text-xl text-gray-500 leading-relaxed font-roboto">
//             Supersheldon is a trusted global<br></br> learning platform offering 
//             expert-led exam<br></br> preparation for UK, US, and Australian students.
//           </p>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="font-semibold mb-3">Company</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="#">About Us</Link></li>
//             <li><Link href="#">Privacy Policy</Link></li>
//             <li><Link href="#">Refund Policy</Link></li>
//             <li><Link href="#">Terms and Conditions</Link></li>
//           </ul>
//         </div>

//         {/* Courses */}
//         <div>
//           <h3 className="font-semibold mb-3">Courses</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="#">Naplan Exam</Link></li>
//             <li><Link href="#">11+ Exam</Link></li>
//             <li><Link href="#">SAT Exam</Link></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="font-semibold mb-3">Support</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="#">FAQ</Link></li>
//             <li><Link href="#">Support</Link></li>
//             <li><Link href="#">Career</Link></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="font-semibold mb-3">Contact Info</h3>
//           <ul className="space-y-2 text-sm">
//             <li>+0913-705-3875</li>
//             <li>ElizabethJ@jourrapide.com</li>
//             <li>
//               4808 Skinner Hollow Road <br />
//               Days Creek, OR 97429
//             </li>
//           </ul>
//         </div>

//       </div>
//     </footer>
//   );
// }


// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#FFF9F1] text-gray-800 pt-6 pb-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section */}
        <div className="w-full md:w-2/5">
          <Image
            src="/Final-Logo-bg-removed.png"
            alt="Super Sheldon Logo"
            width={197}
            height={124}
            priority
          />
          <p className="text-base text-gray-600 leading-relaxed font-roboto mb-6">
            Supersheldon is a trusted global learning platform offering 
            expert-led exam preparation for UK, US, and Australian students.
          </p>

          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-semibold">📞 Phone: </span> +91 91370 53875</p>
            <p><span className="font-semibold">✉️ Email: </span> support@supersheldon.com</p>
            <p><span className="font-semibold">📍 Address: </span> 123 Learning Street, London, UK</p>
          </div>

          <div className="flex gap-4 mt-5 text-2xl">
            <Link href="https://www.instagram.com/supersheldon.education/" target="_blank" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
            </Link>
            <Link href="https://x.com/SuperSheldonHQ" target="_blank" aria-label="Twitter">
              <FaXTwitter className="hover:text-black transition-colors duration-300" />
            </Link>
            <Link href="https://wa.me/919137053875" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp className="hover:text-green-500 transition-colors duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/company/super-sheldon/" target="_blank" aria-label="Linkedin">
              <FaLinkedin className="hover:text-blue-600 transition-colors duration-300"/>
            </Link>
            <Link href="https://www.youtube.com/@SuperSheldon-Education" target="_blank" aria-label="Youtube" >
              <FaYoutube className="hover:text-red-600 transition-colors duration-300"/>
            </Link>
          </div>
        </div>

        {/* Right Section as Equal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-3/5">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/Files/Privacy.pdf" className="hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/Files/Refund.pdf" className="hover:text-gray-900">Refund Policy</Link></li>
              <li><Link href="/Files/Term.pdf" className="hover:text-gray-900">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3">Courses</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#course" className="hover:text-gray-900">Naplan Exam</Link></li>
              <li><Link href="#course" className="hover:text-gray-900">11+ Exam</Link></li>
              <li><Link href="#course" className="hover:text-gray-900">SAT Exam</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900">FAQ</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Support</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Career</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-5 text-xs text-gray-500">
        © {new Date().getFullYear()} Supersheldon. All rights reserved.
      </div>
    </footer>
  );
}
