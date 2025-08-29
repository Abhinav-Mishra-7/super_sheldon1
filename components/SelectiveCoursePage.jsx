// // // "use client";

// // // import Image from "next/image";
// // // import { useState, useEffect } from "react";
// // // import { coursesData } from "@/components/ExamCourses";

// // // export default function Y2a() {
// // //   //  Pick which year  course to show
// // //   const selectedYear = "Year 11"; // <-- change this
// // //   const selectedCourseIndex = 0; // <-- pick which course of that year
// // //   const currentCourse = coursesData[selectedYear][selectedCourseIndex];

// // //   const allReviews = [
// // //     { name: "Leonardo Da Vinci", text: "Loved the course. I’ve learned some very subtle techniques, especially on leaves.", img: "" },
// // //     { name: "Titanic S", text: "I love the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Khan Studio.", img: "" },
// // //     { name: "Sarah M", text: "Very interactive and engaging, loved the exercises and challenges.", img: "" },
// // //     { name: "James K", text: "The pacing was perfect and the course kept me motivated all the way.", img: "" },
// // //     { name: "Emily R", text: "Clear explanations and fun to follow, my kids enjoyed it too.", img: "" },
// // //     { name: "Omar L", text: "Excellent structure, made difficult topics much easier to understand.", img: "" },
// // //     { name: "Hiroshi T", text: "This was one of the most enjoyable online learning experiences I’ve had.", img: "" },
// // //     { name: "Isabella F", text: "The videos are so well made, I feel like I’m in a real classroom.", img: "" },
// // //     { name: "Michael B", text: "Great content, straight to the point without wasting time.", img: "" },
// // //     { name: "Sofia L", text: "I could follow everything easily, very beginner friendly.", img: "" },
// // //     { name: "David P", text: "Challenging enough to push me but not overwhelming.", img: "" },
// // //     { name: "Yuki A", text: "Love the design and visuals of the course material.", img: "" },
// // //     { name: "Priya K", text: "This helped me prepare for my exams with confidence.", img: "" },
// // //     { name: "Carlos R", text: "Well-structured and easy to come back to when revising.", img: "" },
// // //     { name: "Anna G", text: "Highly recommend this to anyone serious about learning.", img: "" },
// // //     { name: "William C", text: "I liked how supportive the team was, great help on chat.", img: "" },
// // //     { name: "Nina S", text: "The interactive elements kept me engaged throughout.", img: "" },
// // //     { name: "George T", text: "A solid course with useful exercises at the end.", img: "" },
// // //     { name: "Lara D", text: "The best online course experience I’ve had so far.", img: "" },
// // //     { name: "Ahmed M", text: "The explanations are clear and concise, very professional.", img: "" },
// // //     { name: "Sophia W", text: "Loved every lesson, I’m signing up for the next one.", img: "" },
// // //     { name: "Jonas K", text: "Super flexible, I could watch anytime and anywhere.", img: "" },
// // //   ];

// // //   const [reviews, setReviews] = useState([]);

// // //   useEffect(() => {
// // //     const shuffled = [...allReviews].sort(() => 0.5 - Math.random()).slice(0, 5);
// // //     setReviews(shuffled);
// // //   }, []);

// // //   return (
// // //     <div className="w-full">
// // //       {/* Hero Section */}
// // //       <section className="relative w-full h-[650px]">
// // //         <Image
// // //           src="/coursepage/coursetop.png"
// // //           alt="Hero"
// // //           fill
// // //           className="object-cover"
// // //         />
// // //         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
// // //           <h1 className="text-4xl md:text-5xl font-bold">
// // //             Learn something new everyday.
// // //           </h1>
// // //           <p className="mt-3 text-lg">
// // //             Become professionals and ready to join the world.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Course Section */}
// // //       <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 pt-12 pb-16 gap-12">
// // //         {/* Left Side */}
// // //         <div className="flex-[1.5]">
// // //           {/* Course Image */}
// // //           <div className="rounded-lg overflow-hidden shadow w-full mb-6">
// // //             <Image
// // //               src={currentCourse.img}
// // //               alt={currentCourse.title}
// // //               width={1000}
// // //               height={600}
// // //               className="object-cover w-full h-auto"
// // //             />
// // //           </div>

// // //           {/* Course Title */}
// // //           <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-snug">
// // //             {currentCourse.title}
// // //           </h2>

// // //           <h3 className="mt-4 font-semibold text-xl">About Course</h3>
// // //           <p className="text-gray-700 mt-3 text-lg leading-relaxed">
// // //             {currentCourse.desc}
// // //           </p>

// // //           {/* Reviews */}
// // //           <div className="mt-12">
// // //             <h3 className="font-semibold text-2xl mb-4">Reviews</h3>
// // //             <div className="flex flex-col gap-4 max-w-2xl">
// // //               {reviews.map((r, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]"
// // //                 >
// // //                   {r.img ? (
// // //                     <Image
// // //                       src={r.img}
// // //                       alt={r.name}
// // //                       width={48}
// // //                       height={48}
// // //                       className="w-12 h-12 rounded-full object-cover flex-shrink-0"
// // //                     />
// // //                   ) : (
// // //                     <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
// // //                   )}
// // //                   <div className="flex-1">
// // //                     <p className="font-semibold text-orange-500 text-base">
// // //                       {r.name}
// // //                     </p>
// // //                     <p className="text-gray-700 text-base">{r.text}</p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Side */}
// // //         <div className="w-full md:w-[450px] space-y-10">
// // //           {/* Chapters */}
// // //           <div className="bg-white shadow rounded-lg p-8">
// // //             {currentCourse.chapters?.map((c, idx) => (
// // //               <div key={idx} className="mb-6">
// // //                 <div className="w-full flex justify-between items-center font-semibold text-base md:text-lg transition-colors duration-300 hover:text-orange-600">
// // //                   <span>{c.title}</span>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Teacher Box */}
// // //           <div className="relative bg-orange-100 rounded-lg shadow overflow-hidden">
// // //             <Image
// // //               src="/coursepage/kidwithearphones.png"
// // //               alt="kid"
// // //               width={650}
// // //               height={400}
// // //               className="w-full h-[420px] object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
// // //             <div className="absolute bottom-0 left-0 p-6 text-white">
// // //               <p className="text-green-300 text-sm font-semibold">Teacher</p>
// // //               <h3 className="font-bold text-2xl">Ana Kurosova</h3>
// // //               <p className="text-lg">Score High with Our NAPLAN Masterclass</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Free Class Box */}
// // //       <section className="max-w-5xl mx-auto px-6 pb-20">
// // //         <div className="bg-blue-600 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
// // //           <div>
// // //             <h2 className="text-3xl font-bold">Join and get amazing discount</h2>
// // //             <p className="mt-2 text-lg opacity-80">Great Discount Enroll Now</p>
// // //           </div>
// // //           <form className="mt-6 md:mt-0 flex w-full md:w-auto rounded-full overflow-hidden bg-white border border-gray-300">
// // //             <input
// // //               type="email"
// // //               placeholder="Enter your email"
// // //               className="px-6 py-4 flex-1 text-gray-800 text-lg outline-none rounded-l-full"
// // //             />
// // //             <button
// // //               type="submit"
// // //               className="bg-orange-500 text-white px-8 py-4 font-semibold hover:bg-orange-600 transition-all rounded-full"
// // //             >
// // //               Try a Free Class
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }



// // // "use client";

// // // import Image from "next/image";
// // // import { useState, useEffect } from "react";
// // // import { coursesData } from "@/components/ExamCourses";

// // // export default function SelectiveCoursePage({ year, courseIndex }) {
// // //   const currentCourse = coursesData[year]?.[courseIndex] || null;

// // //   const allReviews = [
// // //     { name: "Leonardo Da Vinci", text: "Loved the course. I’ve learned some very subtle techniques, especially on leaves." },
// // //     { name: "Titanic S", text: "I love the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Khan Studio." },
// // //     { name: "Sarah M", text: "Very interactive and engaging, loved the exercises and challenges." },
// // //     { name: "James K", text: "The pacing was perfect and the course kept me motivated all the way." },
// // //     { name: "Emily R", text: "Clear explanations and fun to follow, my kids enjoyed it too." },
// // //     { name: "Omar L", text: "Excellent structure, made difficult topics much easier to understand." },
// // //     { name: "Hiroshi T", text: "This was one of the most enjoyable online learning experiences I’ve had." },
// // //     { name: "Isabella F", text: "The videos are so well made, I feel like I’m in a real classroom." },
// // //     { name: "Michael B", text: "Great content, straight to the point without wasting time." },
// // //     { name: "Sofia L", text: "I could follow everything easily, very beginner friendly." },
// // //   ];

// // //   const [reviews, setReviews] = useState([]);

// // //   useEffect(() => {
// // //     const shuffled = [...allReviews].sort(() => 0.5 - Math.random()).slice(0, 5);
// // //     setReviews(shuffled);
// // //   }, []);

// // //   if (!currentCourse) {
// // //     return <p className="p-10 text-center text-red-600">Course not found.</p>;
// // //   }

// // //   return (
// // //     <div className="w-full">
// // //       {/* Hero Section */}
// // //       <section className="relative w-full h-[650px]">
// // //         <Image
// // //           src="/coursepage/coursetop.png"
// // //           alt="Hero"
// // //           fill
// // //           className="object-cover"
// // //         />
// // //         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
// // //           <h1 className="text-4xl md:text-5xl font-bold">
// // //             Learn something new everyday.
// // //           </h1>
// // //           <p className="mt-3 text-lg">
// // //             Become professionals and ready to join the world.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Course Section */}
// // //       <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 pt-12 pb-16 gap-12">
// // //         {/* Left Side */}
// // //         <div className="flex-[1.5]">
// // //           <div className="rounded-lg overflow-hidden shadow w-full mb-6">
// // //             <Image
// // //               src={currentCourse.img}
// // //               alt={currentCourse.title}
// // //               width={1000}
// // //               height={600}
// // //               className="object-cover w-full h-auto"
// // //             />
// // //           </div>

// // //           <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-snug">
// // //             {currentCourse.title}
// // //           </h2>

// // //           <h3 className="mt-4 font-semibold text-xl">About Course</h3>
// // //           <p className="text-gray-700 mt-3 text-lg leading-relaxed">
// // //             {currentCourse.desc}
// // //           </p>

// // //           {/* Reviews */}
// // //           <div className="mt-12">
// // //             <h3 className="font-semibold text-2xl mb-4">Reviews</h3>
// // //             <div className="flex flex-col gap-4 max-w-2xl">
// // //               {reviews.map((r, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]"
// // //                 >
// // //                   <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
// // //                   <div className="flex-1">
// // //                     <p className="font-semibold text-orange-500 text-base">
// // //                       {r.name}
// // //                     </p>
// // //                     <p className="text-gray-700 text-base">{r.text}</p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Side */}
// // //         <div className="w-full md:w-[450px] space-y-10">
// // //           {/* Chapters */}
// // //           <div className="bg-white shadow rounded-lg p-8">
// // //             {currentCourse.chapters?.map((c, idx) => (
// // //               <div key={idx} className="mb-6">
// // //                 <div className="w-full flex justify-between items-center font-semibold text-base md:text-lg transition-colors duration-300 hover:text-orange-600">
// // //                   <span>{c.title}</span>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Teacher Box */}
// // //           <div className="relative bg-orange-100 rounded-lg shadow overflow-hidden">
// // //             <Image
// // //               src="/coursepage/kidwithearphones.png"
// // //               alt="kid"
// // //               width={650}
// // //               height={400}
// // //               className="w-full h-[420px] object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
// // //             <div className="absolute bottom-0 left-0 p-6 text-white">
// // //               <p className="text-green-300 text-sm font-semibold">Teacher</p>
// // //               <h3 className="font-bold text-2xl">Ana Kurosova</h3>
// // //               <p className="text-lg">Score High with Our NAPLAN Masterclass</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import Image from "next/image";
// // import { useState, useEffect } from "react";
// // import { coursesData } from "@/components/ExamCourses";

// // export default function SelectiveCoursePage({ year, courseIndex }) {
// //   const currentCourse = coursesData[year]?.[courseIndex] || null;

// //   const allReviews = [
// //     {
// //       name: "Leonardo Da Vinci",
// //       text: "Loved the course. I’ve learned some very subtle techniques, especially on leaves.",
// //       img: "/reviews/review1.png",
// //     },
// //     {
// //       name: "Titanic S",
// //       text: "I love the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Khan Studio.",
// //       img: "/reviews/review2.png",
// //     },
// //     {
// //       name: "Sarah M",
// //       text: "Very interactive and engaging, loved the exercises and challenges.",
// //       img: "/reviews/review3.png",
// //     },
// //     {
// //       name: "James K",
// //       text: "The pacing was perfect and the course kept me motivated all the way.",
// //       img: "/reviews/review4.png",
// //     },
// //     {
// //       name: "Emily R",
// //       text: "Clear explanations and fun to follow, my kids enjoyed it too.",
// //       img: "/reviews/review5.png",
// //     },
// //     {
// //       name: "Omar L",
// //       text: "Excellent structure, made difficult topics much easier to understand.",
// //       img: "/reviews/review6.png",
// //     },
// //     {
// //       name: "Hiroshi T",
// //       text: "This was one of the most enjoyable online learning experiences I’ve had.",
// //       img: "/reviews/review7.png",
// //     },
// //     {
// //       name: "Isabella F",
// //       text: "The videos are so well made, I feel like I’m in a real classroom.",
// //       img: "/reviews/review8.png",
// //     },
// //     {
// //       name: "Michael B",
// //       text: "Great content, straight to the point without wasting time.",
// //       img: "/reviews/review9.png",
// //     },
// //     {
// //       name: "Sofia L",
// //       text: "I could follow everything easily, very beginner friendly.",
// //       img: "/reviews/review10.png",
// //     },
// //     {
// //       name: "Rajesh P",
// //       text: "Fantastic teaching style and great examples throughout the course.",
// //       img: "/reviews/review11.png",
// //     },
// //     {
// //       name: "Chloe D",
// //       text: "I feel more confident now about exams after completing this course.",
// //       img: "/reviews/review12.png",
// //     },
// //     {
// //       name: "Daniel W",
// //       text: "Best online class I’ve ever taken, really feels personalized.",
// //       img: "/reviews/review13.png",
// //     },
// //     {
// //       name: "Fatima A",
// //       text: "The quizzes at the end of chapters helped me reinforce everything.",
// //       img: "/reviews/review14.png",
// //     },
// //     {
// //       name: "George L",
// //       text: "Loved the interactive nature of lessons, never boring!",
// //       img: "/reviews/review15.png",
// //     },
// //     {
// //       name: "Anna P",
// //       text: "Well structured, concise, and very professional delivery.",
// //       img: "/reviews/review16.png",
// //     },
// //     {
// //       name: "Luis M",
// //       text: "The support from the chat system is incredible, helped a lot.",
// //       img: "/reviews/review17.png",
// //     },
// //     {
// //       name: "Zara K",
// //       text: "I recommend this course to anyone who wants to get exam ready.",
// //       img: "/reviews/review18.png",
// //     },
// //     {
// //       name: "Oliver S",
// //       text: "So easy to understand, especially for a beginner like me.",
// //       img: "/reviews/review19.png",
// //     },
// //     {
// //       name: "Priya N",
// //       text: "Brilliant course, exceeded my expectations in every way.",
// //       img: "/reviews/review20.png",
// //     },
// //   ];

// //   const [reviews, setReviews] = useState([]);

// //   useEffect(() => {
// //     const shuffled = [...allReviews].sort(() => 0.5 - Math.random()).slice(0, 6);
// //     setReviews(shuffled);
// //   }, []);

// //   if (!currentCourse) {
// //     return <p className="p-10 text-center text-red-600">Course not found.</p>;
// //   }

// //   return (
// //     <div className="w-full">
// //       {/* Hero Section */}
// //       <section className="relative w-full h-[650px]">
// //         <Image
// //           src="/coursepage/coursetop.png"
// //           alt="Hero"
// //           fill
// //           className="object-cover"
// //         />
// //         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
// //           <h1 className="text-4xl md:text-5xl font-bold">
// //             Learn something new everyday.
// //           </h1>
// //           <p className="mt-3 text-lg">
// //             Become professionals and ready to join the world.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Course Section */}
// //       <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 pt-12 pb-16 gap-12">
// //         {/* Left Side */}
// //         <div className="flex-[1.5]">
// //           <div className="rounded-lg overflow-hidden shadow w-full mb-6">
// //             <Image
// //               src={currentCourse.img}
// //               alt={currentCourse.title}
// //               width={1000}
// //               height={600}
// //               className="object-cover w-full h-auto"
// //             />
// //           </div>

// //           <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-snug">
// //             {currentCourse.title}
// //           </h2>

// //           <h3 className="mt-4 font-semibold text-xl">About Course</h3>
// //           <p className="text-gray-700 mt-3 text-lg leading-relaxed">
// //             {currentCourse.desc}
// //           </p>

// //           {/* Reviews */}
// //           <div className="mt-12">
// //             <h3 className="font-semibold text-2xl mb-4">Reviews</h3>
// //             <div className="flex flex-col gap-6 max-w-2xl">
// //               {reviews.map((r, i) => (
// //                 <div
// //                   key={i}
// //                   className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]"
// //                 >
// //                   <Image
// //                     src={r.img}
// //                     alt={r.name}
// //                     width={48}
// //                     height={48}
// //                     className="w-12 h-12 rounded-full object-cover"
// //                   />
// //                   <div className="flex-1">
// //                     <p className="font-semibold text-orange-500 text-base">
// //                       {r.name}
// //                     </p>
// //                     <p className="text-gray-700 text-base">{r.text}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side */}
// //         <div className="w-full md:w-[450px] space-y-10">
// //           {/* Chapters */}
// //           <div className="bg-white shadow rounded-lg p-8">
// //             {currentCourse.chapters?.map((c, idx) => (
// //               <div key={idx} className="mb-6">
// //                 <div className="w-full flex justify-between items-center font-semibold text-base md:text-lg transition-colors duration-300 hover:text-orange-600">
// //                   <span>{c.title}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Teacher Box */}
// //           <div className="relative bg-orange-100 rounded-lg shadow overflow-hidden">
// //             <Image
// //               src="/coursepage/kidwithearphones.png"
// //               alt="kid"
// //               width={650}
// //               height={400}
// //               className="w-full h-[420px] object-cover"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
// //             <div className="absolute bottom-0 left-0 p-6 text-white">
// //               <p className="text-green-300 text-sm font-semibold">Teacher</p>
// //               <h3 className="font-bold text-2xl">Ana Kurosova</h3>
// //               <p className="text-lg">Score High with Our NAPLAN Masterclass</p>
// //             </div>
// //           </div>

// //           {/* Join Free Class */}
// //           <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl text-white shadow p-8 flex flex-col items-center text-center">
// //             <h3 className="text-2xl font-bold mb-4">Join a Free Class</h3>
// //             <p className="mb-6">Get a feel for our teaching style before committing.</p>
// //             <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
// //               Book Now
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { coursesData } from "@/components/ExamCourses";

// export default function SelectiveCoursePage({ year, courseIndex }) {
//   const currentCourse = coursesData[year]?.[courseIndex] || null;

//   const allReviews = [
//     { name: "Leonardo Da Vinci", text: "Loved the course. I’ve learned some very subtle techniques, especially on leaves.", img: "/reviews/r1.png" },
//     { name: "Titanic S", text: "I love the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Khan Studio.", img: "/reviews/r2.png" },
//     { name: "Sarah M", text: "Very interactive and engaging, loved the exercises and challenges.", img: "/reviews/r3.png" },
//     { name: "James K", text: "The pacing was perfect and the course kept me motivated all the way.", img: "/reviews/r4.png" },
//     { name: "Emily R", text: "Clear explanations and fun to follow, my kids enjoyed it too.", img: "/reviews/r5.png" },
//     { name: "Omar L", text: "Excellent structure, made difficult topics much easier to understand.", img: "/reviews/r6.png" },
//     { name: "Hiroshi T", text: "This was one of the most enjoyable online learning experiences I’ve had.", img: "/reviews/r7.png" },
//     { name: "Isabella F", text: "The videos are so well made, I feel like I’m in a real classroom.", img: "/reviews/r8.png" },
//     { name: "Michael B", text: "Great content, straight to the point without wasting time.", img: "/reviews/r9.png" },
//     { name: "Sofia L", text: "I could follow everything easily, very beginner friendly.", img: "/reviews/r10.png" },
//   ];

//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const shuffled = [...allReviews].sort(() => 0.5 - Math.random()).slice(0, 8);
//     setReviews(shuffled);
//   }, []);

//   if (!currentCourse) {
//     return <p className="p-10 text-center text-red-600">Course not found.</p>;
//   }

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <section className="relative w-full h-[650px]">
//         <Image
//           src="/coursepage/coursetop.png"
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
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div className="flex-1">
//                     <p className="font-semibold text-orange-500 text-sm">
//                       {r.name}
//                     </p>
//                     <p className="text-gray-700 text-sm">{r.text}</p>
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
//               <div key={idx} className="mb-4">
//                 <div className="w-full flex justify-start items-center font-medium text-sm md:text-base transition-colors duration-300 hover:text-orange-600">
//                   <span className="mr-2">{idx + 1}.</span>
//                   <span>{c.title}</span>
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
//               <p className="text-green-300 text-xs font-semibold">Teacher</p>
//               <h3 className="font-bold text-xl">Ana Kurosova</h3>
//               <p className="text-sm">Score High with Our NAPLAN Masterclass</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { coursesData } from "@/components/ExamCourses";

export default function SelectiveCoursePage({ year, courseIndex }) {
  const currentCourse = coursesData[year]?.[courseIndex] || null;

  const allReviews = [
    { name: "Leonardo Da Vinci", text: "Loved the course. I’ve learned some very subtle techniques, especially on leaves.", img: "/reviews/rev1.png" },
    { name: "Titanic S", text: "I love the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Khan Studio.", img: "/reviews/rev2.png" },
    { name: "Sarah M", text: "Very interactive and engaging, loved the exercises and challenges.", img: "/reviews/rev3.png" },
    { name: "James K", text: "The pacing was perfect and the course kept me motivated all the way.", img: "/reviews/rev4.png" },
    { name: "Emily R", text: "Clear explanations and fun to follow, my kids enjoyed it too.", img: "/reviews/rev5.png" },
    { name: "Omar L", text: "Excellent structure, made difficult topics much easier to understand.", img: "/reviews/rev6.png" },
    { name: "Hiroshi T", text: "This was one of the most enjoyable online learning experiences I’ve had.", img: "/reviews/rev7.png" },
    { name: "Isabella F", text: "The videos are so well made, I feel like I’m in a real classroom.", img: "/reviews/rev8.png" },
    { name: "Michael B", text: "Great content, straight to the point without wasting time.", img: "/reviews/rev9.png" },
    { name: "Sofia L", text: "I could follow everything easily, very beginner friendly.", img: "/reviews/rev10.png" },
    { name: "Rajesh P", text: "Detailed, thorough, and motivating. Highly recommended.", img: "/reviews/rev11.png" },
    { name: "Amelia C", text: "Fantastic course, exceeded my expectations.", img: "/reviews/rev12.png" },
    { name: "Daniel W", text: "I finally understood grammar thanks to this!", img: "/reviews/rev13.png" },
    { name: "Fatima H", text: "Challenging but fun, exactly what I needed.", img: "/reviews/rev14.png" },
    { name: "Oliver G", text: "The assignments helped me a lot to practice.", img: "/reviews/rev15.png" },
    { name: "Sophia N", text: "Super clear teaching style, very beginner friendly.", img: "/reviews/rev16.png" },
    { name: "William D", text: "I enjoyed every lesson, very engaging.", img: "/reviews/rev17.png" },
    { name: "Ava L", text: "Easy to follow and very practical.", img: "/reviews/rev18.png" },
    { name: "Ethan J", text: "The examples made everything so easy to understand.", img: "/reviews/rev19.png" },
    { name: "Mia K", text: "Loved the visuals and teaching style.", img: "/reviews/rev20.png" },
  ];

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // shuffle and pick 8 reviews
    const shuffled = [...allReviews].sort(() => 0.5 - Math.random()).slice(0, 8);
    setReviews(shuffled);
  }, []);

  if (!currentCourse) {
    return <p className="p-10 text-center text-red-600">Course not found.</p>;
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[650px]">
        <Image
          src="/coursepage/coursetop.png"
          alt="Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Learn something new everyday.
          </h1>
          <p className="mt-3 text-lg">
            Become professionals and ready to join the world.
          </p>
        </div>
      </section>

      {/* Course Section */}
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 pt-12 pb-16 gap-12">
        {/* Left Side */}
        <div className="flex-[1.5]">
          <div className="rounded-lg overflow-hidden shadow w-full mb-6">
            <Image
              src={currentCourse.img}
              alt={currentCourse.title}
              width={1000}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>

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
                  <Image
                    src={r.img}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
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
          <div className="bg-white shadow rounded-lg p-6">
            {currentCourse.chapters?.map((c, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex items-start text-sm md:text-base transition-colors duration-300 hover:text-orange-600">
                  {/* Number fixed on first line */}
                  <span className="w-6 flex-shrink-0">{idx + 1}.</span>
                  {/* Chapter title wraps nicely */}
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
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-green-300 text-sm font-semibold">Teacher</p>
              <h3 className="font-bold text-2xl">Ana Kurosova</h3>
              <p className="text-lg">Score High with Our NAPLAN Masterclass</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
