import image from "../assets/pics/fancy.jpg";
import inside from "../assets/pics/room.jpg";
import kitchen from "../assets/pics/kitchen.jpg";
import construction from "../assets/pics/construction.jpg";
import { useNavigate } from "react-router-dom";

export const Mission: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div
        id="mission"
        className=" bg-gradient-to-t  py-[20px] max-w-[1800px] mx-auto mb-5 "
      >
       
        <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-5 px-10 relative z-40">
          {/* CARD 1 */}
          <a className="p-5 rounded-lg transition duration-500 ease-in-out hover:bg-white shadow-md hover:shadow-2xl" href="https://www.onereal.com/david-martinez-1">
          <div className="w-full rounded-lg overflow-hidden relative group h-[350px] md:h-[450px] hover:shadow-2xl">
            <img
              className="shadow-lg h-full w-full object-cover hover:scale-130 group-hover:scale-130 group-hover:brightness-50 transition duration-1000 ease-in-out"
              src={image}
              alt=""
            />
            {/* HEADLINE DIV */}
            <div className="z-40 pointer-events-none absolute top-0 left-0 w-full  bg-slate-700 flex items-center justify-center py-5 group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
              <h1 className="text-white text-sm">LIST YOUR HOME</h1>
            </div>
            {/* SLIDER DIV */}
            <div className="z-50 absolute bottom-0 left-0 w-full h-[130px] group bg-slate-700 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-sm text-white mb-2 text-center">
                  INTERESTED IN LISTING YOUR HOME ON THE MARKET?
                </h1>
                <a href="https://www.onereal.com/david-martinez-1">
                  <button className="cursor-pointer block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                    GET STARTED
                  </button>
                </a>
              </div>
            </div>
          </div>
          </a>
         

          {/*  CARD 2 */}
       <div onClick={() => navigate('/offer')} className="p-5 rounded-lg transition duration-500 ease-in-out hover:bg-white shadow-md hover:shadow-2xl">
       <div className="w-full rounded-lg overflow-hidden h-[350px] md:h-[450px] relative group bg-cyan">
            <img
              className="hover:scale-130 object-cover group-hover:scale-130 group-hover:brightness-50 h-full w-full transition duration-1000 ease-in-out"
              src={inside}
              alt=""
            />

            {/* HEADLINE DIV */}
            <div className="pointer-events-none absolute top-0 left-0 w-full  bg-slate-700 flex items-center justify-center py-5 group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
              <h1 className="text-sm text-white">NEED TO SELL FAST?</h1>
            </div>

            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-slate-700 px-2 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-sm text-white text-center mb-2">
                 IF YOU'RE NEEDING TO SELL IN ANY CONDITION FAST
                </h1>
                <button onClick={() => navigate('/offer')} className="cursor-pointer block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                  GET AN OFFER FAST
                </button>
              </div>
            </div>
          </div>
       </div>

          {/* CARD 3 */}
       <div onClick={() => navigate('/investornetwork')} className="p-5 rounded-lg transition duration-500 ease-in-out hover:bg-white shadow-md hover:shadow-2xl">
       <div className="w-full rounded-lg overflow-hidden shadow-md relative group h-[350px] md:h-[450px]">
            <img
              className="h-full w-full object-cover hover:scale-130 group-hover:scale-130 group-hover:brightness-50 transition duration-1000 ease-in-out"
              src={kitchen}
              alt=""
            />
            {/* HEADLINE DIV */}
            <div className="pointer-events-none absolute top-0 left-0 w-full  bg-slate-700 flex items-center justify-center py-5 group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
              <h1 className="text-sm text-white">LOOKING TO BUY OFF MARKET DEALS?</h1>
            </div>
            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-slate-700 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-sm text-white text-center mb-2">
                  SIGN UP HERE
                </h1>
                <button onClick={() => navigate('/investornetwork')} className="cursor-pointer block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
       </div>
          {/* CARD 4 */}
          <div onClick={() => navigate('/offer')} className="p-5 rounded-lg transition duration-500 ease-in-out hover:bg-white shadow-md hover:shadow-2xl">
          <div className="w-full rounded-lg overflow-hidden shadow-md relative group h-[350px] md:h-[450px]">
            <img
              className="h-full w-full object-cover hover:scale-130 group-hover:scale-130 group-hover:brightness-50 transition duration-1000 ease-in-out"
              src={construction}
              alt=""
            />
            {/* HEADLINE DIV */}
            <div className="pointer-events-none absolute top-0 left-0 w-full  bg-slate-700 flex items-center justify-center py-5 group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
              <h1 className="text-sm text-white">WANT TO BUY A BRAND NEW HOME?</h1>
            </div>
            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-slate-700 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-sm text-white text-center mb-2">
                  START YOUR BRAND NEW HOME JOURNEY
                </h1>
                <a href="https://www.showingnew.com/davidmartinez210">
                  <button className="cursor-pointer block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
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
