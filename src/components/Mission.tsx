import image from "../assets/pics/fancy.jpg";
import inside from "../assets/pics/room.jpg";
import kitchen from "../assets/pics/kitchen.jpg";
import construction from "../assets/pics/construction.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const Mission: React.FC = () => {
  const navigate = useNavigate();
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.findIndex(ref => ref.current === entry.target);
            if (index !== -1) {
              setVisibleCards(prev => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <>
      <div
        id="mission"
        className=" bg-gradient-to-t  py-[20px] max-w-[1800px] mx-auto mb-5 "
      >
       
        <div className="w-full service-grid gap-5 px-10 relative z-40">
          {/* CARD 1 */}
          <a className="p-0  rounded-lg transition bg-spurs-charcoal duration-500 ease-in-out hover:bg-white shadow-md hover:shadow-2xl lg:translate-y-[-50px]" href="https://www.onereal.com/david-martinez-1">
          <div ref={cardRefs[0]} className={`w-full rounded-lg overflow-hidden relative group h-[350px] md:h-[450px] hover:shadow-2xl transition duration-700 ${visibleCards[0] ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
            <img
              className="opacity-50 shadow-lg h-full w-full object-cover hover:scale-130 group-hover:scale-130  transition duration-1000 ease-in-out"
              src={image}
              alt=""
            />
            {/* HEADLINE DIV */}
            <div className="z-70 pointer-events-none absolute top-0 left-0 w-full  flex items-center justify-start group-hover:translate-y-[-100%] transition duration-600 ease-in-out ">
              <h1 className="text-spurs-silver text-center font-bold text-sm bg-spurs-charcoal p-5 w-[200px]"><span className="animate-pulse">LIST YOUR HOME</span></h1>
            </div>
            {/* SLIDER DIV */}
            <div className="z-50 absolute bottom-0 left-0 w-full h-[130px] group bg-spurs-charcoal translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <p className="text-sm text-white font-light mb-2 text-center">
                  INTERESTED IN LISTING YOUR HOME ON THE MARKET?
                </p>
                <a href="https://www.onereal.com/david-martinez-1">
                  <button className="cursor-pointer block mx-auto bg-spurs-silver-light py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                    GET STARTED
                  </button>
                </a>
              </div>
            </div>
          </div>
          </a>
         

          {/*  CARD 2 */}
       <div onClick={() => navigate('/offer')} className="rounded-lg transition duration-500 ease-in-out bg-spurs-charcoal shadow-md hover:shadow-2xl lg:translate-y-[-50px]">
       <div ref={cardRefs[1]} className={`w-full rounded-lg overflow-hidden h-[350px] md:h-[450px] relative group bg-cyan transition duration-700 md:delay-200 ${visibleCards[1] ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
            <img
              className="opacity-50 hover:scale-130 object-cover group-hover:scale-130  h-full w-full transition duration-1000 ease-in-out"
              src={inside}
              alt=""
            />

            {/* HEADLINE DIV */}
            <div className="pointer-events-none absolute top-0 left-0 w-full flex items-center justify-start  group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
            <h1 className="text-spurs-silver text-center font-bold text-sm bg-spurs-charcoal p-5 w-[200px]"><span className="animate-pulse">SELL FAST</span></h1>
            </div>

            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-spurs-charcoal px-2 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <p className="text-sm  text-white text-center mb-2">
                 IF YOU'RE NEEDING TO SELL IN ANY CONDITION FAST
                </p>
                <button onClick={() => navigate('/offer')} className="cursor-pointer block mx-auto bg-spurs-silver-light py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                  GET A CASH OFFER FAST
                </button>
              </div>
            </div>
          </div>
       </div>

          {/* CARD 3 */}
       <div onClick={() => navigate('/investornetwork')} className="rounded-lg transition duration-500 ease-in-out bg-spurs-charcoal shadow-md hover:shadow-2xl lg:translate-y-[-50px]">
       <div ref={cardRefs[2]} className={`w-full rounded-lg overflow-hidden shadow-md relative group h-[350px] md:h-[450px] transition duration-700 md:delay-400 ${visibleCards[2] ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
            <img
              className="opacity-50 h-full w-full object-cover hover:scale-130 group-hover:scale-130  transition duration-1000 ease-in-out"
              src={kitchen}
              alt=""
            />
            {/* HEADLINE DIV */}
            <div className="pointer-events-none absolute top-0  left-0 w-full  flex items-center justify-start  group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
            <h1 className="text-spurs-silver text-center font-bold text-sm bg-spurs-charcoal p-5 w-[200px]"><span className="animate-pulse">OFF MARKET DEALS</span></h1>
            </div>
            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-spurs-charcoal translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <p className="text-sm  text-white text-center mb-2">
                  SIGN UP FOR ALERTS ON OFF MARKET DEALS
                </p>
                <button onClick={() => navigate('/investornetwork')} className="cursor-pointer block mx-auto bg-spurs-silver-light py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
       </div>
          {/* CARD 4 */}
          <div onClick={() => navigate('/offer')} className="rounded-lg transition duration-500 ease-in-out bg-spurs-charcoal shadow-md hover:shadow-2xl lg:translate-y-[-50px]">
          <div ref={cardRefs[3]} className={`w-full rounded-lg overflow-hidden shadow-md relative group h-[350px] md:h-[450px] transition duration-700 md:delay-600 ${visibleCards[3] ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}>
            <img
              className="opacity-50 h-full w-full object-cover hover:scale-130 group-hover:scale-130  transition duration-1000 ease-in-out"
              src={construction}
              alt=""
            />
            {/* HEADLINE DIV */}
            <div className="pointer-events-none absolute top-0 left-0 w-full  flex items-center justify-start group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
            <h1 className="text-spurs-silver-light text-center font-bold text-sm bg-spurs-charcoal p-5 w-[200px]"><span className="animate-pulse">NEW HOMES</span></h1>
            </div>
            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-spurs-charcoal translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <p className="text-sm text-white text-center mb-2">
                  START YOUR BRAND NEW HOME JOURNEY
                </p>
                <a href="https://www.showingnew.com/davidmartinez210">
                  <button className="cursor-pointer block mx-auto bg-spurs-silver-light py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                    GET STARTED
                  </button>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
