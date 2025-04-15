import { useEffect, useRef } from "react";
import videosrc from "../assets/videos/Compilation.mp4";

export const AboutHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Force reload of the correct video
    }
  }, []);

  return (
    <div className="flex items-center justify-center relative h-[600px]">
      <div>
        <h1 className="text-slate-700 text-3xl md:text-4xl text-center uppercase">
        Trust Real Estate Solutions for Buyers, Sellers & Investors
        </h1>

        <p className="text-slate-800 text-center text-sm md:text-lg mt-3 mx-4 uppercase">
          Turning Property Goals Into Reality — One Transaction At A Time.
        </p>
        <a href="#mission">
          <button className="cursor-pointer block mx-auto border-3 text-sm border-slate-700 text-slate-700 transition hover:border-slate-700 hover:text-white font-bold hover:bg-slate-700 duration-400 ease-in-out p-2 mt-5">
            LEARN MORE
          </button>
        </a>
      </div>

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="opacity-40 absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videosrc} type="video/mp4" />
      </video>
    </div>
  );
};
