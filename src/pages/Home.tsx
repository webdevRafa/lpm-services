import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { ViewListings } from "../components/ViewListings";

export const Home: React.FC = () => {
  return (
    <>
      <div>
        <Hero key="home-page-video" />
       <div className="bg-spurs-silver pb-20">
       
       <Mission />
       <ViewListings />
  
       </div>
       
        <Footer />
      </div>
    </>
  );
};
