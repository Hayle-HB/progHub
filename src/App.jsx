import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/RoadMap/NavBar";
import Footer from "./pages/RoadMap/Footer";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import JoinTeam from "./pages/RoadMap/JoinTeam";
import BecomeAMember from "./pages/RoadMap/BecomeAMember";
import Developers from "./pages/RoadMap/Developers";
import Leaders from "./pages/RoadMap/Leaders";
import Game from "./pages/Games/Game";

// Loading spinner component
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0A0F1C]/80 z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#4ADE80]/20 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-[#4ADE80] rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
        <div className="mt-4 text-center text-[#4ADE80] font-medium">
          Loading...
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0A0F1C] bg-gradient-to-br from-[#0A0F1C] via-[#111827] to-[#1F2937] flex flex-col">
        {initialLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="py-12 px-4 sm:px-6 lg:px-8 flex-grow">
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                {/* <Route path="/member" element={<BecomeAMember />} /> */}
                <Route path="/core" element={<JoinTeam />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/leaders" element={<Leaders />} />
                <Route path="/games" element={<Game />} />
                <Route path="/games/memory" element={<Game />} />
                <Route path="/games/word" element={<Game />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
