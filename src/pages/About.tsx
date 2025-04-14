import { AboutUs } from "../components/AboutUs";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
export const About: React.FC = () => {
  return (
    <>
      <Hero />
     <div className="offwhite">
     <AboutUs />
     <Footer />
     </div>
    </>
  );
};
