"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const stats = [
  { value: "03+", label: "Years" },
  { value: "10+", label: "Events" },
  { value: "1K+", label: "Community Members" },
  { value: "200+", label: "Attendees" },
];

export default function GDGStats() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      className={`py-20 text-center px-4 sm:px-6 lg:px-16 transition-colors duration-500 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
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
              <span
                className={`text-[70px] sm:text-[60px] md:text-[70px] font-bold transition-colors duration-500 ${
                  resolvedTheme === "dark" ? "text-gray-200" : "text-[#5F5F5F]"
                }`}
              >
                {stat.value}
              </span>
            </div>

            {/* Label */}
            <p
              className={`mt-3 text-[42px] sm:text-[36px] md:text-[42px] w-[99px] flex items-center justify-center transition-colors duration-500 ${
                resolvedTheme === "dark" ? "text-gray-300" : "text-[#353535]"
              }`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
