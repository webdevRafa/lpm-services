

import { AiFillTikTok } from "react-icons/ai";
import { Parallax } from "react-parallax";
import { TfiYoutube } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";

import bgImg from "../assets/pics/good.webp";


const ServicesContent = () => {
  return(
    <div className="w-full py-5 md:py-10 lg:py-24 tint-p">
  <div className="flex flex-col md:flex-row gap-20 px-10 w-full  justify-center mx-auto">
    <div className="p-5 shadow-md relative">
    <a href="https://www.instagram.com/david24_7realestate">
      <AiFillInstagram className="size-30 mb-5 mx-auto text-spurs-orange   p-2 hover:text-red-200 md:hover:scale-110 transition duration-300 ease-out"  />
      </a>

      <p className="text-center text-3xl text-white">INSTAGRAM</p>
     
     
    </div>
    <div className="p-5 shadow-md">
      <a href="https://www.youtube.com/@LetsTalkRealEstateDavid">
      <TfiYoutube className="size-30 mb-5 mx-auto  text-spurs-teal  p-2 hover:text-red-200 md:hover:scale-110 transition duration-300 ease-out" />
      </a>
     

      <p className="text-center text-3xl text-white">
        YOUTUBE
      </p>
     
    </div>
    <div className="p-5 shadow-md">
    <a href="https://www.tiktok.com/@david24_7realestate">
      <AiFillTikTok className="size-30 mb-5 mx-auto  text-spurs-pink p-2 hover:text-red-200 md:hover:scale-110 transition duration-300 ease-out" />
      </a>

      <p className="text-center text-white text-3xl">
       TIKTOK
      </p>
      
    </div>
  </div>
</div>
  )
}
export const Services: React.FC = () => {
  return (
    <>
      {/* Show Parallax only on md and up */}
      <div className="hidden md:block">
        <Parallax className="object-cover" bgImage={bgImg} strength={800}>
          <ServicesContent />
        </Parallax>
      </div>

      {/* Show static version on mobile */}
      <div className="block md:hidden">
        <ServicesContent />
      </div>
    </>
  );
};