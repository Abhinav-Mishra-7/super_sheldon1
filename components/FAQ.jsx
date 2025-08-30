

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqSections = [
//   {
//     title: "Class Experience",
//     faqs: [
//       {
//         question: "What age groups are SuperSheldon courses designed for?",
//         answer:
//           "Our programs are tailored for students from Grade 3 to Grade 12, covering early foundation levels to advanced exam preparation for NAPLAN, SAT, and ICAS across the UK, Australia, and the US.",
//       },
//       {
//         question: "Is there any homework or outside practice required?",
//         answer:
//           "Yes. To maximize results, students are given structured practice tasks and mock papers. These help reinforce learning and simulate real exam conditions.",
//       },
//       {
//         question: "How are SuperSheldon classes conducted?",
//         answer:
//           "Classes are 100% online, interactive, and one-on-one or small group sessions with real exam-style practice and interactive activities.",
//       },
//       {
//         question: "What devices or software are needed for classes?",
//         answer:
//           "A laptop or tablet with stable internet, Zoom (or our online classroom platform), and a headset is all that’s required.",
//       },
//     ],
//   },
//   {
//     title: "Customer Support",
//     faqs: [
//       {
//         question: "How is my child’s data and privacy protected?",
//         answer:
//           "We strictly follow international privacy standards. All student data is securely stored, and class environments are fully protected.",
//       },
//       {
//         question: "Can I get the recording of the classes for my child?",
//         answer:
//           "To maintain student privacy, we do not share class recordings. Instead, detailed notes and practice worksheets are provided after every class.",
//       },
//       {
//         question: "Can I reschedule or cancel classes if needed?",
//         answer:
//           "Yes. Parents can easily reschedule or cancel classes with advance notice to suit your child’s exam preparation timeline.",
//       },
//     ],
//   },
//   {
//     title: "Teacher Queries",
//     faqs: [
//       {
//         question: "How will expert teachers support my child’s exam preparation?",
//         answer:
//           "Our teachers are specialists with years of experience. They provide personalized feedback, strategies, and exam-focused practice.",
//       },
//       {
//         question: "Does my child need prior experience or preparation before joining?",
//         answer:
//           "Not at all. Our courses adapt to each student’s current level—whether beginner or advanced.",
//       },
//       {
//         question: "How do teachers handle difficult topics?",
//         answer:
//           "Teachers break down complex topics into easy-to-understand concepts and provide additional practice for mastery.",
//       },
//     ],
//   },
// ];

// export default function FAQ() {
//   const [activeSection, setActiveSection] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="relative max-w-3xl mx-auto px-4 py-12">
//       {/* <div className="absolute -left-[300px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-200 opacity-10 blur-3xl pointer-events-none" />
//       <div className="absolute -right-[300px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-200 opacity-10 blur-3xl pointer-events-none" />

//       */}

//       {/* FAQ Content above watermark */}
//       <div className="relative">
//         {/* Title */}
//         <h1 className="text-4xl font-quicksand font-bold text-center text-orange-600 mb-12">
//           Frequently Asked Questions
//         </h1>

//         {/* Section Tabs */}
//         <div className="relative flex justify-center mb-10 bg-orange-100 rounded-full p-1">
//           {faqSections.map((section, idx) => (
//             <button
//               key={idx}
//               onClick={() => {
//                 setActiveSection(idx);
//                 setActiveIndex(null);
//               }}
//               className="relative flex-1 text-center px-4 sm:px-6 py-2 font-semibold z-10 transition-colors duration-300"
//             >
//               <span
//                 className={`relative z-10 ${
//                   activeSection === idx ? "text-white" : "text-orange-600"
//                 }`}
//               >
//                 {section.title}
//               </span>

//               {activeSection === idx && (
//                 <motion.div
//                   layoutId="tabIndicator"
//                   className="absolute inset-0 bg-orange-500 rounded-full shadow-md z-0"
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeSection}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="space-y-4"
//           >
//             {faqSections[activeSection].faqs.map((item, index) => {
//               const isActive = activeIndex === index;
//               //zig-zag alignment
//               const alignment = index % 2 === 0 ? "ml-0 mr-40" : "ml-40 mr-0";

//               return (
//                 <motion.div
//                   key={index}
//                   layout
//                   initial={{ borderRadius: 10 }}
//                   className={`border border-orange-300 rounded-lg overflow-hidden transition-all duration-300 ${alignment} ${
//                     isActive ? "bg-orange-50" : "bg-white"
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFAQ(index)}
//                     className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
//                   >
//                     <span
//                       className={`font-anybody text-lg ${
//                         isActive ? "text-orange-600" : "text-orange-700"
//                       }`}
//                     >
//                       {item.question}
//                     </span>
//                     <span className="text-orange-500 text-2xl font-bold">
//                       {isActive ? "−" : "+"}
//                     </span>
//                   </button>
//                   <AnimatePresence>
//                     {isActive && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="px-6 pb-4 text-orange-800 font-manrope text-base"
//                       >
//                         {item.answer}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//       <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[120px] h-[120px] opacity-10 pointer-events-none">
//   <img
//     src="course/light-bulb.png"
//     alt="decor"
//     className="object-contain"
//   />
// </div>

//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqSections = [
  {
    title: "Class Experience",
    faqs: [
      {
        question: "What age groups are SuperSheldon courses designed for?",
        answer:
          "Our programs are tailored for students from Grade 3 to Grade 12, covering early foundation levels to advanced exam preparation for NAPLAN, SAT, and ICAS across the UK, Australia, and the US.",
      },
      {
        question: "Is there any homework or outside practice required?",
        answer:
          "Yes. To maximize results, students are given structured practice tasks and mock papers. These help reinforce learning and simulate real exam conditions.",
      },
      {
        question: "How are SuperSheldon classes conducted?",
        answer:
          "Classes are 100% online, interactive, and one-on-one or small group sessions with real exam-style practice and interactive activities.",
      },
      {
        question: "What devices or software are needed for classes?",
        answer:
          "A laptop or tablet with stable internet, Zoom (or our online classroom platform), and a headset is all that’s required.",
      },
    ],
  },
  {
    title: "Customer Support",
    faqs: [
      {
        question: "How is my child’s data and privacy protected?",
        answer:
          "We strictly follow international privacy standards. All student data is securely stored, and class environments are fully protected.",
      },
      {
        question: "Can I get the recording of the classes for my child?",
        answer:
          "To maintain student privacy, we do not share class recordings. Instead, detailed notes and practice worksheets are provided after every class.",
      },
      {
        question: "Can I reschedule or cancel classes if needed?",
        answer:
          "Yes. Parents can easily reschedule or cancel classes with advance notice to suit your child’s exam preparation timeline.",
      },
    ],
  },
  {
    title: "Teacher Queries",
    faqs: [
      {
        question: "How will expert teachers support my child’s exam preparation?",
        answer:
          "Our teachers are specialists with years of experience. They provide personalized feedback, strategies, and exam-focused practice.",
      },
      {
        question: "Does my child need prior experience or preparation before joining?",
        answer:
          "Not at all. Our courses adapt to each student’s current level—whether beginner or advanced.",
      },
      {
        question: "How do teachers handle difficult topics?",
        answer:
          "Teachers break down complex topics into easy-to-understand concepts and provide additional practice for mastery.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-12">
      {/* FAQ Content above watermark */}
      <div className="relative">
        {/* Title */}
        <h1 className="text-5xl font-quicksand font-semibold text-center text-black-900 mb-12">
          Frequently Asked Questions
        </h1>

        {/* Section Tabs */}
        <div className="relative flex justify-center mb-10 bg-orange-100 rounded-full p-1">
          {faqSections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveSection(idx);
                setActiveIndex(null);
              }}
              className="relative flex-1 text-center px-4 sm:px-6 py-2 font-semibold z-10 transition-colors duration-300"
            >
              <span
                className={`relative z-10 ${
                  activeSection === idx ? "text-white" : "text-orange-600"
                }`}
              >
                {section.title}
              </span>

              {activeSection === idx && (
                <motion.div
                  layoutId="tabIndicator"
                  className="absolute inset-0 bg-orange-500 rounded-full shadow-md z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {faqSections[activeSection].faqs.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ borderRadius: 10 }}
                  className={`border border-orange-300 rounded-lg overflow-hidden transition-all duration-300 ${
                    isActive ? "bg-orange-50" : "bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  >
                    <span
                      className={`font-anybody text-lg ${
                        isActive ? "text-orange-600" : "text-orange-700"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span className="text-orange-500 text-2xl font-bold">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4 text-orange-800 font-manrope text-base"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[120px] h-[120px] opacity-10 pointer-events-none">
        <img src="course/light-bulb.png" alt="decor" className="object-contain" />
      </div> */}
    </div>
  );
}
