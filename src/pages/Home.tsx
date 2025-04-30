import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { Services } from "../components/Services";

export const Home: React.FC = () => {
  return (
    <>
      <div>
        <Hero key="home-page-video" />
       <div className="bg-spurs-silver py-5">
       <Mission />
        <Services />

       </div>
        <Footer />
      </div>
    </>
  );
};
