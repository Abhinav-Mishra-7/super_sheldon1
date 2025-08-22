// "use client";
// import React from "react";
// import Image from "next/image";

// const Review = () => {
//   return (
//     <section className="relative py-12 flex flex-col items-center text-center px-6">
//       {/* Title */}
//       <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-[#0D1F23] mb-3 leading-snug">
//         From Our Hearts to <br /> Thousands of <br /> Australian Homes
//       </h2>

//       {/* Subtitle */}
//       <p className="text-base md:text-lg font-poppins text-gray-600 max-w-xl leading-relaxed">
//         Guiding students and parents <br /> toward brighter futures every day.
//       </p>

//       {/* Orange Box */}
//       <div
//         className="mt-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 relative rounded-2xl text-white overflow-hidden"
//         style={{
//           backgroundColor: "#D05029",
//           boxShadow: "4px 4px 0px #000000",
//         }}
//       >
//         {/* Section 1 */}
//         <div className="flex flex-col items-center justify-start text-center px-8 py-10 relative">
//           <Image
//             src="/icons/learn.gif"
//             alt="Learn Icon"
//             width={60}
//             height={60}
//             className="mb-4"
//           />
//           <h3 className="font-rowdies text-2xl mb-2">01. Learn</h3>
//           <p className="font-poppins text-base md:text-lg max-w-xs">
//             82% of Supersheldon parents agree their child’s grades have improved.
//           </p>

//           {/* Vertical dotted line with gradient fade */}
//           <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px">
//             <div className="relative h-full w-full">
//               <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,white_0,white_4px,transparent_4px,transparent_8px)] opacity-70" />
//               <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#D05029] to-transparent" />
//               <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#D05029] to-transparent" />
//             </div>
//           </div>
//         </div>

//         {/* Section 2 */}
//         <div className="flex flex-col items-center justify-start text-center px-8 py-10 relative">
//           <Image
//             src="/icons/academics.gif"
//             alt="Academics Icon"
//             width={60}
//             height={60}
//             className="mb-4"
//           />
//           <h3 className="font-rowdies text-2xl mb-2">02. Academics</h3>
//           <p className="font-poppins text-base md:text-lg max-w-xs">
//             95% of Supersheldon parents celebrate their child’s improved grades
//             and academic success.
//           </p>

//           {/* Divider */}
//           <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px">
//             <div className="relative h-full w-full">
//               <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,white_0,white_4px,transparent_4px,transparent_8px)] opacity-70" />
//               <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#D05029] to-transparent" />
//               <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#D05029] to-transparent" />
//             </div>
//           </div>
//         </div>

//         {/* Section 3 */}
//         <div className="flex flex-col items-center justify-start text-center px-8 py-10 relative">
//           <Image
//             src="/icons/feedback.gif"
//             alt="Feedback Icon"
//             width={60}
//             height={60}
//             className="mb-4"
//           />
//           <h3 className="font-rowdies text-2xl mb-2">03. Parents Feedback</h3>
//           <p className="font-poppins text-base md:text-lg max-w-xs">
//             85% of Supersheldon parents agree their child is more confident.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Review;


"use client";
import React from "react";
import Image from "next/image";

const Review = () => {
  return (
    <section className="relative py-12 flex flex-col items-center text-center px-6">
      {/* Title */}
      <h2
        className="font-quicksand font-semibold text-center align-middle mb-6"
        style={{
          fontSize: "70px",
          lineHeight: "88px",
          letterSpacing: "-1px",
        }}
      >
        From Our Hearts to <br /> Thousands of <br /> Australian Homes
      </h2>

      {/* Subtitle */}
      <p className="text-base md:text-lg font-poppins text-gray-600 max-w-xl leading-relaxed">
        Guiding students and parents <br /> toward brighter futures every day.
      </p>

      {/* Orange Box */}
      <div
        className="mt-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 relative rounded-2xl text-white overflow-hidden"
        style={{
          backgroundColor: "#D05029",
          boxShadow: "4px 4px 0px #000000",
        }}
      >
        {/* Section 1 */}
        <div className="flex flex-col items-center justify-start text-center px-8 py-10 relative">
          <Image
            src="/icons/learn.gif"
            alt="Learn Icon"
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="font-rowdies text-2xl mb-2">01. Learn</h3>
          <p className="font-poppins text-base md:text-lg max-w-xs">
            82% of Supersheldon parents agree their child’s grades have improved.
          </p>

          {/* Vertical dotted line with gradient fade */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,white_0,white_4px,transparent_4px,transparent_8px)] opacity-70" />
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#D05029] to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#D05029] to-transparent" />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col items-center justify-start text-center px-8 py-10 relative">
          <Image
            src="/icons/academics.gif"
            alt="Academics Icon"
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="font-rowdies text-2xl mb-2">02. Academics</h3>
          <p className="font-poppins text-base md:text-lg max-w-xs">
            95% of Supersheldon parents celebrate their child’s improved grades
            and academic success.
          </p>

          {/* Divider */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,white_0,white_4px,transparent_4px,transparent_8px)] opacity-70" />
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#D05029] to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#D05029] to-transparent" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col items-center justify-start text-center px-8 py-10 relative">
          <Image
            src="/icons/feedback.gif"
            alt="Feedback Icon"
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="font-rowdies text-2xl mb-2">03. Parents Feedback</h3>
          <p className="font-poppins text-base md:text-lg max-w-xs">
            85% of Supersheldon parents agree their child is more confident.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
