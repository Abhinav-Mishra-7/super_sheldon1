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
//     <div className="w-full flex flex-col items-center relative">
//       {/* Banner Section (sleek) */}
//       <div className="w-full h-64 relative overflow-hidden">
//         <img
//           src="/banner1.jpg"
//           alt="Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/20"></div> {/* optional overlay */}
//       </div>

//       {/* Video Section (half over banner) */}
//       <div className="relative z-10 -mt-32 w-[350px] h-[350px] rounded-full overflow-hidden shadow-2xl">
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover rounded-full"
//           src="/studentvid.mp4"
//           poster="/thumbnail.jpg"
//         />
//         <button
//           onClick={togglePlay}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <div className="bg-white/80 hover:bg-white rounded-full p-6 transition">
//             {isPlaying ? (
//               <Pause className="w-10 h-10 text-black" />
//             ) : (
//               <Play className="w-10 h-10 text-black" />
//             )}
//           </div>
//         </button>
//       </div>

//       {/* Sections Below Video */}
//       <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-4xl mt-16 px-4">
//         {/* Audio Classes */}
//         <div className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
//           <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
//             <img
//               src="/logos/mic.png"
//               alt="Audio Classes"
//               className="w-6 h-6 object-contain"
//             />
//           </div>
//           <span className="text-lg font-semibold">Audio Classes</span>
//         </div>

//         {/* Live Classes */}
//         <div className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
//           <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
//             <img
//               src="/logos/video.png"
//               alt="Live Classes"
//               className="w-6 h-6 object-contain"
//             />
//           </div>
//           <span className="text-lg font-semibold">Live Classes</span>
//         </div>

//         {/* Recorded Class */}
//         <div className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
//           <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
//             <img
//               src="/logos/disc.png"
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

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function ClassVideoBanner() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mt-20 mb-20 w-full flex flex-col items-center relative">
      {/* Banner Section (sleek) */}
      <div className="w-full h-80 relative overflow-hidden">
        <img
          src="/banner1.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div> {/* optional overlay */}
      </div>

      {/* Video Section (half overlapping the banner) */}
      <div className="relative z-10 -mt-48 w-[1000px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-3xl"
          src="/studentvid.mp4"
          poster="/thumbnail.jpg"
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
          <div className=" p-2 rounded-full w-12 h-12 flex items-center justify-center">
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
          <div className=" p-2 rounded-full w-12 h-12 flex items-center justify-center">
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
          <div className=" p-2 rounded-full w-12 h-12 flex items-center justify-center">
            <img
              src="/icons/homework.png"
              alt="Recorded Class"
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-lg font-semibold">Recorded Class</span>
        </div>
      </div>
    </div>
  );
}
