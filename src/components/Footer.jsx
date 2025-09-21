"use client";

import Image from "next/image";
import FooterShapes from "../images/Footerdecor.png";
import GDGLogo from "../images/Gdglogo.svg";
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Line from "../images/line.png";

const Footer = () => {
  return (
    <footer className="bg-[#ECECEC] relative">
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <Image src={GDGLogo} alt="GDG Logo" width={120} height={60} />
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600">
            Google Developer Groups
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-1">
            <p className="text-blue-500 font-medium">On Campus</p>
            <ul className="text-gray-600">
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
            className="h-40 object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start">
          {/* Location */}
          <div className="flex items-start gap-3 max-w-md">
            <MdOutlineLocationOn className="text-black w-6 h-6 sm:w-7 sm:h-7 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-sm sm:text-base">
              Shri Ramdeobaba College of Engineering and Management, <br />
              Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013
            </p>
          </div>

          {/* Email + Socials */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-black w-6 h-6 sm:w-7 sm:h-7" />
              <a
                href="mailto:dsc.rknec@gmail.com"
                className="text-gray-700 hover:text-blue-500 text-sm sm:text-base"
              >
                dsc.rknec@gmail.com
              </a>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <p className="text-gray-700 font-medium text-base sm:text-lg">
                Follow Us:
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#F1F1F1] rounded-full shadow hover:scale-110 transition"
                >
                  <FaInstagram className="text-xl sm:text-2xl text-gray-800" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#F1F1F1] rounded-full shadow hover:scale-110 transition"
                >
                  <FaLinkedin className="text-xl sm:text-2xl text-gray-800" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#F1F1F1] rounded-full shadow hover:scale-110 transition"
                >
                  <FaTwitter className="text-xl sm:text-2xl text-gray-800" />
                </a>
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
