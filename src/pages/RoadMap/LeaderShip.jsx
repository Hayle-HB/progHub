import React from "react";
import { motion } from "framer-motion";

const LeaderShip = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1C] bg-gradient-to-br from-[#0A0F1C] via-[#111827] to-[#1F2937] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Core Team Applications
        </motion.h1>

        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80] to-[#3B82F6] blur-xl opacity-20 rounded-full" />
          <p className="relative text-xl md:text-2xl text-[#94A3B8] font-medium px-8 py-4">
            Opening Soon
          </p>
        </motion.div>

        <motion.p
          className="mt-6 text-[#94A3B8] max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We're preparing something special for future core team members. Stay
          tuned for an exciting opportunity to shape the future of progHubs.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LeaderShip;
