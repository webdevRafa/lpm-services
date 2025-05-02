import "./App.css";
import { Home } from "./pages/Home";
import { Navbar } from "./Navbar";
import { About } from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Offer } from "./pages/Offer";
import { InvestorNetwork } from "./pages/InvestorNetwork";
import { Contact } from "./pages/Contact";
import { ViewListingsPage } from "./pages/ViewListingsPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    {/* DESKTOP NAVBAR */}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/investornetwork" element={<InvestorNetwork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/viewlistingspage" element={<ViewListingsPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
