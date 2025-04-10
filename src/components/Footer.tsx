import { ImYoutube2 } from "react-icons/im";

export const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full  bg-slate-700">
        <div className="w-full flex items-center gap-5 justify-center p-5">
          <div>
            <h1 className="text-white">PLACES YOU CAN FIND ME..</h1>
          </div>
          <a href="https://www.youtube.com/@letstalkrealestatedavid">
            <ImYoutube2 className="text-white size-40 hover:text-red-500 cursor-pointer transition ease-in-out duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};
