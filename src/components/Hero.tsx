import house from "../assets/pics/color-bg.jpg";

export const Hero: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center relative h-[600px]">
        <div>
          <h1 className="text-white text-5xl md:text-6xl text-center">
            Leaked Proof Management Services
          </h1>

          <p className="text-white text-center text-sm md:text-lg mt-3">
            Real Estate, Simplified – We Help You Buy, Sell & Invest With
            Confidence.
          </p>
          <a href="#mission">
            <button className="block mx-auto border-2 border-white-800 text-white rounded-md transition hover:border-gray-950 hover:text-gray-950 hover:bg-emerald-900 duration-600 ease-in-out p-2 mt-5">
              LEARN MORE
            </button>
          </a>
        </div>

        {/* BG IMAGE */}
        <div className="absolute top-0 left-0 w-full h-[600px] z-[-10]">
          <img className="object-cover bg-image fixed" src={house} alt="" />
        </div>
      </div>
    </>
  );
};
