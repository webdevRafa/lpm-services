import { useEffect, useState } from "react";
import darkLogo from "./assets/lpm-slate.svg";
import { Link } from "react-router-dom";
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
          <ul className={`relative hidden md:flex gap-2 text-slate-700 `}>
            <Link to="/">
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer font-bold  p-2 hover:shadow-md  ${
                !isScrolled && "hover:bg-slate-700 hover:text-white shadow-xl"
              }`}
            >
              HOME
            </li>
            </Link>
            <Link to="/about">
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer font-bold p-2 hover:shadow-md ${
                !isScrolled && "hover:bg-slate-700 hover:text-white shadow-xl"
              }`}
            >
             ABOUT
            </li>
            </Link>
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer font-bold  p-2 hover:shadow-md ${
                !isScrolled && "hover:bg-slate-700 hover:text-white shadow-xl"
              }`}
            >
              SERVICES
            </li>
            <Link to="/contact">
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer font-bold p-2 hover:shadow-md ${
                !isScrolled && "hover:bg-slate-700 hover:text-white shadow-xl"
              }`}
            >
            CONTACT
            </li>
            </Link>
          </ul>

          {/* mobile menu */}
          <div className="block md:hidden">
            <IoMenu
              className={`size-8 ${
                isScrolled ? "text-slate-700" : "text-slate-700"
              }`}
            />
          </div>
        </nav>
      </div>
    </>
  );
};
