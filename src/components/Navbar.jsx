// components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/Gdglogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => setIsToggled(!isToggled);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg border-b-[4px] border-gray-300 px-4 py-3  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="GDG RCOEM Logo"
            width={75}
            height={35}
            priority
            className="w-[60px] h-auto md:w-[75px]" // shrink logo on small screens
          />
          <span className="font-semibold text-gray-800 text-base sm:text-lg md:text-xl">
            GDG RCOEM
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/alumni"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Alumni
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Toggle Switch */}
          <div className="flex items-center">
            <label
              htmlFor="switch"
              className="relative inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="switch"
                className="sr-only peer"
                checked={isToggled}
                onChange={toggleSwitch}
              />
              <div
                className="relative w-11 h-6 bg-gray-200 rounded-full peer
                peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                after:bg-white after:border-gray-300 after:border after:rounded-full 
                after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"
              ></div>
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
          <Link
            href="/"
            className="block text-gray-600 hover:text-blue-500 font-medium"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="block text-gray-600 hover:text-blue-500 font-medium"
          >
            Events
          </Link>
          <Link
            href="/team"
            className="block text-gray-600 hover:text-blue-500 font-medium"
          >
            Team
          </Link>
          <Link
            href="/alumni"
            className="block text-gray-600 hover:text-blue-500 font-medium"
          >
            Alumni
          </Link>
          <Link
            href="/contact"
            className="block text-gray-600 hover:text-blue-500 font-medium"
          >
            Contact
          </Link>

          {/* Toggle Switch */}
          <div className="flex items-center">
            <label
              htmlFor="switch-mobile"
              className="relative inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="switch-mobile"
                className="sr-only peer"
                checked={isToggled}
                onChange={toggleSwitch}
              />
              <div
                className="relative w-11 h-6 bg-gray-200 rounded-full peer
                peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                after:bg-white after:border-gray-300 after:border after:rounded-full 
                after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"
              ></div>
            </label>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
