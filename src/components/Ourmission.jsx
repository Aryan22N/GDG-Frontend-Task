"use client";

import Image from "next/image";
import MissionImg from "../images/section1.png";
import border from "../images/ourmission.png";
import Subtract from "../images/Subtract.png";

const OurMission = () => {
  return (
    <section className="bg-white">
      {/* Title Section */}
      <div className="flex w-full justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-2">
          <h2 className="text-[60px] text-[#5F5F5F] font-medium mb-2 text-center">
            Our Mission
          </h2>
          <Image src={border} alt="border" width={206} height={10} />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 max-w-9xl mx-auto">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={MissionImg} alt="Our Mission" width={633} height={633} />
        </div>

        {/* Text Box (Right Aligned) */}
        <div className="w-[673px] h-[180px] flex items-center justify-end">
          <p className="text-[30px] text-[#5F5F5F] text-right">
            Our mission involves community engagement, leadership development,
            building strong tech foundation, while enabling all tech enthusiasts
            to contribute to the global society.
          </p>
        </div>

        {/* Decorative Line */}
        <div>
          <Image src={Subtract} alt="Subtract" width={14} height={227} />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
