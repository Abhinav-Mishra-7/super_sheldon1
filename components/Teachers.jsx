
"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const teachers = [
  {
    id: 1,
    name: "John Doe 1",
    subject: "Mathematics Teacher",
    image: "/course/Teacher1.png",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    name: "John Doe 2",
    subject: "Mathematics Teacher",
    image: "/course/Teacher2.png",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    name: "John Doe 3",
    subject: "Mathematics Teacher",
    image: "/course/Teacher3.png",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    name: "John Doe 4",
    subject: "Mathematics Teacher",
    image: "https://picsum.photos/300/200?random=4",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 5,
    name: "John Doe 5",
    subject: "Mathematics Teacher",
    image: "https://picsum.photos/300/200?random=5",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    name: "John Doe 6",
    subject: "Mathematics Teacher",
    image: "https://picsum.photos/300/200?random=6",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 7,
    name: "John Doe 7",
    subject: "Mathematics Teacher",
    image: "https://picsum.photos/300/200?random=7",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    name: "John Doe 8",
    subject: "Mathematics Teacher",
    image: "https://picsum.photos/300/200?random=8",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 9,
    name: "John Doe 9",
    subject: "Mathematics Teacher",
    image: "https://picsum.photos/300/200?random=9",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 10,
    name: "John Doe 10",
    subject: "Mathematics Teacher",
    image: "https://picsum.photos/300/200?random=10",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

// export default function TeacherCarousel() {
//   const [activeVideo, setActiveVideo] = useState(null);
//   const videoRef = useRef(null);

//   // Close popup when video ends
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.onended = () => setActiveVideo(null);
//     }
//   }, [activeVideo]);

//   return (
//     <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 py-6">
//       {/* Scrolling Cards */}
//       <motion.div
//         className="flex gap-6"
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{
//           repeat: Infinity,
//           duration: 40,
//           ease: "linear",
//         }}
//       >
//         {[...teachers, ...teachers].map((teacher, index) => (
//           <div
//             key={index}
//             className="relative min-w-[220px] rounded-2xl shadow-md overflow-hidden bg-white"
//           >
//             <img
//               src={teacher.image}
//               alt={teacher.name}
//               className="w-full h-60 object-cover"
//             />

//             {/* Overlay */}
//             <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
//               <p className="font-semibold">{teacher.name}</p>
//               <p className="text-sm">{teacher.subject}</p>
//               <button
//                 className="absolute bottom-3 right-3 p-2 bg-blue-600 rounded-full"
//                 onClick={() => setActiveVideo(teacher.video)}
//               >
//                 <Play size={18} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </motion.div>

//       {/* Video Popup */}
//       {activeVideo && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
//           <div className="bg-white rounded-2xl p-4 shadow-lg w-[500px] max-w-[90%]">
//             <video
//               ref={videoRef}
//               src={activeVideo}
//               className="w-full rounded-xl"
//               controlsList="nodownload noremoteplayback"
//               controls={false}
//               autoPlay
//             />
//             <div className="flex justify-center mt-3 gap-4">
//               <button
//                 onClick={() =>
//                   videoRef.current.paused
//                     ? videoRef.current.play()
//                     : videoRef.current.pause()
//                 }
//                 className="px-4 py-2 bg-blue-600 text-white rounded-xl"
//               >
//                 Play / Pause
//               </button>
//               <button
//                 onClick={() => setActiveVideo(null)}
//                 className="px-4 py-2 bg-gray-500 text-white rounded-xl"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


export default function TeacherCarousel() {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  // Close popup when video ends
  useEffect(() => {
    if (videoRef.current) {
      const handleEnd = () => setActiveVideo(null);
      videoRef.current.addEventListener("ended", handleEnd);
      return () => {
        videoRef.current?.removeEventListener("ended", handleEnd);
      };
    }
  }, [activeVideo]);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 py-6">
      {/* Scrolling Cards */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...teachers, ...teachers].map((teacher, index) => (
          <div
            key={index}
            className="relative min-w-[220px] rounded-2xl shadow-md overflow-hidden  bg-white cursor-pointer transition duration-500 hover:shadow-md hover:shadow-gray-500 hover:scale-105"
            onClick={() => setActiveVideo(teacher.video)}
          >
            <img
              src={teacher.image}
              alt={teacher.name} 
              className="w-full h-60 object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
              <p className="font-semibold">{teacher.name}</p>
              <p className="text-sm">{teacher.subject}</p>
              {/* <button
                aria-label={`Play video of ${teacher.name}`}
                className="absolute bottom-3 right-3 p-2 bg-blue-600 rounded-full"
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering card click
                  setActiveVideo(teacher.video);
                }}
              >
                <Play size={18} />
              </button> */}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Video Popup */}
      {activeVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
          onClick={() => setActiveVideo(null)} // click outside closes popup
        >
          <div
            className="relative bg-black rounded-2xl shadow-lg overflow-hidden"
            style={{
              width: "min(90vw, 360px)", // Instagram reel size
              aspectRatio: "9/16",
            }}
            onClick={(e) => {
              e.stopPropagation(); // prevent outside click from closing
              if (videoRef.current) {
                if (videoRef.current.paused) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
              }
            }}
          >
            <video
              ref={videoRef}
              src={activeVideo}
              className="w-full h-full object-cover"
              playsInline
              autoPlay
              muted={false}
              controls={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}