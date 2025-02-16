import logo from "./assets/lp-logo.svg";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="container mx-auto w-full sticky top-0 left-0 z-50 bg-white px-2 pb-2">
        <nav className="flex justify-between items-end">
          <img src={logo} className="size-30" alt="" />
          <ul className="flex gap-5 text-neutral-700">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
