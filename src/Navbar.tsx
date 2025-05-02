import { useEffect, useState } from "react";
import darkLogo from "./assets/dark-logo.svg";
import whiteLogo from "./assets/white-logo.svg";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";


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
  const location = useLocation();

  useEffect(() => {
    setMobileMenu(false); // close mobile menu whenever route changes
  }, [location.pathname]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`mx-auto w-full fixed top-0 left-0 z-[50] transition-all duration-400 ${
            isScrolled ? "bg-spurs-charcoal shadow-md" : "bg-transparent"
          } ${!isScrolled && mobileMenu && 'tint'} ` }>
        <nav
          className={`flex justify-between items-center px-3 mx-5 md:mx-20 py-4 transition duration-500 ease-in-out`}
        >
          
          {isScrolled ? ( <img src={whiteLogo} className="max-h-[40px] md:max-h-[50px]" alt="" />) : (<img src={darkLogo} className="max-h-[40px] md:max-h-[50px]" alt="" />)}
        
          {/* desktop menu */}
          <ul className={`relative hidden md:flex gap-2 text-spurs-charcoal `}>
            <Link to="/">
            <li
              className={`hover:scale-110 transition duration-300  cursor-pointer p-2 hover:shadow-md  ${
                isScrolled ? "text-white shadow-none hoverbgteal delay-100" : 'hoverbgcharcoal shadow-md delay-0'
              }`}
            >
              HOME
            </li>
            </Link>
            <Link to="/about">
            <li
              className={`hover:scale-110 transition duration-300  cursor-pointer p-2 hover:shadow-md ${
                  isScrolled ? "text-white shadow-none hoverbgpink delay-200" : 'hoverbgorange shadow-md delay-0'
              }`}
            >
             ABOUT
            </li>
            </Link>
            <li
              className={`hover:scale-110 transition duration-300  cursor-pointer  p-2 hover:shadow-md ${
                  isScrolled ? "text-white shadow-none hoverbgorange delay-300" : 'hoverbgteal shadow-md delay-0'
              }`}
            >
              FAQS
            </li>
            <Link to="/contact">
            <li
              className={`hover:scale-110 transition duration-300  cursor-pointer p-2  ${
                  isScrolled ? "text-white shadow-none hoverbgteal delay-400" : 'hoverbgpink shadow-md delay-0'
              }`}
            >
            CONTACT
            </li>
            </Link>
            <Link to="/viewlistingspage">
            <li
              className={`hover:scale-110 transition duration-300  cursor-pointer p-2  ${
                  isScrolled ? "text-white shadow-none hoverbgteal delay-500" : 'hoverbgpink shadow-md delay-0'
              }`}
            >
            LISTINGS
            </li>
            </Link>
          </ul>
          <div className="flex gap-5">
          <FaFacebook className={`cursor-pointer size-8 md:size-10 facebook transition ease-in-out duration-300  ${isScrolled ? 'text-facebook delay-100 md:delay-500' : 'text-spurs-charcoal delay-0'}`}/>
          <TbBrandYoutubeFilled className={`cursor-pointer  size-8 md:size-10 youtube transition ease-in-out  duration-300  ${isScrolled ? 'text-youtube delay-200 md:delay-600' : 'text-spurs-charcoal delay-0' }`}/>
          <PiInstagramLogoFill className={`cursor-pointer  size-8 md:size-10 instagram transition ease-in-out duration-300  ${isScrolled ? 'text-instagram delay-300 md:delay-700' : 'text-spurs-charcoal delay-0'}`}/>

          </div>

          {/* mobile menu */}
          <div className="block md:hidden shadow-md">
            {!mobileMenu ? ( <IoMenu
            onClick={handleToggle}
              className={`size-8 transition duration-300 ${
                isScrolled ? "text-white delay-400" : "text-spurs-charcoal delay-0"
              }`}
            />) : (
              <IoMdClose
              onClick={handleToggle}
                className={`size-8 ${
                  isScrolled ? "text-white delay-500" : "text-spurs-charcoal delay-0"
                }`}
              />
            )}
           
          </div>
        </nav>
      </div>


  {mobileMenu && (
    <div className={`w-full py-4  fixed top-[72px] z-50 flex items-center justify-center ${isScrolled ? 'bg-spurs-charcoal text-white' : 'bg-white'}`}>


  
    <nav>
      <ul className="text-center">
       <Link to="/"> <li className="cursor-pointer slideDown opacity-0 my-2">HOME</li></Link>
        <Link to="/about"><li className="cursor-pointer slideDown opacity-0 my-2">ABOUT</li></Link>
       <Link to="/services"> <li className="cursor-pointer slideDown opacity-0 my-2">FAQS</li></Link>
       <Link to="/contact"> <li className="cursor-pointer slideDown opacity-0 my-2">CONTACT</li></Link>
       <Link to="/viewlistingspage"> <li className="cursor-pointer slideDown opacity-0 my-2">LISTINGS</li></Link>
      </ul>
    </nav>

    </div>
  )}
    </>
  );
};
