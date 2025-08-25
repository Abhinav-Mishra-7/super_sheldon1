

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const slides = [
//   {
//     id: 0,
//     texts: [
//       {
//         number: "01",
//         title: "Interactive Learning",
//         desc: "Exciting classes for students to enjoy learning.",
//       },
//       {
//         number: "02",
//         title: "Expert Teachers",
//         desc: "Learn with highly experienced mentors.",
//       },
//       {
//         number: "03",
//         title: "Flexible Learning",
//         desc: "Access lessons anytime, anywhere.",
//       },
//     ],
//     images: ["/small1.png", "/large1.png"],
//   },
//   {
//     id: 1,
//     texts: [
//       {
//         number: "01",
//         title: "Proven Results",
//         desc: "Thousands of students achieved their goals.",
//       },
//       {
//         number: "02",
//         title: "Personalized Plans",
//         desc: "Tailored programs for individual growth.",
//       },
//       {
//         number: "03",
//         title: "Supportive Community",
//         desc: "Join a group of like-minded learners.",
//       },
//     ],
//     images: ["/small2.png", "/large2.png"],
//   },
//   {
//     id: 2,
//     texts: [
//       {
//         number: "01",
//         title: "Easy Onboarding",
//         desc: "Start your journey with just a few clicks.",
//       },
//       {
//         number: "02",
//         title: "Affordable Plans",
//         desc: "Quality education at the best price.",
//       },
//       {
//         number: "03",
//         title: "Lifetime Access",
//         desc: "Learn at your own pace, forever.",
//       },
//     ],
//     images: ["/small3.png", "/large3.png"],
//   },
// ];

// export default function SlideShow() {
//   const [active, setActive] = useState(0);

//   return (
//     <div className="flex flex-col items-center justify-center w-full bg-white px-10 py-16">
//       {/* Top Heading (fixed, not animated) */}
//       <h2 className="text-5xl leading-tight font-quicksand font-semibold mb-14 text-center">
//         The Smart Choice <br />
//         for Bright <br />
//         Futures
//       </h2>

//       {/* Content Flexbox */}
//       <div className="flex w-full max-w-7xl gap-5">
//         {/* Left Section (Text Side) */}
//         <div className="flex-1 flex flex-col justify-start">
//           {/* Global Exam Expertise Heading */}
//           <h3 className="text-2xl font-quicksand font-semibold mb-10">
//             The Global Exam Expertise
//           </h3>

//           {/* Text Boxes */}
//           <div className="flex flex-col gap-10">
//             {slides[active].texts.map((t, idx) => (
//               <motion.div
//                 key={t.title}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//                 className={`flex items-center gap-6 ${
//                   idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                 }`}
//               >
//                 {/* Number */}
//                 <span className="text-6xl font-bold text-gray-200 leading-none flex-shrink-0">
//                   {t.number}
//                 </span>

//                 {/* Text Box with Logo placeholder */}
//                 <div className="flex items-start gap-4 max-w-md bg-white rounded-2xl shadow-2xl shadow-gray-400 p-6">
//                   {/* Logo placeholder (replace with actual logo later) */}
//                   <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />

//                   {/* Text Content */}
//                   <div>
//                     <h3 className="text-xl font-roboto font-bold">
//                       {t.title}
//                     </h3>
//                     <p className="text-base font-roboto text-gray-600">
//                       {t.desc}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Right Section (Images + Pills) */}
//         <div className="flex-1 flex items-center justify-between gap-5">
//           {/* Images */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slides[active].id + "-images"}
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -40 }}
//               transition={{ duration: 0.7, ease: "easeInOut" }}
//               className="flex items-start gap-6"
//             >
//               {/* Smaller Image */}
// <div className="rounded-2xl border overflow-hidden shadow-lg w-[180px] h-[260px] bg-gray-100 flex items-center justify-center">
//   <Image
//     src={slides[active].images[0]}
//     alt="small"
//     width={180}
//     height={260}
//     className="object-cover"
//   />
// </div>

// {/* Larger Image */}
// <div className="rounded-2xl border overflow-hidden shadow-lg w-[260px] h-[500px] bg-gray-100 flex items-center justify-center">
//   <Image
//     src={slides[active].images[1]}
//     alt="large"
//     width={260}
//     height={500}
//     className="object-cover h-full"
//   />
// </div>

//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Pills */}
//           <div className="flex flex-col justify-center gap-3">
//             {slides.map((_, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => setActive(index)}
//                 animate={{
//                   width: active === index ? 18 : 12,
//                   height: active === index ? 70 : 50,
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className={`rounded-full transition-colors ${
//                   active === index
//                     ? "bg-gray-700"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const slides = [
//   {
//     id: 0,
//     texts: [
//       {
//         number: "01",
//         title: "Interactive Learning",
//         desc: "Exciting classes for students to enjoy learning.",
//       },
//       {
//         number: "02",
//         title: "Expert Teachers",
//         desc: "Learn with highly experienced mentors.",
//       },
//       {
//         number: "03",
//         title: "Flexible Learning",
//         desc: "Access lessons anytime, anywhere.",
//       },
//     ],
//     images: ["/small1.png", "/large1.png"],
//   },
//   {
//     id: 1,
//     texts: [
//       {
//         number: "01",
//         title: "Proven Results",
//         desc: "Thousands of students achieved their goals.",
//       },
//       {
//         number: "02",
//         title: "Personalized Plans",
//         desc: "Tailored programs for individual growth.",
//       },
//       {
//         number: "03",
//         title: "Supportive Community",
//         desc: "Join a group of like-minded learners.",
//       },
//     ],
//     images: ["/small2.png", "/large2.png"],
//   },
//   {
//     id: 2,
//     texts: [
//       {
//         number: "01",
//         title: "Easy Onboarding",
//         desc: "Start your journey with just a few clicks.",
//       },
//       {
//         number: "02",
//         title: "Affordable Plans",
//         desc: "Quality education at the best price.",
//       },
//       {
//         number: "03",
//         title: "Lifetime Access",
//         desc: "Learn at your own pace, forever.",
//       },
//     ],
//     images: ["/small3.png", "/large3.png"],
//   },
// ];

// export default function SlideShow() {
//   const [active, setActive] = useState(0);

//   return (
//     <div className="flex flex-col items-center justify-center w-full bg-white px-10 py-16">
//       {/* Top Heading */}
//       <h2 className="text-5xl leading-tight font-quicksand font-semibold mb-14 text-center">
//         The Smart Choice <br />
//         for Bright <br />
//         Futures
//       </h2>

//       {/* Content Flexbox */}
//       <div className="flex w-full max-w-7xl gap-5">
//         {/* Left Section (Text Side) */}
//         <div className="flex-1 flex flex-col justify-start">
//           <h3 className="text-4xl font-quicksand font-semibold mb-10">
//             The Global Exam Expertise
//           </h3>

//           {/* Text Boxes */}
//           <div className="flex flex-col gap-5">
//             {slides[active].texts.map((t, idx) => (
//               <motion.div
//                 key={t.title}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//                 className={`flex items-center gap-6 ${
//                   idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                 }`}
//               >
//                 {/* Number */}
//                 <span className="text-6xl font-bold font-poppins text-gray-200 leading-none flex-shrink-0">
//                   {t.number}
//                 </span>

//                 {/* Text Box with Centered Logo */}
//                 <div className="flex items-center gap-4 w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-gray-400 p-8 min-h-[150px]">
//                   {/* Logo placeholder */}
//                   <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center" />

//                   {/* Text Content */}
//                   <div>
//                     <h3 className="text-xl font-roboto font-bold">
//                       {t.title}
//                     </h3>
//                     <p className="text-base font-roboto text-gray-600">
//                       {t.desc}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Right Section (Images + Pills) */}
//         <div className="flex-1 flex items-center justify-between gap-5">
//           {/* Images */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slides[active].id + "-images"}
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -40 }}
//               transition={{ duration: 0.7, ease: "easeInOut" }}
//               className="flex items-start gap-6"
//             >
//               {/* Smaller Image */}
//               <div className="rounded-2xl border overflow-hidden shadow-lg w-[200px] h-[300px] bg-gray-100 flex items-center justify-center">
//                 <Image
//                   src={slides[active].images[0]}
//                   alt="small"
//                   width={200}
//                   height={300}
//                   className="object-cover"
//                 />
//               </div>

//               {/* Larger Image */}
//               <div className="rounded-2xl border overflow-hidden shadow-lg w-[280px] h-[540px] bg-gray-100 flex items-center justify-center">
//                 <Image
//                   src={slides[active].images[1]}
//                   alt="large"
//                   width={280}
//                   height={540}
//                   className="object-cover h-full"
//                 />
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Pills */}
//           {/* Navigation Pills */}
// <div className="flex flex-col justify-center gap-2">
//   {slides.map((_, index) => (
//     <motion.button
//       key={index}
//       onClick={() => setActive(index)}
//       animate={{
//         height: active === index ? 100 : 40, 
//         width: 8, 
//       }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className={`rounded-full transition-colors ${
//         active === index
//           ? "bg-gray-700"
//           : "bg-gray-300 hover:bg-gray-400"
//       }`}
//     />
//   ))}
// </div>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 0,
    texts: [
      {
        number: "01",
        title: "Interactive Learning",
        desc: "Exciting classes for students to enjoy learning.",
      },
      {
        number: "02",
        title: "Expert Teachers",
        desc: "Learn with highly experienced mentors.",
      },
      {
        number: "03",
        title: "Flexible Learning",
        desc: "Access lessons anytime, anywhere.",
      },
    ],
    images: ["/small1.png", "/large1.png"],
  },
  {
    id: 1,
    texts: [
      {
        number: "01",
        title: "Proven Results",
        desc: "Thousands of students achieved their goals.",
      },
      {
        number: "02",
        title: "Personalized Plans",
        desc: "Tailored programs for individual growth.",
      },
      {
        number: "03",
        title: "Supportive Community",
        desc: "Join a group of like-minded learners.",
      },
    ],
    images: ["/small2.png", "/large2.png"],
  },
  {
    id: 2,
    texts: [
      {
        number: "01",
        title: "Easy Onboarding",
        desc: "Start your journey with just a few clicks.",
      },
      {
        number: "02",
        title: "Affordable Plans",
        desc: "Quality education at the best price.",
      },
      {
        number: "03",
        title: "Lifetime Access",
        desc: "Learn at your own pace, forever.",
      },
    ],
    images: ["/small3.png", "/large3.png"],
  },
];

export default function SlideShow() {
  const [active, setActive] = useState(0);

  // ✅ Auto-switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white px-10 py-16">
      {/* Top Heading */}
      <h2 className="text-5xl leading-tight font-quicksand font-semibold mb-14 text-center">
        The Smart Choice <br />
        for Bright <br />
        Futures
      </h2>

      {/* Content Flexbox */}
      <div className="flex w-full max-w-7xl gap-5">
        {/* Left Section (Text Side) */}
        <div className="flex-1 flex flex-col justify-start">
          <h3 className="text-4xl font-quicksand font-semibold mb-10">
            The Global Exam Expertise
          </h3>

          {/* Text Boxes */}
          <div className="flex flex-col gap-5">
            {slides[active].texts.map((t, idx) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`flex items-center gap-6 ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Number */}
                <span className="text-6xl font-bold font-poppins text-gray-200 leading-none flex-shrink-0">
                  {t.number}
                </span>

                {/* Text Box with Centered Logo */}
                <div className="flex items-center gap-4 w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-gray-400 p-8 min-h-[150px]">
                  {/* Logo placeholder */}
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center" />

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-roboto font-bold">{t.title}</h3>
                    <p className="text-base font-roboto text-gray-600">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section (Images + Pills) */}
        <div className="flex-1 flex items-center justify-between gap-5">
          {/* Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].id + "-images"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex items-start gap-6"
            >
              {/* Smaller Image */}
              <div className="rounded-2xl border overflow-hidden shadow-lg w-[200px] h-[300px] bg-gray-100 flex items-center justify-center">
                <Image
                  src={slides[active].images[0]}
                  alt="small"
                  width={200}
                  height={300}
                  className="object-cover"
                />
              </div>

              {/* Larger Image */}
              <div className="rounded-2xl border overflow-hidden shadow-lg w-[280px] h-[540px] bg-gray-100 flex items-center justify-center">
                <Image
                  src={slides[active].images[1]}
                  alt="large"
                  width={280}
                  height={540}
                  className="object-cover h-full"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Pills */}
          <div className="flex flex-col justify-center gap-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActive(index)}
                animate={{
                  height: active === index ? 100 : 40,
                  width: 8,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`rounded-full transition-colors ${
                  active === index
                    ? "bg-gray-700"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
