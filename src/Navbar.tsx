import { useEffect, useState } from "react";
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
          <img src={darkLogo} className="max-h-[60px]" alt="" />

          {/* desktop menu */}
          <ul className={`relative hidden md:flex gap-2 text-gray-950 `}>
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer font-bold  p-2 hover:shadow-md  ${
                !isScrolled && "hover:bg-cyan-700 hover:text-white shadow-xl"
              }`}
            >
              Home
            </li>
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer font-bold p-2 hover:shadow-md ${
                !isScrolled && "hover:bg-cyan-700 hover:text-white shadow-xl"
              }`}
            >
              About
            </li>
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer font-bold  p-2 hover:shadow-md ${
                !isScrolled && "hover:bg-cyan-700 hover:text-white shadow-xl"
              }`}
            >
              Services
            </li>
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer font-bold p-2 hover:shadow-md ${
                !isScrolled && "hover:bg-cyan-700 hover:text-white shadow-xl"
              }`}
            >
              Contact
            </li>
          </ul>

          {/* mobile menu */}
          <div className="block md:hidden">
            <IoMenu
              className={`size-8 ${
                isScrolled ? "text-gray-950" : "text-gray-950"
              }`}
            />
          </div>
        </nav>
      </div>
    </>
  );
};
