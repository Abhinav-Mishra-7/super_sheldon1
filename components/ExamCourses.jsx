
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Download, Clock, BookOpen, Users } from "lucide-react";
import Image from "next/image";

const years = [
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11",
  "Year 12",
];

const coursesData = {
  "Year 2": [
    {
      id: "naplan-2-1",
      title: "ICAS Spark Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/icas_prep_course.jpg",
      brochure: "/brochures/naplan.pdf",
    }
  ],
  "Year 3": [
    {
      id: "naplan-3-1",
      title: "Naplan Champion Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y3naplanchampion.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    {
      id: "naplan-3-2",
      title: "Naplan Exam Prep Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y3icassmartprep.jpg",
      brochure: "/brochures/naplan.pdf",
    }
  ],
  "Year 4": [
    {
      id: "naplan-4-1",
      title: "ICAS Challenger Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y4icas.jpg",
      brochure: "/brochures/naplan.pdf",
    }
  ],
  "Year 5": [
    {
      id: "naplan-5-1",
      title: "Naplan Progidy Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y5progidy.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    {
      id: "naplan-5-2",
      title: "ICAS Challenger Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y5icas.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    {
      id: "naplan-5-3",
      title: "Opportunity and Scholarship Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y5scholarship.jpg",
      brochure: "/brochures/naplan.pdf",
    },
  ],
  "Year 6": [
    {
      id: "naplan-6-1",
      title: "ICAS Mastermind Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y6icas.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    {
      id: "naplan-6-2",
      title: "Scholarship Builder Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y6scholarship.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    // {
    //   id: "naplan-6-3",
    //   title: "Naplan Exam Prep Course",
    //   type: "Exam Preparation",
    //   duration: "22hr 30min",
    //   topics: 34,
    //   sales: 250,
    //   rating: 4,
    //   img: "/images/naplan.jpg",
    //   brochure: "/brochures/naplan.pdf",
    // },
  ],
  "Year 7": [
    {
      id: "naplan-7-1",
      title: "ICAS Genius Track Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y7icasgenius.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    {
      id: "naplan-7-2",
      title: "NAPLAN Progidy Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y7naplanprogidy.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    // {
    //   id: "naplan-7-3",
    //   title: "Naplan Exam Prep Course",
    //   type: "Exam Preparation",
    //   duration: "22hr 30min",
    //   topics: 34,
    //   sales: 250,
    //   rating: 4,
    //   img: "/images/naplan.jpg",
    //   brochure: "/brochures/naplan.pdf",
    // },
  ],
  "Year 8": [
    {
      id: "naplan-8-1",
      title: "ICAS Genius Track Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y8icasgeniustech.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    // {
    //   id: "naplan-8-2",
    //   title: "Naplan Exam Prep Course",
    //   type: "Exam Preparation",
    //   duration: "22hr 30min",
    //   topics: 34,
    //   sales: 250,
    //   rating: 4,
    //   img: "/images/naplan.jpg",
    //   brochure: "/brochures/naplan.pdf",
    // },
    // {
    //   id: "naplan-8-3",
    //   title: "Naplan Exam Prep Course",
    //   type: "Exam Preparation",
    //   duration: "22hr 30min",
    //   topics: 34,
    //   sales: 250,
    //   rating: 4,
    //   img: "/images/naplan.jpg",
    //   brochure: "/brochures/naplan.pdf",
    // },
  ],
  "Year 9": [
    {
      id: "sat",
      title: "ICAS Olympian Prep Course",
      type: "SAT Exam",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y9icasolymp.jpg",
      brochure: "/brochures/sat.pdf",
    },
    {
      id: "igcse",
      title: "NAPLAN Grand Master Course",
      type: "IGCSE",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 5,
      img: "/course/y9naplangm.jpg",
      brochure: "/brochures/igcse.pdf",
    },
    {
      id: "naplan-9-1",
      title: "Selective Accelerator Program Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y9selacc.jpg",
      brochure: "/brochures/naplan.pdf",
    },
  ],
  "Year 10": [
    {
      id: "naplan-10-1",
      title: "ICAS Grand Master Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y10icasgmnew.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    // {
    //   id: "naplan-10-2",
    //   title: "Naplan Exam Prep Course",
    //   type: "Exam Preparation",
    //   duration: "22hr 30min",
    //   topics: 34,
    //   sales: 250,
    //   rating: 4,
    //   img: "/images/naplan.jpg",
    //   brochure: "/brochures/naplan.pdf",
    // },
    // {
    //   id: "naplan-10-3",
    //   title: "Naplan Exam Prep Course",
    //   type: "Exam Preparation",
    //   duration: "22hr 30min",
    //   topics: 34,
    //   sales: 250,
    //   rating: 4,
    //   img: "/images/naplan.jpg",
    //   brochure: "/brochures/naplan.pdf",
    // },
  ],
    "Year 11": [
    {
      id: "naplan-11-1",
      title: "ICAS Ultimate Scholar Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y11icasscholar.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    
  ],

  "Year 12": [
    {
      id: "naplan-12-1",
      title: "HSC Mastery Program Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y12hsc.jpg",
      brochure: "/brochures/naplan.pdf",
    },
    
  ],
};

// export default function ExamCourses() {
//   const [activeYear, setActiveYear] = useState("Year 2");
//   const router = useRouter();

//   return (
//     <div className="px-6 py-10 bg-[#FFEFE0] rounded-2xl">
//       {/* Title */}
//       <h2 className="text-2xl font-bold text-center mb-8">
//         Our Exam Preparation Courses
//       </h2>

//       {/* ✅ Replaced with your second navbar */}
//       <div className="flex justify-center gap-4 mb-10 p-4 bg-orange-100 rounded-xl overflow-x-auto">
//         {years.map((year) => (
//           <button
//             key={year}
//             onClick={() => setActiveYear(year)}
//             className="relative px-4 py-2 text-gray-700 font-medium"
//           >
//             {year}
//             {activeYear === year && (
//               <motion.div
//                 layoutId="underline"
//                 className="absolute left-0 right-0 -bottom-1 h-[3px] bg-orange-500 rounded-full"
//                 transition={{ type: "spring", stiffness: 500, damping: 30 }}
//               />
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Course Cards */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeYear}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {(coursesData[activeYear] || []).map((course) => (
//             <motion.div
//               key={course.id}
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 200, damping: 15 }}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden flex flex-col"
//             >
//               {/* ✅ Gray Box at 6000x3375 ratio */}
//               <div className="m-4 rounded-xl border border-gray-200 overflow-hidden">
//                 <div className="relative w-full aspect-[6000/3375] bg-gray-200">
//                   <Image
//                     src={course.img}
//                     alt={course.title}
//                     fill
//                     className="object-contain"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   />
//                 </div>
//               </div>

//               {/* Course Info */}
//               <div className="px-4 pb-4 flex flex-col flex-1">
//                 <p className="text-sm text-gray-500">{course.type}</p>
//                 <h3 className="text-lg font-semibold">{course.title}</h3>
//                 <div className="flex items-center text-yellow-500 mb-3">
//                   {"★".repeat(course.rating)}
//                   {"☆".repeat(5 - course.rating)}
//                 </div>

//                 {/* Meta Info */}
//                 <div className="flex justify-between text-sm text-gray-600 mb-4">
//                   {/* <span className="flex items-center gap-1">
//                     <Clock size={16} /> {course.duration}
//                   </span> */}
//                   <span className="flex items-center gap-1">
//                     <BookOpen size={16} /> {course.topics} Topics
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Users size={16} /> {course.sales} Enrolled
//                   </span>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex space-x-2 mt-auto">
//                   <button
//                     onClick={() => router.push(`/courses/${course.id}`)}
//                     className="flex-1 bg-orange-500 text-white py-2 px-3 rounded-full hover:bg-orange-600 transition"
//                   >
//                     Try a free Class
//                   </button>
//                   <a
//                     href={course.brochure}
//                     download
//                     className="flex-1 bg-orange-500 text-white py-2 px-3 rounded-full hover:bg-orange-600 transition flex items-center justify-center gap-1"
//                   >
//                     <Download size={16} /> PDF
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

export default function ExamCourses() {
  const [activeYear, setActiveYear] = useState("Year 2");
  const router = useRouter();

  const items = coursesData[activeYear] || [];
  const isScrollable = items.length > 3;

  return (
    <div className="px-6 py-10 bg-[#FFEFE0] rounded-2xl">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-8">
        Our Exam Preparation Courses
      </h2>

      {/* ✅ Year Navbar */}
      <div className="flex justify-center gap-4 mb-10 p-4 bg-orange-100 rounded-xl overflow-x-auto">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className="relative px-4 py-2 text-gray-700 font-medium"
          >
            {year}
            {activeYear === year && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-orange-500 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`flex gap-6 overflow-y-hidden ${
            isScrollable ? "overflow-x-auto justify-start" : "justify-center"
          }`}
        >
          {items.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden flex flex-col w-full sm:w-1/2 lg:w-[32%] ${
                isScrollable ? "flex-shrink-0" : ""
              }`}
            >
              {/* ✅ Gray Box at 6000x3375 ratio */}
              <div className="m-4 rounded-xl border border-gray-200 overflow-hidden">
                <div className="relative w-full aspect-[6000/3375] bg-gray-200">
                  <Image
                    src={course.img}
                    alt={course.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Course Info */}
              <div className="px-4 pb-4 flex flex-col flex-1">
                <p className="text-sm text-gray-500">{course.type}</p>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <div className="flex items-center text-yellow-500 mb-3">
                  {"★".repeat(course.rating)}
                  {"☆".repeat(5 - course.rating)}
                </div>

                {/* Meta Info */}
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen size={16} /> {course.topics} Topics
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {course.sales} Enrolled
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex space-x-2 mt-auto">
                  <button
                    onClick={() => router.push(`/courses/${course.id}`)}
                    className="flex-1 bg-orange-500 text-white py-2 px-3 rounded-full hover:bg-orange-600 transition"
                  >
                    Try a free Class
                  </button>
                  <a
                    href={course.brochure}
                    download
                    className="flex-1 bg-orange-500 text-white py-2 px-3 rounded-full hover:bg-orange-600 transition flex items-center justify-center gap-1"
                  >
                    <Download size={16} /> Download Brochure
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}