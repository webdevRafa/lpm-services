import { useEffect, useRef } from "react";
import videosrc from "../assets/videos/ContactHeroVideo.mp4";

export const ContactHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Force reload of the correct video
    }
  }, []);

  return (
    <div className="flex items-center justify-center relative h-[600px]">
      <div>
        <h1 className="text-spurs-charcoal text-3xl md:text-4xl text-center uppercase">
        CONTACT INFORMATION
        </h1>

        <p className="text-slate-800 text-center text-sm md:text-lg mt-3 mx-4 uppercase">
          Turning Property Goals Into Reality — One Transaction At A Time.
        </p>
        <div className="bg-spurs-charcoal text-white text-center text-sm md:text-lg  py-2 mx-4 uppercase">
        <p>Call or text 210-560-3869</p>
        <p className="uppercase text-spurs-teal ">leakedproofmanagementservices@gmail.com</p>
        </div>
    
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
