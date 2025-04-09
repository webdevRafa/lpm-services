import "./App.css";
import { Home } from "./pages/Home";
import { Navbar } from "./Navbar";
import { About } from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Offer } from "./pages/Offer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </>
  );
}

export default App;
