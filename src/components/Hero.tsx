import { useEffect, useState } from "react";
import house from "../assets/pics/color-bg.jpg";

export const Hero: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 1000; // feel free to tweak this ratio
      setScale(newScale > 1.5 ? 1.5 : newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center relative h-[600px]">
        <div>
          <h1 className="text-white text-5xl md:text-6xl text-center">
            Leaked Proof Management Services
          </h1>

          <p className="text-gray-200 text-center text-sm md:text-lg mt-3 mx-4">
            Real Estate, Simplified – We Help You Buy, Sell & Invest With
            Confidence.
          </p>
          <a href="#mission">
            <button className="cursor-pointer block mx-auto border-3 text-sm border-cyan-500 text-white rounded-md transition hover:border-cyan-500 hover:text-slate-800 font-bold hover:bg-cyan-500 duration-500 ease-in-out p-2 mt-5">
              LEARN MORE
            </button>
          </a>
        </div>

        {/* BG IMAGE */}
        <div className="absolute top-0 left-0 w-full h-[600px] z-[-10]">
          <img
            className="object-cover bg-image fixed"
            style={{
              transform: `scale(${scale})`,
              opacity: Math.max(0.5, 2 - scale),
              transition: "transform 0.1s ease-out",
            }}
            src={house}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
