import { Parallax } from "react-parallax";
import bgImg from "../assets/pics/good.webp";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


export const ViewListings: React.FC = () => {

  const divRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  return (
    <>
      {/* Show Parallax only on md and up */}
      <div ref={divRef} className="md:block mb-20 ">
        <Parallax className="object-cover" bgImage={bgImg} strength={800}>
        <div className="py-15 px-4 md:px-0 md:py-40 tint-p">
       <div className="block mx-auto max-w-[600px]">
       <div className="flex items-center justify-center w-full">
         <div className="w-full items-center justify-center flex">
         <h2 className={`uppercase text-white text-lg md:text-3xl text-spurs-silver transition  duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'}`}>Check out our listings</h2>
         </div>
         <Link
         to="/viewlistingspage"
         >
           <button className={`py-2  text-white mx-auto block cursor-pointer w-[200px] border-2 border-white hover:border-teal-500  transition duration-1000  delay-100 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'}`}>VIEW</button>
         </Link>
        
         </div>
       </div>
  
   </div>
        </Parallax>
      </div>

      {/* Show static version on mobile
      <div className="block md:hidden">
      <div className="py-10">
        <h2 className="text-center mb-2 text-2xl uppercase">CHECK OUT OUR LISTINGS</h2>
   <button className="py-3 px-2 bg-spurs-teal text-white mx-auto block w-[170px] shadow-md border-2 border-spurs-silver">VIEW</button>
   </div>
      </div> */}
    </>
  );
};