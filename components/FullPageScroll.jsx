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
        title: "Sessions Anytime, Anywhere",
        desc: "Learn directly from expert tutors with flexible sessions accessible from any location.",
        logo: "/course/online-student.png",
      },
    ],
    images: ["/course/Grp1.png"],
  },
  {
    id: 1,
    texts: [
      {
        number: "02",
        title: "Customized Curriculum for Every Topic",
        desc: "Personalized learning plans tailored to each student’s unique needs and goals.",
        logo: "/course/online-lesson.png",
      },
    ],
    images: ["/course/Grp2.png"],
  },
  {
    id: 2,
    texts: [
      {
        number: "03",
        title: "Interactive LMS for Homework & Quizzes",
        desc: "A smart platform to practice, submit homework, and take quizzes anytime.",
        logo: "/course/idea.png",
      },
    ],
    images: ["/course/Grp3.png"],
  },
];

export default function SlideShow() {
  const [active, setActive] = useState(0);

  // Auto-switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
      {/* Background glows */}
      <div className="absolute -left-[300px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange-200 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -right-[300px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange-200 opacity-20 blur-3xl pointer-events-none" />

      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-7xl leading-tight font-semibold mb-10 sm:mb-14 text-center">
        The <span className="text-purple-400">Smart</span> Choice for <br />
        <span className="text-red-400">Bright</span>
        <span className="text-orange-400"> Futures</span>
      </h2>

      {/* Content Flexbox */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-10 lg:gap-16 relative">
        {/* Left Section (Text Side) */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-8 w-full lg:w-1/2 relative">
          {slides[active].texts.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex items-center gap-4 sm:gap-6 w-full"
            >
              {/* Number */}
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 leading-none flex-shrink-0">
                {t.number}
              </span>

              {/* Text Box */}
              <div className="flex items-center gap-4 w-full bg-white rounded-2xl shadow-2xl shadow-gray-300 p-6 sm:p-8">
                {/* Logo */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <img src={t.logo} alt="logo" className="w-10 h-10 object-contain" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{t.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Sticker (kept) */}
         <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
            <img
              src="/course/numbers.png"
              alt="sticker"
              className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] object-contain"
            />
          </div>

        </div>

        {/* Right Section (Images + Pills) */}
        <div className="flex-1 flex items-center justify-center gap-6 w-full lg:w-1/2">
          {/* Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].id + "-images"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <div className="rounded-2xl overflow-hidden w-[260px] sm:w-[320px] lg:w-[380px] flex items-center justify-center">
                <Image
                  src={slides[active].images[0]}
                  alt="slide image"
                  width={380}
                  height={340}
                  className="object-contain"
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
                  height: active === index ? 80 : 30,
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
