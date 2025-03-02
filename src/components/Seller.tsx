import { useState } from "react";

export const Seller: React.FC = () => {
  const [selling, setSelling] = useState(false);
  return (
    <>
      {/* FIXED BUTTON, USESTATE TRIGGERS FORM TO POP UP */}
      <div className="fixed bottom-5  right-5 bg-white shadow-md">
        <button onClick={() => setSelling(true)} className="p-1 px-2">
          I'M A SELLER
        </button>
      </div>

      {/*  FORM CONTAINER */}
      <div className="fixed top-32 py-10 px-4  w-full h-[100vh] bg-black">
        <h1 className="text-white text-3xl md:text-6xl text-center">
          Interested in selling?
        </h1>
        <p className="text-gray-400 text-center">
          Please fill out this quick form and we will respond soon.
        </p>

        {/* FORM */}
        <div className="mx-auto max-w-[600px] mt-10 flex justify-center">
          <form>
            <div className="flex justify-between gap-3 mb-2">
              <label className="text-gray-400" htmlFor="bedrooms">
                # of Bedrooms
              </label>
              <input
                id="bedrooms"
                className="text-gray-400 bg-gray-900 shadow-md rounded-lg"
                type="text"
              />
            </div>

            <div className="flex justify-between gap-3 mb-2">
              <label className="text-gray-400" htmlFor="baths">
                # of Baths
              </label>
              <input
                id="baths"
                className="text-gray-400 bg-gray-900 shadow-md rounded-lg"
                type="text"
              />
            </div>

            <div className="flex justify-between gap-3 mb-2">
              <label className="text-gray-400" htmlFor="squareFootage">
                Sq Footage
              </label>
              <input
                id="squareFootage"
                className="text-gray-400 bg-gray-900 shadow-md rounded-lg"
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
