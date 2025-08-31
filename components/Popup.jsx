"use client";

import { useState } from "react";

import GlossyButton from "./GlossyButton";


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
        {/* <a href="#course" className="shrink-0 w-full md:w-auto">
          <button className="bg-[#C45F30] text-white font-semibold px-8 py-3 rounded-full border-2 border-[#3A1F10] shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] hover:bg-[#D16F3B] focus:outline-none focus:ring-2 focus:ring-[#D16F3B] transition-all duration-200"
>
            Book Now
          </button>
        </a> */}
      <GlossyButton href="#try a free class " >Book Now</GlossyButton>
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
