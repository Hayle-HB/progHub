import React from "react";
import RoadMap from "./pages/RoadMap/RoadMap";
import { AnimatePresence } from "framer-motion";
import Footer from "./pages/RoadMap/Foooter";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1C] flex flex-col">
      <AnimatePresence mode="wait">
        <main className="flex-grow">
          <RoadMap />
        </main>
        <Footer />
      </AnimatePresence>
    </div>
  );
};

export default App;
