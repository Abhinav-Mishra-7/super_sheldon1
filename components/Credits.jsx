
"use client";

import Image from "next/image";
import Link from "next/link";
import GlossyButton from "./GlossyButton";

export default function Credits() {
  return (
    <section className="relative w-[95%] sm:w-[90%] mx-auto -mt-32 px-4 overflow-hidden">
      {/* Pill background */}
      <div className="w-full bg-[#EDE8E1] rounded-[9999px] py-6 px-4 sm:px-10 shadow-md relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-center">
          
          {/* Trusted Feedback */}
          <div className="flex flex-col items-center justify-between space-y-3">
            <p className="text-xl font-semibold font-medium">Trusted Feedback</p>
            <div className="flex items-start justify-center gap-6">
              {/* Trustpilot */}
              <div className="flex flex-col items-center">
                <Image
                  src="/trustpilot.png"
                  alt="Trustpilot"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <p className="text-xs text-[#4E5566] mt-1">TrustScore 4.9 (395 reviews)</p>
              </div>

              {/* Google */}
              <div className="flex flex-col items-center">
                <Image
                  src="/google.png"
                  alt="Google Reviews"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <p className="text-xs text-[#4E5566] mt-1">278 reviews</p>
              </div>
            </div>
          </div>

          {/* Accredited By */}
          <div className="flex flex-col items-center space-y-3">
            <p className="text-xl font-semibold font-medium">Accredited by</p>
            <Image
              src="/Stem.png"
              alt="STEM Accredited"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Built By Alumni */}
          <div className="flex flex-col items-center space-y-3">
            <p className="text-xl font-semibold font-medium">Built by alumni of</p>
            <Image
              src="/Messa.png"
              alt="Mesa School of Business"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center space-y-3">
            <p className="text-[#1D2026] font-semibold text-xl sm:text-md leading-snug">
              80% learners show Exam<br />increased confidence in 2 weeks
            </p>
          </div>
        </div>

        {/* Bottom flex row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-sm sm:text-md text-[#4E5566] mt-2 text-center">
          <p className="invisible">Placeholder</p>
          <p>Educational Experience</p>
          <p>Mesa School of Business</p>
          <p className="invisible">Placeholder</p>
        </div>
      </div>

      {/* White gradient overlay */}
      <div className="absolute bottom-0 left-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="text-center mx-auto mt-8 relative z-20 mb-2">
        <Link
      href="https://forms.gle/csc94GLG3tEDit6N6"
      target="_blank"
      rel="noopener noreferrer"
          ><GlossyButton>
            Try a free Class
          </GlossyButton>
        </Link>
      </div>
    </section>
  );
}

