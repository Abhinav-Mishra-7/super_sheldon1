
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import countries from "world-countries";

// ✅ Pre-process countries (flag + name + dialCode)
const countryOptions = countries.map((c) => ({
  code: c.cca2,
  name: c.name.common,
  dialCode: c.idd?.root
    ? `${c.idd.root}${c.idd.suffixes ? c.idd.suffixes[0] : ""}`
    : "",
  flag: String.fromCodePoint(
    ...[...c.cca2.toUpperCase()].map((ch) => ch.charCodeAt(0) + 127397)
  ),
}));

// ✅ StatCard Component
const StatCard = ({ iconSrc, value, label }) => (
  <div className="flex items-center space-x-3">
    <div className="bg-[#F9D4AB] p-2 rounded-full">
      <Image src={iconSrc} alt={label} width={28} height={28} />
    </div>
    <div>
      <p className="text-xl md:text-2xl font-bold text-[#1D2026]">{value}</p>
      <p className="text-xs md:text-sm text-[#4E5566]">{label}</p>
    </div>
  </div>
);

export default function Hero() {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("+370");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.match(/^[0-9]{6,15}$/)) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError("");
    // TODO: connect API / handle form
  };

  const navigate = useRouter();

  const handleForm= (()=>{
    if(phone.match(/^[0-9]{6,15}$/))
    navigate.push("https://forms.gle/csc94GLG3tEDit6N6") ;
  })

  return (
    <div  id="home" className="relative w-full overflow-hidden">
      {/* Content */}
      <div className="relative grid mt-0 px-4 sm:px-10 grid-cols-1 lg:grid-cols-2 gap-x-8 items-center">
        {/* Left Column */}
        <div className="space-y-8 md:space-y-10 flex flex-col justify-center pt-5 ">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight font-quicksand">
            <span>Worldwide Exam Prep Made Easy from School to </span>
            <span className="text-[#FFD700]">SATs.</span>
          </h1>

          {/* Phone Form */}
          <form
            className="bg-[#EDE8E1] p-6 rounded-xl shadow-md max-w-xl flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <label
              className="text-md text-[#494e5e] font-medium mb-1"
              htmlFor="phone"
            >
              Phone number
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-[#E0E0E0] rounded-lg px-2 py-2 text-sm bg-white w-40"
                aria-label="Country code"
              >
                {countryOptions
                  .filter((c) => c.dialCode)
                  .map((c) => (
                    <option key={c.code} value={c.dialCode}>
                      {c.flag} {c.name} ({c.dialCode})
                    </option>
                  ))}
              </select>
              <input
                id="phone"
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-grow px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-[#FF8C00] focus:border-[#FF8C00] text-sm outline-none"
              />
              
              <button
              onClick={handleForm}
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-[#FFC93C] to-[#FF8C00] hover:from-[#E6AE2C] hover:to-[#CC7000] text-white rounded-full font-bold text-sm shadow-md transition-colors duration-300 hover:scale-105"
              >
                Try a Free Class
              </button>
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
          </form>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-8 pt-0">
            <StatCard
              iconSrc="/CircleWavyCheck.png"
              value="100k"
              label="Learners"
            />
            <StatCard
              iconSrc="/GlobeHemisphereWest.png"
              value="10+"
              label="Country Language"
            />
            <StatCard
              iconSrc="/Users.png"
              value="99.9%"
              label="Success Rate"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <Image
            src="/hero-kids.png"
            alt="Happy students showing A+ grade"
            width={1050}
            height={780}
            className="max-w-full h-full"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Members Card */}
          <div className="absolute bottom-6 right-6 bg-white p-3 rounded-full shadow-lg flex items-center space-x-2 border-2 border-white animate-float1">
            <span className="font-bold text-[#1D2026] text-sm">500k+</span>
            <span className="text-[#4E5566] text-xs">Members</span>
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[#FFD700] flex items-center justify-center">
                <Image src="/Users.png" alt="User icon" width={20} height={20} />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[#FF8D28] flex items-center justify-center">
                <Image
                  src="/CircleWavyCheck.png"
                  alt="Verified icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[#FF6636] flex items-center justify-center">
                <Image
                  src="/GlobeHemisphereWest.png"
                  alt="Globe icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Floating Logos with Animations */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 z-10 animate-float1">
            <Image
              src="/floating-icons/star.png"
              alt="Star icon"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 z-10 animate-float1">
            <Image
              src="/floating-icons/book.png"
              alt="Book icon"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4 z-10 animate-float1">
            <Image
              src="/floating-icons/graph.png"
              alt="Graph icon"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* Inline Animations */}
      <style jsx global>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-10px, 12px) scale(1.08);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(14px, -10px) scale(1.05);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-8px, 10px) scale(1.07);
          }
        }
        .animate-float1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 5s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
