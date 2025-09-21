"use client";

import Image from "next/image";
import MissionImg from "../images/section1.png";
import border from "../images/ourmission.png";
import Subtract from "../images/Subtract.png";

const OurMission = () => {
  return (
    <section className="bg-white">
      <div className="flex  w-full justify-center items-center gap-10 ">
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-0.5">
          <h2 className="text-[50px] text-[#5F5F5F] font-medium mb-2">
            Our Mission
          </h2>
          <div>
            <Image src={border} alt="border" width={206} height={0} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 max-w-7xl mx-auto">
        <div className="w-full  md:w-1/2 flex justify-center">
          <Image src={MissionImg} alt="Our Mission" width={533} height={533} />
        </div>
        <div className="w-[673px] h-[180px]  ">
          <p className="text-[30px] text-[#5F5F5F] max-w-lg">
            Our mission involves community engagement, leadership development,
            building strong tech foundation, while enabling all tech enthusiasts
            to contribute to the global society.
          </p>
        </div>
        <div>
          <Image src={Subtract} alt="Subtract" width={14} height={227} />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
