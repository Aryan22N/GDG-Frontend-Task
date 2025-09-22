"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MissionImg from "../images/section1.png";
import border from "../images/ourmission.png";
import Subtract from "../images/Subtract.png";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Meteors } from "../components/ui/meteors";

const OurMission = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className={`transition-colors duration-500 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Title Section */}
      <div className="flex w-full justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-2">
          <h2
            className={`text-[40px] md:text-[60px] font-medium mb-2 text-center transition-all duration-700 ease-in-out ${
              resolvedTheme === "dark" ? "text-gray-200" : "text-[#5F5F5F]"
            }`}
          >
            Our Mission
          </h2>
          <Image
            src={border}
            alt="border"
            width={206}
            height={10}
            className="animate-pulse"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 px-4 py-12 max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center transition-transform duration-700 ease-in-out">
          <Image
            src={MissionImg}
            alt="Our Mission"
            width={633}
            height={633}
            className="rounded-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Box */}
        <div className="w-full md:w-[773px] md:h-[180px] flex items-center justify-center md:justify-end transition-opacity duration-700 ease-in-out">
          <p
            className={`text-[20px] sm:text-[24px] md:text-[30px] text-center md:text-right leading-relaxed transition-colors duration-500 ${
              resolvedTheme === "dark" ? "text-gray-300" : "text-[#5F5F5F]"
            }`}
          >
            Our mission involves community engagement, leadership development,
            building strong tech foundation, while enabling all tech enthusiasts
            to contribute to the global society.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="hidden md:block animate-fadeInUp">
          <Image src={Subtract} alt="Subtract" width={14} height={227} />
        </div>
      </div>
      {/* Background Beams only in Dark Theme */}

      {/* {resolvedTheme === "dark" && <BackgroundBeams />} */}
    </section>
  );
};

export default OurMission;
