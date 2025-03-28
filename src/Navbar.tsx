import { useEffect, useState } from "react";
import whiteLogo from "./assets/white-logo.svg";
import darkLogo from "./assets/dark-logo.svg";

import { IoMenu } from "react-icons/io5";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 500); // change 50 to however many pixels i want
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="mx-auto w-full fixed top-0 left-0 z-[50]">
        <nav
          className={`flex justify-between items-center px-3 py-4 transition duration-500 ease-in-out ${
            isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          {isScrolled ? (
            <img src={darkLogo} className="max-h-[60px]" alt="" />
          ) : (
            <img src={whiteLogo} className="max-h-[60px]" alt="" />
          )}

          {/* desktop menu */}
          <ul
            className={`relative hidden md:flex gap-2  ${
              isScrolled ? "text-gray-950" : "text-gray-400"
            }`}
          >
            <li
              className={`hover:scale-105 transition duration-300 cursor-pointer  p-2 hover:shadow-md ${
                !isScrolled && "hover:text-white"
              }`}
            >
              Home
            </li>
            <li
              className={`hover:scale-105 transition duration-300 cursor-pointer  p-2 hover:shadow-md ${
                !isScrolled && "hover:text-white"
              }`}
            >
              About
            </li>
            <li
              className={`hover:scale-105 transition duration-300 cursor-pointer  p-2 hover:shadow-md ${
                !isScrolled && "hover:text-white"
              }`}
            >
              Services
            </li>
            <li
              className={`hover:scale-105 transition duration-300 cursor-pointer  p-2 hover:shadow-md ${
                !isScrolled && "hover:text-white"
              }`}
            >
              Contact
            </li>
          </ul>

          {/* mobile menu */}
          <div className="block md:hidden">
            <IoMenu
              className={`size-8 ${
                isScrolled ? "text-gray-950" : "text-white"
              }`}
            />
          </div>
        </nav>
      </div>
    </>
  );
};
