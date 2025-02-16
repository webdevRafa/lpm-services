import { Slideshow } from "../components/Slideshow";

export const Home: React.FC = () => {
  return (
    <>
      <div className="container mx-auto  top-0">
        <Slideshow />
        <div className="h-[3000px]">
          <div className="bg-gradient-to-t from-slate-950 to-slate-700 shadow-md mx-auto w-[90%] max-w-[600px] translate-y-[-50%] py-10">
            <h1 className="text-2xl text-white text-center">
              LEAKED PROOF MANAGEMENT SERVICES
            </h1>
            <p className="text-neutral-400 text-center">
              Your trusted partner in real estate—connecting buyers, sellers,
              and investors for seamless deals and real opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
