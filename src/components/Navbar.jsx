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
    <nav className="bg-white shadow-lg border-b-[4px] border-gray-300 px-4 py-3">
      <div className="max-w-[1680px] mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="GDG RCOEM Logo"
            width={75}
            height={35}
            priority
            className="w-[60px] h-auto md:w-[75px]"
          />
          <span className="font-light text-[#868686] text-base sm:text-lg md:text-[21.88px]">
            GDG RCOEM
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex text-[25px] space-x-10">
            {["Home", "Events", "Team", "Alumni", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-[#868686] hover:text-blue-500 font-medium"
                >
                  {link}
                </Link>
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
              <div className="w-[90px] h-[36px] bg-gray-300 rounded-full transition-colors peer-checked:bg-blue-600"></div>
              {/* Circle */}
              <div className="absolute top-[3px] left-[3px] w-[30px] h-[30px] bg-white rounded-full transition-transform peer-checked:translate-x-[54px] flex items-center justify-center">
                <Image src={sun} alt="Sun" width={20} height={20} />
              </div>
            </label>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-600 focus:outline-none text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3">
          {["Home", "Events", "Team", "Alumni", "Contact"].map((link) => (
            <Link
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="block text-gray-600 hover:text-blue-500 font-medium"
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
              <div className="w-20 h-10 bg-gray-300 rounded-full transition-colors peer-checked:bg-blue-600"></div>
              {/* Circle */}
              <div className="absolute top-[2px] left-[2px] w-9 h-9 bg-white rounded-full transition-transform peer-checked:translate-x-10 flex items-center justify-center">
                <Image src={sun} alt="Sun" width={20} height={20} />
              </div>
            </label>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
