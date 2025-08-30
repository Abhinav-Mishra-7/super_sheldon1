


"use client";
import React , {useState} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SubscribeSection = () => {

    const [email , setEmail] = useState("") ;

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        setError("Please enter a valid email account.");
        return;
      }
      setError("");
      // TODO: connect API / handle form
    };

    const navigate = useRouter();
  
    const handleForm= (()=>{
      if(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      navigate.push("https://forms.gle/csc94GLG3tEDit6N6") ;
    })

  return (
    <section
      id="try a free class"
      className="relative mx-auto w-[92%] mt-4 mb-4 rounded-2xl overflow-hidden text-white font-poppins flex items-center justify-center h-[370px] bg-[#4D2C5E]"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full -translate-x-1/3 -translate-y-1/3 rotate-12"></div>
      <div className="absolute top-0 left-0 w-48 h-48 border-2 border-white rounded-full translate-x-1/4 -translate-y-1/4 rotate-6"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white rounded-full translate-x-1/3 -translate-y-1/3 -rotate-12"></div>
      <div className="absolute top-0 right-0 w-48 h-48 border-2 border-white rounded-full -translate-x-1/4 -translate-y-1/4 -rotate-6"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Subscribe to Supersheldon</h2>
        <p className="mb-6 text-base md:text-lg">
          Stay ahead with the latest courses, exam tips, and free learning resources.
        </p>

        {/* Stylish Email + Button */}
        <div className="relative w-full">
          <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full py-4 px-6 text-gray-800 outline-none pr-36 shadow-lg"
          />
          <button onClick={handleForm}  className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-orange-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition shadow-lg">
            Try a free Class
          </button>
          </form>
        </div>

        {/* Lightbulbs using responsive percentages */}
        <div
          className="absolute"
          style={{
            left: "-30%",
            top: "35%",
            transform: "translateX(-50%) rotate(-25deg)",
          }}
        >
          <Image src="/lightbulb.png" alt="Lightbulb" width={64} height={64} />
        </div>
        <div
          className="absolute"
          style={{
            right: "-10%",
            bottom: "10%",
            transform: "translateX(70%) rotate(50deg)",
          }}
        >
          <Image src="/lightbulb.png" alt="Lightbulb" width={64} height={64} />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
