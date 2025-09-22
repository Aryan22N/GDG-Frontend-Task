"use client";
import Image from "next/image";
import DownArrow from "../images/V.png";
import androidImg from "../images/android.png";
import flutterImg from "../images/flutter.png";
import cloudImg from "../images/cloud.png";

const technologies = [
  {
    name: "Android",
    img: androidImg,
    color: "bg-red-400",
  },
  {
    name: "Flutter",
    img: flutterImg,
    color: "bg-blue-400",
  },
  {
    name: "Cloud",
    img: cloudImg,
    color: "bg-green-400",
  },
];

export default function Technologies() {
  return (
    <section className="py-16 text-center bg-white px-4 sm:px-6 lg:px-16">
      {/* Heading */}
      <h2 className="text-[40px] sm:text-[55px] md:text-[70px] font-bold max-w-[1380px] mx-auto text-[#5F5F5F] flex items-center justify-center gap-4 flex-wrap">
        <span className="flex-1 h-[4px] sm:h-[5px] md:h-[6px] rounded-full bg-red-500"></span>
        Technologies
        <span className="flex-1 h-[4px] sm:h-[5px] md:h-[6px] rounded-full bg-red-500"></span>
      </h2>
      <p className="text-gray-500 text-[18px] sm:text-[24px] md:text-[32px] mt-2 max-w-[900px] mx-auto">
        Domains That Excite Us to Collaborate and Teach!
      </p>

      {/* Cards */}
      <div className="mt-16 mb-12 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[350px] md:w-[446px] h-[320px] rounded-xl shadow-2xl shadow-gray-700 bg-white flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105"
          >
            {/* Top colored line */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[90px] sm:w-[110px] md:w-[157px] h-1 sm:h-2 md:h-2 rounded-b-lg ${tech.color} shadow-md`}
            ></div>

            {/* Icon */}
            <Image
              src={tech.img}
              alt={tech.name}
              width={157}
              height={147}
              className="mb-3 w-[80px] sm:w-[120px] md:w-[157px] h-auto"
            />

            {/* Text */}
            <h3 className="text-[24px] sm:text-[32px] md:text-[40px] font-medium text-[#5F5F5F]">
              {tech.name}
            </h3>

            {/* Down Arrow */}
            <Image
              src={DownArrow}
              alt="Down Arrow"
              width={16}
              height={25}
              className="mt-2 absolute bottom-3"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
