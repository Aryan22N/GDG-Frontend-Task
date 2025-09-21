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
    <section className="py-16  text-center bg-white">
      {/* Heading */}
      <h2 className="text-[70px] font-bold max-w-[1380px] mx-auto text-[#5F5F5F] flex items-center justify-center gap-4">
        <span className="flex-1 h-[6px] rounded-full bg-red-500"></span>
        Technologies
        <span className="flex-1 h-[6px] rounded-full bg-red-500"></span>
      </h2>
      <p className="text-gray-500 text-[32px] mt-2">
        Domains That Excite Us to Collaborate and Teach!
      </p>

      {/* Cards */}
      <div className="mt-40 mb-30 flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="relative   w-[446px] h-[320px] rounded-xl shadow-2xl bg-white flex  flex-col items-center justify-center"
          >
            {/* Top colored line */}
            <div
              className={`absolute mb-2 top-0 left-1/2 -translate-x-1/2 shadow-2xl w-66 h-2 rounded-b-lg ${tech.color}`}
            ></div>

            {/* Icon */}
            <Image
              src={tech.img}
              alt={tech.name}
              width={157}
              height={147}
              className="mb-3"
            />

            {/* Text */}
            <h3 className="text-[40.58px] font-medium text-[#5F5F5F]">
              {tech.name}
            </h3>

            {/* Down Arrow */}
            <Image
              src={DownArrow}
              alt="Down Arrow"
              width={16}
              height={25}
              className="mt-2 absolute bottom-3 text-gray-400"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
