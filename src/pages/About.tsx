import { AboutUs } from "../components/AboutUs";
import { AboutHero } from "../components/AboutHero";
export const About: React.FC = () => {
  return (
    <>
      <AboutHero key="about-page-video" />
     <div className="offwhite">
     <AboutUs />
    
     </div>
    </>
  );
};
