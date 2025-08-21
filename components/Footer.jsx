// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFF9F1] text-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Logo and About */}
        <div className="w-full md:w-2/5">
          <Image
            src="/Final-Logo-bg-removed.png"
            alt="Super Sheldon Logo"
            width={197}
            height={124}
            className="mb-3"
            priority
          />
          <p className="text-xl text-gray-500 leading-relaxed font-roboto">
            Supersheldon is a trusted global<br></br> learning platform offering 
            expert-led exam<br></br> preparation for UK, US, and Australian students.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Refund Policy</Link></li>
            <li><Link href="#">Terms and Conditions</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Naplan Exam</Link></li>
            <li><Link href="#">11+ Exam</Link></li>
            <li><Link href="#">SAT Exam</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Support</Link></li>
            <li><Link href="#">Career</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>+0913-705-3875</li>
            <li>ElizabethJ@jourrapide.com</li>
            <li>
              4808 Skinner Hollow Road <br />
              Days Creek, OR 97429
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
