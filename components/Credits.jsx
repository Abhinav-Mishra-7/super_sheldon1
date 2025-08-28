
"use client";

import Image from "next/image";

export default function Credits() {
  return (
    <section className="relative w-[90%] mx-auto mt-5 overflow-hidden">
      {/* Pill background */}
      <div className="w-full bg-[#EDE8E1] rounded-[9999px] py-4 px-6 sm:px-10 shadow-md relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 items-stretch text-center">
          
          {/* Trusted Feedback */}
          <div className="flex flex-col items-center justify-between h-[130px] space-y-2">
            <p className="text-lg text-[#4E5566] font-medium">Trusted Feedback</p>
            <div className="h-28 flex items-center justify-center -mt-1 gap-3">
               <Image
                src="/trustpilot.png"
                alt="Trustpilot"
                width={100}
                height={100}
                className="object-contain"
              />
              <Image
                src="/google.png"
                alt="Trustpilot"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-xs">TrusteScore 4.9 395 reviews , 278 Reviews</p>
          </div>

          {/* Accredited By */}
          <div className="flex flex-col items-center justify-between h-full space-y-2">
            <p className="text-lg text-[#4E5566] font-medium">Accredited by</p>
            <div className="h-28 flex items-center justify-center">
              <Image
                src="/Stem.png"
                alt="STEM Accredited"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Built By Alumni */}
          <div className="flex flex-col items-center justify-between h-full space-y-2">
            <p className="text-lg text-[#4E5566] font-medium">Built by alumni of</p>
            <div className="h-28 flex items-center justify-center">
              <Image
                src="/Messa.png"
                alt="Mesa School of Business Logo"
                width={200}
                height={110}
                className="object-contain"
              />
            </div>
          </div>

          {/* Exam Confidence */}
          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <p className="text-[#1D2026] font-semibold text-md leading-snug">
              80% learners show Exam<br />increased confidence in 2 weeks
            </p>
          </div>
        </div>

        {/* Bottom flex row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-md text-[#4E5566] mt-0 text-center">
          <p className="invisible">Placeholder</p>
          <p>Educational Experience</p>
          <p>Mesa School of Business</p>
          <p className="invisible">Placeholder</p>
        </div>
      </div>

      {/* White gradient overlay */}
      <div className="absolute bottom-0 left-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />

       <div className="text-center mx-auto mt-5 relative z-20">
        <a href="#course">
        <button className="px-6 py-2  shadow-gray-500 mt-6 transform -translate-y-1/2 bg-gradient-to-r from-[#FFC93C] to-[#FF8C00] hover:from-[#E6AE2C] hover:to-[#CC7000] text-white rounded-full font-bold text-sm shadow-md transition-colors duration-300 hover:scale-105">
          Try a free Class
        </button>
        </a>
      </div>
    </section>
  );
}
