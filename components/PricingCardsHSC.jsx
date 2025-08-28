"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

const hscPlans = [
  {
    id: 1,
    price: "$80",
    classes: "30 Class",
    title: "HSC Starter",
    features: [
      "Past Papers Access",
      "Exam Tips",
      "Subject Notes",
      "24/7 Support",
      "Performance Dashboard",
    ],
  },
  {
    id: 2,
    price: "$160",
    classes: "60 Class",
    title: "HSC Master",
    features: [
      "Past Papers Access",
      "Exam Tips",
      "Subject Notes",
      "One-on-one Tutor",
      "Mock Exams",
    ],
    popular: true,
  },
  {
    id: 3,
    price: "$300",
    classes: "120 Class",
    title: "HSC Pro",
    features: [
      "Past Papers Access",
      "Exam Tips",
      "Subject Notes",
      "Tutor Support",
      "Unlimited Mock Exams",
    ],
  },
];

export default function CardsHSC() {
  const [flipped, setFlipped] = useState({});
  const toggleFlip = (id) =>
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="flex flex-wrap justify-center items-start gap-10 p-12">
      {hscPlans.map((plan) => (
        <motion.div
          key={plan.id}
          className="relative w-72 md:w-80 h-[420px] perspective cursor-pointer"
          onMouseEnter={() => setFlipped((p) => ({ ...p, [plan.id]: true }))}
          onMouseLeave={() => setFlipped((p) => ({ ...p, [plan.id]: false }))}
          onClick={() => toggleFlip(plan.id)}
          animate={flipped[plan.id] ? { y: -30, scale: 1.05 } : { y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full h-full transition-transform"
            animate={{ rotateY: flipped[plan.id] ? 180 : 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front */}
            <div className="absolute inset-0 bg-white shadow-2xl rounded-2xl flex flex-col justify-center items-center backface-hidden">
              <div className="text-4xl font-bold mb-2">
                {plan.price} <span className="text-lg font-normal">/{plan.classes}</span>
              </div>
              <h3 className="text-xl font-semibold">{plan.title}</h3>
            </div>
            {/* Back */}
            <div className="absolute inset-0 bg-purple-600 text-white shadow-2xl rounded-2xl p-6 flex flex-col justify-between rotate-y-180 backface-hidden">
              {plan.popular && (
                <div className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-white text-purple-600 uppercase">
                  Most Popular
                </div>
              )}
              <div>
                <div className="text-3xl font-bold mb-2">
                  {plan.price} <span className="text-lg font-normal">/{plan.classes}</span>
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
