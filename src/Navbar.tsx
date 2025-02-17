import logo from "./assets/modern-logo.svg";
import { IoMenu } from "react-icons/io5";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="container mx-auto w-full sticky top-0 left-0 z-50 bg-white px-3 pb-2">
        <nav className="flex justify-between items-end bg-white">
          <img src={logo} className="translate-y-[30px] size-30" alt="" />

          {/* desktop menu */}
          <ul className="relative md:flex gap-2 text-slate-950  hidden">
            <li className="cursor-pointer hover:bg-gray-50 p-2 hover:shadow-md group">
              Home
            </li>
            <li className="cursor-pointer hover:bg-gray-50 p-2 hover:shadow-md">
              About
            </li>
            <li className="cursor-pointer hover:bg-gray-50 p-2 hover:shadow-md">
              Services
            </li>
            <li className="cursor-pointer hover:bg-gray-50 p-2 hover:shadow-md">
              Contact
            </li>
          </ul>

          {/* mobile menu */}
          <div className="block md:hidden">
            <IoMenu className="size-8" />
          </div>
        </nav>
      </div>
    </>
  );
};
