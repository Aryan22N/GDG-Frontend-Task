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
    <section className="py-16  bg-white text-center">
      <div className="flex max-w-[1080px] mx-auto flex-wrap justify-center gap-20">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Colored Ring */}
            <div className="relative w-[210px] h-[210px] rounded-full flex  items-center justify-center">
              {/* Four colored borders */}
              <div className="absolute w-full h-full rounded-full border-[15px] border-transparent border-t-red-500"></div>
              <div className="absolute w-full h-full rounded-full border-[15px] border-transparent border-r-blue-500"></div>
              <div className="absolute w-full h-full rounded-full border-[15px] border-transparent border-b-yellow-400"></div>
              <div className="absolute w-full h-full rounded-full border-[15px] border-transparent border-l-green-500"></div>

              {/* Number inside */}
              <span className="text-[70px] font-bold text-[#5F5F5F]">
                {stat.value}
              </span>
            </div>

            {/* Label */}
            <p className="mt-3 text-[42px] w-[99px] flex items-center justify-center text-[#353535]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
