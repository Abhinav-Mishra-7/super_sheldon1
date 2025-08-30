"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#FFF9F1] text-gray-800 pt-6 pb-3 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 w-full">
        
        {/* Left Section */}
        <div className="w-full md:w-2/5 overflow-hidden">
          <Image
            src="/Final-Logo-bg-removed.png"
            alt="Super Sheldon Logo"
            width={197}
            height={124}
            priority
            className="max-w-full h-auto"
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

          <div className="flex flex-wrap gap-4 mt-5 text-2xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-3/5">
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
