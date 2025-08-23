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

// const faqData = [
//   {
//     question: "What exams do you prepare students for?",
//     answer: "We prepare students for various exams including NAPLAN, ICAS, and other exams.",
//   },
//   {
//     question: "How do I apply for a job through the platform?",
//     answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
//   },
//   {
//     question: "Do you offer one-on-one tutoring?",
//     answer: "Yes, we offer personalized one-on-one tutoring sessions with qualified instructors.",
//   },
//   {
//     question: "How do I create an account on the job board?",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
//   },
//   {
//     question: "Is there a cost to use the job board, and what features are free?",
//     answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit .",
//   },
// ];

const faqData = [
  {
    question: "What age groups are SuperSheldon courses designed for?",
    answer: "Our programs are tailored for students from Grade 3 to Grade 12, covering early foundation levels to advanced exam preparation for NAPLAN, SAT, and ICAS across the UK, Australia, and the US.",
  },
  {
    question: "How is my child’s data and privacy protected?",
    answer: "We strictly follow international privacy standards. All student data is securely stored, and class environments are fully protected to ensure a safe learning journey.",
  },
  {
    question: "Can I get the recording of the classes for my child?",
    answer: "To maintain student privacy, we do not share class recordings. Instead, detailed notes, practice worksheets, and exam-style questions are provided after every class for self-revision.",
  },
  {
    question: "Is there any homework or outside practice required?",
    answer: "Yes. To maximize results in NAPLAN, SAT, and ICAS, students are given structured practice tasks and mock papers. These help reinforce learning and simulate real exam conditions.",
  },
  {
    question: "How will expert teachers support my child’s exam preparation?",
    answer: "Our teachers are specialists in NAPLAN, SAT, and ICAS with years of experience. They guide students with proven strategies, personalized feedback, and exam-focused practice to help them achieve top scores.",
  },
  {
    question: "How are SuperSheldon classes conducted?",
    answer: "Classes are 100% online, interactive, and one-on-one or small group sessions. Teachers use real exam-style practice, mock tests, and interactive activities to ensure deep understanding and exam confidence.",
  },
  {
    question: "What devices or software are needed for classes?",
    answer: "A laptop or tablet with stable internet, Zoom (or our online classroom platform), and a headset is all that’s required. No advanced setup is needed.",
  },
  {
    question: "Does my child need prior experience or preparation before joining?",
    answer: "Not at all. Our courses are designed to adapt to each student’s current level—whether beginner or advanced. We start with a diagnostic test and build a customized learning path.",
  },
  {
    question: "Can I reschedule or cancel classes if needed?",
    answer: "Yes. Parents can easily reschedule or cancel classes with advance notice. Flexibility is provided to suit your child’s exam preparation timeline.",
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
