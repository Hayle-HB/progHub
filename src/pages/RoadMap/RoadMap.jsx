import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JoinTeam from "./JoinTeam";
import AboutUs from "./AboutUs.jsx";
import NavBar from "./NavBar";
import BecomeAMember from "./BecomeAMember";
import Developers from "./Developers";
import Leaders from "./Leaders";

const RoadMap = () => {
  const [selectedPath, setSelectedPath] = useState("member"); // "member" or "core" or "about" or "developers" or "leaders"

  return (
    <div className="min-h-screen bg-[#0A0F1C] bg-gradient-to-br from-[#0A0F1C] via-[#111827] to-[#1F2937] py-12 px-4 sm:px-6 lg:px-8">
      {/* Path Selection */}
      <NavBar selectedPath={selectedPath} setSelectedPath={setSelectedPath} />

      <AnimatePresence mode="wait">
        {selectedPath === "member" ? (
          <motion.div
            key="member"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <BecomeAMember />
          </motion.div>
        ) : selectedPath === "core" ? (
          <motion.div
            key="core"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <JoinTeam />
          </motion.div>
        ) : selectedPath === "developers" ? (
          <motion.div
            key="developers"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Developers />
          </motion.div>
        ) : selectedPath === "leaders" ? (
          <motion.div
            key="leaders"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Leaders />
          </motion.div>
        ) : (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AboutUs />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Add the required styles to your global CSS or style tag
const styles = `
  .clip-path-hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
`;

export default RoadMap;
