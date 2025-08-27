




// // "use client";

// // import { useState } from "react";
// // import { CheckIcon } from "@heroicons/react/24/solid"; // Using Heroicons tick icon

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
// //             relative flex flex-col justify-between p-10 rounded-2xl shadow-lg
// //             w-72 md:w-80 transition-all duration-300 transform
// //             ${hovered === plan.id ? "bg-purple-600 text-white scale-105 shadow-2xl" : "bg-white text-gray-800"}
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
// //             <button className="border border-orange-500 text-orange-500 font-semibold py-3 px-6 rounded-full hover:bg-orange-500 hover:text-white transition">
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
//           onMouseEnter={() => setHovered(plan.id)}
//           onMouseLeave={() => setHovered(null)}
//           className={`
//             relative flex flex-col justify-between p-10 rounded-2xl shadow-lg
//             w-72 md:w-80 transition-all duration-300 transform
//             ${hovered === plan.id 
//               ? "bg-purple-600 text-white scale-105 -translate-y-3 shadow-2xl" 
//               : "bg-white text-gray-800"}
//           `}
//         >
//           {plan.popular && (
//             <div
//               className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full uppercase ${
//                 hovered === plan.id ? "bg-white text-purple-600" : "bg-purple-600 text-white"
//               }`}
//             >
//               Most Popular
//             </div>
//           )}

//           <div>
//             <div className="text-3xl md:text-4xl font-bold mb-2">
//               {plan.price}{" "}
//               <span className="text-lg md:text-xl font-normal">/{plan.classes}</span>
//             </div>
//             <h3 className="font-bold text-xl md:text-2xl mb-4">{plan.title}</h3>
//             <ul className="mb-6 space-y-3">
//               {plan.features.map((feature, idx) => (
//                 <li key={idx} className="flex items-center gap-3">
//                   <CheckIcon className="w-5 h-5 text-orange-500" />
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex flex-col gap-3">
//             <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
//               Try a free Class
//             </button>
//             <button className="border border-orange-500 text-orange-500 font-semibold py-3 px-6 rounded-full hover:bg-orange-500 hover:text-white transition">
//               Download Brochure PDF
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }




"use client";

import { useState } from "react";
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

export default function PricingCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-wrap justify-center items-start gap-10 p-12">
      {pricingPlans.map((plan) => (
        <div
          key={plan.id}
          onMouseEnter={() => setHovered(plan.id)}
          onMouseLeave={() => setHovered(null)}
          className={`
            relative flex flex-col justify-between p-10 rounded-2xl
            w-72 md:w-80 transition-all duration-300 transform
            ${hovered === plan.id 
              ? "bg-purple-600 text-white scale-105 -translate-y-5 shadow-3xl" 
              : "bg-white text-gray-800 shadow-lg"}
          `}
        >
          {plan.popular && (
            <div
              className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full uppercase ${
                hovered === plan.id ? "bg-white text-purple-600" : "bg-purple-600 text-white"
              }`}
            >
              Most Popular
            </div>
          )}

          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {plan.price}{" "}
              <span className="text-lg md:text-xl font-normal">/{plan.classes}</span>
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-4">{plan.title}</h3>
            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-orange-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
              Try a free Class
            </button>
            <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition">
              Download Brochure PDF
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
