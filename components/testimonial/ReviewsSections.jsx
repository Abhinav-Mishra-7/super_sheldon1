// // // "use client";
// // // import { useState } from "react";
// // // import { Star, Search, ChevronDown } from "lucide-react";
// // // import { motion } from "framer-motion";

// // // const reviews = [
// // //   {
// // //     id: 1,
// // //     name: "Olivia Thompson (Year 5, Sydney)",
// // //     role: "Learner",
// // //     type: "learners",
// // //     date: "Aug 12, 2025",
// // //     rating: 5,
// // //     source: "Website",
// // //     text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Ethan Williams (Year 7, Melbourne)",
// // //     role: "Learner",
// // //     type: "learners",
// // //     date: "Aug 10, 2025",
// // //     rating: 4.5,
// // //     source: "Google",
// // //     text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Charlotte Brown (Year 4, Brisbane)",
// // //     role: "Learner",
// // //     type: "learners",
// // //     date: "Aug 09, 2025",
// // //     rating: 4.5,
// // //     source: "Trustpilot",
// // //     text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Sarah Thompson (Parent of Olivia, Sydney)",
// // //     role: "Parent",
// // //     type: "parents",
// // //     date: "Aug 08, 2025",
// // //     rating: 5,
// // //     source: "Website",
// // //     text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "Daniel Williams (Parent of Ethan, Melbourne)",
// // //     role: "Parent",
// // //     type: "parents",
// // //     date: "Aug 07, 2025",
// // //     rating: 4.5,
// // //     source: "Google",
// // //     text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
// // //   },
// // //   {
// // //     id: 6,
// // //     name: "Emily Brown (Parent of Charlotte, Brisbane)",
// // //     role: "Parent",
// // //     type: "parents",
// // //     date: "Aug 06, 2025",
// // //     rating: 5,
// // //     source: "Trustpilot",
// // //     text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
// // //   },
// // //   {
// // //     id: 7,
// // //     name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
// // //     role: "Teacher",
// // //     type: "teachers",
// // //     date: "Aug 05, 2025",
// // //     rating: 5,
// // //     source: "Website",
// // //     text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
// // //   },
// // //   {
// // //     id: 8,
// // //     name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
// // //     role: "Teacher",
// // //     type: "teachers",
// // //     date: "Aug 04, 2025",
// // //     rating: 4.5,
// // //     source: "Google",
// // //     text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
// // //   },
// // //   {
// // //     id: 9,
// // //     name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
// // //     role: "Teacher",
// // //     type: "teachers",
// // //     date: "Aug 03, 2025",
// // //     rating: 5,
// // //     source: "Trustpilot",
// // //     text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
// // //   },
// // //   {
// // //     id: 10,
// // //     name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
// // //     role: "Teacher",
// // //     type: "teachers",
// // //     date: "Aug 01, 2025",
// // //     rating: 5,
// // //     source: "Website",
// // //     text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey.",
// // //   },
// // // ];

// // // export default function ReviewsSection() {
// // //   const [visibleReviews, setVisibleReviews] = useState(6);
// // //   const [filter, setFilter] = useState("all");
// // //   const [search, setSearch] = useState("");
// // //   const [sort, setSort] = useState("recent");
// // //   const [sortOpen, setSortOpen] = useState(false);

// // //   const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

// // //   const filteredReviews = reviews
// // //     .filter((r) => {
// // //       const matchFilter = filter === "all" || r.type === filter;
// // //       const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
// // //       return matchFilter && matchSearch;
// // //     })
// // //     .sort((a, b) => {
// // //       if (sort === "recent") return new Date(b.date) - new Date(a.date);
// // //       if (sort === "highest") return b.rating - a.rating;
// // //       if (sort === "lowest") return a.rating - b.rating;
// // //       return 0;
// // //     });

// // //   return (
// // //     <div className="w-full mx-1 mt-10 font-quicksand">
// // //       {/* Banner */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: -40 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //         className="w-full h-96 md:h-[520px] overflow-hidden rounded-3xl"
// // //       >
// // //         <img
// // //           src="https://via.placeholder.com/1600x700"
// // //           alt="Banner"
// // //           className="w-full h-full object-cover"
// // //         />
// // //       </motion.div>

// // //       {/* Filter + Search + Sort */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.2, duration: 0.5 }}
// // //         className="mt-6 w-full bg-white shadow-md rounded-full px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3"
// // //       >
// // //         {/* Filter Buttons */}
// // //         <div className="flex flex-wrap gap-2">
// // //           {["all", "parents", "learners", "teachers"].map((tab) => (
// // //             <motion.button
// // //               key={tab}
// // //               onClick={() => setFilter(tab)}
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className={`px-4 py-2 rounded-full text-sm capitalize transition ${
// // //                 filter === tab
// // //                   ? "bg-blue-500 text-white"
// // //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// // //               }`}
// // //             >
// // //               {tab}
// // //             </motion.button>
// // //           ))}
// // //         </div>

// // //         {/* Search + Sort Dropdown */}
// // //         <div className="flex items-center gap-2 w-full md:w-auto relative">
// // //           <div className="relative w-full md:w-64">
// // //             <input
// // //               type="text"
// // //               placeholder="Search reviews..."
// // //               value={search}
// // //               onChange={(e) => setSearch(e.target.value)}
// // //               className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
// // //             />
// // //             <Search
// // //               size={18}
// // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
// // //             />
// // //           </div>

// // //           {/* Sort Dropdown */}
// // //           <div className="relative">
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               onClick={() => setSortOpen(!sortOpen)}
// // //               className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
// // //             >
// // //               {sort === "recent"
// // //                 ? "Recent Reviews"
// // //                 : sort === "highest"
// // //                 ? "Highest Rated"
// // //                 : "Lowest Rated"}
// // //               <ChevronDown size={16} />
// // //             </motion.button>
// // //             {sortOpen && (
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: -10 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 exit={{ opacity: 0, y: -10 }}
// // //                 className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10"
// // //               >
// // //                 {[
// // //                   { key: "recent", label: "Recent Reviews" },
// // //                   { key: "highest", label: "Highest Rated" },
// // //                   { key: "lowest", label: "Lowest Rated" },
// // //                 ].map((opt) => (
// // //                   <button
// // //                     key={opt.key}
// // //                     onClick={() => {
// // //                       setSort(opt.key);
// // //                       setSortOpen(false);
// // //                     }}
// // //                     className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
// // //                       sort === opt.key ? "bg-gray-200 font-medium" : ""
// // //                     }`}
// // //                   >
// // //                     {opt.label}
// // //                   </button>
// // //                 ))}
// // //               </motion.div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </motion.div>

// // //       {/* Rating Overview */}
// // //       <div className="mt-10 flex flex-col md:flex-row items-start gap-8 w-full px-[4px]">
// // //         <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-full md:w-[500px]">
// // //           <p className="text-7xl font-bold">4.8</p>
// // //           <p className="text-gray-600 mt-2">2,431 reviews</p>
// // //         </div>
// // //         <div className="flex-1">
// // //           <div className="space-y-2">
// // //             {[5, 4, 3, 2, 1].map((star) => (
// // //               <div key={star} className="flex items-center gap-2">
// // //                 <span className="w-8">{star}★</span>
// // //                 <div className="w-full bg-gray-200 h-2 rounded-full">
// // //                   <motion.div
// // //                     initial={{ width: 0 }}
// // //                     animate={{ width: `${ratings[star]}%` }}
// // //                     transition={{ duration: 0.6 }}
// // //                     className="bg-blue-500 h-2 rounded-full"
// // //                   />
// // //                 </div>
// // //                 <span className="ml-2 text-sm text-gray-600">
// // //                   {ratings[star]}%
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Reviews */}
// // //       <div className="mt-12 w-full px-[4px] mb-16">
// // //         <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
// // //         <div className="grid md:grid-cols-3 gap-6">
// // //           {filteredReviews.slice(0, visibleReviews).map((review) => (
// // //             <motion.div
// // //               key={review.id}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
// // //             >
// // //               {/* Name + Source Row */}
// // //               <div className="flex justify-between items-center mb-1">
// // //                 <a
// // //                   href={review.link}
// // //                   className="font-semibold text-black hover:underline"
// // //                 >
// // //                   {review.name}
// // //                 </a>
// // //                 <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-200 text-teal-900">
// // //                   {review.source}
// // //                 </span>
// // //               </div>

// // //               <p className="text-xs text-gray-500 mb-2">{review.date}</p>

// // //               {/* Rating */}
// // //               <div className="flex items-center mb-2">
// // //                 {[...Array(5)].map((_, i) => (
// // //                   <Star
// // //                     key={i}
// // //                     size={16}
// // //                     fill={i < Math.floor(review.rating) ? "gold" : "none"}
// // //                     stroke="gold"
// // //                   />
// // //                 ))}
// // //                 <span className="ml-2 text-sm font-medium">
// // //                   {review.rating}
// // //                 </span>
// // //               </div>

// // //               {/* Role Tag BELOW stars */}
// // //               <span className="mb-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 w-fit">
// // //                 {review.role}
// // //               </span>

// // //               {/* Review Text */}
// // //               <p className="text-gray-700 flex-1">{review.text}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         {/* Load More */}
// // //         {visibleReviews < filteredReviews.length && (
// // //           <div className="text-center mt-8">
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               onClick={() => setVisibleReviews((prev) => prev + 3)}
// // //               className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
// // //             >
// // //               Load more reviews
// // //             </motion.button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // //v1 good














// // // "use client";
// // // import { useState } from "react";
// // // import { Star, Search, ChevronDown } from "lucide-react";
// // // import { motion } from "framer-motion";

// // // const reviews = [
// // //   // Learner Reviews
// // //   {
// // //     id: 1,
// // //     name: "Olivia Thompson (Year 5, Sydney)",
// // //     role: "Learner",
// // //     type: "learners",
// // //     date: "Aug 20, 2025",
// // //     rating: 5,
// // //     source: "Website",
// // //     text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
// // //     link: "#",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Ethan Williams (Year 7, Melbourne)",
// // //     role: "Learner",
// // //     type: "learners",
// // //     date: "Aug 18, 2025",
// // //     rating: 4,
// // //     source: "Google",
// // //     text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
// // //     link: "#",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Charlotte Brown (Year 4, Brisbane)",
// // //     role: "Learner",
// // //     type: "learners",
// // //     date: "Aug 16, 2025",
// // //     rating: 5,
// // //     source: "Trustpilot",
// // //     text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
// // //     link: "#",
// // //   },

// // //   // Parent Reviews
// // //   {
// // //     id: 4,
// // //     name: "Sarah Thompson (Parent of Olivia, Sydney)",
// // //     role: "Parent",
// // //     type: "parents",
// // //     date: "Aug 15, 2025",
// // //     rating: 5,
// // //     source: "Google",
// // //     text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
// // //     link: "#",
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "Daniel Williams (Parent of Ethan, Melbourne)",
// // //     role: "Parent",
// // //     type: "parents",
// // //     date: "Aug 14, 2025",
// // //     rating: 4,
// // //     source: "Website",
// // //     text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
// // //     link: "#",
// // //   },
// // //   {
// // //     id: 6,
// // //     name: "Emily Brown (Parent of Charlotte, Brisbane)",
// // //     role: "Parent",
// // //     type: "parents",
// // //     date: "Aug 13, 2025",
// // //     rating: 5,
// // //     source: "Trustpilot",
// // //     text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
// // //     link: "#",
// // //   },

// // //   // Teacher Reviews
// // //   {
// // //     id: 7,
// // //     name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
// // //     role: "Teacher",
// // //     type: "teachers",
// // //     date: "Aug 12, 2025",
// // //     rating: 5,
// // //     source: "Website",
// // //     text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
// // //     link: "#",
// // //   },
// // //   {
// // //     id: 8,
// // //     name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
// // //     role: "Teacher",
// // //     type: "teachers",
// // //     date: "Aug 11, 2025",
// // //     rating: 4.5,
// // //     source: "Google",
// // //     text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
// // //     link: "#",
// // //   },
// // //   {
// // //     id: 9,
// // //     name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
// // //     role: "Teacher",
// // //     type: "teachers",
// // //     date: "Aug 10, 2025",
// // //     rating: 4.5,
// // //     source: "Trustpilot",
// // //     text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
// // //     link: "#",
// // //   },
// // //   {
// // //     id: 10,
// // //     name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
// // //     role: "Teacher",
// // //     type: "teachers",
// // //     date: "Aug 09, 2025",
// // //     rating: 5,
// // //     source: "Website",
// // //     text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey.",
// // //     link: "#",
// // //   },
// // // ];

// // // export default function ReviewsSection() {
// // //   const [visibleReviews, setVisibleReviews] = useState(6);
// // //   const [filter, setFilter] = useState("all");
// // //   const [search, setSearch] = useState("");
// // //   const [sort, setSort] = useState("recent");

// // //   const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

// // //   const filteredReviews = reviews
// // //     .filter((r) => {
// // //       const matchFilter = filter === "all" || r.type === filter;
// // //       const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
// // //       return matchFilter && matchSearch;
// // //     })
// // //     .sort((a, b) => {
// // //       if (sort === "recent") return new Date(b.date) - new Date(a.date);
// // //       if (sort === "highest") return b.rating - a.rating;
// // //       if (sort === "lowest") return a.rating - b.rating;
// // //       return 0;
// // //     });

// // //   return (
// // //     <div className="w-full mx-1 mt-10 font-quicksand">
// // //       {/* Banner */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: -40 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //         className="w-full h-80 md:h-[480px] overflow-hidden rounded-3xl"
// // //       >
// // //         <img
// // //           src="https://via.placeholder.com/1600x700"
// // //           alt="Banner"
// // //           className="w-full h-full object-cover"
// // //         />
// // //       </motion.div>

// // //       {/* Filter + Search + Sort */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.2, duration: 0.5 }}
// // //         className="mt-6 w-full bg-white shadow-md rounded-full px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3"
// // //       >
// // //         {/* Left Tabs */}
// // //         <div className="flex flex-wrap gap-2">
// // //           {["all", "parents", "learners", "teachers"].map((tab) => (
// // //             <motion.button
// // //               key={tab}
// // //               onClick={() => setFilter(tab)}
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className={`px-4 py-2 rounded-full text-sm capitalize transition ${
// // //                 filter === tab
// // //                   ? "bg-blue-500 text-white"
// // //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// // //               }`}
// // //             >
// // //               {tab}
// // //             </motion.button>
// // //           ))}
// // //         </div>

// // //         {/* Search + Sort */}
// // //         <div className="flex items-center gap-2 w-full md:w-auto">
// // //           <div className="relative w-full md:w-64">
// // //             <input
// // //               type="text"
// // //               placeholder="Search reviews..."
// // //               value={search}
// // //               onChange={(e) => setSearch(e.target.value)}
// // //               className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
// // //             />
// // //             <Search
// // //               size={18}
// // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
// // //             />
// // //           </div>
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             onClick={() =>
// // //               setSort(
// // //                 sort === "recent"
// // //                   ? "highest"
// // //                   : sort === "highest"
// // //                   ? "lowest"
// // //                   : "recent"
// // //               )
// // //             }
// // //             className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
// // //           >
// // //             {sort === "recent"
// // //               ? "Recent Reviews"
// // //               : sort === "highest"
// // //               ? "Highest Rated"
// // //               : "Lowest Rated"}
// // //             <ChevronDown size={16} />
// // //           </motion.button>
// // //         </div>
// // //       </motion.div>

// // //       {/* Rating Overview */}
// // //       <div className="mt-10 flex flex-col md:flex-row items-start gap-8 w-full px-[4px]">
// // //         <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-full md:w-96">
// // //           <p className="text-7xl font-bold">4.8</p>
// // //           <p className="text-gray-600 mt-2">2,431 reviews</p>
// // //         </div>
// // //         <div className="flex-1">
// // //           <div className="space-y-2">
// // //             {[5, 4, 3, 2, 1].map((star) => (
// // //               <div key={star} className="flex items-center gap-2">
// // //                 <span className="w-8">{star}★</span>
// // //                 <div className="w-full bg-gray-200 h-2 rounded-full">
// // //                   <motion.div
// // //                     initial={{ width: 0 }}
// // //                     animate={{ width: `${ratings[star]}%` }}
// // //                     transition={{ duration: 0.6 }}
// // //                     className="bg-blue-500 h-2 rounded-full"
// // //                   />
// // //                 </div>
// // //                 <span className="ml-2 text-sm text-gray-600">
// // //                   {ratings[star]}%
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Reviews */}
// // //       <div className="mt-12 w-full px-[4px] mb-16">
// // //         <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
// // //         <div className="grid md:grid-cols-3 gap-6">
// // //           {filteredReviews.slice(0, visibleReviews).map((review) => (
// // //             <motion.div
// // //               key={review.id}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
// // //             >
// // //               {/* Name + Source Row */}
// // //               <div className="flex justify-between items-center mb-1">
// // //                 <a
// // //                   href={review.link}
// // //                   className="font-semibold text-black hover:underline"
// // //                 >
// // //                   {review.name}
// // //                 </a>
// // //                 <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-200 text-teal-900">
// // //                   {review.source}
// // //                 </span>
// // //               </div>

// // //               <p className="text-xs text-gray-500 mb-2">{review.date}</p>

// // //               {/* Role Tag above review */}
// // //               <span className="mb-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 w-fit">
// // //                 {review.role}
// // //               </span>

// // //               {/* Rating */}
// // //               <div className="flex items-center mb-3">
// // //                 {[...Array(5)].map((_, i) => (
// // //                   <Star
// // //                     key={i}
// // //                     size={16}
// // //                     fill={i < Math.floor(review.rating) ? "gold" : "none"}
// // //                     stroke="gold"
// // //                   />
// // //                 ))}
// // //                 <span className="ml-2 text-sm font-medium">
// // //                   {review.rating}
// // //                 </span>
// // //               </div>

// // //               {/* Review Text */}
// // //               <p className="text-gray-700 flex-1">{review.text}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         {/* Load More */}
// // //         {visibleReviews < filteredReviews.length && (
// // //           <div className="text-center mt-8">
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               onClick={() => setVisibleReviews((prev) => prev + 3)}
// // //               className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
// // //             >
// // //               Load more reviews
// // //             </motion.button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }





















// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";
// // // // // // // // import { Star, Search, ChevronDown } from "lucide-react";
// // // // // // // // import { motion } from "framer-motion";

// // // // // // // // const reviews = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     name: "Olivia Thompson (Year 5, Sydney)",
// // // // // // // //     role: "Learner",
// // // // // // // //     type: "learners",
// // // // // // // //     date: "Aug 12, 2025",
// // // // // // // //     rating: 5,
// // // // // // // //     source: "Website",
// // // // // // // //     text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 2,
// // // // // // // //     name: "Ethan Williams (Year 7, Melbourne)",
// // // // // // // //     role: "Learner",
// // // // // // // //     type: "learners",
// // // // // // // //     date: "Aug 10, 2025",
// // // // // // // //     rating: 4.5,
// // // // // // // //     source: "Google",
// // // // // // // //     text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 3,
// // // // // // // //     name: "Charlotte Brown (Year 4, Brisbane)",
// // // // // // // //     role: "Learner",
// // // // // // // //     type: "learners",
// // // // // // // //     date: "Aug 09, 2025",
// // // // // // // //     rating: 4.5,
// // // // // // // //     source: "Trustpilot",
// // // // // // // //     text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 4,
// // // // // // // //     name: "Sarah Thompson (Parent of Olivia, Sydney)",
// // // // // // // //     role: "Parent",
// // // // // // // //     type: "parents",
// // // // // // // //     date: "Aug 08, 2025",
// // // // // // // //     rating: 5,
// // // // // // // //     source: "Website",
// // // // // // // //     text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 5,
// // // // // // // //     name: "Daniel Williams (Parent of Ethan, Melbourne)",
// // // // // // // //     role: "Parent",
// // // // // // // //     type: "parents",
// // // // // // // //     date: "Aug 07, 2025",
// // // // // // // //     rating: 4.5,
// // // // // // // //     source: "Google",
// // // // // // // //     text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 6,
// // // // // // // //     name: "Emily Brown (Parent of Charlotte, Brisbane)",
// // // // // // // //     role: "Parent",
// // // // // // // //     type: "parents",
// // // // // // // //     date: "Aug 06, 2025",
// // // // // // // //     rating: 5,
// // // // // // // //     source: "Trustpilot",
// // // // // // // //     text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 7,
// // // // // // // //     name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
// // // // // // // //     role: "Teacher",
// // // // // // // //     type: "teachers",
// // // // // // // //     date: "Aug 05, 2025",
// // // // // // // //     rating: 5,
// // // // // // // //     source: "Website",
// // // // // // // //     text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 8,
// // // // // // // //     name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
// // // // // // // //     role: "Teacher",
// // // // // // // //     type: "teachers",
// // // // // // // //     date: "Aug 04, 2025",
// // // // // // // //     rating: 4.5,
// // // // // // // //     source: "Google",
// // // // // // // //     text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 9,
// // // // // // // //     name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
// // // // // // // //     role: "Teacher",
// // // // // // // //     type: "teachers",
// // // // // // // //     date: "Aug 03, 2025",
// // // // // // // //     rating: 5,
// // // // // // // //     source: "Trustpilot",
// // // // // // // //     text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 10,
// // // // // // // //     name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
// // // // // // // //     role: "Teacher",
// // // // // // // //     type: "teachers",
// // // // // // // //     date: "Aug 01, 2025",
// // // // // // // //     rating: 5,
// // // // // // // //     source: "Website",
// // // // // // // //     text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey.",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // export default function ReviewsSection() {
// // // // // // // //   const [visibleReviews, setVisibleReviews] = useState(6);
// // // // // // // //   const [filter, setFilter] = useState("all");
// // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // //   const [sort, setSort] = useState("recent");
// // // // // // // //   const [filterOpen, setFilterOpen] = useState(false);

// // // // // // // //   const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

// // // // // // // //   const filteredReviews = reviews
// // // // // // // //     .filter((r) => {
// // // // // // // //       const matchFilter = filter === "all" || r.type === filter;
// // // // // // // //       const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
// // // // // // // //       return matchFilter && matchSearch;
// // // // // // // //     })
// // // // // // // //     .sort((a, b) => {
// // // // // // // //       if (sort === "recent") return new Date(b.date) - new Date(a.date);
// // // // // // // //       if (sort === "highest") return b.rating - a.rating;
// // // // // // // //       if (sort === "lowest") return a.rating - b.rating;
// // // // // // // //       return 0;
// // // // // // // //     });

// // // // // // // //   return (
// // // // // // // //     <div className="w-full mx-1 mt-10 font-quicksand">
// // // // // // // //       {/* Banner */}
// // // // // // // //       <motion.div
// // // // // // // //         initial={{ opacity: 0, y: -40 }}
// // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // //         transition={{ duration: 0.6 }}
// // // // // // // //         className="w-full h-96 md:h-[520px] overflow-hidden rounded-3xl"
// // // // // // // //       >
// // // // // // // //         <img
// // // // // // // //           src="https://via.placeholder.com/1600x700"
// // // // // // // //           alt="Banner"
// // // // // // // //           className="w-full h-full object-cover"
// // // // // // // //         />
// // // // // // // //       </motion.div>

// // // // // // // //       {/* Filter + Search + Sort */}
// // // // // // // //       <motion.div
// // // // // // // //         initial={{ opacity: 0, y: -20 }}
// // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // //         transition={{ delay: 0.2, duration: 0.5 }}
// // // // // // // //         className="mt-6 w-full bg-white shadow-md rounded-full px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3"
// // // // // // // //       >
// // // // // // // //         {/* Filter Dropdown */}
// // // // // // // //         <div className="relative">
// // // // // // // //           <motion.button
// // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // //             onClick={() => setFilterOpen(!filterOpen)}
// // // // // // // //             className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition capitalize"
// // // // // // // //           >
// // // // // // // //             {filter === "all"
// // // // // // // //               ? "All Reviews"
// // // // // // // //               : filter.charAt(0).toUpperCase() + filter.slice(1)}
// // // // // // // //             <ChevronDown size={16} />
// // // // // // // //           </motion.button>
// // // // // // // //           {filterOpen && (
// // // // // // // //             <motion.div
// // // // // // // //               initial={{ opacity: 0, y: -10 }}
// // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // //               exit={{ opacity: 0, y: -10 }}
// // // // // // // //               className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10"
// // // // // // // //             >
// // // // // // // //               {["all", "parents", "learners", "teachers"].map((tab) => (
// // // // // // // //                 <button
// // // // // // // //                   key={tab}
// // // // // // // //                   onClick={() => {
// // // // // // // //                     setFilter(tab);
// // // // // // // //                     setFilterOpen(false);
// // // // // // // //                   }}
// // // // // // // //                   className={`w-full text-left px-4 py-2 text-sm capitalize hover:bg-gray-100 ${
// // // // // // // //                     filter === tab ? "bg-gray-200 font-medium" : ""
// // // // // // // //                   }`}
// // // // // // // //                 >
// // // // // // // //                   {tab}
// // // // // // // //                 </button>
// // // // // // // //               ))}
// // // // // // // //             </motion.div>
// // // // // // // //           )}
// // // // // // // //         </div>

// // // // // // // //         {/* Search + Sort */}
// // // // // // // //         <div className="flex items-center gap-2 w-full md:w-auto">
// // // // // // // //           <div className="relative w-full md:w-64">
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               placeholder="Search reviews..."
// // // // // // // //               value={search}
// // // // // // // //               onChange={(e) => setSearch(e.target.value)}
// // // // // // // //               className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
// // // // // // // //             />
// // // // // // // //             <Search
// // // // // // // //               size={18}
// // // // // // // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //           <motion.button
// // // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // // //             onClick={() =>
// // // // // // // //               setSort(
// // // // // // // //                 sort === "recent"
// // // // // // // //                   ? "highest"
// // // // // // // //                   : sort === "highest"
// // // // // // // //                   ? "lowest"
// // // // // // // //                   : "recent"
// // // // // // // //               )
// // // // // // // //             }
// // // // // // // //             className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
// // // // // // // //           >
// // // // // // // //             {sort === "recent"
// // // // // // // //               ? "Recent Reviews"
// // // // // // // //               : sort === "highest"
// // // // // // // //               ? "Highest Rated"
// // // // // // // //               : "Lowest Rated"}
// // // // // // // //             <ChevronDown size={16} />
// // // // // // // //           </motion.button>
// // // // // // // //         </div>
// // // // // // // //       </motion.div>

// // // // // // // //       {/* Rating Overview */}
// // // // // // // //       <div className="mt-10 flex flex-col md:flex-row items-start gap-8 w-full px-[4px]">
// // // // // // // //         <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-full md:w-[500px]">
// // // // // // // //           <p className="text-7xl font-bold">4.8</p>
// // // // // // // //           <p className="text-gray-600 mt-2">2,431 reviews</p>
// // // // // // // //         </div>
// // // // // // // //         <div className="flex-1">
// // // // // // // //           <div className="space-y-2">
// // // // // // // //             {[5, 4, 3, 2, 1].map((star) => (
// // // // // // // //               <div key={star} className="flex items-center gap-2">
// // // // // // // //                 <span className="w-8">{star}★</span>
// // // // // // // //                 <div className="w-full bg-gray-200 h-2 rounded-full">
// // // // // // // //                   <motion.div
// // // // // // // //                     initial={{ width: 0 }}
// // // // // // // //                     animate={{ width: `${ratings[star]}%` }}
// // // // // // // //                     transition={{ duration: 0.6 }}
// // // // // // // //                     className="bg-blue-500 h-2 rounded-full"
// // // // // // // //                   />
// // // // // // // //                 </div>
// // // // // // // //                 <span className="ml-2 text-sm text-gray-600">
// // // // // // // //                   {ratings[star]}%
// // // // // // // //                 </span>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Reviews */}
// // // // // // // //       <div className="mt-12 w-full px-[4px] mb-16">
// // // // // // // //         <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
// // // // // // // //         <div className="grid md:grid-cols-3 gap-6">
// // // // // // // //           {filteredReviews.slice(0, visibleReviews).map((review) => (
// // // // // // // //             <motion.div
// // // // // // // //               key={review.id}
// // // // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // // //               transition={{ duration: 0.5 }}
// // // // // // // //               className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
// // // // // // // //             >
// // // // // // // //               {/* Name + Source Row */}
// // // // // // // //               <div className="flex justify-between items-center mb-1">
// // // // // // // //                 <a
// // // // // // // //                   href={review.link}
// // // // // // // //                   className="font-semibold text-black hover:underline"
// // // // // // // //                 >
// // // // // // // //                   {review.name}
// // // // // // // //                 </a>
// // // // // // // //                 <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-200 text-teal-900">
// // // // // // // //                   {review.source}
// // // // // // // //                 </span>
// // // // // // // //               </div>

// // // // // // // //               <p className="text-xs text-gray-500 mb-2">{review.date}</p>

// // // // // // // //               {/* Rating */}
// // // // // // // //               <div className="flex items-center mb-2">
// // // // // // // //                 {[...Array(5)].map((_, i) => (
// // // // // // // //                   <Star
// // // // // // // //                     key={i}
// // // // // // // //                     size={16}
// // // // // // // //                     fill={i < Math.floor(review.rating) ? "gold" : "none"}
// // // // // // // //                     stroke="gold"
// // // // // // // //                   />
// // // // // // // //                 ))}
// // // // // // // //                 <span className="ml-2 text-sm font-medium">
// // // // // // // //                   {review.rating}
// // // // // // // //                 </span>
// // // // // // // //               </div>

// // // // // // // //               {/* Role Tag BELOW stars */}
// // // // // // // //               <span className="mb-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 w-fit">
// // // // // // // //                 {review.role}
// // // // // // // //               </span>

// // // // // // // //               {/* Review Text */}
// // // // // // // //               <p className="text-gray-700 flex-1">{review.text}</p>
// // // // // // // //             </motion.div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* Load More */}
// // // // // // // //         {visibleReviews < filteredReviews.length && (
// // // // // // // //           <div className="text-center mt-8">
// // // // // // // //             <motion.button
// // // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // // //               onClick={() => setVisibleReviews((prev) => prev + 3)}
// // // // // // // //               className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
// // // // // // // //             >
// // // // // // // //               Load more reviews
// // // // // // // //             </motion.button>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }














// // // // // // // "use client";
// // // // // // // import { useState } from "react";
// // // // // // // import { Star, Search, ChevronDown } from "lucide-react";
// // // // // // // import { motion } from "framer-motion";

// // // // // // // const reviews = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     name: "Olivia Thompson (Year 5, Sydney)",
// // // // // // //     role: "Learner",
// // // // // // //     type: "learners",
// // // // // // //     date: "Aug 12, 2025",
// // // // // // //     rating: 5,
// // // // // // //     source: "Website",
// // // // // // //     text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 2,
// // // // // // //     name: "Ethan Williams (Year 7, Melbourne)",
// // // // // // //     role: "Learner",
// // // // // // //     type: "learners",
// // // // // // //     date: "Aug 10, 2025",
// // // // // // //     rating: 4.5,
// // // // // // //     source: "Google",
// // // // // // //     text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 3,
// // // // // // //     name: "Charlotte Brown (Year 4, Brisbane)",
// // // // // // //     role: "Learner",
// // // // // // //     type: "learners",
// // // // // // //     date: "Aug 09, 2025",
// // // // // // //     rating: 4.5,
// // // // // // //     source: "Trustpilot",
// // // // // // //     text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 4,
// // // // // // //     name: "Sarah Thompson (Parent of Olivia, Sydney)",
// // // // // // //     role: "Parent",
// // // // // // //     type: "parents",
// // // // // // //     date: "Aug 08, 2025",
// // // // // // //     rating: 5,
// // // // // // //     source: "Website",
// // // // // // //     text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 5,
// // // // // // //     name: "Daniel Williams (Parent of Ethan, Melbourne)",
// // // // // // //     role: "Parent",
// // // // // // //     type: "parents",
// // // // // // //     date: "Aug 07, 2025",
// // // // // // //     rating: 4.5,
// // // // // // //     source: "Google",
// // // // // // //     text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 6,
// // // // // // //     name: "Emily Brown (Parent of Charlotte, Brisbane)",
// // // // // // //     role: "Parent",
// // // // // // //     type: "parents",
// // // // // // //     date: "Aug 06, 2025",
// // // // // // //     rating: 5,
// // // // // // //     source: "Trustpilot",
// // // // // // //     text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 7,
// // // // // // //     name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
// // // // // // //     role: "Teacher",
// // // // // // //     type: "teachers",
// // // // // // //     date: "Aug 05, 2025",
// // // // // // //     rating: 5,
// // // // // // //     source: "Website",
// // // // // // //     text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 8,
// // // // // // //     name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
// // // // // // //     role: "Teacher",
// // // // // // //     type: "teachers",
// // // // // // //     date: "Aug 04, 2025",
// // // // // // //     rating: 4.5,
// // // // // // //     source: "Google",
// // // // // // //     text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 9,
// // // // // // //     name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
// // // // // // //     role: "Teacher",
// // // // // // //     type: "teachers",
// // // // // // //     date: "Aug 03, 2025",
// // // // // // //     rating: 5,
// // // // // // //     source: "Trustpilot",
// // // // // // //     text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 10,
// // // // // // //     name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
// // // // // // //     role: "Teacher",
// // // // // // //     type: "teachers",
// // // // // // //     date: "Aug 01, 2025",
// // // // // // //     rating: 5,
// // // // // // //     source: "Website",
// // // // // // //     text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // export default function ReviewsSection() {
// // // // // // //   const [visibleReviews, setVisibleReviews] = useState(6);
// // // // // // //   const [filter, setFilter] = useState("all");
// // // // // // //   const [search, setSearch] = useState("");
// // // // // // //   const [sort, setSort] = useState("recent");
// // // // // // //   const [sortOpen, setSortOpen] = useState(false);

// // // // // // //   const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

// // // // // // //   const filteredReviews = reviews
// // // // // // //     .filter((r) => {
// // // // // // //       const matchFilter = filter === "all" || r.type === filter;
// // // // // // //       const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
// // // // // // //       return matchFilter && matchSearch;
// // // // // // //     })
// // // // // // //     .sort((a, b) => {
// // // // // // //       if (sort === "recent") return new Date(b.date) - new Date(a.date);
// // // // // // //       if (sort === "highest") return b.rating - a.rating;
// // // // // // //       if (sort === "lowest") return a.rating - b.rating;
// // // // // // //       return 0;
// // // // // // //     });

// // // // // // //   return (
// // // // // // //     <div className="w-full mx-1 mt-10 font-quicksand">
// // // // // // //       {/* Banner */}
// // // // // // //       <motion.div
// // // // // // //         initial={{ opacity: 0, y: -40 }}
// // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // //         transition={{ duration: 0.6 }}
// // // // // // //         className="w-full h-96 md:h-[520px] overflow-hidden rounded-3xl"
// // // // // // //       >
// // // // // // //         <img
// // // // // // //           src="https://via.placeholder.com/1600x700"
// // // // // // //           alt="Banner"
// // // // // // //           className="w-full h-full object-cover"
// // // // // // //         />
// // // // // // //       </motion.div>

// // // // // // //       {/* Filter + Search + Sort */}
// // // // // // //       <motion.div
// // // // // // //         initial={{ opacity: 0, y: -20 }}
// // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // //         transition={{ delay: 0.2, duration: 0.5 }}
// // // // // // //         className="mt-6 w-full bg-white shadow-md rounded-full px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3"
// // // // // // //       >
// // // // // // //         {/* Filter Buttons */}
// // // // // // //         <div className="flex flex-wrap gap-2">
// // // // // // //           {["all", "parents", "learners", "teachers"].map((tab) => (
// // // // // // //             <motion.button
// // // // // // //               key={tab}
// // // // // // //               onClick={() => setFilter(tab)}
// // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               className={`px-4 py-2 rounded-full text-sm capitalize transition ${
// // // // // // //                 filter === tab
// // // // // // //                   ? "bg-blue-500 text-white"
// // // // // // //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {tab}
// // // // // // //             </motion.button>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* Search + Sort Dropdown */}
// // // // // // //         <div className="flex items-center gap-2 w-full md:w-auto relative">
// // // // // // //           <div className="relative w-full md:w-64">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Search reviews..."
// // // // // // //               value={search}
// // // // // // //               onChange={(e) => setSearch(e.target.value)}
// // // // // // //               className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
// // // // // // //             />
// // // // // // //             <Search
// // // // // // //               size={18}
// // // // // // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           {/* Sort Dropdown */}
// // // // // // //           <div className="relative">
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               onClick={() => setSortOpen(!sortOpen)}
// // // // // // //               className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
// // // // // // //             >
// // // // // // //               {sort === "recent"
// // // // // // //                 ? "Recent Reviews"
// // // // // // //                 : sort === "highest"
// // // // // // //                 ? "Highest Rated"
// // // // // // //                 : "Lowest Rated"}
// // // // // // //               <ChevronDown size={16} />
// // // // // // //             </motion.button>
// // // // // // //             {sortOpen && (
// // // // // // //               <motion.div
// // // // // // //                 initial={{ opacity: 0, y: -10 }}
// // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // //                 exit={{ opacity: 0, y: -10 }}
// // // // // // //                 className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10"
// // // // // // //               >
// // // // // // //                 {[
// // // // // // //                   { key: "recent", label: "Recent Reviews" },
// // // // // // //                   { key: "highest", label: "Highest Rated" },
// // // // // // //                   { key: "lowest", label: "Lowest Rated" },
// // // // // // //                 ].map((opt) => (
// // // // // // //                   <button
// // // // // // //                     key={opt.key}
// // // // // // //                     onClick={() => {
// // // // // // //                       setSort(opt.key);
// // // // // // //                       setSortOpen(false);
// // // // // // //                     }}
// // // // // // //                     className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
// // // // // // //                       sort === opt.key ? "bg-gray-200 font-medium" : ""
// // // // // // //                     }`}
// // // // // // //                   >
// // // // // // //                     {opt.label}
// // // // // // //                   </button>
// // // // // // //                 ))}
// // // // // // //               </motion.div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </motion.div>

// // // // // // //       {/* Rating Overview */}
// // // // // // //       <div className="mt-10 flex flex-col md:flex-row items-start gap-8 w-full px-[4px]">
// // // // // // //         <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-full md:w-[500px]">
// // // // // // //           <p className="text-7xl font-bold">4.8</p>
// // // // // // //           <p className="text-gray-600 mt-2">2,431 reviews</p>
// // // // // // //         </div>
// // // // // // //         <div className="flex-1">
// // // // // // //           <div className="space-y-2">
// // // // // // //             {[5, 4, 3, 2, 1].map((star) => (
// // // // // // //               <div key={star} className="flex items-center gap-2">
// // // // // // //                 <span className="w-8">{star}★</span>
// // // // // // //                 <div className="w-full bg-gray-200 h-2 rounded-full">
// // // // // // //                   <motion.div
// // // // // // //                     initial={{ width: 0 }}
// // // // // // //                     animate={{ width: `${ratings[star]}%` }}
// // // // // // //                     transition={{ duration: 0.6 }}
// // // // // // //                     className="bg-blue-500 h-2 rounded-full"
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //                 <span className="ml-2 text-sm text-gray-600">
// // // // // // //                   {ratings[star]}%
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Reviews */}
// // // // // // //       <div className="mt-12 w-full px-[4px] mb-16">
// // // // // // //         <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
// // // // // // //         <div className="grid md:grid-cols-3 gap-6">
// // // // // // //           {filteredReviews.slice(0, visibleReviews).map((review) => (
// // // // // // //             <motion.div
// // // // // // //               key={review.id}
// // // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.5 }}
// // // // // // //               className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
// // // // // // //             >
// // // // // // //               {/* Name + Source Row */}
// // // // // // //               <div className="flex justify-between items-center mb-1">
// // // // // // //                 <a
// // // // // // //                   href={review.link}
// // // // // // //                   className="font-semibold text-black hover:underline"
// // // // // // //                 >
// // // // // // //                   {review.name}
// // // // // // //                 </a>
// // // // // // //                 <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-200 text-teal-900">
// // // // // // //                   {review.source}
// // // // // // //                 </span>
// // // // // // //               </div>

// // // // // // //               <p className="text-xs text-gray-500 mb-2">{review.date}</p>

// // // // // // //               {/* Rating */}
// // // // // // //               <div className="flex items-center mb-2">
// // // // // // //                 {[...Array(5)].map((_, i) => (
// // // // // // //                   <Star
// // // // // // //                     key={i}
// // // // // // //                     size={16}
// // // // // // //                     fill={i < Math.floor(review.rating) ? "gold" : "none"}
// // // // // // //                     stroke="gold"
// // // // // // //                   />
// // // // // // //                 ))}
// // // // // // //                 <span className="ml-2 text-sm font-medium">
// // // // // // //                   {review.rating}
// // // // // // //                 </span>
// // // // // // //               </div>

// // // // // // //               {/* Role Tag BELOW stars */}
// // // // // // //               <span className="mb-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 w-fit">
// // // // // // //                 {review.role}
// // // // // // //               </span>

// // // // // // //               {/* Review Text */}
// // // // // // //               <p className="text-gray-700 flex-1">{review.text}</p>
// // // // // // //             </motion.div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* Load More */}
// // // // // // //         {visibleReviews < filteredReviews.length && (
// // // // // // //           <div className="text-center mt-8">
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               onClick={() => setVisibleReviews((prev) => prev + 3)}
// // // // // // //               className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
// // // // // // //             >
// // // // // // //               Load more reviews
// // // // // // //             </motion.button>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }













// // // // // // "use client";
// // // // // // import { useState } from "react";
// // // // // // import { Star, Search, ChevronDown } from "lucide-react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // const reviews = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     name: "Olivia Thompson (Year 5, Sydney)",
// // // // // //     role: "Learner",
// // // // // //     type: "learners",
// // // // // //     date: "Aug 12, 2025",
// // // // // //     rating: 5,
// // // // // //     source: "Website",
// // // // // //     text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     name: "Ethan Williams (Year 7, Melbourne)",
// // // // // //     role: "Learner",
// // // // // //     type: "learners",
// // // // // //     date: "Aug 10, 2025",
// // // // // //     rating: 4.5,
// // // // // //     source: "Google",
// // // // // //     text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 3,
// // // // // //     name: "Charlotte Brown (Year 4, Brisbane)",
// // // // // //     role: "Learner",
// // // // // //     type: "learners",
// // // // // //     date: "Aug 09, 2025",
// // // // // //     rating: 4.5,
// // // // // //     source: "Trustpilot",
// // // // // //     text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 4,
// // // // // //     name: "Sarah Thompson (Parent of Olivia, Sydney)",
// // // // // //     role: "Parent",
// // // // // //     type: "parents",
// // // // // //     date: "Aug 08, 2025",
// // // // // //     rating: 5,
// // // // // //     source: "Website",
// // // // // //     text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 5,
// // // // // //     name: "Daniel Williams (Parent of Ethan, Melbourne)",
// // // // // //     role: "Parent",
// // // // // //     type: "parents",
// // // // // //     date: "Aug 07, 2025",
// // // // // //     rating: 4.5,
// // // // // //     source: "Google",
// // // // // //     text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 6,
// // // // // //     name: "Emily Brown (Parent of Charlotte, Brisbane)",
// // // // // //     role: "Parent",
// // // // // //     type: "parents",
// // // // // //     date: "Aug 06, 2025",
// // // // // //     rating: 5,
// // // // // //     source: "Trustpilot",
// // // // // //     text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 7,
// // // // // //     name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
// // // // // //     role: "Teacher",
// // // // // //     type: "teachers",
// // // // // //     date: "Aug 05, 2025",
// // // // // //     rating: 5,
// // // // // //     source: "Website",
// // // // // //     text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 8,
// // // // // //     name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
// // // // // //     role: "Teacher",
// // // // // //     type: "teachers",
// // // // // //     date: "Aug 04, 2025",
// // // // // //     rating: 4.5,
// // // // // //     source: "Google",
// // // // // //     text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 9,
// // // // // //     name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
// // // // // //     role: "Teacher",
// // // // // //     type: "teachers",
// // // // // //     date: "Aug 03, 2025",
// // // // // //     rating: 5,
// // // // // //     source: "Trustpilot",
// // // // // //     text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 10,
// // // // // //     name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
// // // // // //     role: "Teacher",
// // // // // //     type: "teachers",
// // // // // //     date: "Aug 01, 2025",
// // // // // //     rating: 5,
// // // // // //     source: "Website",
// // // // // //     text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey.",
// // // // // //   },
// // // // // // ];

// // // // // // export default function ReviewsSection() {
// // // // // //   const [visibleReviews, setVisibleReviews] = useState(6);
// // // // // //   const [filter, setFilter] = useState("all");
// // // // // //   const [search, setSearch] = useState("");
// // // // // //   const [sort, setSort] = useState("recent");
// // // // // //   const [sortOpen, setSortOpen] = useState(false);

// // // // // //   const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

// // // // // //   const filteredReviews = reviews
// // // // // //     .filter((r) => {
// // // // // //       const matchFilter = filter === "all" || r.type === filter;
// // // // // //       const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
// // // // // //       return matchFilter && matchSearch;
// // // // // //     })
// // // // // //     .sort((a, b) => {
// // // // // //       if (sort === "recent") return new Date(b.date) - new Date(a.date);
// // // // // //       if (sort === "highest") return b.rating - a.rating;
// // // // // //       if (sort === "lowest") return a.rating - b.rating;
// // // // // //       return 0;
// // // // // //     });

// // // // // //   return (
// // // // // //     <div className="w-full mx-1 mt-10 font-quicksand">
// // // // // //       {/* Banner */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0, y: -40 }}
// // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // //         transition={{ duration: 0.6 }}
// // // // // //         className="w-full h-[420px] md:h-[560px] overflow-hidden rounded-3xl mt-8"
// // // // // //       >
// // // // // //         <img
// // // // // //           src="https://via.placeholder.com/1600x700"
// // // // // //           alt="Banner"
// // // // // //           className="w-full h-full object-cover"
// // // // // //         />
// // // // // //       </motion.div>

// // // // // //       {/* Filter + Search + Sort */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0, y: -20 }}
// // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // //         transition={{ delay: 0.2, duration: 0.5 }}
// // // // // //         className="mt-6 w-full bg-white shadow-md rounded-full px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3"
// // // // // //       >
// // // // // //         {/* Filter Buttons */}
// // // // // //         <div className="flex flex-wrap gap-2">
// // // // // //           {["all", "parents", "learners", "teachers"].map((tab) => (
// // // // // //             <motion.button
// // // // // //               key={tab}
// // // // // //               onClick={() => setFilter(tab)}
// // // // // //               whileHover={{ scale: 1.05 }}
// // // // // //               whileTap={{ scale: 0.95 }}
// // // // // //               className={`px-4 py-2 rounded-full text-sm capitalize transition ${
// // // // // //                 filter === tab
// // // // // //                   ? "bg-blue-500 text-white"
// // // // // //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// // // // // //               }`}
// // // // // //             >
// // // // // //               {tab}
// // // // // //             </motion.button>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Search + Sort Dropdown */}
// // // // // //         <div className="flex items-center gap-2 w-full md:w-auto relative">
// // // // // //           <div className="relative w-full md:w-64">
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               placeholder="Search reviews..."
// // // // // //               value={search}
// // // // // //               onChange={(e) => setSearch(e.target.value)}
// // // // // //               className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
// // // // // //             />
// // // // // //             <Search
// // // // // //               size={18}
// // // // // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Sort Dropdown */}
// // // // // //           <div className="relative">
// // // // // //             <motion.button
// // // // // //               whileHover={{ scale: 1.05 }}
// // // // // //               whileTap={{ scale: 0.95 }}
// // // // // //               onClick={() => setSortOpen(!sortOpen)}
// // // // // //               className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
// // // // // //             >
// // // // // //               {sort === "recent"
// // // // // //                 ? "Recent Reviews"
// // // // // //                 : sort === "highest"
// // // // // //                 ? "Highest Rated"
// // // // // //                 : "Lowest Rated"}
// // // // // //               <ChevronDown size={16} />
// // // // // //             </motion.button>
// // // // // //             {sortOpen && (
// // // // // //               <motion.div
// // // // // //                 initial={{ opacity: 0, y: -10 }}
// // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // //                 exit={{ opacity: 0, y: -10 }}
// // // // // //                 className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10"
// // // // // //               >
// // // // // //                 {[
// // // // // //                   { key: "recent", label: "Recent Reviews" },
// // // // // //                   { key: "highest", label: "Highest Rated" },
// // // // // //                   { key: "lowest", label: "Lowest Rated" },
// // // // // //                 ].map((opt) => (
// // // // // //                   <button
// // // // // //                     key={opt.key}
// // // // // //                     onClick={() => {
// // // // // //                       setSort(opt.key);
// // // // // //                       setSortOpen(false);
// // // // // //                     }}
// // // // // //                     className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
// // // // // //                       sort === opt.key ? "bg-gray-200 font-medium" : ""
// // // // // //                     }`}
// // // // // //                   >
// // // // // //                     {opt.label}
// // // // // //                   </button>
// // // // // //                 ))}
// // // // // //               </motion.div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </motion.div>

// // // // // //       {/* Rating Overview
// // // // // //       <div className="mt-10 flex flex-col md:flex-row items-start gap-8 w-full px-[4px]">
// // // // // //         <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-full md:w-[500px]">
// // // // // //           <p className="text-7xl font-bold">4.8</p>
// // // // // //           <p className="text-gray-600 mt-2">2,431 reviews</p>
// // // // // //         </div>
// // // // // //         <div className="flex-1">
// // // // // //           <div className="space-y-2">
// // // // // //             {[5, 4, 3, 2, 1].map((star) => (
// // // // // //               <div key={star} className="flex items-center gap-2">
// // // // // //                 <span className="w-8">{star}★</span>
// // // // // //                 <div className="w-full bg-gray-200 h-2 rounded-full">
// // // // // //                   <motion.div
// // // // // //                     initial={{ width: 0 }}
// // // // // //                     animate={{ width: `${ratings[star]}%` }}
// // // // // //                     transition={{ duration: 0.6 }}
// // // // // //                     className="bg-blue-500 h-2 rounded-full"
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <span className="ml-2 text-sm text-gray-600">
// // // // // //                   {ratings[star]}%
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div> */}

// // // // // //       {/* Rating Overview */}
// // // // // // <div className="mt-10 flex flex-col md:flex-row items-start gap-8 w-full px-[4px]">
// // // // // //   <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-full md:w-[500px]">
// // // // // //     <p className="text-7xl font-bold">4.8</p>
// // // // // //     <p className="text-gray-600 mt-2">2,431 reviews</p>
// // // // // //   </div>

// // // // // //   <div className="flex-1 w-full">
// // // // // //     <div className="space-y-3">
// // // // // //       {[5, 4, 3, 2, 1].map((star) => (
// // // // // //         <div
// // // // // //           key={star}
// // // // // //           className="flex items-center gap-3 w-full"
// // // // // //         >
// // // // // //           {/* Star label */}
// // // // // //           <span className="w-10 text-sm font-medium">{star}★</span>

// // // // // //           {/* Progress bar */}
// // // // // //           <div className="flex-1 min-w-0 bg-gray-200 h-2 rounded-full overflow-hidden">
// // // // // //             <motion.div
// // // // // //               initial={{ width: 0 }}
// // // // // //               animate={{ width: `${ratings[star]}%` }}
// // // // // //               transition={{ duration: 0.6 }}
// // // // // //               className="bg-blue-500 h-2 rounded-full"
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Percentage */}
// // // // // //           <span className="text-sm text-gray-600 w-12 text-right">
// // // // // //             {ratings[star]}%
// // // // // //           </span>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   </div>
// // // // // // </div>





// // // // // // {/* Highlights Section */}
// // // // // // <motion.div
// // // // // //   initial={{ opacity: 0, y: 20 }}
// // // // // //   animate={{ opacity: 1, y: 0 }}
// // // // // //   transition={{ duration: 0.6 }}
// // // // // //   className="mt-16 w-full px-[4px]"
// // // // // // >
// // // // // //   <h2 className="text-2xl font-semibold mb-8">Highlights</h2>

// // // // // //   {/* 3 Highlight Cards */}
// // // // // //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // //     {/* Overall Rating */}
// // // // // //     <motion.div
// // // // // //       whileHover={{ scale: 1.03 }}
// // // // // //       className="bg-white p-8 rounded-2xl shadow-md text-center"
// // // // // //     >
// // // // // //       <p className="text-6xl font-bold text-blue-600">4.8</p>
// // // // // //       <p className="text-gray-600 mt-2">2,431 reviews</p>
// // // // // //     </motion.div>

// // // // // //     {/* Top Mentions */}
// // // // // //     <motion.div
// // // // // //       whileHover={{ scale: 1.03 }}
// // // // // //       className="bg-white p-8 rounded-2xl shadow-md"
// // // // // //     >
// // // // // //       <h3 className="text-lg font-semibold mb-4">Top Mentions</h3>
// // // // // //       <ul className="space-y-2 text-gray-700">
// // // // // //         {["Engaging Lessons", "Great Tutors", "Fun Projects", "Clear Progress"].map(
// // // // // //           (item, idx) => (
// // // // // //             <li
// // // // // //               key={idx}
// // // // // //               className="px-4 py-2 rounded-full bg-gray-100 inline-block text-sm font-medium"
// // // // // //             >
// // // // // //               {item}
// // // // // //             </li>
// // // // // //           )
// // // // // //         )}
// // // // // //       </ul>
// // // // // //     </motion.div>

// // // // // //     {/* Sources */}
// // // // // //     <motion.div
// // // // // //       whileHover={{ scale: 1.03 }}
// // // // // //       className="bg-white p-8 rounded-2xl shadow-md"
// // // // // //     >
// // // // // //       <h3 className="text-lg font-semibold mb-4">Sources</h3>
// // // // // //       <ul className="space-y-2">
// // // // // //         {["Google Reviews", "Trustpilot", "Sitejabber"].map((source, idx) => (
// // // // // //           <li
// // // // // //             key={idx}
// // // // // //             className="px-4 py-2 rounded-full bg-teal-100 text-teal-800 inline-block text-sm font-medium"
// // // // // //           >
// // // // // //             {source}
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //     </motion.div>
// // // // // //   </div>

// // // // // //   {/* 4 Feature Boxes */}
// // // // // //   <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
// // // // // //     {[
// // // // // //       { title: "Verified Parents & Learners", icon: "👨‍👩‍👧" },
// // // // // //       { title: "Video Testimonials", icon: "🎥" },
// // // // // //       { title: "Global Community", icon: "🌍" },
// // // // // //       { title: "Top Rated Curriculum", icon: "📚" },
// // // // // //     ].map((feature, idx) => (
// // // // // //       <motion.div
// // // // // //         key={idx}
// // // // // //         whileHover={{ y: -5 }}
// // // // // //         className="bg-white p-6 rounded-2xl shadow-md text-center flex flex-col items-center"
// // // // // //       >
// // // // // //         <div className="text-3xl mb-3">{feature.icon}</div>
// // // // // //         <p className="text-sm font-medium text-gray-700">{feature.title}</p>
// // // // // //       </motion.div>
// // // // // //     ))}
// // // // // //   </div>
// // // // // // </motion.div>




// // // // // //       {/* Reviews */}
// // // // // //       <div className="mt-12 w-full px-[4px] mb-16">
// // // // // //         <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
// // // // // //         <motion.div
// // // // // //           layout
// // // // // //           className="grid md:grid-cols-3 gap-6"
// // // // // //         >
// // // // // //           <AnimatePresence>
// // // // // //             {filteredReviews.slice(0, visibleReviews).map((review) => (
// // // // // //               <motion.div
// // // // // //                 key={review.id}
// // // // // //                 layout
// // // // // //                 initial={{ opacity: 0, y: 40 }}
// // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // //                 exit={{ opacity: 0, y: -40 }}
// // // // // //                 transition={{ duration: 0.5 }}
// // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // //                 viewport={{ once: true, amount: 0.2 }}
// // // // // //                 className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
// // // // // //               >
// // // // // //                 {/* Name + Source Row */}
// // // // // //                 <div className="flex justify-between items-center mb-1">
// // // // // //                   <a
// // // // // //                     href={review.link}
// // // // // //                     className="font-semibold text-black hover:underline"
// // // // // //                   >
// // // // // //                     {review.name}
// // // // // //                   </a>
// // // // // //                   <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-200 text-teal-900">
// // // // // //                     {review.source}
// // // // // //                   </span>
// // // // // //                 </div>

// // // // // //                 <p className="text-xs text-gray-500 mb-2">{review.date}</p>

// // // // // //                 {/* Rating */}
// // // // // //                 <div className="flex items-center mb-2">
// // // // // //                   {[...Array(5)].map((_, i) => (
// // // // // //                     <Star
// // // // // //                       key={i}
// // // // // //                       size={16}
// // // // // //                       fill={i < Math.floor(review.rating) ? "gold" : "none"}
// // // // // //                       stroke="gold"
// // // // // //                     />
// // // // // //                   ))}
// // // // // //                   <span className="ml-2 text-sm font-medium">
// // // // // //                     {review.rating}
// // // // // //                   </span>
// // // // // //                 </div>

// // // // // //                 {/* Role Tag BELOW stars */}
// // // // // //                 <span className="mb-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 w-fit">
// // // // // //                   {review.role}
// // // // // //                 </span>

// // // // // //                 {/* Review Text */}
// // // // // //                 <p className="text-gray-700 flex-1">{review.text}</p>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </AnimatePresence>
// // // // // //         </motion.div>

// // // // // //         {/* Load More */}
// // // // // //         {visibleReviews < filteredReviews.length && (
// // // // // //           <div className="text-center mt-8">
// // // // // //             <motion.button
// // // // // //               whileHover={{ scale: 1.05 }}
// // // // // //               whileTap={{ scale: 0.95 }}
// // // // // //               onClick={() => setVisibleReviews((prev) => prev + 3)}
// // // // // //               className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
// // // // // //             >
// // // // // //               Load more reviews
// // // // // //             </motion.button>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }



















// // // // "use client";
// // // // import { useState } from "react";
// // // // import { Star, Search, ChevronDown } from "lucide-react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const reviews = [
// // // //   {
// // // //     id: 1,
// // // //     name: "Olivia Thompson (Year 5, Sydney)",
// // // //     role: "Learner",
// // // //     type: "learners",
// // // //     date: "Aug 12, 2025",
// // // //     rating: 5,
// // // //     source: "Website",
// // // //     text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "Ethan Williams (Year 7, Melbourne)",
// // // //     role: "Learner",
// // // //     type: "learners",
// // // //     date: "Aug 10, 2025",
// // // //     rating: 4.5,
// // // //     source: "Google",
// // // //     text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "Charlotte Brown (Year 4, Brisbane)",
// // // //     role: "Learner",
// // // //     type: "learners",
// // // //     date: "Aug 09, 2025",
// // // //     rating: 4.5,
// // // //     source: "Trustpilot",
// // // //     text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "Sarah Thompson (Parent of Olivia, Sydney)",
// // // //     role: "Parent",
// // // //     type: "parents",
// // // //     date: "Aug 08, 2025",
// // // //     rating: 5,
// // // //     source: "Website",
// // // //     text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "Daniel Williams (Parent of Ethan, Melbourne)",
// // // //     role: "Parent",
// // // //     type: "parents",
// // // //     date: "Aug 07, 2025",
// // // //     rating: 4.5,
// // // //     source: "Google",
// // // //     text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "Emily Brown (Parent of Charlotte, Brisbane)",
// // // //     role: "Parent",
// // // //     type: "parents",
// // // //     date: "Aug 06, 2025",
// // // //     rating: 5,
// // // //     source: "Trustpilot",
// // // //     text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
// // // //     role: "Teacher",
// // // //     type: "teachers",
// // // //     date: "Aug 05, 2025",
// // // //     rating: 5,
// // // //     source: "Website",
// // // //     text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
// // // //   },
// // // //   {
// // // //     id: 8,
// // // //     name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
// // // //     role: "Teacher",
// // // //     type: "teachers",
// // // //     date: "Aug 04, 2025",
// // // //     rating: 4.5,
// // // //     source: "Google",
// // // //     text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
// // // //   },
// // // //   {
// // // //     id: 9,
// // // //     name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
// // // //     role: "Teacher",
// // // //     type: "teachers",
// // // //     date: "Aug 03, 2025",
// // // //     rating: 5,
// // // //     source: "Trustpilot",
// // // //     text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
// // // //   },
// // // //   {
// // // //     id: 10,
// // // //     name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
// // // //     role: "Teacher",
// // // //     type: "teachers",
// // // //     date: "Aug 01, 2025",
// // // //     rating: 5,
// // // //     source: "Website",
// // // //     text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey.",
// // // //   },
// // // // ];

// // // // export default function ReviewsSection() {
// // // //   const [visibleReviews, setVisibleReviews] = useState(6);
// // // //   const [filter, setFilter] = useState("all");
// // // //   const [search, setSearch] = useState("");
// // // //   const [sort, setSort] = useState("recent");
// // // //   const [sortOpen, setSortOpen] = useState(false);

// // // //   const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

// // // //   const filteredReviews = reviews
// // // //     .filter((r) => {
// // // //       const matchFilter = filter === "all" || r.type === filter;
// // // //       const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
// // // //       return matchFilter && matchSearch;
// // // //     })
// // // //     .sort((a, b) => {
// // // //       if (sort === "recent") return new Date(b.date) - new Date(a.date);
// // // //       if (sort === "highest") return b.rating - a.rating;
// // // //       if (sort === "lowest") return a.rating - b.rating;
// // // //       return 0;
// // // //     });

// // // //   return (
// // // //     <div className="w-full mx-[8px] mt-10 font-quicksand">
// // // //       {/* Banner */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: -40 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.6 }}
// // // //         className="w-full h-80 md:h-[480px] overflow-hidden rounded-3xl mt-10"
// // // //       >
// // // //         <img
// // // //           src="https://via.placeholder.com/1600x700"
// // // //           alt="Banner"
// // // //           className="w-full h-full object-cover"
// // // //         />
// // // //       </motion.div>

// // // //       {/* Filter + Search + Sort */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: -20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ delay: 0.2, duration: 0.5 }}
// // // //         className="mt-6 w-full bg-white shadow-md rounded-full px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3"
// // // //       >
// // // //         {/* Role Filter */}
// // // //         <div className="flex gap-2 flex-wrap justify-center md:justify-start">
// // // //           {["all", "parents", "learners", "teachers"].map((tab) => (
// // // //             <motion.button
// // // //               key={tab}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() => setFilter(tab)}
// // // //               className={`px-4 py-2 rounded-full capitalize transition ${
// // // //                 filter === tab
// // // //                   ? "bg-blue-500 text-white"
// // // //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// // // //               }`}
// // // //             >
// // // //               {tab}
// // // //             </motion.button>
// // // //           ))}
// // // //         </div>

// // // //         {/* Search + Sort */}
// // // //         <div className="flex items-center gap-2 w-full md:w-auto">
// // // //           <div className="relative w-full md:w-64">
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search reviews..."
// // // //               value={search}
// // // //               onChange={(e) => setSearch(e.target.value)}
// // // //               className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
// // // //             />
// // // //             <Search
// // // //               size={18}
// // // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
// // // //             />
// // // //           </div>
// // // //           {/* Sort Dropdown */}
// // // //           <div className="relative">
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() => setSortOpen(!sortOpen)}
// // // //               className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
// // // //             >
// // // //               {sort === "recent"
// // // //                 ? "Recent Reviews"
// // // //                 : sort === "highest"
// // // //                 ? "Highest Rated"
// // // //                 : "Lowest Rated"}
// // // //               <ChevronDown size={16} />
// // // //             </motion.button>
// // // //             <AnimatePresence>
// // // //               {sortOpen && (
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: -10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   exit={{ opacity: 0, y: -10 }}
// // // //                   className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10"
// // // //                 >
// // // //                   {[
// // // //                     { key: "recent", label: "Recent Reviews" },
// // // //                     { key: "highest", label: "Highest Rated" },
// // // //                     { key: "lowest", label: "Lowest Rated" },
// // // //                   ].map((opt) => (
// // // //                     <button
// // // //                       key={opt.key}
// // // //                       onClick={() => {
// // // //                         setSort(opt.key);
// // // //                         setSortOpen(false);
// // // //                       }}
// // // //                       className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
// // // //                         sort === opt.key ? "bg-gray-200 font-medium" : ""
// // // //                       }`}
// // // //                     >
// // // //                       {opt.label}
// // // //                     </button>
// // // //                   ))}
// // // //                 </motion.div>
// // // //               )}
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </div>
// // // //       </motion.div>

// // // //       {/* Rating Overview */}
// // // //       <div className="mt-10 flex flex-col md:flex-row items-start gap-8 w-full">
// // // //         <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-[500px] text-left">
// // // //           <p className="text-gray-600 text-sm mb-2 font-medium">Overall Rating</p>
// // // //           <p className="text-6xl font-bold text-blue-600 flex items-end">
// // // //             4.8 <span className="text-2xl text-gray-500 ml-1">/5</span>
// // // //           </p>
// // // //           <p className="text-gray-600 mt-2">2,431 reviews</p>
// // // //         </div>

// // // //         <div className="flex-1 w-full">
// // // //           <div className="space-y-3">
// // // //             {[5, 4, 3, 2, 1].map((star) => (
// // // //               <div key={star} className="flex items-center gap-3 w-full">
// // // //                 <span className="w-10 text-sm font-medium">{star}★</span>
// // // //                 <div className="flex-1 min-w-0 bg-gray-200 h-2 rounded-full overflow-hidden">
// // // //                   <motion.div
// // // //                     initial={{ width: 0 }}
// // // //                     animate={{ width: `${ratings[star]}%` }}
// // // //                     transition={{ duration: 0.6 }}
// // // //                     className="bg-blue-500 h-2 rounded-full"
// // // //                   />
// // // //                 </div>
// // // //                 <span className="text-sm text-gray-600 w-12 text-right">
// // // //                   {ratings[star]}%
// // // //                 </span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Highlights */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.6 }}
// // // //         className="mt-16 w-full"
// // // //       >
// // // //         <h2 className="text-2xl font-semibold mb-8">Highlights</h2>

// // // //         {/* 3 Highlight Cards */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //           {/* Overall Rating */}
// // // //           <motion.div
// // // //             whileHover={{ scale: 1.03 }}
// // // //             className="bg-white p-8 rounded-2xl shadow-md text-left"
// // // //           >
// // // //             <p className="text-gray-600 text-sm mb-2 font-medium">
// // // //               Overall Rating
// // // //             </p>
// // // //             <p className="text-5xl font-bold text-blue-600 flex items-end">
// // // //               4.8 <span className="text-xl text-gray-500 ml-1">/5</span>
// // // //             </p>
// // // //             <p className="text-gray-600 mt-2">2,431 reviews</p>
// // // //           </motion.div>

// // // //           {/* Top Mentions */}
// // // //           <motion.div
// // // //             whileHover={{ scale: 1.03 }}
// // // //             className="bg-white p-8 rounded-2xl shadow-md"
// // // //           >
// // // //             <h3 className="text-lg font-semibold mb-4">Top Mentions</h3>
// // // //             <div className="flex flex-wrap gap-3">
// // // //               {[
// // // //                 "Engaging Lessons",
// // // //                 "Great Tutors",
// // // //                 "Fun Projects",
// // // //                 "Clear Progress",
// // // //               ].map((item, idx) => (
// // // //                 <span
// // // //                   key={idx}
// // // //                   className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium"
// // // //                 >
// // // //                   {item}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* Sources */}
// // // //           <motion.div
// // // //             whileHover={{ scale: 1.03 }}
// // // //             className="bg-white p-8 rounded-2xl shadow-md"
// // // //           >
// // // //             <h3 className="text-lg font-semibold mb-4">Sources</h3>
// // // //             <div className="flex flex-wrap gap-3">
// // // //               {["Google Reviews", "Trustpilot", "Sitejabber"].map((source, idx) => (
// // // //                 <span
// // // //                   key={idx}
// // // //                   className="px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium"
// // // //                 >
// // // //                   {source}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>

// // // //         {/* 4 Feature Boxes */}
// // // //         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// // // //           {[
// // // //             { title: "Verified Parents & Learners", icon: "👨‍👩‍👧" },
// // // //             { title: "Video Testimonials", icon: "🎥" },
// // // //             { title: "Global Community", icon: "🌍" },
// // // //             { title: "Top Rated Curriculum", icon: "📚" },
// // // //           ].map((feature, idx) => (
// // // //             <motion.div
// // // //               key={idx}
// // // //               whileHover={{ y: -5 }}
// // // //               className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-3"
// // // //             >
// // // //               <div className="text-2xl">{feature.icon}</div>
// // // //               <p className="text-sm font-medium text-gray-700">
// // // //                 {feature.title}
// // // //               </p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </motion.div>

// // // //       {/* Reviews Section */}
// // // //       <div className="mt-16 w-full mb-16">
// // // //         <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
// // // //         {/* reviews list goes here */}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


















// // // // "use client";
// // // // import { useState } from "react";
// // // // import { Star, Search, ChevronDown } from "lucide-react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const reviews = [
// // // //   {
// // // //     id: 1,
// // // //     name: "Olivia Thompson (Year 5, Sydney)",
// // // //     role: "Learner",
// // // //     type: "learners",
// // // //     date: "Aug 12, 2025",
// // // //     rating: 5,
// // // //     source: "Website",
// // // //     text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "Ethan Williams (Year 7, Melbourne)",
// // // //     role: "Learner",
// // // //     type: "learners",
// // // //     date: "Aug 10, 2025",
// // // //     rating: 4.5,
// // // //     source: "Google",
// // // //     text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "Charlotte Brown (Year 4, Brisbane)",
// // // //     role: "Learner",
// // // //     type: "learners",
// // // //     date: "Aug 09, 2025",
// // // //     rating: 4.5,
// // // //     source: "Trustpilot",
// // // //     text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "Sarah Thompson (Parent of Olivia, Sydney)",
// // // //     role: "Parent",
// // // //     type: "parents",
// // // //     date: "Aug 08, 2025",
// // // //     rating: 5,
// // // //     source: "Website",
// // // //     text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "Daniel Williams (Parent of Ethan, Melbourne)",
// // // //     role: "Parent",
// // // //     type: "parents",
// // // //     date: "Aug 07, 2025",
// // // //     rating: 4.5,
// // // //     source: "Google",
// // // //     text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "Emily Brown (Parent of Charlotte, Brisbane)",
// // // //     role: "Parent",
// // // //     type: "parents",
// // // //     date: "Aug 06, 2025",
// // // //     rating: 5,
// // // //     source: "Trustpilot",
// // // //     text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
// // // //     role: "Teacher",
// // // //     type: "teachers",
// // // //     date: "Aug 05, 2025",
// // // //     rating: 5,
// // // //     source: "Website",
// // // //     text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
// // // //   },
// // // //   {
// // // //     id: 8,
// // // //     name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
// // // //     role: "Teacher",
// // // //     type: "teachers",
// // // //     date: "Aug 04, 2025",
// // // //     rating: 4.5,
// // // //     source: "Google",
// // // //     text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
// // // //   },
// // // //   {
// // // //     id: 9,
// // // //     name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
// // // //     role: "Teacher",
// // // //     type: "teachers",
// // // //     date: "Aug 03, 2025",
// // // //     rating: 5,
// // // //     source: "Trustpilot",
// // // //     text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
// // // //   },
// // // //   {
// // // //     id: 10,
// // // //     name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
// // // //     role: "Teacher",
// // // //     type: "teachers",
// // // //     date: "Aug 01, 2025",
// // // //     rating: 5,
// // // //     source: "Website",
// // // //     text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey.",
// // // //   },
// // // // ];

// // // // export default function ReviewsSection() {
// // // //   const [visibleReviews, setVisibleReviews] = useState(6);
// // // //   const [filter, setFilter] = useState("all");
// // // //   const [search, setSearch] = useState("");
// // // //   const [sort, setSort] = useState("recent");
// // // //   const [sortOpen, setSortOpen] = useState(false);

// // // //   const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

// // // //   const filteredReviews = reviews
// // // //     .filter((r) => {
// // // //       const matchFilter = filter === "all" || r.type === filter;
// // // //       const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
// // // //       return matchFilter && matchSearch;
// // // //     })
// // // //     .sort((a, b) => {
// // // //       if (sort === "recent") return new Date(b.date) - new Date(a.date);
// // // //       if (sort === "highest") return b.rating - a.rating;
// // // //       if (sort === "lowest") return a.rating - b.rating;
// // // //       return 0;
// // // //     });

// // // //   return (
// // // //     <div className="w-full font-quicksand px-6 md:px-12">
// // // //       {/* Banner */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: -40 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.6 }}
// // // //         className="w-full h-80 md:h-[500px] overflow-hidden rounded-3xl mt-16"
// // // //       >
// // // //         <img
// // // //           src="https://via.placeholder.com/1600x700"
// // // //           alt="Banner"
// // // //           className="w-full h-full object-cover"
// // // //         />
// // // //       </motion.div>

// // // //       {/* Filter + Search + Sort */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: -20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ delay: 0.2, duration: 0.5 }}
// // // //         className="mt-12 w-full bg-white shadow-md rounded-full px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4"
// // // //       >
// // // //         {/* Role Filter */}
// // // //         <div className="flex gap-3 flex-wrap justify-center md:justify-start">
// // // //           {["all", "parents", "learners", "teachers"].map((tab) => (
// // // //             <motion.button
// // // //               key={tab}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() => setFilter(tab)}
// // // //               className={`px-5 py-2 rounded-full capitalize transition ${
// // // //                 filter === tab
// // // //                   ? "bg-blue-500 text-white"
// // // //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// // // //               }`}
// // // //             >
// // // //               {tab}
// // // //             </motion.button>
// // // //           ))}
// // // //         </div>

// // // //         {/* Search + Sort */}
// // // //         <div className="flex items-center gap-3 w-full md:w-auto">
// // // //           <div className="relative w-full md:w-72">
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search reviews..."
// // // //               value={search}
// // // //               onChange={(e) => setSearch(e.target.value)}
// // // //               className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
// // // //             />
// // // //             <Search
// // // //               size={18}
// // // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
// // // //             />
// // // //           </div>
// // // //           {/* Sort Dropdown */}
// // // //           <div className="relative">
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() => setSortOpen(!sortOpen)}
// // // //               className="flex items-center gap-1 px-5 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
// // // //             >
// // // //               {sort === "recent"
// // // //                 ? "Recent Reviews"
// // // //                 : sort === "highest"
// // // //                 ? "Highest Rated"
// // // //                 : "Lowest Rated"}
// // // //               <ChevronDown size={16} />
// // // //             </motion.button>
// // // //             <AnimatePresence>
// // // //               {sortOpen && (
// // // //                 <motion.div
// // // //                   initial={{ opacity: 0, y: -10 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   exit={{ opacity: 0, y: -10 }}
// // // //                   className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border z-10"
// // // //                 >
// // // //                   {[
// // // //                     { key: "recent", label: "Recent Reviews" },
// // // //                     { key: "highest", label: "Highest Rated" },
// // // //                     { key: "lowest", label: "Lowest Rated" },
// // // //                   ].map((opt) => (
// // // //                     <button
// // // //                       key={opt.key}
// // // //                       onClick={() => {
// // // //                         setSort(opt.key);
// // // //                         setSortOpen(false);
// // // //                       }}
// // // //                       className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
// // // //                         sort === opt.key ? "bg-gray-200 font-medium" : ""
// // // //                       }`}
// // // //                     >
// // // //                       {opt.label}
// // // //                     </button>
// // // //                   ))}
// // // //                 </motion.div>
// // // //               )}
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </div>
// // // //       </motion.div>

// // // //       {/* Rating Overview */}
// // // //       <div className="mt-16 flex flex-col md:flex-row items-start gap-10 w-full">
// // // //         <div className="bg-white p-10 md:p-12 rounded-2xl shadow-lg w-full md:w-[500px] text-left">
// // // //           <p className="text-gray-600 text-sm mb-2 font-medium">Overall Rating</p>
// // // //           <p className="text-6xl md:text-7xl font-bold text-blue-600 flex items-end">
// // // //             4.8 <span className="text-2xl md:text-3xl text-gray-500 ml-1">/5</span>
// // // //           </p>
// // // //           <p className="text-gray-600 mt-3">2,431 reviews</p>
// // // //         </div>

// // // //         <div className="flex-1 w-full">
// // // //           <div className="space-y-4">
// // // //             {[5, 4, 3, 2, 1].map((star) => (
// // // //               <div key={star} className="flex items-center gap-4 w-full">
// // // //                 <span className="w-10 text-sm font-medium">{star}★</span>
// // // //                 <div className="flex-1 min-w-0 bg-gray-200 h-3 rounded-full overflow-hidden">
// // // //                   <motion.div
// // // //                     initial={{ width: 0 }}
// // // //                     animate={{ width: `${ratings[star]}%` }}
// // // //                     transition={{ duration: 0.6 }}
// // // //                     className="bg-blue-500 h-3 rounded-full"
// // // //                   />
// // // //                 </div>
// // // //                 <span className="text-sm text-gray-600 w-12 text-right">
// // // //                   {ratings[star]}%
// // // //                 </span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Highlights */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.6 }}
// // // //         className="mt-20 w-full"
// // // //       >
// // // //         <h2 className="text-2xl md:text-3xl font-semibold mb-10">Highlights</h2>

// // // //         {/* 3 Highlight Cards */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //           {/* Overall Rating */}
// // // //           <motion.div
// // // //             whileHover={{ scale: 1.03 }}
// // // //             className="bg-white p-10 md:p-12 rounded-2xl shadow-md text-left"
// // // //           >
// // // //             <p className="text-gray-600 text-sm mb-2 font-medium">Overall Rating</p>
// // // //             <p className="text-5xl md:text-6xl font-bold text-blue-600 flex items-end">
// // // //               4.8 <span className="text-xl md:text-2xl text-gray-500 ml-1">/5</span>
// // // //             </p>
// // // //             <p className="text-gray-600 mt-3">2,431 reviews</p>
// // // //           </motion.div>

// // // //           {/* Top Mentions */}
// // // //           <motion.div
// // // //             whileHover={{ scale: 1.03 }}
// // // //             className="bg-white p-10 md:p-12 rounded-2xl shadow-md"
// // // //           >
// // // //             <h3 className="text-lg font-semibold mb-5">Top Mentions</h3>
// // // //             <div className="flex flex-wrap gap-4">
// // // //               {[
// // // //                 "Engaging Lessons",
// // // //                 "Great Tutors",
// // // //                 "Fun Projects",
// // // //                 "Clear Progress",
// // // //               ].map((item, idx) => (
// // // //                 <span
// // // //                   key={idx}
// // // //                   className="px-5 py-2 rounded-full bg-gray-100 text-sm font-medium"
// // // //                 >
// // // //                   {item}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* Sources */}
// // // //           <motion.div
// // // //             whileHover={{ scale: 1.03 }}
// // // //             className="bg-white p-10 md:p-12 rounded-2xl shadow-md"
// // // //           >
// // // //             <h3 className="text-lg font-semibold mb-5">Sources</h3>
// // // //             <div className="flex flex-wrap gap-4">
// // // //               {["Google Reviews", "Trustpilot", "Sitejabber"].map((source, idx) => (
// // // //                 <span
// // // //                   key={idx}
// // // //                   className="px-5 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium"
// // // //                 >
// // // //                   {source}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>

// // // //         {/* 4 Feature Boxes */}
// // // //         <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
// // // //           {[
// // // //             { title: "Verified Parents & Learners", icon: "👨‍👩‍👧" },
// // // //             { title: "Video Testimonials", icon: "🎥" },
// // // //             { title: "Global Community", icon: "🌍" },
// // // //             { title: "Top Rated Curriculum", icon: "📚" },
// // // //           ].map((feature, idx) => (
// // // //             <motion.div
// // // //               key={idx}
// // // //               whileHover={{ y: -5 }}
// // // //               className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4"
// // // //             >
// // // //               <div className="text-2xl">{feature.icon}</div>
// // // //               <p className="text-sm md:text-base font-medium text-gray-700">
// // // //                 {feature.title}
// // // //               </p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </motion.div>

// // // //       {/* Reviews Section */}
// // // //       <div className="mt-20 w-full mb-20">
// // // //         <h2 className="text-2xl md:text-3xl font-semibold mb-8">Recent Reviews</h2>
// // // //         {/* Reviews List */}
// // // // <AnimatePresence mode="wait">
// // // //   {filteredReviews.slice(0, visibleReviews).map((review, idx) => (
// // // //     <motion.div
// // // //       key={idx}
// // // //       initial={{ opacity: 0, y: 40 }}
// // // //       whileInView={{ opacity: 1, y: 0 }}
// // // //       viewport={{ once: true }}
// // // //       transition={{ duration: 0.6, delay: idx * 0.1 }}
// // // //       className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8"
// // // //     >
// // // //       {/* Header: Name + Source */}
// // // //       <div className="flex items-center justify-between flex-wrap gap-2">
// // // //         <a
// // // //           href="#"
// // // //           className="text-lg font-semibold text-black hover:underline"
// // // //         >
// // // //           {review.name}
// // // //         </a>
// // // //         <span className="px-4 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
// // // //           {review.source}
// // // //         </span>
// // // //       </div>

// // // //       {/* Stars */}
// // // //       <div className="flex items-center gap-1 mt-3">
// // // //         {Array.from({ length: 5 }).map((_, i) => (
// // // //           <Star
// // // //             key={i}
// // // //             size={18}
// // // //             className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       {/* Role Tag */}
// // // //       <div className="mt-2">
// // // //         <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-medium">
// // // //           {review.type.charAt(0).toUpperCase() + review.type.slice(1)}
// // // //         </span>
// // // //       </div>

// // // //       {/* Review Text */}
// // // //       <p className="mt-4 text-gray-700 leading-relaxed">{review.text}</p>
// // // //     </motion.div>
// // // //   ))}
// // // // </AnimatePresence>

// // // // {/* Load More Button */}
// // // // {visibleReviews < filteredReviews.length && (
// // // //   <div className="flex justify-center mt-10">
// // // //     <motion.button
// // // //       whileHover={{ scale: 1.05 }}
// // // //       whileTap={{ scale: 0.95 }}
// // // //       onClick={() => setVisibleReviews((prev) => prev + 6)}
// // // //       className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 transition"
// // // //     >
// // // //       Load More Reviews
// // // //     </motion.button>
// // // //   </div>
// // // // )}

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }























// // "use client";
// // import { useState } from "react";
// // import { Star, Search, ChevronDown } from "lucide-react";
// // import { motion } from "framer-motion";

// // const reviews = [
// //   {
// //     id: 1,
// //     name: "Olivia Thompson (Year 5, Sydney)",
// //     role: "Learner",
// //     type: "learners",
// //     date: "Aug 12, 2025",
// //     rating: 5,
// //     source: "Website",
// //     text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
// //   },
// //   {
// //     id: 2,
// //     name: "Ethan Williams (Year 7, Melbourne)",
// //     role: "Learner",
// //     type: "learners",
// //     date: "Aug 10, 2025",
// //     rating: 4.5,
// //     source: "Google",
// //     text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
// //   },
// //   {
// //     id: 3,
// //     name: "Charlotte Brown (Year 4, Brisbane)",
// //     role: "Learner",
// //     type: "learners",
// //     date: "Aug 09, 2025",
// //     rating: 4.5,
// //     source: "Trustpilot",
// //     text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
// //   },
// //   {
// //     id: 4,
// //     name: "Sarah Thompson (Parent of Olivia, Sydney)",
// //     role: "Parent",
// //     type: "parents",
// //     date: "Aug 08, 2025",
// //     rating: 5,
// //     source: "Website",
// //     text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
// //   },
// //   {
// //     id: 5,
// //     name: "Daniel Williams (Parent of Ethan, Melbourne)",
// //     role: "Parent",
// //     type: "parents",
// //     date: "Aug 07, 2025",
// //     rating: 4.5,
// //     source: "Google",
// //     text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
// //   },
// //   {
// //     id: 6,
// //     name: "Emily Brown (Parent of Charlotte, Brisbane)",
// //     role: "Parent",
// //     type: "parents",
// //     date: "Aug 06, 2025",
// //     rating: 5,
// //     source: "Trustpilot",
// //     text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
// //   },
// //   {
// //     id: 7,
// //     name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
// //     role: "Teacher",
// //     type: "teachers",
// //     date: "Aug 05, 2025",
// //     rating: 5,
// //     source: "Website",
// //     text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
// //   },
// //   {
// //     id: 8,
// //     name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
// //     role: "Teacher",
// //     type: "teachers",
// //     date: "Aug 04, 2025",
// //     rating: 4.5,
// //     source: "Google",
// //     text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
// //   },
// //   {
// //     id: 9,
// //     name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
// //     role: "Teacher",
// //     type: "teachers",
// //     date: "Aug 03, 2025",
// //     rating: 5,
// //     source: "Trustpilot",
// //     text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
// //   },
// //   {
// //     id: 10,
// //     name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
// //     role: "Teacher",
// //     type: "teachers",
// //     date: "Aug 01, 2025",
// //     rating: 5,
// //     source: "Website",
// //     text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey.",
// //   },
// // ];

// // export default function ReviewsSection() {
// //   const [visibleReviews, setVisibleReviews] = useState(6);
// //   const [filter, setFilter] = useState("all");
// //   const [search, setSearch] = useState("");
// //   const [sort, setSort] = useState("recent");
// //   const [sortOpen, setSortOpen] = useState(false);

// //   const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

// //   const filteredReviews = reviews
// //     .filter((r) => {
// //       const matchFilter = filter === "all" || r.type === filter;
// //       const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
// //       return matchFilter && matchSearch;
// //     })
// //     .sort((a, b) => {
// //       if (sort === "recent") return new Date(b.date) - new Date(a.date);
// //       if (sort === "highest") return b.rating - a.rating;
// //       if (sort === "lowest") return a.rating - b.rating;
// //       return 0;
// //     });

// //   return (
// //     <div className="w-full mx-1 mt-10 font-quicksand">
// //       {/* Banner */}
// //       <motion.div
// //         initial={{ opacity: 0, y: -40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="w-full h-96 md:h-[520px] overflow-hidden rounded-3xl"
// //       >
// //         <img
// //           src="https://via.placeholder.com/1600x700"
// //           alt="Banner"
// //           className="w-full h-full object-cover"
// //         />
// //       </motion.div>

// //       {/* Filter + Search + Sort */}
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.2, duration: 0.5 }}
// //         className="mt-6 w-full bg-white shadow-md rounded-full px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3"
// //       >
// //         {/* Filter Buttons */}
// //         <div className="flex flex-wrap gap-2">
// //           {["all", "parents", "learners", "teachers"].map((tab) => (
// //             <motion.button
// //               key={tab}
// //               onClick={() => setFilter(tab)}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className={`px-4 py-2 rounded-full text-sm capitalize transition ${
// //                 filter === tab
// //                   ? "bg-blue-500 text-white"
// //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //               }`}
// //             >
// //               {tab}
// //             </motion.button>
// //           ))}
// //         </div>

// //         {/* Search + Sort Dropdown */}
// //         <div className="flex items-center gap-2 w-full md:w-auto relative">
// //           <div className="relative w-full md:w-64">
// //             <input
// //               type="text"
// //               placeholder="Search reviews..."
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //               className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
// //             />
// //             <Search
// //               size={18}
// //               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
// //             />
// //           </div>

// //           {/* Sort Dropdown */}
// //           <div className="relative">
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => setSortOpen(!sortOpen)}
// //               className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
// //             >
// //               {sort === "recent"
// //                 ? "Recent Reviews"
// //                 : sort === "highest"
// //                 ? "Highest Rated"
// //                 : "Lowest Rated"}
// //               <ChevronDown size={16} />
// //             </motion.button>
// //             {sortOpen && (
// //               <motion.div
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10"
// //               >
// //                 {[
// //                   { key: "recent", label: "Recent Reviews" },
// //                   { key: "highest", label: "Highest Rated" },
// //                   { key: "lowest", label: "Lowest Rated" },
// //                 ].map((opt) => (
// //                   <button
// //                     key={opt.key}
// //                     onClick={() => {
// //                       setSort(opt.key);
// //                       setSortOpen(false);
// //                     }}
// //                     className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
// //                       sort === opt.key ? "bg-gray-200 font-medium" : ""
// //                     }`}
// //                   >
// //                     {opt.label}
// //                   </button>
// //                 ))}
// //               </motion.div>
// //             )}
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Rating Overview */}
// //       <div className="mt-10 flex flex-col md:flex-row items-start gap-8 w-full px-[4px]">
// //         <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-full md:w-[500px]">
// //           <p className="text-7xl font-bold">4.8</p>
// //           <p className="text-gray-600 mt-2">2,431 reviews</p>
// //         </div>
// //         <div className="flex-1">
// //           <div className="space-y-2">
// //             {[5, 4, 3, 2, 1].map((star) => (
// //               <div key={star} className="flex items-center gap-2">
// //                 <span className="w-8">{star}★</span>
// //                 <div className="w-full bg-gray-200 h-2 rounded-full">
// //                   <motion.div
// //                     initial={{ width: 0 }}
// //                     animate={{ width: `${ratings[star]}%` }}
// //                     transition={{ duration: 0.6 }}
// //                     className="bg-blue-500 h-2 rounded-full"
// //                   />
// //                 </div>
// //                 <span className="ml-2 text-sm text-gray-600">
// //                   {ratings[star]}%
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Reviews */}
// //       <div className="mt-12 w-full px-[4px] mb-16">
// //         <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
// //         <div className="grid md:grid-cols-3 gap-6">
// //           {filteredReviews.slice(0, visibleReviews).map((review) => (
// //             <motion.div
// //               key={review.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5 }}
// //               className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
// //             >
// //               {/* Name + Source Row */}
// //               <div className="flex justify-between items-center mb-1">
// //                 <a
// //                   href={review.link}
// //                   className="font-semibold text-black hover:underline"
// //                 >
// //                   {review.name}
// //                 </a>
// //                 <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-200 text-teal-900">
// //                   {review.source}
// //                 </span>
// //               </div>

// //               <p className="text-xs text-gray-500 mb-2">{review.date}</p>

// //               {/* Rating */}
// //               <div className="flex items-center mb-2">
// //                 {[...Array(5)].map((_, i) => (
// //                   <Star
// //                     key={i}
// //                     size={16}
// //                     fill={i < Math.floor(review.rating) ? "gold" : "none"}
// //                     stroke="gold"
// //                   />
// //                 ))}
// //                 <span className="ml-2 text-sm font-medium">
// //                   {review.rating}
// //                 </span>
// //               </div>

// //               {/* Role Tag BELOW stars */}
// //               <span className="mb-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 w-fit">
// //                 {review.role}
// //               </span>

// //               {/* Review Text */}
// //               <p className="text-gray-700 flex-1">{review.text}</p>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Load More */}
// //         {visibleReviews < filteredReviews.length && (
// //           <div className="text-center mt-8">
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => setVisibleReviews((prev) => prev + 3)}
// //               className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
// //             >
// //               Load more reviews
// //             </motion.button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// //v1 good









// "use client";
// import { useState } from "react";
// import { Star, Search, ChevronDown, CheckCircle, Play, Globe, BookOpen } from "lucide-react";
// import { motion } from "framer-motion";

// const reviews = [
//   {
//     id: 1,
//     name: "Olivia Thompson (Year 5, Sydney)",
//     role: "Learner",
//     type: "learners",
//     date: "Aug 12, 2025",
//     rating: 5,
//     source: "Website",
//     text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
//   },
//   {
//     id: 2,
//     name: "Ethan Williams (Year 7, Melbourne)",
//     role: "Learner",
//     type: "learners",
//     date: "Aug 10, 2025",
//     rating: 4.5,
//     source: "Google",
//     text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
//   },
//   {
//     id: 3,
//     name: "Charlotte Brown (Year 4, Brisbane)",
//     role: "Learner",
//     type: "learners",
//     date: "Aug 09, 2025",
//     rating: 4.5,
//     source: "Trustpilot",
//     text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
//   },
//   {
//     id: 4,
//     name: "Sarah Thompson (Parent of Olivia, Sydney)",
//     role: "Parent",
//     type: "parents",
//     date: "Aug 08, 2025",
//     rating: 5,
//     source: "Website",
//     text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
//   },
//   {
//     id: 5,
//     name: "Daniel Williams (Parent of Ethan, Melbourne)",
//     role: "Parent",
//     type: "parents",
//     date: "Aug 07, 2025",
//     rating: 4.5,
//     source: "Google",
//     text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
//   },
//   {
//     id: 6,
//     name: "Emily Brown (Parent of Charlotte, Brisbane)",
//     role: "Parent",
//     type: "parents",
//     date: "Aug 06, 2025",
//     rating: 5,
//     source: "Trustpilot",
//     text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
//   },
//   {
//     id: 7,
//     name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
//     role: "Teacher",
//     type: "teachers",
//     date: "Aug 05, 2025",
//     rating: 5,
//     source: "Website",
//     text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
//   },
//   {
//     id: 8,
//     name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
//     role: "Teacher",
//     type: "teachers",
//     date: "Aug 04, 2025",
//     rating: 4.5,
//     source: "Google",
//     text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
//   },
//   {
//     id: 9,
//     name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
//     role: "Teacher",
//     type: "teachers",
//     date: "Aug 03, 2025",
//     rating: 5,
//     source: "Trustpilot",
//     text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
//   },
//   {
//     id: 10,
//     name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
//     role: "Teacher",
//     type: "teachers",
//     date: "Aug 01, 2025",
//     rating: 5,
//     source: "Website",
//     text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey. I strongly recommend Supersheldon for both learners and educators.",
//   },
// ];

// export default function ReviewsSection() {
//   const [visibleReviews, setVisibleReviews] = useState(6);
//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("recent");
//   const [sortOpen, setSortOpen] = useState(false);
//   const [expanded, setExpanded] = useState({});

//   const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

//   const filteredReviews = reviews
//     .filter((r) => {
//       const matchFilter = filter === "all" || r.type === filter;
//       const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
//       return matchFilter && matchSearch;
//     })
//     .sort((a, b) => {
//       if (sort === "recent") return new Date(b.date) - new Date(a.date);
//       if (sort === "highest") return b.rating - a.rating;
//       if (sort === "lowest") return a.rating - b.rating;
//       return 0;
//     });

//   const toggleExpand = (id) => {
//     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-12 mt-10 font-quicksand">
//       {/* Banner */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full h-96 md:h-[520px] overflow-hidden rounded-3xl"
//       >
//         <img
//           src="https://via.placeholder.com/1600x700"
//           alt="Banner"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Filter + Search + Sort */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="mt-6 w-full bg-white shadow-md rounded-full px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3"
//       >
//         {/* Filter Buttons */}
//         <div className="flex flex-wrap gap-2">
//           {["all", "parents", "learners", "teachers"].map((tab) => (
//             <motion.button
//               key={tab}
//               onClick={() => setFilter(tab)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`px-4 py-2 rounded-full text-sm capitalize transition ${
//                 filter === tab
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {tab}
//             </motion.button>
//           ))}
//         </div>

//         {/* Search + Sort Dropdown */}
//         <div className="flex items-center gap-2 w-full md:w-auto relative">
//           <div className="relative w-full md:w-64">
//             <input
//               type="text"
//               placeholder="Search reviews..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//             />
//             <Search
//               size={18}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//             />
//           </div>

//           {/* Sort Dropdown */}
//           <div className="relative">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setSortOpen(!sortOpen)}
//               className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
//             >
//               {sort === "recent"
//                 ? "Recent Reviews"
//                 : sort === "highest"
//                 ? "Highest Rated"
//                 : "Lowest Rated"}
//               <ChevronDown size={16} />
//             </motion.button>
//             {sortOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10"
//               >
//                 {[
//                   { key: "recent", label: "Recent Reviews" },
//                   { key: "highest", label: "Highest Rated" },
//                   { key: "lowest", label: "Lowest Rated" },
//                 ].map((opt) => (
//                   <button
//                     key={opt.key}
//                     onClick={() => {
//                       setSort(opt.key);
//                       setSortOpen(false);
//                     }}
//                     className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
//                       sort === opt.key ? "bg-gray-200 font-medium" : ""
//                     }`}
//                   >
//                     {opt.label}
//                   </button>
//                 ))}
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </motion.div>

//       {/* Rating Overview + Highlights */}
//       <div className="mt-10 space-y-10">
//         <div className="flex flex-col md:flex-row items-start gap-8 w-full">
//           <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-full md:w-[400px]">
//             <p className="text-sm uppercase tracking-wide text-gray-500">
//               Overall Rating
//             </p>
//             <p className="text-7xl font-bold">4.8<span className="text-2xl">/5</span></p>
//             <p className="text-gray-600 mt-2">2,431 reviews</p>
//           </div>
//           <div className="flex-1">
//             <div className="space-y-2">
//               {[5, 4, 3, 2, 1].map((star) => (
//                 <div key={star} className="flex items-center gap-2">
//                   <span className="w-8">{star}★</span>
//                   <div className="w-full bg-gray-200 h-2 rounded-full">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${ratings[star]}%` }}
//                       transition={{ duration: 0.6 }}
//                       className="bg-blue-500 h-2 rounded-full"
//                     />
//                   </div>
//                   <span className="ml-2 text-sm text-gray-600">
//                     {ratings[star]}%
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Highlights Section */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {/* Card 1 - Overall Rating */}
//             <div className="bg-white p-6 rounded-2xl shadow-md">
//               <p className="text-5xl font-bold text-blue-500">4.8</p>
//               <p className="text-gray-600">Average Rating</p>
//             </div>

//             {/* Card 2 - Top Mentions */}
//             <div className="bg-white p-6 rounded-2xl shadow-md">
//               <h3 className="font-semibold mb-3">Top Mentions</h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li>• Engaging Lessons</li>
//                 <li>• Great Tutors</li>
//                 <li>• Fun Projects</li>
//                 <li>• Clear Progress</li>
//               </ul>
//             </div>

//             {/* Card 3 - Sources */}
//             <div className="bg-white p-6 rounded-2xl shadow-md">
//               <h3 className="font-semibold mb-3">Sources</h3>
//               <div className="flex flex-wrap gap-2">
//                 {["Google", "Trustpilot", "Website"].map((src) => (
//                   <span
//                     key={src}
//                     className="px-3 py-1 rounded-full bg-teal-200 text-teal-900 text-sm font-medium"
//                   >
//                     {src}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Feature Boxes */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { icon: CheckCircle, label: "Verified Parents & Learners" },
//             { icon: Play, label: "Video Testimonials" },
//             { icon: Globe, label: "Global Community" },
//             { icon: BookOpen, label: "Top Rated Curriculum" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md"
//             >
//               <item.icon size={28} className="text-blue-500" />
//               <p className="font-medium text-gray-800">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Reviews */}
//       <div className="mt-12 w-full mb-16">
//         <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {filteredReviews.slice(0, visibleReviews).map((review) => {
//             const isLong = review.text.length > 160;
//             const displayText = expanded[review.id]
//               ? review.text
//               : isLong
//               ? review.text.slice(0, 160) + "..."
//               : review.text;

//             return (
//               <motion.div
//                 key={review.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
//               >
//                 {/* Name + Source Row */}
//                 <div className="flex justify-between items-center mb-1">
//                   <span className="font-semibold text-black">{review.name}</span>
//                   <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-200 text-teal-900">
//                     {review.source}
//                   </span>
//                 </div>

//                 <p className="text-xs text-gray-500 mb-2">{review.date}</p>

//                 {/* Rating */}
//                 <div className="flex items-center mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={16}
//                       fill={i < Math.floor(review.rating) ? "gold" : "none"}
//                       stroke="gold"
//                     />
//                   ))}
//                   <span className="ml-2 text-sm font-medium">
//                     {review.rating}
//                   </span>
//                 </div>

//                 {/* Role Tag */}
//                 <span className="mb-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 w-fit">
//                   {review.role}
//                 </span>

//                 {/* Review Text */}
//                 <p className="text-gray-700 flex-1">
//                   {displayText}
//                   {isLong && (
//                     <button
//                       onClick={() => toggleExpand(review.id)}
//                       className="ml-1 text-blue-500 hover:underline text-sm"
//                     >
//                       {expanded[review.id] ? "Read less" : "Read more"}
//                     </button>
//                   )}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Load More */}
//         {visibleReviews < filteredReviews.length && (
//           <div className="text-center mt-8">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setVisibleReviews((prev) => prev + 3)}
//               className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
//             >
//               Load more reviews
//             </motion.button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





















"use client";
import { useState } from "react";
import Link from "next/link";
import { Star, Search, ChevronDown, CheckCircle, Play, Globe, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Olivia Thompson (Year 5, Sydney)",
    role: "Learner",
    type: "learners",
    date: "Aug 12, 2025",
    rating: 5,
    source: "Website",
    text: "Supersheldon classes are so much fun! My coding teacher explains everything clearly and I even built my first small game.",
    link: "/reviews/olivia-thompson",
  },
  {
    id: 2,
    name: "Ethan Williams (Year 7, Melbourne)",
    role: "Learner",
    type: "learners",
    date: "Aug 10, 2025",
    rating: 4.5,
    source: "Google",
    text: "Math used to be hard for me, but now I enjoy solving problems. The interactive lessons really helped me.",
    link: "/reviews/ethan-williams",
  },
  {
    id: 3,
    name: "Charlotte Brown (Year 4, Brisbane)",
    role: "Learner",
    type: "learners",
    date: "Aug 09, 2025",
    rating: 4.5,
    source: "Trustpilot",
    text: "I love the Science experiments! The teacher shows us step by step and I can even try some at home.",
    link: "/reviews/charlotte-brown",
  },
  {
    id: 4,
    name: "Sarah Thompson (Parent of Olivia, Sydney)",
    role: "Parent",
    type: "parents",
    date: "Aug 08, 2025",
    rating: 5,
    source: "Website",
    text: "As a parent, I am very happy with the progress Olivia is making. The teachers are patient and supportive.",
    link: "/reviews/sarah-thompson",
  },
  {
    id: 5,
    name: "Daniel Williams (Parent of Ethan, Melbourne)",
    role: "Parent",
    type: "parents",
    date: "Aug 07, 2025",
    rating: 4.5,
    source: "Google",
    text: "Ethan has improved a lot in Math. The structured lessons and feedback from teachers are excellent.",
    link: "/reviews/daniel-williams",
  },
  {
    id: 6,
    name: "Emily Brown (Parent of Charlotte, Brisbane)",
    role: "Parent",
    type: "parents",
    date: "Aug 06, 2025",
    rating: 5,
    source: "Trustpilot",
    text: "Supersheldon gives my daughter confidence in her learning. The platform is easy to use and very engaging.",
    link: "/reviews/emily-brown",
  },
  {
    id: 7,
    name: "Ms. Jessica Miller (Math Teacher, Supersheldon)",
    role: "Teacher",
    type: "teachers",
    date: "Aug 05, 2025",
    rating: 5,
    source: "Website",
    text: "It’s rewarding to see students grow each week. The interactive tools on Supersheldon make teaching smooth and effective.",
    link: "/reviews/jessica-miller",
  },
  {
    id: 8,
    name: "Mr. Liam Johnson (Science Teacher, Supersheldon)",
    role: "Teacher",
    type: "teachers",
    date: "Aug 04, 2025",
    rating: 4.5,
    source: "Google",
    text: "Students are more engaged during online lessons. The platform helps me track their progress and assign homework easily.",
    link: "/reviews/liam-johnson",
  },
  {
    id: 9,
    name: "Ms. Hannah Davis (English Teacher, Supersheldon)",
    role: "Teacher",
    type: "teachers",
    date: "Aug 03, 2025",
    rating: 5,
    source: "Trustpilot",
    text: "I love the one-to-one interaction. It allows me to focus on each student’s strengths and areas of improvement.",
    link: "/reviews/hannah-davis",
  },
  {
    id: 10,
    name: "M.Tech Graduate | Bachelor of Education | 10+ Years of Teaching Experience",
    role: "Teacher",
    type: "teachers",
    date: "Aug 01, 2025",
    rating: 5,
    source: "Website",
    text: "SuperSheldon has provided me with an outstanding platform to apply my expertise and grow as a mentor. The structured approach, innovative resources, and supportive environment have greatly enriched my professional journey.",
    link: "/reviews/mtech-graduate",
  },
];


export default function ReviewsSection() {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");
  const [sortOpen, setSortOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const ratings = { 5: 60, 4: 25, 3: 8, 2: 5, 1: 2 };

  const filteredReviews = reviews
    .filter((r) => {
      const matchFilter = filter === "all" || r.type === filter;
      const matchSearch = r.text.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    })
    .sort((a, b) => {
      if (sort === "recent") return new Date(b.date) - new Date(a.date);
      if (sort === "highest") return b.rating - a.rating;
      if (sort === "lowest") return a.rating - b.rating;
      return 0;
    });

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 mt-10 font-quicksand">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-96 md:h-[520px] overflow-hidden rounded-3xl"
      >
        <img
          src="https://via.placeholder.com/1600x700"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Filter + Search + Sort */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 w-full bg-white shadow-md rounded-full px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3"
      >
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {["all", "parents", "learners", "teachers"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setFilter(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm capitalize transition ${
                filter === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Search + Sort Dropdown */}
        <div className="flex items-center gap-2 w-full md:w-auto relative">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search reviews..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              {sort === "recent"
                ? "Recent Reviews"
                : sort === "highest"
                ? "Highest Rated"
                : "Lowest Rated"}
              <ChevronDown size={16} />
            </motion.button>
            {sortOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10"
              >
                {[
                  { key: "recent", label: "Recent Reviews" },
                  { key: "highest", label: "Highest Rated" },
                  { key: "lowest", label: "Lowest Rated" },
                ].map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      setSort(opt.key);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      sort === opt.key ? "bg-gray-200 font-medium" : ""
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Rating Overview + Highlights */}
      <div className="mt-10 space-y-10">
        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-full md:w-[400px]">
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Overall Rating
            </p>
            <p className="text-7xl font-bold">
              4.8<span className="text-2xl">/5</span>
            </p>
            <p className="text-gray-600 mt-2">2,431 reviews</p>
          </div>
          <div className="flex-1">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="w-8">{star}★</span>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${ratings[star]}%` }}
                      transition={{ duration: 0.6 }}
                      className="bg-blue-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {ratings[star]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Overall Rating */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                Overall Rating
              </p>
              <p className="text-5xl font-bold text-blue-500">
                4.8<span className="text-xl">/5</span>
              </p>
              <p className="text-gray-600 mt-2">Based on 2,431 reviews</p>
            </div>

            {/* Card 2 - Top Mentions */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-3">Top Mentions</h3>
              <div className="flex flex-wrap gap-2">
                {["Engaging Lessons", "Great Tutors", "Fun Projects", "Clear Progress"].map(
                  (mention) => (
                    <a
                      key={mention}
                      href="#"
                      className="px-3 py-1 rounded-full bg-teal-200 text-teal-900 text-sm font-medium hover:bg-teal-300"
                    >
                      {mention}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Card 3 - Sources */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-3">Sources</h3>
              <div className="flex flex-wrap gap-2">
                {["Google", "Trustpilot", "Website"].map((src) => (
                  <a
                    key={src}
                    href="#"
                    className="px-3 py-1 rounded-full bg-teal-200 text-teal-900 text-sm font-medium hover:bg-teal-300"
                  >
                    {src}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12 w-full mb-16">
        <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {filteredReviews.slice(0, visibleReviews).map((review) => {
            const isLong = review.text.length > 160;
            const displayText = expanded[review.id]
              ? review.text
              : isLong
              ? review.text.slice(0, 160) + "..."
              : review.text;

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
              >
                {/* Name + Source Row */}
                <div className="flex justify-between items-center mb-1">
                  <Link href={review.link || "#"}>
                    <span className="font-semibold text-black hover:underline">
                      {review.name}
                    </span>
                  </Link>
                  <a
                    href="#"
                    className="px-3 py-1 text-xs font-medium rounded-full bg-teal-200 text-teal-900"
                  >
                    {review.source}
                  </a>
                </div>

                <p className="text-xs text-gray-500 mb-2">{review.date}</p>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(review.rating) ? "gold" : "none"}
                      stroke="gold"
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium">
                    {review.rating}
                  </span>
                </div>

                {/* Role Tag */}
                <span className="mb-2 px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 w-fit">
                  {review.role}
                </span>

                {/* Review Text */}
                <p className="text-gray-700 flex-1">
                  {displayText}
                  {isLong && (
                    <button
                      onClick={() => toggleExpand(review.id)}
                      className="ml-1 text-blue-500 hover:underline text-sm"
                    >
                      {expanded[review.id] ? "Read less" : "Read more"}
                    </button>
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Load More */}
        {visibleReviews < filteredReviews.length && (
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleReviews((prev) => prev + 3)}
              className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Load more reviews
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
