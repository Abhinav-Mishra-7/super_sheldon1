// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import { FaInstagram, FaWhatsapp } from "react-icons/fa";
// // import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-[#FFF9F1] text-gray-800 pt-6 pb-3 px-4 sm:px-6 overflow-x-hidden">
// //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 w-full">
        
// //         {/* Left Section */}
// //         <div className="w-full md:w-2/5 overflow-hidden">
// //           <Image
// //             src="/Final-Logo-bg-removed.png"
// //             alt="Super Sheldon Logo"
// //             width={197}
// //             height={124}
// //             priority
// //             className="max-w-full h-auto"
// //           />
// //           <p className="text-base text-gray-600 leading-relaxed font-roboto mb-6">
// //             Supersheldon is a trusted global learning platform offering 
// //             expert-led exam preparation for UK, US, and Australian students.
// //           </p>

// //           <div className="space-y-2 text-sm text-gray-700">
// //             <p><span className="font-semibold">📞 Phone: </span> +91 91370 53875</p>
// //             <p><span className="font-semibold">✉️ Email: </span> support@supersheldon.com</p>
// //             <p><span className="font-semibold">📍 Address: </span> 123 Learning Street, London, UK</p>
// //           </div>

// //           <div className="flex flex-wrap gap-4 mt-5 text-2xl">
// //             <Link href="https://www.instagram.com/supersheldon.education/" target="_blank" aria-label="Instagram">
// //               <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
// //             </Link>
// //             <Link href="https://x.com/SuperSheldonHQ" target="_blank" aria-label="Twitter">
// //               <FaXTwitter className="hover:text-black transition-colors duration-300" />
// //             </Link>
// //             <Link href="https://wa.me/919137053875" target="_blank" aria-label="WhatsApp">
// //               <FaWhatsapp className="hover:text-green-500 transition-colors duration-300" />
// //             </Link>
// //             <Link href="https://www.linkedin.com/company/super-sheldon/" target="_blank" aria-label="Linkedin">
// //               <FaLinkedin className="hover:text-blue-600 transition-colors duration-300"/>
// //             </Link>
// //             <Link href="https://www.youtube.com/@SuperSheldon-Education" target="_blank" aria-label="Youtube" >
// //               <FaYoutube className="hover:text-red-600 transition-colors duration-300"/>
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Right Section as Equal Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-3/5">
// //           <div className="text-center sm:text-left">
// //             <h3 className="font-semibold mb-3">Company</h3>
// //             <ul className="space-y-2 text-sm text-gray-600">
// //               <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
// //               <li><Link href="/refund" className="hover:text-gray-900">Refund Policy</Link></li>
// //               <li><Link href="/terms" className="hover:text-gray-900">Terms & Conditions</Link></li>
// //             </ul>
// //           </div>

// //           <div className="text-center sm:text-left">
// //             <h3 className="font-semibold mb-3">Courses</h3>
// //             <ul className="space-y-2 text-sm text-gray-600">
// //               <li><Link href="#course" className="hover:text-gray-900">Naplan Exam</Link></li>
// //               <li><Link href="#course" className="hover:text-gray-900">11+ Exam</Link></li>
// //               <li><Link href="#course" className="hover:text-gray-900">SAT Exam</Link></li>
// //             </ul>
// //           </div>

// //           <div className="text-center sm:text-left">
// //             <h3 className="font-semibold mb-3">Support</h3>
// //             <ul className="space-y-2 text-sm text-gray-600">
// //               <li><Link href="#" className="hover:text-gray-900">FAQ</Link></li>
// //               <li><Link href="#" className="hover:text-gray-900">Support</Link></li>
// //               <li><Link href="#" className="hover:text-gray-900">Career</Link></li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom note */}
// //       <div className="text-center mt-5 text-xs text-gray-500">
// //         © {new Date().getFullYear()} Supersheldon. All rights reserved.
// //       </div>
// //     </footer>
// //   );
// // }




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="mt-10 text-gray-800 px-6 py-8 sm:py-10">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6">

//         {/* Left Section */}
//         <div className="lg:w-2/5 flex flex-col gap-3">
//           <div className="flex items-center gap-3">
//             <Image
//               src="/Final-Logo-bg-removed.png"
//               alt="Super Sheldon Logo"
//               width={140}
//               height={90}
//               className="h-auto w-auto"
//             />
//             <span className="font-bold text-2xl">Supersheldon</span>
//           </div>

//           <p className="text-gray-700 text-lg leading-snug">
//             Supersheldon is a trusted global learning platform offering expert-led exam preparation for UK, US, and Australian students.
//           </p>

//           <div className="space-y-1 text-gray-800 text-lg">
//             <p>📞 <span className="font-semibold">Phone:</span> +91 91370 53875</p>
//             <p>✉️ <span className="font-semibold">Email:</span> support@supersheldon.com</p>
//             <p>📍 <span className="font-semibold">Address:</span> 123 Learning Street, London, UK</p>
//           </div>

//           <div className="flex gap-6 mt-3 text-3xl">
//             <Link href="https://www.instagram.com/supersheldon.education/" target="_blank" aria-label="Instagram">
//               <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
//             </Link>
//             <Link href="https://x.com/SuperSheldonHQ" target="_blank" aria-label="Twitter">
//               <FaXTwitter className="hover:text-black transition-colors duration-300" />
//             </Link>
//             <Link href="https://wa.me/919137053875" target="_blank" aria-label="WhatsApp">
//               <FaWhatsapp className="hover:text-green-500 transition-colors duration-300" />
//             </Link>
//             <Link href="https://www.linkedin.com/company/super-sheldon/" target="_blank" aria-label="Linkedin">
//               <FaLinkedin className="hover:text-blue-600 transition-colors duration-300"/>
//             </Link>
//             <Link href="https://www.youtube.com/@SuperSheldon-Education" target="_blank" aria-label="Youtube">
//               <FaYoutube className="hover:text-red-600 transition-colors duration-300"/>
//             </Link>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          
//           <div>
//             <h3 className="font-bold text-gray-900 mb-2 text-lg uppercase tracking-wide">Company</h3>
//             <ul className="space-y-2 text-gray-800 text-lg">
//               <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
//               <li><Link href="/refund" className="hover:text-gray-900">Refund Policy</Link></li>
//               <li><Link href="/terms" className="hover:text-gray-900">Terms & Conditions</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-gray-900 mb-2 text-lg uppercase tracking-wide">Courses</h3>
//             <ul className="space-y-2 text-gray-800 text-lg">
//               <li><Link href="#course" className="hover:text-gray-900">Naplan Exam</Link></li>
//               <li><Link href="#course" className="hover:text-gray-900">11+ Exam</Link></li>
//               <li><Link href="#course" className="hover:text-gray-900">SAT Exam</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-gray-900 mb-2 text-lg uppercase tracking-wide">Support</h3>
//             <ul className="space-y-2 text-gray-800 text-lg">
//               <li><Link href="#" className="hover:text-gray-900">FAQ</Link></li>
//               <li><Link href="#" className="hover:text-gray-900">Support</Link></li>
//               <li><Link href="#" className="hover:text-gray-900">Career</Link></li>
//             </ul>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Note */}
//       <div className="mt-8 border-t border-gray-300 pt-3 text-center text-sm text-gray-600">
//         © {new Date().getFullYear()} Supersheldon. All rights reserved.
//       </div>
//     </footer>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-10 text-gray-800 px-6 py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8">

        {/* Left Section */}
        <div className="lg:w-2/5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/Final-Logo-bg-removed.png"
              alt="Super Sheldon Logo"
              width={160}
              height={100}
              className="h-auto w-auto"
            />
            <span className="font-extrabold text-3xl sm:text-4xl">Supersheldon</span>
          </div>

          <p className="text-gray-700 text-xl sm:text-2xl leading-snug">
            Supersheldon is a trusted global learning platform offering expert-led exam preparation for UK, US, and Australian students.
          </p>

          <div className="space-y-1 text-gray-800 text-xl sm:text-2xl">
            <p>📞 <span className="font-semibold">Phone:</span> +91 91370 53875</p>
            <p>✉️ <span className="font-semibold">Email:</span> support@supersheldon.com</p>
            <p>📍 <span className="font-semibold">Address:</span> Om Chambers 648/A 4th Flr, Binnamangala 1st Stage,Bangalore- 560038, Karnataka, India</p>
          </div>

          <div className="flex gap-8 mt-4 text-4xl sm:text-5xl">
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
            <Link href="https://www.youtube.com/@SuperSheldon-Education" target="_blank" aria-label="Youtube">
              <FaYoutube className="hover:text-red-600 transition-colors duration-300"/>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div>
            <h3 className="font-extrabold text-red-400 mb-3 text-2xl sm:text-3xl uppercase tracking-wide">Company</h3>
            <ul className="space-y-3 text-gray-800 text-xl sm:text-2xl">
              <li><Link href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/refund" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Refund Policy</Link></li>
              <li><Link href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <Link href="/courses"><h3 className="font-extrabold text-orange-600 mb-3 text-2xl sm:text-3xl uppercase tracking-wide">Courses</h3></Link>
            <ul className="space-y-3 text-gray-800 text-xl sm:text-2xl">
              <li><Link href="#course" className="hover:text-gray-900">Naplan Exam</Link></li>
              <li><Link href="#course" className="hover:text-gray-900">11+ Exam</Link></li>
              <li><Link href="#course" className="hover:text-gray-900">SAT Exam</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-red-600 mb-3 text-2xl sm:text-3xl uppercase tracking-wide">Support</h3>
            <ul className="space-y-3 text-gray-800 text-xl sm:text-2xl">
              <li><Link href="#" className="hover:text-gray-900">FAQ</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Support</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Career</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 sm:mt-8 border-t border-gray-300 pt-4 text-center text-lg sm:text-xl text-gray-600">
        © {new Date().getFullYear()} Supersheldon. All rights reserved.
      </div>
    </footer>
  );
}
