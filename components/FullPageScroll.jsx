

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
        title: " Sessions Anytime, Anywhere",
        desc: " Learn directly from expert tutors with flexible sessions accessible from any location.",
        logo:"/course/online-student.png",
      },
     
     
    ],
    images: ["/course/Grp1.png"],
    
  },
  {
    id: 1,
    texts: [
      {
        number: "02",
        title: " Customized Curriculum for Every Topic",
        desc: " Personalized learning plans tailored to each student’s unique needs and goals.",
        logo:"/course/online-lesson.png",
      },
    ],
    images: ["/course/Grp2.png"],
    
  },
  {
    id: 2,
    texts: [
      {
        number: "03",
        title: " Interactive LMS for Homework & Quizzes",
        desc: "A smart platform to practice, submit homework, and take quizzes anytime.",
         logo:"/course/idea.png"
  
  },
      
    ],
    images: ["/course/Grp3.png"],
  }
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
    <div className="relative flex flex-col items-center justify-center w-full bg-white px-10 py-16">
      <div className="absolute -left-[300px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-200 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -right-[300px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-200 opacity-20 blur-3xl pointer-events-none" />

      {/* Top Heading */}
      <h2 className="text-5xl leading-tight font-quicksand font-semibold mb-14 text-center">
        The <span className="text-purple-400">Smart</span> Choice for <br />
      <span className="text-red-400">Bright</span>
      <span className="text-orange-400"> Futures</span>
      </h2>

      {/* Content Flexbox */}
      <div className="flex w-full max-w-7xl gap-5">
        {/* Left Section (Text Side) */}
        <div className="relative  justify-center h-[550px]">
          <h3 className="text-4xl font-quicksand font-semibold mb-10">
            The Global Exam Expertise
          </h3>
         
          {/* Text Boxes */}
          <div className="flex flex-col gap-5 w-[600px] z-10 ">
            {slides[active].texts.map((t, idx) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
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
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center" >
                    <img src={t.logo}></img>
                    </div>

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
           <div className=" absolute left-10 bottom-6 h-[150px] w-[150px]">
                    <img src="course/numbers.png"></img>
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

              {/* Image */}
              <div className="rounded-2xl overflow-hidden  w-[380px] flex items-center justify-center">
                <Image
                  src={slides[active].images[0]}
                  alt="large"
                  width={380}
                  height={340}
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
