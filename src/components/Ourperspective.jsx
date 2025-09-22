"use client";

import Image from "next/image";
import border from "../images/greenline.png";
import perspective from "../images/perspective.png";

const Ourperspective = () => {
  return (
    <section className="bg-white">
      {/* Title Section */}
      <div className="flex w-full justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-2">
          <h2 className="text-[40px] md:text-[60px] text-[#5F5F5F] font-medium mb-2 text-center transition-all duration-700 ease-in-out">
            Our Perspective
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
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 px-4 py-12 max-w-7xl mx-auto">
        {/* Green Line (only visible on desktop) */}
        <div className="hidden md:block w-[14px] h-[299px] bg-[#0F9D56] rounded-l-full animate-[fadeInLeft_1s_ease-in-out]"></div>

        {/* Text Box (responsive alignment) */}
        <div className="w-full md:w-[1073px] md:h-[180px] flex items-center justify-center md:justify-start transition-transform duration-700 ease-in-out">
          <p className="text-[18px] sm:text-[22px] md:text-[30px] text-[#5F5F5F] text-center md:text-left leading-relaxed animate-[fadeInUp_1s_ease-in-out]">
            We’re a community-driven initiative aiming to bridge the gap between
            research and practice, develop evolutionary thinking and network
            throughout the process. We believe in connecting fellow developers,
            spreading stimulative ideas and working for a solution-driven team.
          </p>
        </div>

        {/* Image (hover + fade animation) */}
        <div className="w-full md:w-1/2 flex justify-center transition-opacity duration-700 ease-in-out animate-[fadeInRight_1s_ease-in-out]">
          <Image
            src={perspective}
            alt="Our Perspective"
            width={533}
            height={533}
            className="rounded-lg  hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Ourperspective;
