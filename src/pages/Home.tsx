import { Slideshow } from "../components/Slideshow";

export const Home: React.FC = () => {
  return (
    <>
      <div className="container mx-auto  top-0">
        <Slideshow />
        <div className="h-[3000px]">
          <div className="px-3 bg-gray-900 shadow-md mx-auto w-[90%] max-w-[600px] translate-y-[-30%] py-10">
            <h1 className="text-xl text-white text-center">
              LEAKED PROOF MANAGEMENT SERVICES
            </h1>
            <p className="text-sm text-neutral-400 text-center">
              Your trusted partner in real estate—connecting buyers, sellers,
              and investors for seamless deals and real opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
