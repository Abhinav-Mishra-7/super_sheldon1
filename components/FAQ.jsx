// "use client"
// import { useState } from "react";

// const faqData = [
//   {
//     question: "What exams do you prepare students for?",
//     answer: "ICAS, NAPLAN, and other exams.",
//   },
//   {
//     question: "How do I apply for a job through the platform?",
//     answer: "lorem ipsum",
//   },
//   {
//     question: "Do you offer one-on-one tutoring?",
//     answer: "Yes, we offer personalized one-on-one tutoring sessions with qualified instructors.",
//   },
//   {
//     question: "How do I create an account on the job board?",
//     answer:
//       "Lorem ipsum ",
//   },
//   {
//     question: "Is there a cost to use the job board, and what features are free?",
//     answer: "lorem ipsum",
//   },
// ];

// export default function FAQ() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleIndex = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-4xl mx-auto my-12 p-6">
//       <h2 className="text-4xl font-semibold mb-8 font-quicksand text-center">Frequently Asked Questions</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {faqData.map((faq, index) => (
//           <div
//             key={index}
//             className={`rounded-lg border p-6 transition-all duration-300 ${
//               activeIndex === index ? "bg-red-100 border-red-300" : "bg-white border-gray-200"
//             }`}
//           >
//             <button
//               onClick={() => toggleIndex(index)}
//               className="w-full flex items-start text-left focus:outline-none gap-4"
//             >
//               {/* Number*/}
//               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-semibold">
//                 {index + 1}
//               </div>
//               <span className="font-anybody text-lg md:text-xl">{faq.question}</span>
//               <span className="ml-auto text-2xl">{activeIndex === index ? "×" : "+"}</span>
//             </button>
//             <div
//               className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                 activeIndex === index ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <p className="text-gray-700font-manrope text-base md:text-lg">{faq.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What exams do you prepare students for?",
    answer: "We prepare students for various exams including NAPLAN, ICAS, and other exams.",
  },
  {
    question: "How do I apply for a job through the platform?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    question: "Do you offer one-on-one tutoring?",
    answer: "Yes, we offer personalized one-on-one tutoring sessions with qualified instructors.",
  },
  {
    question: "How do I create an account on the job board?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    question: "Is there a cost to use the job board, and what features are free?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit .",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-6">
      <h2 className="text-4xl font-quicksand font-semibold mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={index}
              layout
              className={`rounded-lg border p-6 transition-all duration-300 shadow-sm hover:shadow-md ${
                isActive ? "bg-red-100 border-red-300" : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-start text-left focus:outline-none gap-4"
              >
                {/* Animated number circle */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    backgroundColor: isActive ? "#f87171" : "#ef4444",
                  }}
                  className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-semibold"
                >
                  {index + 1}
                </motion.div>

                <span className="font-anybody text-lg md:text-xl">{faq.question}</span>

                {/* Rotating arrow icon */}
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  className="ml-auto text-gray-700"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-4"
                  >
                    <p className="text-gray-700 font-manrope text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
