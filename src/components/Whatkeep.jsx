"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import keep from "../images/keepsus.png";

const Whatkeep = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className={`transition-colors duration-500 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Title Section */}
      <div className="flex w-full justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-1">
          <h2
            className={`text-[40px] md:text-[60px] font-medium mb-2 text-center transition-colors duration-700 ease-in-out animate-fadeInUp ${
              resolvedTheme === "dark" ? "text-gray-200" : "text-[#5F5F5F]"
            }`}
          >
            What Keeps Us Going?
          </h2>
          <div className="bg-[#FFC727] w-[206px] h-[5px] rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 px-4 py-12 max-w-7xl mx-auto">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center transition-transform duration-700 ease-in-out animate-fadeInLeft">
          <Image
            src={keep}
            alt="keep"
            width={533}
            height={533}
            className="rounded-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Box */}
        <div className="w-full md:w-[1053px] md:h-[180px] flex items-center justify-center md:justify-end transition-opacity duration-700 ease-in-out animate-fadeInRight">
          <p
            className={`text-[18px] sm:text-[24px] md:text-[27px] text-center md:text-right leading-relaxed transition-colors duration-500 ${
              resolvedTheme === "dark" ? "text-gray-300" : "text-[#5F5F5F]"
            }`}
          >
            Our club helps students to connect, learn, empower and grow.
            Teamwork, innovative thinking, communication, and leading with
            solutions is what helps us achieve new <br /> heights. <br /> The
            entire team works in coordination, to inspire and motivate the
            upcoming coding community to evolve their skills and broaden their
            horizons of knowledge.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="hidden md:block w-[14px] h-[359px] bg-[#FFC727] rounded-r-full animate-fadeInUp"></div>
      </div>
    </section>
  );
};

export default Whatkeep;
