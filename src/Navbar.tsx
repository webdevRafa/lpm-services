import { useEffect, useState } from "react";
import darkLogo from "./assets/lpm-slate.svg";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";


export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleToggle = () => {
    setMobileMenu((prev) => !prev)
  }
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
      <div className={`mx-auto w-full fixed top-0 left-0 z-[50] ${
            isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}>
        <nav
          className={`flex justify-between items-center px-3 mx-5 md:mx-20 py-4 transition duration-500 ease-in-out`}
        >
          <img src={darkLogo} className="max-h-[50px]" alt="" />

          {/* desktop menu */}
          <ul className={`relative hidden md:flex gap-2 text-slate-700 `}>
            <Link to="/">
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer  p-2 hover:shadow-md  ${
                !isScrolled && "hover:bg-slate-700 hover:text-white shadow-xl"
              }`}
            >
              HOME
            </li>
            </Link>
            <Link to="/about">
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer p-2 hover:shadow-md ${
                !isScrolled && "hover:bg-slate-700 hover:text-white shadow-xl"
              }`}
            >
             ABOUT
            </li>
            </Link>
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer  p-2 hover:shadow-md ${
                !isScrolled && "hover:bg-slate-700 hover:text-white shadow-xl"
              }`}
            >
              SERVICES
            </li>
            <Link to="/contact">
            <li
              className={`hover:scale-110 transition duration-300 cursor-pointer p-2 hover:shadow-md ${
                !isScrolled && "hover:bg-slate-700 hover:text-white shadow-xl"
              }`}
            >
            CONTACT
            </li>
            </Link>
          </ul>
          <div className="flex gap-5">
          <FaFacebook className="cursor-pointer size-8 md:size-10 text-slate-700 facebook transition ease-in-out duration-500"/>
          <TbBrandYoutubeFilled className="cursor-pointer text-slate-700 size-8 md:size-10 hover:text-red-700 transition ease-in-out duration-500"/>
          <PiInstagramLogoFill className="cursor-pointer text-slate-700 size-8 md:size-10 instagram transition ease-in-out duration-500"/>

          </div>

          {/* mobile menu */}
          <div className="block md:hidden shadow-md">
            {!mobileMenu ? ( <IoMenu
            onClick={handleToggle}
              className={`size-8 ${
                isScrolled ? "text-slate-700" : "text-slate-700"
              }`}
            />) : (
              <IoMdClose
              onClick={handleToggle}
                className={`size-8 ${
                  isScrolled ? "text-slate-700" : "text-slate-700"
                }`}
              />
            )}
           
          </div>
        </nav>
      </div>


  {mobileMenu && (
    <div className="w-full py-4 bg-slate-100 fixed top-20 z-50 flex items-center justify-center border-t-2 border-b-2 box-border border-slate-300">


  
    <nav>
      <ul className="text-center">
        <li className="cursor-pointer slideDown opacity-0">HOME</li>
        <li className="cursor-pointer slideDown opacity-0">ABOUT</li>
        <li className="cursor-pointer slideDown opacity-0">SERVICES</li>
        <li className="cursor-pointer slideDown opacity-0">CONTACT</li>
      </ul>
    </nav>

    </div>
  )}
    </>
  );
};
