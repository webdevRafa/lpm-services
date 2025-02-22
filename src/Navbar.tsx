import logo from "./assets/gray.svg";
import { IoMenu } from "react-icons/io5";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="mx-auto w-full sticky top-0 bg-white left-0 z-50 px-3">
        <nav className="flex justify-between  items-end py-10">
          <img src={logo} className="max-h-[50px]" alt="" />

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
