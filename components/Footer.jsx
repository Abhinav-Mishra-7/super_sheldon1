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
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#FFF9F1] text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        <div className="w-full md:w-2/5">
          <Image
            src="/Final-Logo-bg-removed.png"
            alt="Super Sheldon Logo"
            width={197}
            height={124}
            className="mb-2"
            priority
          />
          <p className="text-base text-gray-600 leading-relaxed font-roboto mb-6">
            Supersheldon is a trusted global learning platform offering 
            expert-led exam preparation for UK, US, and Australian students.
          </p>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-semibold">📞 Phone: </span> +91 91370 53875
            </p>
            <p>
              <span className="font-semibold">✉️ Email: </span> support@supersheldon.com
            </p>
            <p>
              <span className="font-semibold">📍 Address: </span> 123 Learning Street, London, UK
            </p>
          </div>

          <div className="flex gap-4 mt-5 text-2xl">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaXTwitter className="hover:text-black transition-colors duration-300" />
            </Link>
            <Link href="https://wa.me/919137053875" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp className="hover:text-green-500 transition-colors duration-300" />
            </Link>
          </div>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Refund Policy</Link></li>
            <li><Link href="#">Terms and Conditions</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">Naplan Exam</Link></li>
            <li><Link href="#">11+ Exam</Link></li>
            <li><Link href="#">SAT Exam</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Support</Link></li>
            <li><Link href="#">Career</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Blog</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">Latest Articles</Link></li>
            <li><Link href="#">Exam Tips</Link></li>
            <li><Link href="#">Guides & Resources</Link></li> 
          </ul>
        </div>
    </div>
 
      <div className="text-center mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} Supersheldon. All rights reserved.
      </div>
    </footer>
  );
}
