"use client";

import Image from "next/image";
import keep from "../images/keepsus.png";
import border from "../images/ourmission.png";
import Subtract from "../images/Subtract.png";

const Whatkeep = () => {
  return (
    <section className="bg-white">
      {/* Title Section */}
      <div className="flex w-full justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-0.5">
          <h2 className="text-[60px] text-[#5F5F5F] font-medium mb-2">
            What Keeps Us Going?
          </h2>
          <div className="bg-[#FFC727] w-[206px] h-[5px] rounded-full "></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center pb-30 justify-center gap-10 px-4 py-12 max-w-9xl mx-auto">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={keep} alt="keep" width={533} height={533} />
        </div>

        {/* Text Box (Right Aligned) */}
        <div className="w-[773px] h-[180px] flex items-center justify-end">
          <p className="text-[30px] text-[#5F5F5F] text-right">
            Our club helps students to connect, learn, empower and grow.
            Teamwork, innovative thinking, communication, and leading with
            solutions is what helps us achieve new <br /> heights. <br /> The
            entire team works in coordination, to inspire and motivate the
            upcoming coding community to evolve their skills and broaden their
            horizons of knowledge.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="w-[14px] h-[359px] bg-[#FFC727] rounded-r-full "></div>
      </div>
    </section>
  );
};

export default Whatkeep;
