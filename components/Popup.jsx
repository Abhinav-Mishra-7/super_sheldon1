"use client";

import { useState } from "react";

export default function Popup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50">
      <div className="relative w-full max-w-2xl mx-auto shadow-xl rounded-2xl px-4 py-4 md:px-6 md:py-3 flex flex-col md:flex-row items-center bg-orange-100 justify-between gap-4 border border-gray-200">
        
        {/* Message */}
        <p className="text-sm md:text-base font-medium text-gray-800 text-center md:text-left">
          <span className="font-semibold text-gray-700">
            Hurry up!! Limited seats are available
          </span>
        </p>

        {/* Button */}
        <a href="#course" className="shrink-0 w-full md:w-auto">
          <button className="bg-[#F97316] shadow-md shadow-orange-800 hover:bg-[#dd5e02] text-white font-semibold px-6 py-2 rounded-full transition w-full md:w-auto">
            Book Now
          </button>
        </a>

        {/* Close Button */}
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
