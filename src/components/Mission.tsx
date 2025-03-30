import image from "../assets/pics/fancy.jpg";
import inside from "../assets/pics/room.jpg";
import kitchen from "../assets/pics/kitchen.jpg";
import construction from "../assets/pics/construction.jpg";

export const Mission: React.FC = () => {
  return (
    <>
      <div
        id="mission"
        className=" bg-gradient-to-t bg-white py-[10px] md:py-[100px]"
      >
        <div className="flex flex-col md:flex-row gap-5  space-around mx-auto max-w-[1400px] "></div>
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10">
          {/* CARD 1 */}
          <div className="w-full rounded-lg overflow-hidden shadow-md relative group h-[500px]">
            <img
              className="h-full w-full object-cover hover:scale-130 group-hover:scale-130 group-hover:brightness-50 transition duration-1000 ease-in-out"
              src={image}
              alt=""
            />
            {/* HEADLINE DIV */}
            <div className="absolute top-0 left-0 w-full  bg-cyan-700 flex items-center justify-center py-3 group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
              <h1 className="text-white">LIST YOUR HOME</h1>
            </div>
            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-cyan-700 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-white mb-2 text-center">
                  interested in listing your home on the market?
                </h1>
                <a href="https://www.onereal.com/david-martinez-1">
                  <button className="block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                    GET STARTED
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*  CARD 2 */}
          <div className="w-full rounded-lg shadow-md overflow-hidden h-[500px] relative group bg-cyan">
            <img
              className="hover:scale-130 object-cover group-hover:scale-130 group-hover:brightness-50 h-full w-full transition duration-1000 ease-in-out"
              src={inside}
              alt=""
            />

            {/* HEADLINE DIV */}
            <div className="absolute top-0 left-0 w-full  bg-cyan-700 flex items-center justify-center py-3 group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
              <h1 className="text-white">NEED TO SELL FAST?</h1>
            </div>

            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-cyan-700 px-2 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-white text-center mb-2">
                  If you're needing to sell in any condition and fast..
                </h1>
                <button className="block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                  GET AN OFFER FAST
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-full rounded-lg overflow-hidden shadow-md relative group h-[500px]">
            <img
              className="h-full w-full object-cover hover:scale-130 group-hover:scale-130 group-hover:brightness-50 transition duration-1000 ease-in-out"
              src={kitchen}
              alt=""
            />
            {/* HEADLINE DIV */}
            <div className="absolute top-0 left-0 w-full  bg-cyan-700 flex items-center justify-center py-3 group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
              <h1 className="text-white">Want to buy a brand new home?</h1>
            </div>
            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-cyan-700 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-white text-center mb-2">
                  we can help you find the right one for you
                </h1>
                <button className="block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                  get started
                </button>
              </div>
            </div>
          </div>
          {/* CARD 4 */}
          <div className="w-full rounded-lg overflow-hidden shadow-md relative group h-[500px]">
            <img
              className="h-full w-full object-cover hover:scale-130 group-hover:scale-130 group-hover:brightness-50 transition duration-1000 ease-in-out"
              src={construction}
              alt=""
            />
            {/* HEADLINE DIV */}
            <div className="absolute top-0 left-0 w-full  bg-cyan-700 flex items-center justify-center py-3 group-hover:translate-y-[-100%] transition duration-600 ease-in-out">
              <h1 className="text-white">WANT TO BUY A BRAND NEW HOME?</h1>
            </div>
            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-cyan-700 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-white text-center mb-2">
                  START YOUR BRAND NEW HOME JOURNEY
                </h1>
                <a href="https://www.showingnew.com/davidmartinez210">
                  <button className="block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                    click here
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
