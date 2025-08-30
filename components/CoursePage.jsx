

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { coursesData } from "@/components/ExamCourses";

// export default function CoursePage() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [selectedYear, setSelectedYear] = useState(Object.keys(coursesData)[0]);
//   const [selectedCourse, setSelectedCourse] = useState(
//     coursesData[Object.keys(coursesData)[0]][0].id
//   );
//   const [reviews, setReviews] = useState([]);

//   const allReviews = [
//     { name: "Leonardo Da Vinci", text: "Loved the course. I’ve learned some very subtle techniques, especially on leaves.", img: "" },
//     { name: "Titanic S", text: "I love the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Khan Studio.", img: "" },
//     { name: "Zhitkov", text: "Yes, I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.", img: "" },
//     { name: "Mojtaba", text: "I haven’t finished the course yet, and I would like to have some feedback from the teacher...", img: "" },
//     { name: "Sarah M", text: "Very interactive and engaging, loved the exercises and challenges.", img: "" },
//     { name: "James K", text: "The pacing was perfect and the course kept me motivated all the way.", img: "" },
//     { name: "Emily R", text: "Clear explanations and fun to follow, my kids enjoyed it too.", img: "" },
//     { name: "Omar L", text: "Excellent structure, made difficult topics much easier to understand.", img: "" },
//     { name: "Hiroshi T", text: "This was one of the most enjoyable online learning experiences I’ve had.", img: "" },
//   ];

//   // Shuffle reviews once after mount
//   useEffect(() => {
//     const shuffled = [...allReviews].sort(() => 0.5 - Math.random()).slice(0, 5);
//     setReviews(shuffled);
//   }, []);

//   const currentCourse = coursesData[selectedYear].find(
//     (c) => c.id === selectedCourse
//   );

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <section className="relative w-full h-[750px]">
//         <Image
//           src="/coursepage/coursetop.png"
//           alt="Hero"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 " />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Learn something new everyday.
//           </h1>
//           <p className="mt-3 text-lg">
//             Become professionals and ready to join the world.
//           </p>
//         </div>

//         {/* Dropdown Box */}
//         <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] bg-white shadow-lg rounded-xl px-12 py-6 flex gap-8 text-lg w-[90%] max-w-6xl">
//           <select
//             value={selectedYear}
//             onChange={(e) => {
//               setSelectedYear(e.target.value);
//               setSelectedCourse(coursesData[e.target.value][0].id);
//             }}
//             className="flex-1 px-6 py-4 rounded-lg border text-lg"
//           >
//             {Object.keys(coursesData).map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedCourse}
//             onChange={(e) => setSelectedCourse(e.target.value)}
//             className="flex-1 px-6 py-4 rounded-lg border text-lg"
//           >
//             {coursesData[selectedYear].map((course) => (
//               <option key={course.id} value={course.id}>
//                 {course.title}
//               </option>
//             ))}
//           </select>
//         </div>
//       </section>

//       {/* Course Section */}
//       <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 pt-36 pb-16 gap-12">
//         {/* Left Side */}
//         <div className="flex-[1.5]">
//           <div className="rounded-lg overflow-hidden shadow w-[95%] scale-105">
//             <Image
//               src={currentCourse.img}
//               alt={currentCourse.title}
//               width={1000}
//               height={600}
//               className="object-cover w-full"
//             />
//           </div>
//           <h2 className="mt-6 text-4xl font-bold">{currentCourse.title}</h2>
//           <h3 className="mt-5 font-semibold text-2xl">About Course</h3>
//           <p className="text-gray-700 mt-4 text-xl leading-relaxed">
//             {currentCourse.desc}
//           </p>

//           {/* Reviews */}
//           <div className="mt-12">
//             <h3 className="font-semibold text-2xl mb-4">Reviews</h3>
//             <div className="flex flex-col gap-4 max-w-2xl">
//               {reviews.map((r, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]"
//                 >
//                   {r.img ? (
//                     <Image
//                       src={r.img}
//                       alt={r.name}
//                       width={48}
//                       height={48}
//                       className="w-12 h-12 rounded-full object-cover flex-shrink-0"
//                     />
//                   ) : (
//                     <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
//                   )}
//                   <div className="flex-1">
//                     <p className="font-semibold text-orange-500 text-base">{r.name}</p>
//                     <p className="text-gray-700 text-base">{r.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-full md:w-[380px] space-y-10 scale-110 origin-top">
//           {/* Chapters */}
//           <div className="bg-white shadow rounded-lg p-6">
//             {currentCourse.chapters?.map((c, idx) => (
//               <div key={idx} className="mb-6">
//                 <div className="w-full flex justify-between items-center font-semibold text-s transition-colors duration-300 hover:text-orange-600">
//                   <span>{c.title}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Teacher Box */}
//           <div className="relative bg-orange-100 rounded-lg shadow overflow-hidden scale-110">
//             <Image
//               src="/coursepage/kidwithearphones.png"
//               alt="kid"
//               width={650}
//               height={400}
//               className="w-full h-[420px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
//             <div className="absolute bottom-0 left-0 p-6 text-white">
//               <p className="text-green-300 text-sm font-semibold">Teacher</p>
//               <h3 className="font-bold text-2xl">Ana Kurosova</h3>
//               <p className="text-lg">
//                 Score High with Our NAPLAN Masterclass
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Join a Free Class Box */}
//       <section className="max-w-5xl mx-auto px-6 pb-20">
//         <div className="bg-blue-600 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
//           {/* Left Side Text */}
//           <div>
//             <h2 className="text-3xl font-bold">Join and get amazing discount</h2>
//             <p className="mt-2 text-lg opacity-80">Great Discount Enroll Now</p>
//           </div>

//           {/* Right Side Form */}
//           <form className="mt-6 md:mt-0 flex w-full md:w-auto rounded-full overflow-hidden bg-white border border-gray-300">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-6 py-4 flex-1 text-gray-800 text-lg outline-none rounded-l-full"
//             />
//             <button
//               type="submit"
//               className="bg-orange-500 text-white px-8 py-4 font-semibold hover:bg-orange-600 transition-all rounded-full"
//             >
//               Try a Free Class
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { coursesData } from "@/components/ExamCourses";

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedYear, setSelectedYear] = useState(Object.keys(coursesData)[0]);
  const [selectedCourse, setSelectedCourse] = useState(
    coursesData[Object.keys(coursesData)[0]][0].id
  );
  const [reviews, setReviews] = useState([]);

  const allReviews = [
    { name: "Leo", text: "Loved the course. I’ve learned some very subtle techniques, especially on leaves.", img: "/reviews/r7m.jpg" },
    { name: "Sarah", text: "I love the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Khan Studio.", img: "/reviews/r1g.jpg" },
    { name: "Chris", text: "Yes, I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.", img: "/reviews/r8m.jpg" },
    { name: "Eva", text: "I haven’t finished the course yet, and I would like to have some feedback from the teacher...", img: "/reviews/r5g.jpg" },
    { name: "Sarah ", text: "Very interactive and engaging, loved the exercises and challenges.", img: "/reviews/r11g.jpg" },
    { name: "James", text: "The pacing was perfect and the course kept me motivated all the way.", img: "/reviews/r17m.jpg" },
    { name: "Emily ", text: "Clear explanations and fun to follow, my kids enjoyed it too.", img: "/reviews/r14g.jpg" },
    { name: "Oscar ", text: "Excellent structure, made difficult topics much easier to understand.", img: "/reviews/r19m.jpg" },
    { name: "Simon", text: "This was one of the most enjoyable online learning experiences I’ve had.", img: "/reviews/r20m.jpg" },
  ];

  // Shuffle reviews once after mount
  useEffect(() => {
    const shuffled = [...allReviews].sort(() => 0.5 - Math.random()).slice(0, 5);
    setReviews(shuffled);
  }, []);

  const currentCourse = coursesData[selectedYear].find(
    (c) => c.id === selectedCourse
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[750px]">
        <Image
          src="/coursepage/coursetop.png"
          alt="Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Learn something new everyday.
          </h1>
          <p className="mt-3 text-lg">
            Become professionals and ready to join the world.
          </p>
        </div>

        {/* Dropdown Box */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] bg-white shadow-lg rounded-xl px-12 py-6 flex gap-8 text-lg w-[90%] max-w-6xl">
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setSelectedCourse(coursesData[e.target.value][0].id);
            }}
            className="flex-1 px-6 py-4 rounded-lg border text-lg"
          >
            {Object.keys(coursesData).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="flex-1 px-6 py-4 rounded-lg border text-lg"
          >
            {coursesData[selectedYear].map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Course Section */}
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 pt-36 pb-16 gap-12">
        {/* Left Side */}
        <div className="flex-[1.5]">
          {/* Fixed Course Image */}
          <div className="rounded-lg overflow-hidden shadow w-full mb-6">
            <Image
              src={currentCourse.img}
              alt={currentCourse.title}
              width={1000}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Smaller Course Title */}
          <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-snug">
            {currentCourse.title}
          </h2>

          <h3 className="mt-4 font-semibold text-xl">About Course</h3>
          <p className="text-gray-700 mt-3 text-lg leading-relaxed">
            {currentCourse.desc}
          </p>

          {/* Reviews */}
          <div className="mt-12">
            <h3 className="font-semibold text-2xl mb-4">Reviews</h3>
            <div className="flex flex-col gap-4 max-w-2xl">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]"
                >
                  {r.img ? (
                    <Image
                      src={r.img}
                      alt={r.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold text-orange-500 text-base">
                      {r.name}
                    </p>
                    <p className="text-gray-700 text-base">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[450px] space-y-10">
          {/* Chapters */}
          <div className="bg-white shadow rounded-lg p-8">
            {currentCourse.chapters?.map((c, idx) => (
              <div key={idx} className="mb-6">
                <div className="w-full flex justify-between items-center font-semibold text-base md:text-lg transition-colors duration-300 hover:text-orange-600">
                  <span>{c.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Box */}
          <div className="relative bg-orange-100 rounded-lg shadow overflow-hidden">
            <Image
              src="/coursepage/kidwithearphones.png"
              alt="kid"
              width={650}
              height={400}
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-green-300 text-sm font-semibold">Teacher</p>
              <h3 className="font-bold text-2xl">Ana Kurosova</h3>
              <p className="text-lg">
                Score High with Our NAPLAN Masterclass
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join a Free Class Box */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-blue-600 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
          {/* Left Side Text */}
          <div>
            <h2 className="text-3xl font-bold">Join and get amazing discount</h2>
            <p className="mt-2 text-lg opacity-80">Great Discount Enroll Now</p>
          </div>

          {/* Right Side Form */}
          <form className="mt-6 md:mt-0 flex w-full md:w-auto rounded-full overflow-hidden bg-white border border-gray-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 flex-1 text-gray-800 text-lg outline-none rounded-l-full"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-4 font-semibold hover:bg-orange-600 transition-all rounded-full"
            >
              Try a Free Class
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
