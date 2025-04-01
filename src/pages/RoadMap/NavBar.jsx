import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaInfoCircle,
  FaUserPlus,
  FaUsers,
  FaCode,
  FaCrown,
  FaGamepad,
  FaBars,
  FaTimes,
  FaHome,
} from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: FaHome,
      path: "/",
    },
    {
      id: "about",
      label: "About progHubs",
      icon: FaInfoCircle,
      path: "/about",
    },
    {
      id: "member",
      label: "Become a Member",
      icon: FaUserPlus,
      path: "/member",
    },
    {
      id: "core",
      label: "Join Core Team",
      icon: FaUsers,
      path: "/core",
    },
    {
      id: "developers",
      label: "Our Team",
      icon: FaCode,
      path: "/developers",
    },
    {
      id: "leaders",
      label: "Leadership",
      icon: FaCrown,
      path: "/leaders",
    },
    {
      id: "games",
      label: "Games",
      icon: FaGamepad,
      path: "/games",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden sm:block max-w-3xl mx-auto mb-4 px-4 sm:px-6 relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-[#1E293B]/40 backdrop-blur-sm rounded-lg" />

        {/* Gradient border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4ADE80]/20 via-transparent to-[#4ADE80]/20" />

        {/* Content */}
        <div className="relative grid grid-cols-7 gap-0.5 p-0.5">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`relative py-2 px-3 rounded-md transition-all duration-300 cursor-pointer
                ${
                  location.pathname === item.path
                    ? "text-[#4ADE80]"
                    : "text-[#94A3B8] hover:text-white/90"
                }`}
              onClick={() => handleNavigation(item.path)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active indicator */}
              {location.pathname === item.path && (
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
              <div className="relative z-10 flex items-center justify-center gap-1.5">
                <item.icon className="text-sm" />
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

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-[60]">
          <div className="flex items-center justify-between p-3 bg-[#1E293B] border-b border-[#334155]">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#4ADE80] cursor-pointer">
                progHubs
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-[#334155] transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-5 h-5 text-[#4ADE80]" />
              ) : (
                <FaBars className="w-5 h-5 text-[#94A3B8]" />
              )}
            </button>
          </div>
        </div>

        {/* Add padding to account for fixed header */}
        <div className="h-16" />

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Fixed Full-width Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-[#1E293B]/80 backdrop-blur-md z-[40] cursor-pointer"
                onClick={handleCloseMenu}
              />

              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[50]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-full flex flex-col">
                  {/* Menu Items */}
                  <div className="flex-1 overflow-y-auto py-2 mt-16 scrollbar-thin scrollbar-track-[#1E293B] scrollbar-thumb-[#334155] hover:scrollbar-thumb-[#4ADE80]/20">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavigation(item.path)}
                        className={`flex items-center gap-3 w-full px-4 py-3 transition-all duration-300 cursor-pointer
                          ${
                            index !== navItems.length - 1
                              ? "border-b border-[#334155]/50"
                              : ""
                          }
                          ${
                            location.pathname === item.path
                              ? "bg-[#4ADE80]/10 text-[#4ADE80]"
                              : "text-[#94A3B8] active:bg-[#334155] hover:bg-[#334155]/50"
                          }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3 w-full">
                          <item.icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </div>
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="w-1 h-6 bg-[#4ADE80] rounded-full ml-auto"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 35,
                            }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavBar;
