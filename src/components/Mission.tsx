import image from "../assets/riverwalk.jpg";

export const Mission: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 pt-[50px] pb-[100px]">
        <h1 className="text-center text-2xl md:text-4xl text-white mb-5">
          Your Trusted Partner in Real Estate – Buying, Selling & Investing Made
          Simple.
        </h1>
        <div className="flex flex-col md:flex-row gap-5  space-around mx-auto max-w-[1400px] ">
          <div className="w-full flex items-center justify-center">
            <p className="text-gray-400 text-center text-sm md:text-lg">
              At LPM, we’re redefining real estate by making buying, selling,
              and investing faster, smarter, and stress-free. Whether you're
              looking for your next home, need to sell quickly, or want
              off-market investment opportunities, we bring data-driven
              insights, seamless transactions, and real results. Our approach is
              built on transparency, speed, and value, ensuring every deal is a
              win-win. Real estate shouldn’t be complicated—we make it simple,
              efficient, and built for today’s market. Let’s get you to your
              next move.
            </p>
          </div>
          <div className="w-full">
            <img className="" src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
