"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import FooterShapes from "../images/Footerdecor.png";
import GDGLogo from "../images/Gdglogo.svg";
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Line from "../images/line.png";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const bgColor = resolvedTheme === "dark" ? "bg-gray-800" : "bg-[#ECECEC]";
  const textColor =
    resolvedTheme === "dark" ? "text-gray-200" : "text-gray-700";
  const iconBg = resolvedTheme === "dark" ? "bg-gray-800" : "bg-[#F1F1F1]";
  const iconColor =
    resolvedTheme === "dark" ? "text-gray-200" : "text-gray-800";

  return (
    <footer className={`${bgColor} relative transition-colors duration-500`}>
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <Image src={GDGLogo} alt="GDG Logo" width={120} height={60} />
          <p
            className={`text-xl sm:text-2xl lg:text-3xl font-medium ${textColor}`}
          >
            Google Developer Groups
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-1">
            <p className="text-blue-500 font-medium">On Campus</p>
            <ul className={textColor}>
              <li>Ramdeobaba University</li>
            </ul>
          </div>
        </div>

        {/* Divider (Hidden on mobile) */}
        <div className="hidden md:flex items-center">
          <Image
            src={Line}
            alt="Divider"
            width={2}
            height={100}
            className="h-40 object-cover dark:invert"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 mt-[20px] text-center md:text-left items-center md:items-start">
          {/* Location */}
          <div className="flex items-start gap-3 max-w-xl sm:max-w-2xl lg:max-w-3xl">
            <MdOutlineLocationOn
              className={`w-6 h-6 sm:w-7 sm:h-7 mt-1 flex-shrink-0 ${textColor}`}
            />
            <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
              Shri Ramdeobaba College of Engineering and Management, <br />
              Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013
            </p>
          </div>

          {/* Email + Socials */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className={`w-6 h-6 sm:w-7 sm:h-7 ${textColor}`} />
              <a
                href="mailto:dsc.rknec@gmail.com"
                className={`hover:text-blue-500 text-sm sm:text-base transition-colors duration-300 ${textColor}`}
              >
                dsc.rknec@gmail.com
              </a>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <p className={`font-medium text-base sm:text-lg ${textColor}`}>
                Follow Us:
              </p>
              <div className="flex gap-4">
                {[FaInstagram, FaLinkedin, FaTwitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`${iconBg} flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow hover:scale-110 transition`}
                  >
                    <Icon className={`text-xl sm:text-2xl ${iconColor}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Image */}
      <div className="w-full">
        <Image
          src={FooterShapes}
          alt="Footer Decoration"
          width={1763}
          height={225}
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
