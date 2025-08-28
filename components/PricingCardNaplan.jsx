

// // "use client";

// // import { useState } from "react";
// // import { CheckIcon } from "@heroicons/react/24/solid";

// // const pricingPlans = [
// //   {
// //     id: 1,
// //     price: "$50",
// //     classes: "24 Class",
// //     title: "NAPLAN Starter",
// //     features: [
// //       "Lifetime Video Access",
// //       "Own analytics platform",
// //       "Chat support",
// //       "Optimize hashtags",
// //       "Unlimited users",
// //     ],
// //   },
// //   {
// //     id: 2,
// //     price: "$100",
// //     classes: "48 Class",
// //     title: "NAPLAN Champion",
// //     features: [
// //       "Lifetime Video Access",
// //       "Own analytics platform",
// //       "Chat support",
// //       "Optimize Teacher",
// //       "Unlimited Homework",
// //     ],
// //     popular: true,
// //   },
// //   {
// //     id: 3,
// //     price: "$200",
// //     classes: "96 Class",
// //     title: "NAPLAN Prodigy",
// //     features: [
// //       "Lifetime Video Access",
// //       "Own analytics platform",
// //       "Chat support",
// //       "Optimize Teacher",
// //       "Unlimited Homework",
// //     ],
// //   },
// // ];

// // export default function PricingCards() {
// //   const [hovered, setHovered] = useState(null);

// //   return (
// //     <div className="flex flex-wrap justify-center items-start gap-10 p-12">
// //       {pricingPlans.map((plan) => (
// //         <div
// //           key={plan.id}
// //           onMouseEnter={() => setHovered(plan.id)}
// //           onMouseLeave={() => setHovered(null)}
// //           className={`
// //             relative flex flex-col justify-between p-10 rounded-2xl
// //             w-72 md:w-80 transition-all duration-300 transform
// //             ${hovered === plan.id 
// //               ? "bg-purple-600 text-white scale-105 -translate-y-5 shadow-3xl" 
// //               : "bg-white text-gray-800 shadow-lg"}
// //           `}
// //         >
// //           {plan.popular && (
// //             <div
// //               className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full uppercase ${
// //                 hovered === plan.id ? "bg-white text-purple-600" : "bg-purple-600 text-white"
// //               }`}
// //             >
// //               Most Popular
// //             </div>
// //           )}

// //           <div>
// //             <div className="text-3xl md:text-4xl font-bold mb-2">
// //               {plan.price}{" "}
// //               <span className="text-lg md:text-xl font-normal">/{plan.classes}</span>
// //             </div>
// //             <h3 className="font-bold text-xl md:text-2xl mb-4">{plan.title}</h3>
// //             <ul className="mb-6 space-y-3">
// //               {plan.features.map((feature, idx) => (
// //                 <li key={idx} className="flex items-center gap-3">
// //                   <CheckIcon className="w-5 h-5 text-orange-500" />
// //                   <span>{feature}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div className="flex flex-col gap-3">
// //             <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
// //               Try a free Class
// //             </button>
// //             <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
// //               Download Brochure PDF
// //             </button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }



// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { CheckIcon } from "@heroicons/react/24/solid";

// const pricingPlans = [
//   {
//     id: 1,
//     price: "$50",
//     classes: "24 Class",
//     title: "NAPLAN Starter",
//     features: [
//       "Lifetime Video Access",
//       "Own analytics platform",
//       "Chat support",
//       "Optimize hashtags",
//       "Unlimited users",
//     ],
//   },
//   {
//     id: 2,
//     price: "$100",
//     classes: "48 Class",
//     title: "NAPLAN Champion",
//     features: [
//       "Lifetime Video Access",
//       "Own analytics platform",
//       "Chat support",
//       "Optimize Teacher",
//       "Unlimited Homework",
//     ],
//     popular: true,
//   },
//   {
//     id: 3,
//     price: "$200",
//     classes: "96 Class",
//     title: "NAPLAN Prodigy",
//     features: [
//       "Lifetime Video Access",
//       "Own analytics platform",
//       "Chat support",
//       "Optimize Teacher",
//       "Unlimited Homework",
//     ],
//   },
// ];

// export default function PricingCards() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="flex flex-wrap justify-center items-start gap-10 p-12">
//       {pricingPlans.map((plan) => (
//         <div
//           key={plan.id}
//           className="relative w-72 md:w-80 h-[400px] perspective"
//           onMouseEnter={() => setHovered(plan.id)}
//           onMouseLeave={() => setHovered(null)}
//         >
//           <motion.div
//             className="relative w-full h-full transition-transform duration-500"
//             animate={{ rotateY: hovered === plan.id ? 180 : 0 }}
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             {/* Front side */}
//             <div className="absolute inset-0 bg-white shadow-xl rounded-2xl flex flex-col justify-center items-center backface-hidden">
//               <div className="text-3xl font-bold">{plan.price}</div>
//               <h3 className="text-xl mt-2 font-semibold">{plan.title}</h3>
//             </div>

//             {/* Back side */}
//             <div className="absolute inset-0 bg-purple-600 text-white shadow-xl rounded-2xl p-6 flex flex-col justify-between rotate-y-180 backface-hidden">
//               {plan.popular && (
//                 <div className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-white text-purple-600 uppercase">
//                   Most Popular
//                 </div>
//               )}

//               <div>
//                 <div className="text-3xl font-bold mb-2">
//                   {plan.price}{" "}
//                   <span className="text-lg font-normal">/{plan.classes}</span>
//                 </div>
//                 <h3 className="font-bold text-xl mb-4">{plan.title}</h3>
//                 <ul className="mb-6 space-y-2">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <CheckIcon className="w-5 h-5 text-orange-400" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex flex-col gap-3">
//                 <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
//                   Try a free Class
//                 </button>
//                 <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
//                   Download Brochure PDF
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

const pricingPlans = [
  {
    id: 1,
    price: "$50",
    classes: "24 Class",
    title: "NAPLAN Starter",
    features: [
      "Lifetime Video Access",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    id: 2,
    price: "$100",
    classes: "48 Class",
    title: "NAPLAN Champion",
    features: [
      "Lifetime Video Access",
      "Own analytics platform",
      "Chat support",
      "Optimize Teacher",
      "Unlimited Homework",
    ],
    popular: true,
  },
  {
    id: 3,
    price: "$200",
    classes: "96 Class",
    title: "NAPLAN Prodigy",
    features: [
      "Lifetime Video Access",
      "Own analytics platform",
      "Chat support",
      "Optimize Teacher",
      "Unlimited Homework",
    ],
  },
];

export default function CardsNaplan() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-wrap justify-center items-start gap-10 p-12">
      {pricingPlans.map((plan) => (
        <motion.div
          key={plan.id}
          className="relative w-72 md:w-80 h-[420px] perspective cursor-pointer"
          onMouseEnter={() => setFlipped((p) => ({ ...p, [plan.id]: true }))}
          onMouseLeave={() => setFlipped((p) => ({ ...p, [plan.id]: false }))}
          onClick={() => toggleFlip(plan.id)} // 👈 mobile toggle
          animate={
            flipped[plan.id]
              ? { y: -30, scale: 1.05 }
              : { y: 0, scale: 1 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full h-full transition-transform"
            animate={{ rotateY: flipped[plan.id] ? 180 : 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front side */}
            <div className="absolute inset-0 bg-white shadow-2xl rounded-2xl flex flex-col justify-center items-center backface-hidden">
              <div className="text-4xl font-bold mb-2">
                {plan.price}{" "}
                <span className="text-lg font-normal">/{plan.classes}</span>
              </div>
              <h3 className="text-xl font-semibold">{plan.title}</h3>
            </div>

            {/* Back side */}
            <div className="absolute inset-0 bg-purple-600 text-white shadow-2xl rounded-2xl p-6 flex flex-col justify-between rotate-y-180 backface-hidden">
              {plan.popular && (
                <div className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-white text-purple-600 uppercase">
                  Most Popular
                </div>
              )}

              <div>
                <div className="text-3xl font-bold mb-2">
                  {plan.price}{" "}
                  <span className="text-lg font-normal">/{plan.classes}</span>
                </div>
                <h3 className="font-bold text-xl mb-4">{plan.title}</h3>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-orange-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition shadow-lg">
                  Try a free Class
                </button>
                <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition shadow-lg">
                  Download Brochure PDF
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
