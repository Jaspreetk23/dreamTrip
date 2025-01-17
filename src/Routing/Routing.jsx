import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../pages/Homepage/HeroSection";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
