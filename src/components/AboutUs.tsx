import videosrc from "../assets/videos/setup.mp4";

export const AboutUs: React.FC = () => {
  return (
    <>
      <div className="w-full md:py-[50px] flex flex-col md:flex-row items-center  lg:items-end justify-center max-w-[1400px] mx-auto">
        <div className="p-5 w-full h-full mx-auto max-w-[1400px] shadow-md hover:shadow-xl transition duration-300 ease-in-out ">
          <h1 className="text-gray-900 text-center text-xl font-bold md:text-2xl lg:text-4xl mb-10">
            At Leaked Proof Management Services, we are dedicated to guiding you
            through every step of the real estate investing process with clarity
            and confidence.
          </h1>
          <p className="text-left text-sm text-gray-800 mb-4">
            Whether you're looking to buy or sell a property, we can help you
            navigate the market, offering expert advice on properties in any
            condition.
          </p>
          <p className="text-left text-sm text-gray-800 mb-4">
            We work closely with licensed professionals including real estate
            agents, attorneys, and financial advisors to ensure you receive{" "}
            <span className="font-bold text-gray-700">
              top-quality service at every stage.
            </span>
          </p>
          <p className="text-left text-sm text-gray-800 mb-4">
            Our mission is to{" "}
            <span className="font-bold text-gray-700">
              educate and empower you
            </span>
            , providing a thorough understanding of the process so you can make
            informed decisions.
          </p>
          <p className="text-left text-sm text-gray-800 mb-4">
            Whether you're buying your first investment property or selling one
            in any condition.{" "}
            <span className="font-bold text-gray-700">
              We're here to support you every step of the way
            </span>
            , making your real estate journey a success.
          </p>
        </div>

        {/* YOUTUBE VIDEO */}
        <div className="my-10 md:my-0 bg-white shadow-md h-full w-full max-w-[200px] flex items-center justify-center">
       
         <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          playsInline
          src={videosrc}
        ></video>
     
        </div>
      </div>
    </>
  );
};
