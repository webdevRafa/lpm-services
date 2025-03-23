import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { Services } from "../components/Services";
import { Seller } from "../components/Seller";

export const Home: React.FC = () => {
  return (
    <>
      <div>
        <Hero />
        <Mission />
        <Services />

        <Footer />
        <Seller />
      </div>
    </>
  );
};
