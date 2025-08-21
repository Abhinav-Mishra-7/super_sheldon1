


// "use client";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     text: "Education brings knowledge. Young & energetic team took the challenge to educate the community. This will surely help students acquire knowledge in their chosen fields.",
//     name: "— Firoz Khan",
//     image: "/k1b.png",
//   },
//   {
//     text: "Interface is user-friendly and the content is informative and engaging.",
//     name: "— Pramod Kumar",
//     image: "/k2g.png",
//   },
//   // {
//   //   text: "As per me, it is on the top as I have tried many other platforms. Here they are doing very great.",
//   //   name: "— Shahid King",
//   //   image: "/path-to-image3.jpg",
//   // },
// ];

// export default function StudentTestimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const timeoutRef = useRef(null);

//   // Auto-slide
//   useEffect(() => {
//     if (isPaused) return;
//     timeoutRef.current = setTimeout(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [currentIndex, isPaused]);

//   const handleDotClick = useCallback((index) => {
//     setCurrentIndex(index);
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   const handleDragEnd = (_, info) => {
//     if (info.offset.x > 50) {
//       setCurrentIndex((prev) =>
//         prev === 0 ? testimonials.length - 1 : prev - 1
//       );
//     } else if (info.offset.x < -50) {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }
//   };

//   return (
//     <div
//       className="relative flex flex-col items-center justify-center bg-white py-20 overflow-hidden"
//       role="region"
//       aria-label="Student testimonials carousel"
//     >
//       {/* Decorative Orange Circles (responsive & dimmed) */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
//         <div className="absolute top-12 left-12 
//                         w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 
//                         bg-[#FB8740] opacity-10 rounded-full 
//                         blur-[80px] sm:blur-[100px] md:blur-[140px]" />
//         <div className="absolute bottom-12 right-12 
//                         w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 
//                         bg-[#FB8740] opacity-10 rounded-full 
//                         blur-[70px] sm:blur-[90px] md:blur-[120px]" />
//       </div>

//       {/* Carousel */}
//       <div
//         className="relative w-11/12 max-w-6xl rounded-2xl z-10 overflow-hidden"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragMomentum={false}
//             dragElastic={0.2}
//             onDragEnd={handleDragEnd}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="flex-shrink-0 w-full bg-[#FB8740] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 shadow-lg relative rounded-2xl"
//             aria-live="polite"
//           >
//             {/* Text */}
//             <div className="flex-1 pr-0 md:pr-6 mb-6 md:mb-0 text-center md:text-left relative z-10">
//               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
//                 What Our Students Say
//               </h2>
//               <p className="text-base md:text-lg text-white leading-relaxed">
//                 "{testimonials[currentIndex].text}"
//                 <span className="mt-2 block font-medium">
//                   {testimonials[currentIndex].name}
//                 </span>
//               </p>
//             </div>

//             {/* Image */}
//             <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 relative z-10">
//               <img
//                 src={testimonials[currentIndex].image}
//                 alt={`Photo of ${testimonials[currentIndex].name}`}
//                 loading="lazy"
//                 className="rounded-xl object-cover w-full h-full shadow-inner"
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Dots */}
//       <div
//         className="flex mt-6 p-2 bg-gray-200 rounded-full shadow-md opacity-90 space-x-3 cursor-pointer z-10"
//         role="tablist"
//         aria-label="Testimonial navigation"
//       >
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleDotClick(index)}
//             aria-selected={currentIndex === index}
//             aria-label={`Go to testimonial ${index + 1}`}
//             role="tab"
//             className={`h-2 rounded-full transition-all duration-500 shadow-md border-2 ${
//               currentIndex === index
//                 ? "w-6 bg-white shadow-lg border-white"
//                 : "w-4 bg-white/50 shadow-sm border-white/50"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Floating Animated Logos (smaller size) */}
//       <motion.img
//         src="/globe.png"
//         alt="Globe Logo"
//         className="absolute top-10 left-10 
//                    w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
//                    z-20 drop-shadow-lg"
//         animate={{
//           y: [0, -20, 0],
//           x: [0, 20, 0],
//           skew: [0, 4, 0],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.img
//         src="/pencil.png"
//         alt="Atom Logo"
//         className="absolute bottom-10 right-10 
//                    w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
//                    z-20 drop-shadow-lg"
//         animate={{
//           y: [0, 20, 0],
//           x: [0, -20, 0],
//           skew: [0, -4, 0],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1.5,
//         }}
//       />
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     text: "I am Divya, mother of Kiaan. He has had the best Math classes at SuperSheldon — the progress and confidence he has gained are amazing!",
//     name: "— Divya",
//     image: "/k1b.png",
//   },
//   {
//     text: "Education brings knowledge. Young & energetic team took the challenge to educate the community. This will surely help students acquire knowledge in their chosen fields.",
//     name: "— Firoz Khan",
//     image: "/k2g.png",
//   },
//   {
//     text: "Interface is user-friendly and the content is informative and engaging.",
//     name: "— Pramod Kumar",
//     image: "/k3.png",
//   },
// ];

// export default function StudentTestimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const timeoutRef = useRef(null);

//   // Auto-slide
//   useEffect(() => {
//     if (isPaused) return;
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);

//     timeoutRef.current = setTimeout(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [currentIndex, isPaused]);

//   const handleDotClick = useCallback((index) => {
//     setCurrentIndex(index);
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   }, []);

//   const handleDragEnd = (_, info) => {
//     if (info.offset.x > 50) {
//       setCurrentIndex((prev) =>
//         prev === 0 ? testimonials.length - 1 : prev - 1
//       );
//     } else if (info.offset.x < -50) {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }
//   };

//   return (
//     <div
//       className="relative flex flex-col items-center justify-center bg-white py-20 overflow-hidden"
//       role="region"
//       aria-label="Student testimonials carousel"
//     >
//       {/* Decorative Orange Circles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
//         <div className="absolute top-12 left-12 
//                         w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 
//                         bg-[#FB8740] opacity-10 rounded-full 
//                         blur-[80px] sm:blur-[100px] md:blur-[140px]" />
//         <div className="absolute bottom-12 right-12 
//                         w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 
//                         bg-[#FB8740] opacity-10 rounded-full 
//                         blur-[70px] sm:blur-[90px] md:blur-[120px]" />
//       </div>

//       {/* Carousel */}
//       <div
//         className="relative w-11/12 max-w-6xl rounded-2xl z-10 overflow-visible"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onTouchStart={() => setIsPaused(true)}
//         onTouchEnd={() => setIsPaused(false)}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragMomentum={false}
//             dragElastic={0.2}
//             onDragEnd={handleDragEnd}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="flex-shrink-0 w-full bg-[#FB8740] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 shadow-lg relative rounded-2xl overflow-visible"
//             aria-live="polite"
//           >
//             {/* Text */}
//             <div className="flex-1 pr-0 md:pr-6 mb-6 md:mb-0 text-center md:text-left relative z-10">
//               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
//                 What Our Students Say
//               </h2>
//               <p className="text-base md:text-lg text-white leading-relaxed">
//                 "{testimonials[currentIndex].text}"
//                 <span className="mt-2 block font-medium">
//                   {testimonials[currentIndex].name}
//                 </span>
//               </p>
//             </div>

//             {/* Image (touches bottom, pops out above box) */}
//             <div className="absolute bottom-0 right-6 md:right-12">
//               <img
//                 src={testimonials[currentIndex].image}
//                 alt={`Photo of ${testimonials[currentIndex].name}`}
//                 loading="lazy"
//                 className="w-40 h-auto md:w-56 object-contain relative z-20 shadow-xl"
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Dots */}
//       <div
//         className="flex mt-6 p-2 bg-gray-200 rounded-full shadow-md opacity-90 space-x-3 cursor-pointer z-10"
//         role="tablist"
//         aria-label="Testimonial navigation"
//       >
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleDotClick(index)}
//             aria-selected={currentIndex === index}
//             aria-label={`Go to testimonial ${index + 1}`}
//             role="tab"
//             className={`h-2 rounded-full transition-all duration-500 shadow-md border-2 ${
//               currentIndex === index
//                 ? "w-6 bg-white shadow-lg border-white"
//                 : "w-4 bg-white/50 shadow-sm border-white/50"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Floating Animated Logos */}
//       <motion.img
//         src="/globe.png"
//         alt="Globe Logo"
//         className="absolute top-10 left-10 
//                    w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
//                    z-20 drop-shadow-lg"
//         animate={{
//           y: [0, -20, 0],
//           x: [0, 20, 0],
//           skew: [0, 4, 0],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.img
//         src="/pencil.png"
//         alt="Pencil Logo"
//         className="absolute bottom-10 right-10 
//                    w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
//                    z-20 drop-shadow-lg"
//         animate={{
//           y: [0, 20, 0],
//           x: [0, -20, 0],
//           skew: [0, -4, 0],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1.5,
//         }}
//       />
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const testimonials = [
//   {
//     text: "I am Divya, mother of Kiaan. He has had the best Math classes at SuperSheldon — the progress and confidence he has gained are amazing!",
//     name: "— Divya",
//     image: "/k1b.png",
//   },
//   {
//     text: "Education brings knowledge. Young & energetic team took the challenge to educate the community. This will surely help students acquire knowledge in their chosen fields.",
//     name: "— Firoz Khan",
//     image: "/k2g.png",
//   },
//   {
//     text: "Interface is user-friendly and the content is informative and engaging.",
//     name: "— Pramod Kumar",
//     image: "/k3.png",
//   },
// ];

// export default function StudentTestimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1); // +1 forward, -1 backward
//   const [isPaused, setIsPaused] = useState(false);
//   const timeoutRef = useRef(null);

//   // Auto-slide
//   useEffect(() => {
//     if (isPaused) return;
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);

//     timeoutRef.current = setTimeout(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [currentIndex, isPaused]);

//   const handleDotClick = useCallback(
//     (index) => {
//       if (index === currentIndex) return;
//       setDirection(index > currentIndex ? 1 : -1);
//       setCurrentIndex(index);
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     },
//     [currentIndex]
//   );

//   const handleDragEnd = (_, info) => {
//     const threshold = window.innerWidth * 0.1; // 10% width
//     if (info.offset.x > threshold) {
//       setDirection(-1);
//       setCurrentIndex((prev) =>
//         prev === 0 ? testimonials.length - 1 : prev - 1
//       );
//     } else if (info.offset.x < -threshold) {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }
//   };

//   return (
//     <div
//       className="relative flex flex-col items-center justify-center bg-white py-20 overflow-hidden"
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Student testimonials carousel"
//     >
//       {/* Carousel */}
//       <div
//         className="relative w-11/12 max-w-6xl rounded-2xl z-10 overflow-visible"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onTouchStart={() => setIsPaused(true)}
//         onTouchEnd={() => setIsPaused(false)}
//       >
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragMomentum={false}
//             dragElastic={0.2}
//             onDragEnd={handleDragEnd}
//             variants={{
//               enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
//               center: { x: 0, opacity: 1 },
//               exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
//             }}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="relative flex-shrink-0 w-full bg-[#FB8740] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 shadow-xl rounded-2xl overflow-visible"
//             aria-live="polite"
//           >
//             {/* Text */}
//             <div className="flex-1 pr-0 md:pr-6 mb-6 md:mb-0 text-center md:text-left relative z-10">
//               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow">
//                 What Our Students Say
//               </h2>
//               <blockquote className="text-base md:text-lg text-white leading-relaxed italic">
//                 "{testimonials[currentIndex].text}"
//               </blockquote>
//               <cite className="mt-3 block font-semibold text-white/90 not-italic">
//                 {testimonials[currentIndex].name}
//               </cite>
//             </div>

//             {/* Image (pops out, bottom aligned) */}
//             <div className="absolute bottom-0 right-6 md:right-12 lg:right-16">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//                 className="drop-shadow-2xl"
//               >
//                 <Image
//                   src={testimonials[currentIndex].image}
//                   alt={`Photo of ${testimonials[currentIndex].name}`}
//                   width={280}
//                   height={280}
//                   className="object-contain relative z-20 rounded-xl"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Dots */}
//       <div
//         className="flex mt-6 p-2 bg-gray-200 rounded-full shadow-md opacity-90 space-x-3 cursor-pointer z-10"
//         role="tablist"
//         aria-label="Testimonial navigation"
//       >
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleDotClick(index)}
//             aria-selected={currentIndex === index}
//             aria-label={`Go to testimonial ${index + 1}`}
//             role="tab"
//             className={`h-2 rounded-full transition-all duration-500 shadow-md border-2 ${
//               currentIndex === index
//                 ? "w-6 bg-white shadow-lg border-white"
//                 : "w-4 bg-white/50 shadow-sm border-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const testimonials = [
//   {
//     text: "I am Divya, mother of Kiaan. He has had the best Math classes at SuperSheldon — the progress and confidence he has gained are amazing!",
//     name: "— Divya",
//     image: "/k1b.png",
//   },
//   {
//     text: "Education brings knowledge. Young & energetic team took the challenge to educate the community. This will surely help students acquire knowledge in their chosen fields.",
//     name: "— Firoz Khan",
//     image: "/k2g.png", // the one you uploaded
//   },
//   {
//     text: "Interface is user-friendly and the content is informative and engaging.",
//     name: "— Pramod Kumar",
//     image: "/k3.png",
//   },
// ];

// const variants = {
//   enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
//   center: { x: 0, opacity: 1 },
//   exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
// };

// export default function StudentTestimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [isPaused, setIsPaused] = useState(false);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     if (isPaused) return;
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);

//     timeoutRef.current = setTimeout(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearTimeout(timeoutRef.current);
//   }, [currentIndex, isPaused]);

//   const handleDotClick = useCallback(
//     (index) => {
//       if (index === currentIndex) return;
//       setDirection(index > currentIndex ? 1 : -1);
//       setCurrentIndex(index);
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     },
//     [currentIndex]
//   );

//   const handleDragEnd = (_, info) => {
//     const threshold = Math.min(80, window.innerWidth * 0.1);
//     if (info.offset.x > threshold) {
//       setDirection(-1);
//       setCurrentIndex((prev) =>
//         prev === 0 ? testimonials.length - 1 : prev - 1
//       );
//     } else if (info.offset.x < -threshold) {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }
//   };

//   return (
//     <div
//       className="relative flex flex-col items-center justify-center bg-white py-20 overflow-visible"
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Student testimonials carousel"
//       onFocus={() => setIsPaused(true)}
//       onBlur={() => setIsPaused(false)}
//     >
//       {/* Carousel */}
//       <div
//         className="relative w-11/12 max-w-6xl rounded-2xl z-10"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onTouchStart={() => setIsPaused(true)}
//         onTouchEnd={() => setIsPaused(false)}
//       >
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragMomentum={false}
//             dragElastic={0.2}
//             onDragEnd={handleDragEnd}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="relative flex-shrink-0 w-full bg-[#FB8740] flex items-center justify-between px-6 md:px-12 py-10 shadow-xl rounded-2xl overflow-visible"
//           >
//             {/* Text */}
//             <div className="flex-1 pr-10 text-center md:text-left relative z-10">
//               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow">
//                 What Our Students Say
//               </h2>
//               <blockquote
//                 className="text-base md:text-lg text-white leading-relaxed italic"
//                 aria-live="polite"
//               >
//                 "{testimonials[currentIndex].text}"
//               </blockquote>
//               <cite className="mt-3 block font-semibold text-white/90 not-italic">
//                 {testimonials[currentIndex].name}
//               </cite>
//             </div>

//             {/* Image (anchored bottom-right, popping out top) */}
//             <div className="absolute bottom-0 right-0 translate-y-1/4">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//                 className="drop-shadow-2xl -translate-y-1/4"
//               >
//                 <Image
//                   src={testimonials[currentIndex].image}
//                   alt={`Photo of ${testimonials[currentIndex].name.replace("— ", "")}`}
//                   width={280}
//                   height={280}
//                   className="object-contain relative z-20"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Dots */}
//       <div
//         className="flex mt-6 p-2 bg-gray-200 rounded-full shadow-md opacity-90 space-x-3 cursor-pointer z-10"
//         role="tablist"
//         aria-label="Testimonial navigation"
//       >
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleDotClick(index)}
//             aria-selected={currentIndex === index}
//             aria-label={`Go to testimonial ${index + 1}`}
//             role="tab"
//             className={`h-2 rounded-full transition-all duration-500 shadow-md border-2 ${
//               currentIndex === index
//                 ? "w-6 bg-white shadow-lg border-white"
//                 : "w-4 bg-white/50 shadow-sm border-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text:
      "I am Divya, mother of Kiaan. He has had the best Math classes at SuperSheldon — the progress and confidence he has gained are amazing!",
    name: "— Mrs. Divya",
    image: "/k1b.png",
  },
  {
    text:
      "I am Riya, mother of Ananya in Grade 5. SuperSheldon's Math Classes have been outstanding - Ananya truly Enjoys learning and has shown great improvement.",
    name: "— Mrs. Riya",
    image: "/k2g.png",
  },
  {
    text: "Interface is user-friendly and the content is informative and engaging. Ananya truly Enjoys learning and has shown great improvement.",
    name: "— Ms. Aditi",
    image: "/k2g.png",
  },
];

// Motion variants
const variants = {
  enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
};

export default function StudentTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  // Image dimensions + spacer
  const IMG_W = 280;
  const IMG_SPACER = IMG_W + 16;

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused]);

  const handleDotClick = useCallback(
    (index) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [currentIndex]
  );

  const handleDragEnd = (_, info) => {
    const threshold = Math.min(80, window.innerWidth * 0.1);
    if (info.offset.x > threshold) {
      setDirection(-1);
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    } else if (info.offset.x < -threshold) {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <div
      className="mt-8 relative flex flex-col items-center justify-center bg-white py-20 overflow-visible"
      role="region"
      aria-roledescription="carousel"
      aria-label="Student testimonials carousel"
    >
      {/* Carousel */}
      <div
        className="relative w-11/12 max-w-6xl rounded-2xl z-10 overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragMomentum={false}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Orange Card + Image hover */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative flex-shrink-0 w-full bg-[#FB8740] px-6 md:px-12 py-10 shadow-xl rounded-2xl overflow-visible"
            >
              {/* Content row */}
              <div className="relative flex items-start">
                {/* Text column */}
                <div className="flex-1 text-center md:text-left relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow">
                    What Our Students Say
                  </h2>

                  <blockquote
                    className="text-base md:text-lg text-white leading-relaxed italic"
                    aria-live="polite"
                  >
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <cite className="mt-3 block font-semibold text-white/90 not-italic">
                    {testimonials[currentIndex].name}
                  </cite>
                </div>

                {/* Spacer prevents text overlap */}
                <div
                  aria-hidden="true"
                  className="shrink-0"
                  style={{ width: IMG_SPACER, height: 1 }}
                />
              </div>

              {/* Image anchored bottom-right */}
              <div className="absolute bottom-0 right-0">
                <div className="drop-shadow-2xl">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={`Photo of ${testimonials[currentIndex].name.replace(
                      "— ",
                      ""
                    )}`}
                    width={IMG_W}
                    height={280}
                    className="object-contain relative z-20"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div
        className="flex mt-6 p-2 bg-gray-200 rounded-full shadow-md opacity-90 space-x-3 cursor-pointer z-10"
        role="tablist"
        aria-label="Testimonial navigation"
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-selected={currentIndex === index}
            aria-label={`Go to testimonial ${index + 1}`}
            role="tab"
            className={`h-2 rounded-full transition-all duration-500 shadow-md border-2 ${
              currentIndex === index
                ? "w-6 bg-white shadow-lg border-white"
                : "w-4 bg-white/50 shadow-sm border-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
