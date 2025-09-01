
// "use client";

// import { useRef, useState } from "react";
// import { Play, Pause } from "lucide-react";

// export default function ClassVideoBanner() {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="mt-20 mb-20 w-full flex flex-col items-center relative">
//       {/* Banner Section (sleek) */}
//       <div className="w-FULL h-80 relative overflow-hidden">
//         <img
//           src="/banner.png"
//           alt="Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/20"></div> {/* optional overlay */}
//       </div>

//       {/* Video Section (half overlapping the banner) */}
//       <div className="relative z-10 -mt-48 w-[1000px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover rounded-3xl"
//           src="/studentvid.mp4"
//           poster="/thumbnail.png"
//         />
//         <button
//           onClick={togglePlay}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <div className="bg-white/80 hover:bg-white rounded-full p-6 transition">
//             {isPlaying ? (
//               <Pause className="w-12 h-12 text-black" />
//             ) : (
//               <Play className="w-12 h-12 text-black" />
//             )}
//           </div>
//         </button>
//       </div>

//       {/* Sections Below Video */}
//       <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-4xl mt-20 px-4">
//         {/* Audio Classes */}
//         <div className="flex bg-white items-center gap-3 px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
//           <div className=" p-2 rounded-full w-12 h-12 flex items-center justify-center">
//             <img
//               src="/icons/science.png"
//               alt="Audio Classes"
//               className="w-6 h-6 object-contain"
//             />
//           </div>
//           <span className="text-lg font-semibold">Audio Classes</span>
//         </div>

//         {/* Live Classes */}
//         <div className="flex bg-white items-center gap-3 px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
//           <div className=" p-2 rounded-full w-12 h-12 flex items-center justify-center">
//             <img
//               src="/icons/Scholarcap.png"
//               alt="Live Classes"
//               className="w-6 h-6 object-contain"
//             />
//           </div>
//           <span className="text-lg font-semibold">Live Classes</span>
//         </div>

//         {/* Recorded Class */}
//         <div className="flex bg-white items-center gap-3 px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
//           <div className=" p-2 rounded-full w-12 h-12 flex items-center justify-center">
//             <img
//               src="/icons/homework.png"
//               alt="Recorded Class"
//               className="w-6 h-6 object-contain"
//             />
//           </div>
//           <span className="text-lg font-semibold">Recorded Class</span>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function ClassVideoBanner() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(false); // track if visibility control should start

  // Toggle play/pause manually
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setAutoPlayEnabled(true); // start observing only after first manual play
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlayEnabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, [autoPlayEnabled]); // only run when autoPlayEnabled becomes true

  return (
    <div className="mt-20 mb-20 w-full flex flex-col items-center relative">
      {/* Banner Section */}
      <div className="w-full h-80 relative overflow-hidden">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Video Section */}
      <div className="relative z-10 -mt-48 w-[1000px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-3xl"
          src="/studentvid.mp4"
          poster="/thumbnail.png"
        />
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white/80 hover:bg-white rounded-full p-6 transition">
            {isPlaying ? (
              <Pause className="w-12 h-12 text-black" />
            ) : (
              <Play className="w-12 h-12 text-black" />
            )}
          </div>
        </button>
      </div>

      {/* Sections Below Video */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-4xl mt-20 px-4">
        {/* Audio Classes */}
        <div className="flex bg-white items-center gap-3 px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
          <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center">
            <img
              src="/icons/science.png"
              alt="Audio Classes"
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-lg font-semibold">Audio Classes</span>
        </div>

        {/* Live Classes */}
        <div className="flex bg-white items-center gap-3 px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
          <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center">
            <img
              src="/icons/Scholarcap.png"
              alt="Live Classes"
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-lg font-semibold">Live Classes</span>
        </div>

        {/* Recorded Class */}
        <div className="flex bg-white items-center gap-3 px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
          <div className="p-2 rounded-full w-12 h-12 flex items-center justify-center">
            <img
              src="/icons/homework.png"
              alt="Recorded Class"
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-lg font-semibold">Recorded Class</span>
        </div>
      </div>
      <div className="absolute top-16 left-16 -translate-x-1/3 animate-float1 z-10">
  <img src="/icons/book.png" alt="globe" width={120} height={120}  />
</div>
<div className="absolute top-32 right-24 animate-float1 z-10">
  <img src="/icons/science.png" alt="" width={100} height={100} />
</div>
<div className="absolute bottom-24  left-24 animate-float1 z-10">
  <img src="/icons/palette.png" alt="" width={120} height={120} />
</div>
<div className="absolute bottom-16  right-24 animate-float1 z-10">
  <img src="/icons/abacus.png" alt="" width={120} height={120} />
</div>
{/* <div className="absolute top-64  right-12 animate-float1 z-10">
  <img src="/icons/Scholarcap.png" alt="" width={120} height={120} />
</div>
<div className="absolute top-16  right-64 animate-float1 z-10">
  <img src="/icons/homework.png" alt="" width={100} height={100} />
</div> */}

<style jsx>{`
  @keyframes float1 {
    0%, 100% { transform: translateY(0) rotate(-45deg); }
    50% { transform: translateY(-12px) rotate(-45deg); }
  }
  @keyframes float2 {
    0%, 100% { transform: translateX(0) rotate(45deg); }
    50% { transform: translateX(12px) rotate(45deg); }
  }
  @keyframes float3 {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-10px) translateX(10px); }
  }
  .animate-float1 { animation: float1 4s ease-in-out infinite; }
  .animate-float2 { animation: float2 5s ease-in-out infinite; }
  .animate-float3 { animation: float3 6s ease-in-out infinite; }
`}</style>

    </div>
    
  );
}
