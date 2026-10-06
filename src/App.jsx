import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Heating from "./pages/Heating";
import Cooling from "./pages/Cooling";
import AirQuality from "./pages/AirQuality";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/heating" element={<Heating />} />
      <Route path="/cooling" element={<Cooling />} />
      <Route path="/air-quality" element={<AirQuality />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
