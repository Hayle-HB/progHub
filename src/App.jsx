import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/RoadMap/NavBar";
import JoinTeam from "./pages/RoadMap/JoinTeam";
import AboutUs from "./pages/RoadMap/AboutUs";
import BecomeAMember from "./pages/RoadMap/BecomeAMember";
import Developers from "./pages/RoadMap/Developers";
import Leaders from "./pages/RoadMap/Leaders";
import Game from "./pages/Games/Game";
import Footer from "./pages/RoadMap/Foooter";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0F1C] bg-gradient-to-br from-[#0A0F1C] via-[#111827] to-[#1F2937] flex flex-col">
        <div className="py-12 px-4 sm:px-6 lg:px-8 flex-grow">
          <NavBar />
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/member" element={<BecomeAMember />} />
            <Route path="/core" element={<JoinTeam />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/leaders" element={<Leaders />} />
            <Route path="/games" element={<Game />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
