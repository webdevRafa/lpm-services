// import { useEffect, useState } from "react";
// import house from "../assets/pics/color-bg.jpg";
import videosrc from "../assets/videos/Compilation.mp4";

export const Hero: React.FC = () => {
  // const [scale, setScale] = useState(1);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const newScale = 1 + scrollY / 1000; // feel free to tweak this ratio
  //     setScale(newScale > 1.5 ? 1.5 : newScale);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div className="flex items-center justify-center relative h-[600px]">
        <div>
          <h1 className="text-slate-700 font-bold text-5xl md:text-6xl text-center">
            LEAKED PROOF MANAGEMENT SERVICES
          </h1>

          <p className="text-slate-800 text-center text-sm md:text-lg mt-3 mx-4">
            Real Estate, Simplified – We Help You Buy, Sell & Invest With
            Confidence.
          </p>
          <a href="#mission">
            <button className="cursor-pointer block mx-auto border-3 text-sm border-slate-700 text-slate-700  transition hover:border-slate-700 hover:text-white font-bold hover:bg-slate-700 duration-400 ease-in-out p-2 mt-5">
              LEARN MORE
            </button>
          </a>
        </div>

        {/* BG IMAGE */}
        {/* <div className="absolute top-0 left-0 w-full h-[600px] z-[-10]">
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
        </div> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="opacity-40 absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={videosrc}
        ></video>
      </div>
    </>
  );
};
