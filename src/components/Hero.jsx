"use client";

import Image from "next/image";
import HeroImg from "../images/Hero.png";
import DownArrow from "../images/V.png";
import DownArrow1 from "@/images/V1.png";
import DownArrow2 from "@/images/V2.png";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-28 bg-white gap-[30px] transition-all duration-500 ease-in-out">
      {/* Title */}
      <div className="flex flex-col items-center gap-1 animate-fade-in">
        <h1 className="text-[40px] sm:text-[60px] md:text-[85px] gap-5 font-bold leading-snug text-black font-Product Sans flex flex-wrap justify-center">
          <div className="flex transition-transform duration-300 hover:scale-110 flex-wrap justify-center">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>{" "}
          </div>
          Developer Groups
        </h1>
        <p className="text-[30px] sm:text-[40px] md:text-[50px] text-[#646464] font-bold animate-slide-up">
          RBU Chapter
        </p>
      </div>

      {/* Hero Image */}
      <div className="mt-8 animate-zoom-in">
        <Image
          src={HeroImg}
          alt="GDG Hero"
          width={500}
          height={300}
          className="mx-auto transition-transform duration-500 hover:scale-105 w-full max-w-[500px] h-auto"
          priority
        />
      </div>

      {/* Description */}
      <div className="w-full max-w-[935px] mt-8 px-4 sm:px-0 animate-fade-in-up">
        <p className="text-gray-600 text-[20px] sm:text-[28px] md:text-[35px] leading-snug">
          Google Developer Groups are community groups for college and
          university students interested in Google developer technologies.
        </p>
      </div>

      {/* Join Us Button */}
      <div className="flex justify-center mt-[50px] animate-bounce-in">
        <button className="px-6 py-2 w-[244px] h-[70px] bg-[#3686F7] text-white font-extrabold text-[25px] sm:text-[28px] md:text-[30px] rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 hover:scale-105">
          JOIN US
        </button>
      </div>

      {/* Down Arrow */}
      <div className="animate-bounce mt-[45px] space-y-2">
        <Image
          src={DownArrow1}
          alt="Down Arrow"
          width={38}
          height={59}
          className="mx-auto"
        />
        <Image
          src={DownArrow2}
          alt="Down Arrow"
          width={38}
          height={59}
          className="mx-auto"
        />
        <Image
          src={DownArrow}
          alt="Down Arrow"
          width={38}
          height={59}
          className="mx-auto"
        />
      </div>

      {/* Section After Arrow */}
      <h2 className="mt-6 text-[40px] sm:text-[50px] md:text-[60px] font-bold text-[#5F5F5F] animate-fade-in">
        Get To Know Us!
      </h2>
    </section>
  );
};

export default Hero;
