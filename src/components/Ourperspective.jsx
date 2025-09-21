"use client";

import Image from "next/image";
import MissionImg from "../images/section1.png";
import border from "../images/greenline.png";
import perspective from "../images/perspective.png";

const Ourperspective = () => {
  return (
    <section className="bg-white">
      <div className="flex  w-full justify-center items-center gap-10 ">
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-0.5">
          <h2 className="text-[50px] text-[#5F5F5F] font-medium mb-2">
            Our Perspective{" "}
          </h2>
          <div>
            <Image src={border} alt="border" width={206} height={0} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 max-w-7xl mx-auto">
        <p className="text-[30px] text-[#5F5F5F] max-w-lg">
          We’re a community-driven initiative aiming to bridge the gap between
          research and practice , develop evolutionary thinking and network
          throughout the process. We believe in connecting fellow developers ,
          spreading stimulative ideas and working for a solution driven team.
        </p>
        <div className="w-[673px] h-[180px]  ">
          <div className="w-full  md:w-1/2 flex justify-center">
            <Image
              src={perspective}
              alt="Our Mission"
              width={533}
              height={533}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourperspective;
