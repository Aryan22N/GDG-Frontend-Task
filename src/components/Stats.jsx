"use client";
import React from "react";

const stats = [
  { value: "03+", label: "Years" },
  { value: "10+", label: "Events" },
  { value: "1K+", label: "Community Members" },
  { value: "200+", label: "Attendees" },
];

export default function GDGStats() {
  return (
    <section className="py-20 bg-white text-center px-4 sm:px-6 lg:px-16">
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 max-w-[1280px] mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-[45%] lg:w-[210px] transition-transform duration-500 hover:scale-105"
          >
            {/* Colored Ring */}
            <div className="relative w-[210px] h-[210px] rounded-full flex items-center justify-center">
              {/* Four colored borders */}
              <div className="absolute w-full h-full rounded-full border-[15px] border-transparent border-t-red-500"></div>
              <div className="absolute w-full h-full rounded-full border-[15px] border-transparent border-r-blue-500"></div>
              <div className="absolute w-full h-full rounded-full border-[15px] border-transparent border-b-yellow-400"></div>
              <div className="absolute w-full h-full rounded-full border-[15px] border-transparent border-l-green-500"></div>

              {/* Number inside */}
              <span className="text-[70px] sm:text-[60px] md:text-[70px] font-bold text-[#5F5F5F]">
                {stat.value}
              </span>
            </div>

            {/* Label */}
            <p className="mt-3 text-[42px] sm:text-[36px] md:text-[42px] w-[99px] flex items-center justify-center text-[#353535]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
