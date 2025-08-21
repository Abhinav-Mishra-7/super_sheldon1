// "use client";

// import { useState, useRef, useEffect } from "react";
// import { Play, Pause } from "lucide-react";

// const videos = [
//   { id: 2, name: "Ms. Aditi", src: "/videos/video2.mp4" },
//   { id: 1, name: "Ms. Abha", src: "/videos/video1.mp4" }
//   ,
//   { id: 3, name: " ", src: "/videos/video3.mp4" },
// ];

// export default function TeacherTestimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const currentVideo = videos[currentIndex];

//   // Play / Pause toggle
//   const togglePlay = () => {
//     if (!videoRef.current) return;
//     if (isPlaying) {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       videoRef.current.muted = false; // ensure sound is on
//       videoRef.current
//         .play()
//         .then(() => setIsPlaying(true))
//         .catch(() => setIsPlaying(false));
//     }
//   };

//   // Auto-switch when video ends
//   const handleVideoEnd = () => {
//     const nextIndex = (currentIndex + 1) % videos.length;
//     setCurrentIndex(nextIndex);
//   };

//   // Reload video on change
//   useEffect(() => {
//     if (!videoRef.current) return;
//     videoRef.current.pause();
//     videoRef.current.load();
//     videoRef.current.muted = false;
//     videoRef.current
//       .play()
//       .then(() => setIsPlaying(true))
//       .catch(() => setIsPlaying(false));
//   }, [currentIndex]);

//   // Pause when out of screen, play when in screen
//   useEffect(() => {
//     if (!videoRef.current) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             videoRef.current
//               .play()
//               .then(() => {
//                 videoRef.current.muted = false;
//                 setIsPlaying(true);
//               })
//               .catch(() => {});
//           } else {
//             videoRef.current.pause();
//             setIsPlaying(false);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     observer.observe(videoRef.current);
//     return () => observer.disconnect();
//   }, [currentIndex]);

"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const videos = [
  { id: 2, name: "Ms. Aditi", src: "/videos/video2.mp4" },
  { id: 1, name: "Ms. Abha", src: "/videos/video1.mp4" },
  { id: 3, name: " ", src: "/videos/video3.mp4" },
];

export default function TeacherTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const currentVideo = videos[currentIndex];

  // Play / Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.muted = false; // ensure sound is on
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  // Auto-switch when video ends
  const handleVideoEnd = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(false); // ensure new video doesn't auto-play
  };

  // Remove auto-play on video change
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.load();
    setIsPlaying(false); // do not auto-play
  }, [currentIndex]);

  // Pause when out of screen, play when in screen
  useEffect(() => {
    if (!videoRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // only play if user manually played it
            if (isPlaying) {
              videoRef.current
                .play()
                .catch(() => {});
            }
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [currentIndex, isPlaying]);

  return (
    <section className="relative flex flex-col items-center py-16 px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-orange-200 opacity-30 blur-3xl"></div>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-10 text-center">
        Why Choose Masters in Me?
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-7xl">
        {/* Left Info Cards */}
        <div className="flex flex-col gap-4 absolute left-0 md:left-20">
          <div className="bg-white shadow-2xl rounded-2xl p-5 w-48 h-32 flex flex-col justify-between font-manrope">
            <img src="/pcmouse.png" className="w-12 h-12" alt="logo" />
            <div>
              <h3 className="font-semibold text-lg">2M+ Questions</h3>
              <p className="text-sm text-gray-600">2M+ extra projects</p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-2xl p-5 w-40 h-28 flex flex-col justify-center items-center font-manrope">
            <img src="/srch.png" className="w-9 h-9 mb-2" alt="logo" />
            <h3 className="font-semibold text-lg">100K+</h3>
            <p className="text-sm text-gray-600 text-center">Worldwide Students</p>
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="flex flex-col gap-4 absolute right-0 md:right-20">
          <div className="bg-white shadow-2xl rounded-2xl p-5 w-44 h-28 flex flex-col justify-center font-manrope">
            <img src="/msg.png" className="w-10 h-10 mb-2" alt="logo" />
            <h3 className="font-semibold text-base">Future Opportunities</h3>
          </div>
          <div className="bg-white shadow-2xl rounded-2xl p-5 w-52 h-36 flex flex-col justify-between font-manrope">
            <img src="/add.png" className="w-12 h-12" alt="logo" />
            <div>
              <h3 className="font-semibold text-lg">MIT Certified +</h3>
              <p className="text-sm text-gray-600">All teachers MIT certified</p>
            </div>
          </div>
        </div>

        {/* Center Video */}
        <div className="relative w-[280px] sm:w-[340px] md:w-[380px] aspect-[9/16] flex items-center justify-center">
          {/* Concentric Filled Circles */}
<div className="absolute -z-10 w-[260px] h-[260px] rounded-full bg-blue-900/60"></div>
<div className="absolute -z-10 w-[340px] h-[340px] rounded-full bg-blue-700/50"></div>
<div className="absolute -z-10 w-[420px] h-[420px] rounded-full bg-blue-500/40"></div>
<div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-blue-300/30"></div>
<div className="absolute -z-10 w-[580px] h-[580px] rounded-full bg-blue-100/20"></div>

          {/* Video Player */}
          <div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            onClick={togglePlay}
          >
            <video
              key={currentVideo.src}
              ref={videoRef}
              src={currentVideo.src}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnd}
              playsInline
              controls={false}
            />

            {/* Play / Pause Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent bubbling to parent
                togglePlay();
              }}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute bottom-3 right-3 bg-black/40 p-2 rounded-full"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Name Label */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg font-adamina text-white drop-shadow-lg">
              {currentVideo.name}
            </div>
          </div>
        </div>
      </div>

      {/* Navigator Dots */}
      <div className="flex mt-6 gap-3">
        {videos.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to video ${index + 1}`}
            onClick={() => {
              setCurrentIndex(index);
              setIsPlaying(false);
            }}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Floating Logos */}
      <img
        src="/saturn.png"
        className="absolute right-10 top-28 w-14 animate-spin-slow"
        alt="planet"
      />
      <img
        src="/pencil.png"
        className="absolute left-10 bottom-28 w-10 animate-pulse"
        alt="book"
      />
      <img
        src="/blacksquiggle.png"
        className="absolute right-20 bottom-20 w-9 animate-bounce"
        alt="atom"
      />
      <img
        src="/blacksquiggle.png"
        className="absolute left-20 top-20 w-8 animate-pulse scale-200"
        alt="star"
      />
      <img
        src="/orangesquiggle.png"
        className="absolute right-20 top-10 w-10 animate-bounce"
        alt="lightbulb"
      />
      
    </section>
  );
}

