"use client";

import Image from "next/image";
import HeroImg from "../images/Hero.png";
import DownArrow from "../images/V.png";
import DownArrow1 from "@/images/V1.png";
import DownArrow2 from "@/images/V2.png";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-12 bg-white gap-[30px]">
      {/* Title */}
      <div className="flex flex-col items-center gap-0.1">
        <h1 className="text-[84.99px] font-bold leading-snug text-black font-Product Sans">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span> Developer Groups
        </h1>
        <p className=" text-[50px]  text-[#646464] font-bold">RBU Chapter</p>
      </div>
      {/* Hero Image */}
      <div className="mt-8">
        <Image
          src={HeroImg}
          alt="GDG Hero"
          width={500}
          height={300}
          className="mx-auto"
          priority
        />
      </div>

      {/* Description */}
      <div className="w-[935px] h-[135px] mt-8">
        <p className="  text-gray-600 text-base text-[35px]">
          Google Developer Groups are community groups for college and
          university students interested in Google developer technologies.
        </p>
      </div>
      {/* Join Us Button */}
      <div className="flex justify-center mt-[50px]">
        <button className=" px-6 py-2 w-[244px] h-[70px] bg-[#3686F7] text-white font-extrabold text-[30px] rounded-md hover:bg-blue-700 transition">
          JOIN US
        </button>
      </div>
      {/* Down Arrow */}
      <div className="animate-bounce mt-[45px]">
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
      <h2 className="mt-6 text-[60px] font-bold text-[#5F5F5F]">
        Get To Know Us!
      </h2>
    </section>
  );
};

export default Hero;
