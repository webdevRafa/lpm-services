import { TfiYoutube } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

const socials = [
  {
    content: <TfiYoutube className="size-14"/>
  },
  {
    content: <RiInstagramFill className="size-14" />
  },
  {
    content: <AiFillTikTok className="size-14" />
  }
];

export const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full  bg-spurs-charcoal">
        <div className="w-full flex items-center gap-5 justify-between py-20 px-18 md:px-0 md:max-w-[600px] mx-auto">
        {socials.map((logo, index) => (
  <div
    key={index}
    className="text-white text-2xl hover:text-spurs-teal transition duration-200 cursor-pointer hover:scale-104"
  >
    {logo.content}
  </div>
))}
         
        </div>
      </div>
    </>
  );
};
