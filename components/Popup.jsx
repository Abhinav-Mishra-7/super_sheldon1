"use client";

import { useState } from "react";

export default function Popup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50">
      <div className="bg-white shadow-xl rounded-2xl px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-200">
 
        <p className="text-sm md:text-base font-medium text-gray-800">
           <span className="font-semibold">Book a free trial class today!</span>
        </p>
        <a href="#course">
        <button className="bg-[#F97316] hover:bg-[#dd5e02] text-white font-semibold px-6 py-2 rounded-full shadow-md transition">
          Book Now
        </button>
        </a>

        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
          aria-label="Close popup"
        >
          ×
        </button>
      </div>
    </div>
  );
}
