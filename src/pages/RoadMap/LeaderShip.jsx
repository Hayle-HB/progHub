import React from "react";
import { motion } from "framer-motion";

const LeaderShip = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] bg-[#0A0F1C] bg-gradient-to-br from-[#0A0F1C] via-[#111827] to-[#1F2937] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative"
        >
          {/* Background Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#4ADE80]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#3B82F6]/10 rounded-full blur-[100px]" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 space-y-8 sm:space-y-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-4">
                Core Team Applications
              </h1>
              <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto px-4">
                Join the leadership team that's shaping the future of
                development
              </p>
            </motion.div>

            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Status Badge */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80] to-[#3B82F6] blur-xl opacity-20 rounded-full transform scale-110" />
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative bg-[#1E293B]/80 backdrop-blur-sm border border-[#4ADE80]/20 rounded-full px-8 py-4"
                >
                  <span className="text-xl sm:text-2xl text-[#E2E8F0] font-medium">
                    Opening Soon
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto px-4">
                We're preparing something special for future core team members.
                Stay tuned for an exciting opportunity to shape the future of
                progHubs.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto px-4 mt-8">
                {[
                  { title: "Leadership", desc: "Guide project development" },
                  { title: "Innovation", desc: "Drive technical decisions" },
                  { title: "Community", desc: "Build developer relationships" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#334155] rounded-lg p-4 hover:border-[#4ADE80]/30 transition-colors duration-300"
                  >
                    <h3 className="text-[#E2E8F0] font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8]">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Notification Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-6 py-2.5 bg-gradient-to-r from-[#4ADE80] to-[#3B82F6] text-white rounded-full text-sm font-semibold 
                  shadow-lg shadow-[#4ADE80]/20 hover:shadow-[#4ADE80]/30 transition-all duration-300"
              >
                Notify Me When Applications Open
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeaderShip;
