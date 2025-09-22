"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/Gdglogo.svg";
import sun from "../images/sun.png";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleThemeSwitch = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null; // Wait for theme to load

  const links = ["Home", "Events", "Team", "Alumni", "Contact"];

  return (
    <nav
      className={`shadow-lg border-b-[4px] px-4 py-3 transition-all duration-300 ease-in-out ${
        resolvedTheme === "dark"
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-300"
      }`}
    >
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
          <span
            className={`font-light text-base sm:text-lg md:text-[21.88px] transition-colors duration-300 ${
              resolvedTheme === "dark" ? "text-gray-200" : "text-[#868686]"
            }`}
          >
            GDG RCOEM
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex text-[25px] space-x-10">
            {links.map((link) => (
              <li key={link} className="relative group">
                <Link
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className={`font-medium transition-colors duration-300 ${
                    resolvedTheme === "dark"
                      ? "text-gray-200 hover:text-blue-400"
                      : "text-[#868686] hover:text-blue-500"
                  }`}
                >
                  {link}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <ThemeSwitch
            resolvedTheme={resolvedTheme}
            toggleThemeSwitch={toggleThemeSwitch}
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-2xl transition-transform duration-300 hover:scale-110 ${
            resolvedTheme === "dark" ? "text-gray-200" : "text-gray-600"
          }`}
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
        {links.map((link) => (
          <Link
            key={link}
            href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className={`block font-medium transition-colors duration-300 ${
              resolvedTheme === "dark"
                ? "text-gray-200 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {link}
          </Link>
        ))}

        {/* Mobile Theme Toggle */}
        <div className="mt-2">
          <ThemeSwitch
            resolvedTheme={resolvedTheme}
            toggleThemeSwitch={toggleThemeSwitch}
            mobile
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// ------------------ ThemeSwitch Component ------------------
const ThemeSwitch = ({ resolvedTheme, toggleThemeSwitch, mobile }) => {
  return (
    <label
      className={`relative inline-flex items-center cursor-pointer ${
        mobile ? "w-20 h-10" : ""
      }`}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={resolvedTheme === "dark"}
        onChange={toggleThemeSwitch}
      />
      <div
        className={`${
          mobile ? "w-20 h-10" : "w-[90px] h-[36px]"
        } bg-gray-300 rounded-full transition-colors duration-500 peer-checked:bg-blue-600 dark:bg-gray-700`}
      ></div>
      <div
        className={`absolute top-[3px] left-[3px] ${
          mobile ? "w-9 h-9" : "w-[30px] h-[30px]"
        } bg-white rounded-full shadow-md transition-transform duration-500 peer-checked:translate-x-[54px] flex items-center justify-center ${
          mobile ? "peer-checked:translate-x-10" : ""
        }`}
      >
        <Image src={sun} alt="Sun" width={20} height={20} />
      </div>
    </label>
  );
};
