


// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { coursesData } from "@/components/ExamCourses";

// export default function SelectiveCoursePage({ year, courseIndex }) {
//   const currentCourse = coursesData[year]?.[courseIndex] || null;

//   const allReviews = [
//     { name: "Maria ", text: "Loved the course. I’ve learned some very subtle techniques, especially on leaves.", img: "/reviews/r1g.jpg" },
//     { name: "Chloe", text: "I love the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Khan Studio.", img: "/reviews/r2g.jpg" },
//     { name: "Sarah ", text: "Very interactive and engaging, loved the exercises and challenges.", img: "/reviews/r3g.jpg" },
//     { name: "Christina ", text: "The pacing was perfect and the course kept me motivated all the way.", img: "/reviews/r4g.jpg" },
//     { name: "Emily ", text: "Clear explanations and fun to follow, my kids enjoyed it too.", img: "/reviews/r5g.jpg" },
//     { name: "Omar ", text: "Excellent structure, made difficult topics much easier to understand.", img: "/reviews/r5g.jpg" },
//     { name: "James ", text: "This was one of the most enjoyable online learning experiences my kid has had.", img: "/reviews/r7m.jpg" },
//     { name: "Dexter ", text: "The videos are so well made, I feel like I’m in a real classroom.", img: "/reviews/r7m.jpg" },
//     { name: "Michael ", text: "Great content, straight to the point without wasting time.", img: "/reviews/r8m.jpg" },
//     { name: "Doakes ", text: "I could follow everything easily, very beginner friendly.", img: "/reviews/r9m.jpg" },
//     { name: "Rick ", text: "Detailed, thorough, and motivating. Highly recommended.", img: "/reviews/r10m.jpg" },
//     { name: "Amelia ", text: "Fantastic course, exceeded my expectations.", img: "/reviews/r11g.jpg" },
//     { name: "Daniel ", text: "I finally understood grammar thanks to this!", img: "/reviews/r16m.jpg" },
//     { name: "Felicia ", text: "Challenging but fun, exactly what I needed.", img: "/reviews/r12g.jpg" },
//     { name: "Olivia ", text: "The assignments helped me a lot to practice.", img: "/reviews/r13g.jpg" },
//     { name: "Sanders ", text: "Super clear teaching style, very beginner friendly.", img: "/reviews/r20m.jpg" },
//     { name: "William ", text: "I enjoyed every lesson, very engaging.", img: "/reviews/r19m.jpg" },
//     { name: "AvaL", text: "Easy to follow and very practical examples.", img: "/reviews/r17m.jpg" },
//     { name: "Alicia ", text: "The examples made everything so easy to understand and apply.", img: "/reviews/r13g.jpg" },
//     { name: "Mary", text: "Loved the visuals and teaching style and the presentation skills.", img: "/reviews/r14g.jpg" },
//   ];

//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // shuffle and pick 5 reviews
//     const shuffled = [...allReviews].sort(() => 0.5 - Math.random()).slice(0, 5);
//     setReviews(shuffled);
//   }, []);

//   if (!currentCourse) {
//     return <p className="p-10 text-center text-red-600">Course not found.</p>;
//   }

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <section className="relative w-full h-[400px] sm:h-[500px] md:h-[650px]">

//         <Image
//           src="/coursebannerv2.png"
//           alt="Hero"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Learn something new everyday.
//           </h1>
//           <p className="mt-3 text-lg">
//             Become professionals and ready to join the world.
//           </p>
//         </div>
//       </section>

//       {/* Course Section */}
//       <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 pt-12 pb-16 gap-12">
//         {/* Left Side */}
//         <div className="flex-[1.5]">
//           <div className="rounded-lg overflow-hidden shadow w-full mb-6">
//             <Image
//               src={currentCourse.img}
//               alt={currentCourse.title}
//               width={1000}
//               height={600}
//               className="object-cover w-full h-auto"
//             />
//           </div>

//           <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-snug">
//             {currentCourse.title}
//           </h2>

//           <h3 className="mt-4 font-semibold text-xl">About Course</h3>
//           <p className="text-gray-700 mt-3 text-lg leading-relaxed">
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
//                   <Image
//                     src={r.img}
//                     alt={r.name}
//                     width={48}
//                     height={48}
//                     className="w-12 h-12 rounded-full object-cover flex-shrink-0"
//                   />
//                   <div className="flex-1">
//                     <p className="font-semibold text-orange-500 text-base">
//                       {r.name}
//                     </p>
//                     <p className="text-gray-700 text-base">{r.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-full md:w-[450px] space-y-10">
//           {/* Chapters */}
//           <div className="bg-white shadow rounded-lg p-6">
//             {currentCourse.chapters?.map((c, idx) => (
//               <div key={idx} className="mb-3">
//                 <div className="flex items-start text-sm md:text-base transition-colors duration-300 hover:text-orange-600">
//                   {/* Number fixed on first line */}
//                   <span className="w-6 flex-shrink-0">{idx + 1}.</span>
//                   {/* Chapter title wraps nicely */}
//                   <span className="flex-1">{c.title}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Teacher Box */}
//           <div className="relative bg-orange-100 rounded-lg shadow overflow-hidden">
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
//               <p className="text-lg">Score High with Our NAPLAN Masterclass</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


//started making responsive

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { coursesData } from "@/components/ExamCourses";

export default function SelectiveCoursePage({ year, courseIndex }) {
  const currentCourse = coursesData[year]?.[courseIndex] || null;

  const allReviews = [
    { name: "Maria ", text: "Loved the course. I’ve learned some very subtle techniques, especially on leaves.", img: "/reviews/r1g.jpg" },
    { name: "Chloe", text: "I love the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Khan Studio.", img: "/reviews/r2g.jpg" },
    { name: "Sarah ", text: "Very interactive and engaging, loved the exercises and challenges.", img: "/reviews/r3g.jpg" },
    { name: "Christina ", text: "The pacing was perfect and the course kept me motivated all the way.", img: "/reviews/r4g.jpg" },
    { name: "Emily ", text: "Clear explanations and fun to follow, my kids enjoyed it too.", img: "/reviews/r5g.jpg" },
    { name: "Omar ", text: "Excellent structure, made difficult topics much easier to understand.", img: "/reviews/r5g.jpg" },
    { name: "James ", text: "This was one of the most enjoyable online learning experiences my kid has had.", img: "/reviews/r7m.jpg" },
    { name: "Dexter ", text: "The videos are so well made, I feel like I’m in a real classroom.", img: "/reviews/r7m.jpg" },
    { name: "Michael ", text: "Great content, straight to the point without wasting time.", img: "/reviews/r8m.jpg" },
    { name: "Doakes ", text: "I could follow everything easily, very beginner friendly.", img: "/reviews/r9m.jpg" },
    { name: "Rick ", text: "Detailed, thorough, and motivating. Highly recommended.", img: "/reviews/r10m.jpg" },
    { name: "Amelia ", text: "Fantastic course, exceeded my expectations.", img: "/reviews/r11g.jpg" },
    { name: "Daniel ", text: "I finally understood grammar thanks to this!", img: "/reviews/r16m.jpg" },
    { name: "Felicia ", text: "Challenging but fun, exactly what I needed.", img: "/reviews/r12g.jpg" },
    { name: "Olivia ", text: "The assignments helped me a lot to practice.", img: "/reviews/r13g.jpg" },
    { name: "Sanders ", text: "Super clear teaching style, very beginner friendly.", img: "/reviews/r20m.jpg" },
    { name: "William ", text: "I enjoyed every lesson, very engaging.", img: "/reviews/r19m.jpg" },
    { name: "AvaL", text: "Easy to follow and very practical examples.", img: "/reviews/r17m.jpg" },
    { name: "Alicia ", text: "The examples made everything so easy to understand and apply.", img: "/reviews/r13g.jpg" },
    { name: "Mary", text: "Loved the visuals and teaching style and the presentation skills.", img: "/reviews/r14g.jpg" },
  ];

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const shuffled = [...allReviews].sort(() => 0.5 - Math.random()).slice(0, 5);
    setReviews(shuffled);
  }, []);

  if (!currentCourse) {
    return <p className="p-10 text-center text-red-600">Course not found.</p>;
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[650px]">
        <Image
          src="/coursebannerv2.png"
          alt="Hero"
          fill
          className="object-cover"
        />
        {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Learn something new everyday.
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl">
            Become professionals and ready to join the world.
          </p>
        </div> */}
      </section>

      {/* Course Section */}
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16 gap-8 md:gap-12">
        {/* Left Side */}
        <div className="flex-[1.5]">
          <div className="rounded-lg overflow-hidden shadow w-full mb-6">
            <Image
              src={currentCourse.img}
              alt={currentCourse.title}
              width={1000}
              height={600}
              className="object-cover w-full max-h-[400px] md:max-h-[600px] rounded-lg"
            />
          </div>

          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            {currentCourse.title}
          </h2>

          <h3 className="mt-4 font-semibold text-lg sm:text-xl">About Course</h3>
          <p className="text-gray-700 mt-3 text-base sm:text-lg leading-relaxed">
            {currentCourse.desc}
          </p>

          {/* Reviews */}
          <div className="mt-12">
            <h3 className="font-semibold text-xl sm:text-2xl mb-4">Reviews</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Image
                    src={r.img}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-orange-500 text-sm sm:text-base">
                      {r.name}
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[350px] lg:w-[450px] space-y-10">
          {/* Chapters */}
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            {currentCourse.chapters?.map((c, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex items-start text-sm md:text-base transition-colors duration-300 hover:text-orange-600">
                  <span className="w-6 flex-shrink-0">{idx + 1}.</span>
                  <span className="flex-1">{c.title}</span>
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
              className="w-full h-[300px] sm:h-[350px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
              <p className="text-green-300 text-xs sm:text-sm font-semibold">Teacher</p>
              <h3 className="font-bold text-lg sm:text-2xl">Ana Kurosova</h3>
              <p className="text-sm sm:text-lg">Score High with Our NAPLAN Masterclass</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
