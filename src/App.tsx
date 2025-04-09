import "./App.css";
import { Home } from "./pages/Home";
import { Navbar } from "./Navbar";
import { About } from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Offer } from "./pages/Offer";
import { InvestorNetwork } from "./pages/InvestorNetwork";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/investornetwork" element={<InvestorNetwork />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
