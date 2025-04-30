
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { Parallax } from "react-parallax";

import bgImg from "../assets/pics/good.webp";


const ServicesContent = () => {
  return(
    <div className="w-full md:py-10 lg:py-20 tint-p">
  <div className="flex flex-col md:flex-row gap-20 px-10 w-full  justify-center mx-auto">
    <div className="p-5 shadow-md relative">
    <a href="https://www.instagram.com/david24_7realestate">
      <FaInstagramSquare className="size-40 mb-5 mx-auto bg-spurs-charcoal text-spurs-orange   p-2 hover:text-red-200" />
      </a>

      <h1 className="text-center text-3xl text-spurs-charcoal">INSTAGRAM</h1>
     
     
    </div>
    <div className="p-5 shadow-md">
      <a href="https://www.youtube.com/@LetsTalkRealEstateDavid">
      <TiSocialYoutubeCircular className="size-40 mb-5 mx-auto bg-spurs-charcoal text-spurs-teal  p-2 hover:text-red-200" />
      </a>
     

      <h1 className="text-center text-3xl">
        YOUTUBE
      </h1>
     
    </div>
    <div className="p-5 shadow-md">
    <a href="https://www.tiktok.com/@david24_7realestate">
      <AiFillTikTok className="size-40 mb-5 mx-auto bg-spurs-charcoal text-spurs-pink p-2 hover:text-red-200" />
      </a>

      <h1 className="text-center text-3xl">
       TIKTOK
      </h1>
      
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