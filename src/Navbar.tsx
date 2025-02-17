import logo from "./assets/modern-logo.svg";
import { IoMenu } from "react-icons/io5";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="container mx-auto w-full sticky top-0 left-0 z-50 bg-white px-3 pb-2">
        <nav className="flex justify-between items-end bg-white">
          <img src={logo} className="translate-y-[30px] size-30" alt="" />

          {/* desktop menu */}
          <ul className="md:flex gap-5 text-slate-950 hidden">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </ul>

          {/* mobile menu */}
          <div className="block md:hidden">
            <IoMenu className="size-12" />
          </div>
        </nav>
      </div>
    </>
  );
};
