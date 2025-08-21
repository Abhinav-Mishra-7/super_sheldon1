


// "use client";

// import Image from "next/image";

// export default function Credits() {
//   return (
//     <section className="relative w-full mt-0 overflow-hidden">
//       {/* Pill background */}
//       <div className="w-full bg-[#F5F2ED] rounded-[9999px] py-4 px-6 sm:px-10 shadow-md relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-center">
          
//           {/* 🔥 Trusted Feedback */}
//           <div className="flex flex-col items-center justify-between h-full space-y-2">
//             <p className="text-lg text-[#4E5566] font-medium">Trusted Feedback</p>
//             <div className="h-28 flex items-center justify-center -mt-1">
//               <Image
//                 src="/reviews.png"
//                 alt="Trustpilot"
//                 width={380}
//                 height={160}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Accredited By */}
//           <div className="flex flex-col items-center justify-between h-full space-y-2">
//             <p className="text-lg text-[#4E5566] font-medium">Accredited by</p>
//             <div className="h-28 flex items-center justify-center">
//               <Image
//                 src="/stemi.png"
//                 alt="STEM Accredited"
//                 width={240}
//                 height={110}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Built By Alumni */}
//           <div className="flex flex-col items-center justify-between h-full space-y-2">
//             <p className="text-lg text-[#4E5566] font-medium">Built by alumni of</p>
//             <div className="h-28 flex items-center justify-center">
//               <Image
//                 src="/mesa.png"
//                 alt="Mesa School of Business Logo"
//                 width={240}
//                 height={110}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Exam Confidence */}
//           <div className="flex flex-col items-center justify-center h-full space-y-2">
//             <p className="text-[#1D2026] font-semibold text-sm leading-snug">
//               80% learners show Exam<br />increased confidence in 2 weeks
//             </p>
//           </div>
//         </div>

//         {/* Bottom flex row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-sm text-[#4E5566] mt-2 text-center">
//           <p className="invisible">Placeholder</p>
//           <p>Educational Experience</p>
//           <p>Mesa School of Business</p>
//           <p className="invisible">Placeholder</p>
//         </div>

//         {/* Button */}
//         <div className="text-center mt-5">
//           <button className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9500] hover:from-[#FFC93C] hover:to-[#FF8C00] text-white rounded-full font-bold text-sm shadow-md transition-transform hover:scale-105">
//             Try a free Class
//           </button>
//         </div>
//       </div>

//       {/* White gradient overlay */}
//       <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function Credits() {
  return (
    <section className="relative w-full mt-0 overflow-hidden">
      {/* Pill background */}
      <div className="w-full bg-[#EDE8E1] rounded-[9999px] py-4 px-6 sm:px-10 shadow-md relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-center">
          
          {/* Trusted Feedback */}
          <div className="flex flex-col items-center justify-between h-full space-y-2">
            <p className="text-lg text-[#4E5566] font-medium">Trusted Feedback</p>
            <div className="h-28 flex items-center justify-center -mt-1">
              <Image
                src="/reviews.png"
                alt="Trustpilot"
                width={380}
                height={160}
                className="object-contain"
              />
            </div>
          </div>

          {/* Accredited By */}
          <div className="flex flex-col items-center justify-between h-full space-y-2">
            <p className="text-lg text-[#4E5566] font-medium">Accredited by</p>
            <div className="h-28 flex items-center justify-center">
              <Image
                src="/stemi.png"
                alt="STEM Accredited"
                width={240}
                height={110}
                className="object-contain"
              />
            </div>
          </div>

          {/* Built By Alumni */}
          <div className="flex flex-col items-center justify-between h-full space-y-2">
            <p className="text-lg text-[#4E5566] font-medium">Built by alumni of</p>
            <div className="h-28 flex items-center justify-center">
              <Image
                src="/mesa.png"
                alt="Mesa School of Business Logo"
                width={240}
                height={110}
                className="object-contain"
              />
            </div>
          </div>

          {/* Exam Confidence */}
          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <p className="text-[#1D2026] font-semibold text-sm leading-snug">
              80% learners show Exam<br />increased confidence in 2 weeks
            </p>
          </div>
        </div>

        {/* Bottom flex row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-sm text-[#4E5566] mt-2 text-center">
          <p className="invisible">Placeholder</p>
          <p>Educational Experience</p>
          <p>Mesa School of Business</p>
          <p className="invisible">Placeholder</p>
        </div>
      </div>

      <div className="text-center mt-5 relative z-20">
        <button className="px-6 py-2 bg-[#FF4000] hover:from-[#FFC93C] hover:to-[#FF8C00] text-white rounded-full font-bold text-sm shadow-md transition-transform hover:scale-105">
          Try a free Class
        </button>
      </div>

      {/* White gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
