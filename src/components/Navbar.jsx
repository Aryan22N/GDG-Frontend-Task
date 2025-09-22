"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/Gdglogo.svg";
import sun from "../images/sun.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => setIsToggled(!isToggled);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg border-b-[4px] border-gray-300 px-4 py-3 transition-all duration-300 ease-in-out">
      <div className="max-w-[1680px] mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="GDG RCOEM Logo"
            width={75}
            height={35}
            priority
            className="w-[60px] h-auto md:w-[75px] transition-transform duration-300 hover:scale-105"
          />
          <span className="font-light text-[#868686] text-base sm:text-lg md:text-[21.88px] transition-colors duration-300">
            GDG RCOEM
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex text-[25px] space-x-10">
            {["Home", "Events", "Team", "Alumni", "Contact"].map((link) => (
              <li key={link} className="relative group">
                <Link
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-[#868686] hover:text-blue-500 font-medium transition-colors duration-300"
                >
                  {link}
                </Link>
                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Toggle Switch */}
          <div className="ml-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isToggled}
                onChange={toggleSwitch}
              />
              {/* Background */}
              <div className="w-[90px] h-[36px] bg-gray-300 rounded-full transition-colors duration-500 peer-checked:bg-blue-600"></div>
              {/* Circle */}
              <div className="absolute top-[3px] left-[3px] w-[30px] h-[30px] bg-white rounded-full shadow-md transition-transform duration-500 peer-checked:translate-x-[54px] flex items-center justify-center">
                <Image src={sun} alt="Sun" width={20} height={20} />
              </div>
            </label>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-600 focus:outline-none text-2xl transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden mt-3 space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {["Home", "Events", "Team", "Alumni", "Contact"].map((link) => (
          <Link
            key={link}
            href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className="block text-gray-600 hover:text-blue-500 font-medium transition-colors duration-300"
          >
            {link}
          </Link>
        ))}

        {/* Toggle Switch */}
        <div className="mt-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isToggled}
              onChange={toggleSwitch}
            />
            {/* Background */}
            <div className="w-20 h-10 bg-gray-300 rounded-full transition-colors duration-500 peer-checked:bg-blue-600"></div>
            {/* Circle */}
            <div className="absolute top-[2px] left-[2px] w-9 h-9 bg-white rounded-full shadow-md transition-transform duration-500 peer-checked:translate-x-10 flex items-center justify-center">
              <Image src={sun} alt="Sun" width={20} height={20} />
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
