import image from "../assets/pics/fancy.jpg";
import inside from "../assets/pics/room.jpg";
import kitchen from "../assets/pics/kitchen.jpg";
import construction from "../assets/pics/construction.jpg";

export const Mission: React.FC = () => {
  return (
    <>
      <div
        id="mission"
        className=" bg-gradient-to-t bg-white py-[30px] md:py-[100px]"
      >
        <h1 className="text-center text-2xl md:text-4xl text-white mb-5">
          Your Trusted Partner in Real Estate – Buying, Selling & Investing Made
          Simple.
        </h1>
        <div className="flex flex-col md:flex-row gap-5  space-around mx-auto max-w-[1400px] ">
          <div className="w-full flex items-center justify-center">
            <div className="px-3">
              <h1 className="text-gray-900 text-center text-xl font-bold md:text-2xl lg:text-4xl mb-5">
                At Leaked Proof Management Services, we are dedicated to guiding
                you through every step of the real estate investing process with
                clarity and confidence.
              </h1>
              <p className="text-left text-sm text-gray-800 mb-4">
                Whether you're looking to buy or sell a property, we can help
                you navigate the market, offering expert advice on properties in
                any condition.
              </p>
              <p className="text-left text-sm text-gray-800 mb-4">
                We work closely with licensed professionals including real
                estate agents, attorneys, and financial advisors to ensure you
                receive{" "}
                <span className="font-bold text-gray-700">
                  top-quality service at every stage.
                </span>
              </p>
              <p className="text-left text-sm text-gray-800 mb-4">
                Our mission is to{" "}
                <span className="font-bold text-gray-700">
                  educate and empower you
                </span>
                , providing a thorough understanding of the process so you can
                make informed decisions.
              </p>
              <p className="text-left text-sm text-gray-800 mb-4">
                Whether you're buying your first investment property or selling
                one in any condition.{" "}
                <span className="font-bold text-gray-700">
                  We're here to support you every step of the way
                </span>
                , making your real estate journey a success.
              </p>
            </div>
          </div>
        </div>
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
              <h1 className="text-white">List Your Home!</h1>
            </div>
            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-cyan-700 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-white mb-2 text-center">
                  interested in listing your home on the market?
                </h1>
                <button className="block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                  get started
                </button>
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
              <h1 className="text-white">Need to sell fast?</h1>
            </div>

            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-cyan-700 px-2 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-white text-center mb-2">
                  If you're needing to sell in any condition and fast..
                </h1>
                <button className="block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                  get an offer
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
              <h1 className="text-white">Under Construction</h1>
            </div>
            {/* SLIDER DIV */}
            <div className="absolute bottom-0 left-0 w-full h-[130px] group bg-cyan-700 translate-y-[100%] group-hover:translate-y-0 transition duration-600 ease-in-out flex items-center justify-center">
              <div>
                <h1 className="text-white text-center mb-2">
                  section under construction
                </h1>
                <button className="block mx-auto bg-amber-50 py-2 px-4 rounded-md shadow-md font-bold hover:scale-105 transition duration-300">
                  click here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
