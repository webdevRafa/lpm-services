import { MdRealEstateAgent } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";

export const Services: React.FC = () => {
  return (
    <>
      <div className="w-full py-20  bg-white">
        <div className="flex flex-col md:flex-row gap-20 px-10 w-full  justify-center mx-auto">
          <div className="p-5 shadow-md">
            <MdRealEstateAgent className="size-40 mb-5 mx-auto text-white bg-slate-700 rounded-full p-2" />

            <h1 className="text-center text-3xl">Hassle-Free Selling</h1>
            <p className="text-gray-500 text-center">
              Need to sell fast? We offer cash deals with no agent fees, no
              repairs, and no hassle. Whether you're relocating, avoiding
              foreclosure, or just want a quick close, we make it easy.
            </p>
          </div>
          <div className="p-5 shadow-md">
            <AiOutlineStock className="size-40 mb-5 mx-auto text-white bg-slate-700 rounded-full p-2" />

            <h1 className="text-center text-3xl">
              Exclusive Listings & Off-Market Deals
            </h1>
            <p className="text-gray-500 text-center">
              Get access to the best properties before they hit the market.
              Whether you're looking for your dream home or your next
              investment, we connect buyers with exclusive deals.
            </p>
          </div>
          <div className="p-5 shadow-md">
            <GiReceiveMoney className="size-40 mb-5 mx-auto text-white bg-slate-700 rounded-full p-2" />

            <h1 className="text-center text-3xl">
              Investor-Friendly Opportunities
            </h1>
            <p className="text-gray-500 text-center">
              Looking to invest? We provide off-market wholesale deals that
              offer high ROI potential. Let’s build your portfolio with
              properties priced below market value.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
