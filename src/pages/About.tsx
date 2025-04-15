import { AboutUs } from "../components/AboutUs";
import { AboutHero } from "../components/AboutHero";
import { Footer } from "../components/Footer";
export const About: React.FC = () => {
  return (
    <>
      <AboutHero key="about-page-video" />
     <div className="offwhite">
     <AboutUs />
     <Footer />
     </div>
    </>
  );
};
