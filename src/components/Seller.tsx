import { useState } from "react";

export const Seller: React.FC = () => {
  const [selling, setSelling] = useState(false);
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
    console.log(step);
  };
  return (
    <>
      {/* FIXED BUTTON, USESTATE TRIGGERS FORM TO POP UP */}
      <div className="fixed bottom-5  right-5 bg-blue-900 text-white  shadow-md">
        <button
          onClick={() => setSelling(true)}
          className="p-1 px-2 cursor-pointer"
        >
          I'M SELLING
        </button>
      </div>

      {/*  FORM CONTAINER */}
      {selling && (
        <div className="fixed top-0 pt-40 px-4  w-full h-[100vh] bg-black">
          <h1 className="text-white text-3xl md:text-6xl text-center">
            Interested in selling?
          </h1>
          <p className="text-gray-400 text-center">
            Please fill out this quick form and we will respond soon.
          </p>

          {/* FORM */}
          <div className="mx-auto max-w-[600px] mt-10 flex justify-center">
            <form>
              {/* FIRST STEP */}
              {step === 0 && (
                <>
                  <div className="relative">
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
                    <div className="flex justify-between gap-3 mb-2">
                      <label className="text-gray-400" htmlFor="yearOfHome">
                        Year of Home
                      </label>
                      <input
                        id="yearOfHome"
                        className="text-gray bg-gray-900 shadow-md rounded-lg"
                        type="text"
                      />
                    </div>
                    <button
                      onClick={handleNextStep}
                      className="absolute right-0 mt-2 py-1 px-2 rounded-sm bg-gray-500 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
                    >
                      NEXT
                    </button>
                    <button
                      onClick={() => setSelling(false)}
                      className="absolute left-0 mt-2 py-1 px-2 rounded-sm bg-red-900 hover:bg-red-300 cursor-pointer transition duration-300 ease-in-out"
                    >
                      CANCEL
                    </button>
                  </div>
                </>
              )}
              {step === 1 && (
                <div>
                  <h1 className="text-white">testing this out</h1>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};
