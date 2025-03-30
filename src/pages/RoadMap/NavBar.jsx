import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle, FaUserPlus, FaUsers } from "react-icons/fa";

const NavBar = ({ selectedPath, setSelectedPath }) => {
  const navItems = [
    {
      id: "about",
      label: "About progHubs",
      icon: FaInfoCircle,
    },
    {
      id: "member",
      label: "Become a Member",
      icon: FaUserPlus,
    },
    {
      id: "core",
      label: "Join Core Team",
      icon: FaUsers,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-[#1E293B]/40 backdrop-blur-sm rounded-lg" />

        {/* Gradient border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4ADE80]/20 via-transparent to-[#4ADE80]/20" />

        {/* Content */}
        <div className="relative grid grid-cols-3 gap-1 p-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`relative py-2.5 px-4 rounded-md transition-all duration-300
                ${
                  selectedPath === item.id
                    ? "text-[#4ADE80]"
                    : "text-[#94A3B8] hover:text-white/90"
                }`}
              onClick={() => setSelectedPath(item.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active indicator */}
              {selectedPath === item.id && (
                <motion.div
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-[#4ADE80]/10 to-[#22C55E]/10"
                  layoutId="activeButton"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center gap-2">
                <item.icon className="text-base" />
                <span className="text-xs font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </div>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 rounded-md bg-[#4ADE80]/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
