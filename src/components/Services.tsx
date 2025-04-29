
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import david from "../assets/pics/david.jpg";
export const Services: React.FC = () => {
  return (
    <>
      <div className="w-full py-20  bg-white">
        <div className="flex flex-col md:flex-row gap-20 px-10 w-full  justify-center mx-auto">
          <div className="p-5 shadow-md relative">
          <a href="https://www.instagram.com/david24_7realestate">
            <FaInstagramSquare className="size-40 mb-5 mx-auto text-slate-700   p-2 hover:text-red-200" />
            </a>

            <h1 className="text-center text-3xl">INSTAGRAM</h1>
            <p className="text-gray-500 text-center">
              Need to sell fast? We offer cash deals with no agent fees, no
              repairs, and no hassle. Whether you're relocating, avoiding
              foreclosure, or just want a quick close, we make it easy.
            </p>
            {/* bg image containerr */}
            <div className="absolute top-0 z-[-1] left-0 w-full h-full">
              <img className="object-cover w-full h-full" src={david} alt="" />
            </div>
          </div>
          <div className="p-5 shadow-md">
            <a href="https://www.youtube.com/@LetsTalkRealEstateDavid">
            <TiSocialYoutubeCircular className="size-40 mb-5 mx-auto text-slate-700  p-2 hover:text-red-200" />
            </a>
           

            <h1 className="text-center text-3xl">
              YOUTUBE
            </h1>
            <p className="text-gray-500 text-center">
              Get access to the best properties before they hit the market.
              Whether you're looking for your dream home or your next
              investment, we connect buyers with exclusive deals.
            </p>
          </div>
          <div className="p-5 shadow-md">
          <a href="https://www.tiktok.com/@david24_7realestate">
            <AiFillTikTok className="size-40 mb-5 mx-auto text-slate-700 p-2 hover:text-red-200" />
            </a>

            <h1 className="text-center text-3xl">
             TIKTOK
            </h1>
            <p className="text-gray-500 text-center">
              Looking to invest? We provide off-market wholesale deals that
              offer high ROI potential. Let’s build your portfolio with
              properties priced below market value.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
