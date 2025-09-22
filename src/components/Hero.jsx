"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HeroImg from "../images/Hero.png";
import DownArrow from "../images/V.png";
import DownArrow1 from "@/images/V1.png";
import DownArrow2 from "@/images/V2.png";
import { BackgroundBeams } from "../components/ui/background-beams";
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      className={`relative flex flex-col items-center justify-center text-center px-4 py-28 gap-[30px] transition-all duration-500 ease-in-out ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Theme Toggle Button
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div> */}

      {/* Title */}
      <div className="flex flex-col items-center gap-1 animate-fade-in">
        <h1
          className={`text-[40px] sm:text-[60px] md:text-[85px] gap-5 font-bold leading-snug flex flex-wrap justify-center transition-colors duration-500 ${
            resolvedTheme === "dark" ? "text-gray-200" : "text-black"
          }`}
        >
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
        <p
          className={`text-[30px] sm:text-[40px] md:text-[50px] font-bold animate-slide-up transition-colors duration-500 ${
            resolvedTheme === "dark" ? "text-gray-300" : "text-[#646464]"
          }`}
        >
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
        <p
          className={`text-[20px] sm:text-[28px] md:text-[35px] leading-snug transition-colors duration-500 ${
            resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Google Developer Groups are community groups for college and
          university students interested in Google developer technologies.
        </p>
      </div>

      {/* Join Us Button */}
      <div className="flex justify-center mt-[50px] animate-bounce-in">
        <button
          className={`px-6 py-2 w-[244px] h-[70px] font-extrabold text-[25px] sm:text-[28px] md:text-[30px] rounded-md shadow-md transition-all duration-300 hover:scale-105 ${
            resolvedTheme === "dark"
              ? "bg-blue-700 text-white hover:bg-blue-600"
              : "bg-[#3686F7] text-white hover:bg-blue-700"
          }`}
        >
          JOIN US
        </button>
      </div>

      {/* Down Arrow */}
      <div className="animate-bounce mt-[45px] space-y-2">
        {[DownArrow1, DownArrow2, DownArrow].map((arrow, idx) => (
          <Image
            key={idx}
            src={arrow}
            alt="Down Arrow"
            width={38}
            height={59}
            className="mx-auto"
          />
        ))}
      </div>

      {/* Section After Arrow */}
      <h2
        className={`mt-6 text-[40px] sm:text-[50px] md:text-[60px] font-bold animate-fade-in transition-colors duration-500 ${
          resolvedTheme === "dark" ? "text-gray-200" : "text-[#5F5F5F]"
        }`}
      >
        Get To Know Us!
      </h2>

      {/* Background Beams only in Dark Theme */}
      {resolvedTheme === "dark" && <BackgroundBeams />}
    </section>
  );
};

export default Hero;
