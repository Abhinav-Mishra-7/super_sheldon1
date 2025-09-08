"use client";
import React, { useState } from "react";
import Image from "next/image";
import GlossyButton from "./GlossyButton"; 
import { useOpenDemoBooking } from "./utils/navigation";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const openDemoBooking = useOpenDemoBooking();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    openDemoBooking();
  };

  return (
    <section
      id="try-a-free-class"
      className="relative mx-auto w-[92%] mt-4 mb-4 rounded-2xl overflow-hidden text-white font-poppins flex items-center justify-center h-[370px] bg-[#4D2C5E]"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Subscribe to Supersheldon</h2>
        <p className="mb-6 text-base md:text-lg">
          Stay ahead with the latest courses, exam tips, and free learning resources.
        </p>

        {/* Email + Button with inline alert */}
        <form onSubmit={handleSubmit} className="relative w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-full py-4 px-6 text-gray-800 outline-none shadow-lg pr-40 ${
              error ? "border-2 border-red-500" : ""
            }`}
          />
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            <GlossyButton type="submit" className="px-4 py-2 rounded-full text-sm">
              Try a free Class
            </GlossyButton>
          </div>
          {/* Error text inside form */}
          {error && <p className="absolute left-4 -bottom-6 text-red-400 text-sm">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
