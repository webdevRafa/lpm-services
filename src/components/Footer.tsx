import { TfiYoutube } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

const socials = [
  {
    content: <TfiYoutube className="size-14 text-gray-600 hover:text-white"/>
  },
  {
    content: <RiInstagramFill className="size-14 text-gray-600 hover:text-white" />
  },
  {
    content: <AiFillTikTok className="size-14 text-gray-600 hover:text-white" />
  }
];

export const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full bg-spurs-charcoal  md:px-20">
      <div className="flex justify-betwee max-w-[600px] mx-auto">
      <div className="flex w-full gap-3   py-20 px-18 md:px-0">
        {socials.map((logo, index) => (
  <div
    key={index}
    className="text-white text-2xl hover:text-spurs-teal transition duration-200 cursor-pointer hover:scale-104"
  >
    {logo.content}
  </div>
))}
         
        </div>
        <div className="flex items-center justify-center w-full">
          <p className="text-white">Leaked Proof Management Services</p>
        </div>
      </div>
      </div>
    </>
  );
};
