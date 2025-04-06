import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentTheme,
  setThemePreference,
} from "../../feature/theme/theme";
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
  FaSun,
  FaMoon,
} from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    dispatch(setThemePreference(currentTheme === "light" ? "dark" : "light"));
  };

  const navItems = [
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
    // Ensure scroll to top when navigating
    window.scrollTo(0, 0);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <div className="fixed top-0 left-0 right-0 z-[60]">
          <motion.div
            className={`w-full px-8 sm:px-12 lg:px-16 transition-colors duration-300
              ${hasScrolled ? "bg-[#1E293B]" : "bg-transparent"}`}
          >
            <div className="flex items-center justify-between p-3 rounded-b-lg">
              <div className="flex items-center gap-2">
                <span
                  onClick={() => handleNavigation("/")}
                  className="text-lg font-bold bg-gradient-to-r from-[#4ADE80] via-[#00CED1] to-[#FF8C00] text-transparent bg-clip-text cursor-pointer"
                >
                  progHubs
                </span>
              </div>
              <div className="flex items-center gap-2">
                <nav className="flex items-center gap-1">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigation(item.path)}
                      className={`relative px-4 py-2 rounded-md transition-all duration-300 cursor-pointer flex items-center gap-2
                        ${
                          location.pathname === item.path
                            ? "text-white bg-[#4ADE80]/20 font-medium"
                            : "text-[#94A3B8] hover:text-white hover:bg-[#334155]/50"
                        }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="desktopActiveIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4ADE80] rounded-full"
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
                </nav>
                {/* Theme Toggle Button */}
                {/* <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-[#334155]/50 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentTheme === "light" ? (
                    <FaMoon className="w-4 h-4 text-[#4ADE80]" />
                  ) : (
                    <FaSun className="w-4 h-4 text-[#4ADE80]" />
                  )}
                </motion.button> */}
              </div>
            </div>
          </motion.div>
        </div>
        {/* Add padding to account for fixed header */}
        <div className="h-16" />
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-[60]">
          <motion.div
            className={`w-full px-4 sm:px-6 transition-colors duration-300
              ${hasScrolled ? "bg-[#1E293B]" : "bg-transparent"}`}
          >
            <div className="flex items-center justify-between p-3 border-b border-[#334155]/50">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold bg-gradient-to-r from-[#4ADE80] via-[#00CED1] to-[#FF8C00] text-transparent bg-clip-text cursor-pointer">
                  progHubs
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Theme Toggle Button */}
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-[#334155]/50 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentTheme === "light" ? (
                    <FaMoon className="w-5 h-5 text-[#4ADE80]" />
                  ) : (
                    <FaSun className="w-5 h-5 text-[#4ADE80]" />
                  )}
                </motion.button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-lg hover:bg-[#334155]/50 transition-colors cursor-pointer"
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="w-5 h-5 text-[#4ADE80]" />
                  ) : (
                    <FaBars className="w-5 h-5 text-[#94A3B8]" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
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
                className="fixed inset-0 bg-[#1E293B] z-[40] cursor-pointer"
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
                              ? "border-b border-[#334155]"
                              : ""
                          }
                          ${
                            location.pathname === item.path
                              ? "bg-[#4ADE80]/20 text-white font-medium"
                              : "text-[#94A3B8] hover:bg-[#334155]/50 hover:text-white"
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
