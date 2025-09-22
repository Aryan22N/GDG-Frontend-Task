"use client";

import Image from "next/image";
import border from "../images/greenline.png";
import perspective from "../images/perspective.png";

const Ourperspective = () => {
  return (
    <section className="bg-white">
      {/* Title Section */}
      <div className="flex w-full justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-0.5">
          <h2 className="text-[60px] text-[#5F5F5F] font-medium mb-2">
            Our Perspective
          </h2>
          <Image src={border} alt="border" width={206} height={10} />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 max-w-9xl mx-auto">
        {/* Green Line */}
        <div className="w-[14px] h-[299px] bg-[#0F9D56] rounded-l-full "></div>
        {/* Text Box (Left Aligned) */}
        <div className="w-[673px] h-[180px] flex items-center justify-start">
          <p className="text-[30px] text-[#5F5F5F] text-left">
            We’re a community-driven initiative aiming to bridge the gap between
            research and practice, develop evolutionary thinking and network
            throughout the process. We believe in connecting fellow developers,
            spreading stimulative ideas and working for a solution-driven team.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={perspective}
            alt="Our Perspective"
            width={533}
            height={533}
          />
        </div>
      </div>
    </section>
  );
};

export default Ourperspective;
