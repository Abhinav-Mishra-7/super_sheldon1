// "use client";

// import Link from "next/link";

// export default function GlossyButton({
//   children = "Book A Free Math Class",
//   href,
//   onClick,
//   className = "",
// }) {
//   const Tag = href ? Link : "button";

//   return (
//     <Tag
//       {...(href ? { href } : { onClick })}
//       className={`relative overflow-hidden bg-[#C45F30] text-white font-semibold px-8 py-3 rounded-full border-2 border-[#3A1F10] shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] focus:outline-none focus:ring-2 focus:ring-[#D16F3B] transition-all duration-200 inline-block ${className}`}
//     >
//       {children}

//       {/* Streak overlay */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
//         {/* First streak */}
//         <div className="absolute top-0 left-[-150%] w-[250%] h-full animate-shine-slow">
//           <svg
//             viewBox="0 0 53 54"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full h-full"
//           >
//             <g opacity="0.2">
//               <rect
//                 x="31.3149"
//                 y="-9"
//                 width="11"
//                 height="70"
//                 transform="rotate(26.574 31.3149 -9)"
//                 fill="#D9D9D9"
//               />
//               <rect
//                 x="47.3149"
//                 y="-7.4563"
//                 width="6.30956"
//                 height="70"
//                 transform="rotate(26.574 47.3149 -7.4563)"
//                 fill="#D9D9D9"
//               />
//             </g>
//           </svg>
//         </div>

//         {/* Second streak with delay */}
//         <div className="absolute top-0 left-[-150%] w-[250%] h-full animate-shine-slow animate-delay-500">
//           <svg
//             viewBox="0 0 53 54"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full h-full"
//           >
//             <g opacity="0.2">
//               <rect
//                 x="31.3149"
//                 y="-9"
//                 width="11"
//                 height="70"
//                 transform="rotate(26.574 31.3149 -9)"
//                 fill="#D9D9D9"
//               />
//               <rect
//                 x="47.3149"
//                 y="-7.4563"
//                 width="6.30956"
//                 height="70"
//                 transform="rotate(26.574 47.3149 -7.4563)"
//                 fill="#D9D9D9"
//               />
//             </g>
//           </svg>
//         </div>
//       </div>
//     </Tag>
//   );
// }




"use client";

import Link from "next/link";

export default function GlossyButton({
  children = "Book A Free Math Class",
  href,
  onClick,
  className = "",
}) {
  const Tag = href ? Link : "button";

  return (
    <Tag
      {...(href ? { href } : { onClick })}
      className={`relative overflow-hidden bg-[#C45F30] text-white font-semibold px-10 py-2 rounded-full border-2 border-[#3A1F10] shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] focus:outline-none focus:ring-2 focus:ring-[#D16F3B] transition-all duration-200 inline-block ${className}`}
    >
      {children}

      {/* Single streak overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
        <div className="absolute top-0 left-[-150%] w-[250%] h-full animate-shine-slow">
          <svg
            viewBox="0 0 53 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g opacity="0.2">
              <rect
                x="31.3149"
                y="-9"
                width="11"
                height="70"
                transform="rotate(26.574 31.3149 -9)"
                fill="#D9D9D9"
              />
              <rect
                x="47.3149"
                y="-7.4563"
                width="6.30956"
                height="70"
                transform="rotate(26.574 47.3149 -7.4563)"
                fill="#D9D9D9"
              />
            </g>
          </svg>
        </div>
      </div>
    </Tag>
  );
}
