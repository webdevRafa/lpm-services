import { TfiYoutube } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const socials = [
  {
    content: <TfiYoutube className="size-10 text-gray-600 hover:text-white"/>
  },
  {
    content: <RiInstagramFill className="size-10 text-gray-600 hover:text-white" />
  },
  {
    content: <AiFillTikTok className="size-10 text-gray-600 hover:text-white" />
  }
];

export const Footer: React.FC = () => {

  const { ref: footerRef, isVisible: footerVisible } = useInViewAnimation();
  return (
    <>
      <div ref={footerRef} className="w-full bg-spurs-charcoal  px-4 md:px-20">
      <div className="flex justify-between max-w-[600px] mx-auto">
      <div  className="flex w-full gap-3   py-20 md:px-0">
        {socials.map((logo, index) => (
  <div
    key={index}
    style={{
      transitionDelay: `${index * 100 + 200}ms`, // Adjust timing as needed
    }}
    className={`text-white text-2xl hover:text-spurs-teal  cursor-pointer hover:scale-104 transition ease-in-out duration-300  ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
  >
    {logo.content}
  </div>
))}
         
        </div>
        <div className="flex items-center justify-center w-full">
          <p className={`text-white transition duration-700 ease-out delay-600 ${footerVisible ? 'translate-x-0 opacity-100' : 'translate-y-[60px] opacity-0'}`}>Leaked Proof Management Services</p>
        </div>
      </div>
      </div>
    </>
  );
};
