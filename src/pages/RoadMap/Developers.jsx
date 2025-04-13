import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaEnvelope,
  FaGlobe,
  FaFilter,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

import { developers } from "../../assets/Developers/Developers";

const Developers = () => {
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedSkills, setSelectedSkills] = useState(new Set(["All"]));
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [pinnedDeveloper, setPinnedDeveloper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load pinned developer from localStorage on component mount
  useEffect(() => {
    const storedPinnedDev = localStorage.getItem("pinnedDeveloper");
    if (storedPinnedDev) {
      const { email, timestamp } = JSON.parse(storedPinnedDev);
      // Check if the stored data is less than 24 hours old
      if (Date.now() - timestamp < 30 * 24 * 60 * 60 * 1000) {
        setPinnedDeveloper(email);
      } else {
        localStorage.removeItem("pinnedDeveloper");
      }
    }
  }, []);

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = async () => {
      setIsLoading(true);
      const hash = window.location.hash.slice(1); // Remove the # symbol
      if (hash) {
        const developer = developers.find((dev) => dev.email === hash);
        if (developer) {
          setPinnedDeveloper(hash);
          // Store in localStorage with timestamp
          localStorage.setItem(
            "pinnedDeveloper",
            JSON.stringify({
              email: hash,
              timestamp: Date.now(),
            })
          );
        }
      }
      // Simulate a small delay to show the loading state
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsLoading(false);
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Normalize skills to prevent case-sensitive duplicates
  const normalizeSkill = (skill) => skill.toLowerCase().trim();

  // Extract unique roles and skills with case-insensitive comparison
  const roles = useMemo(
    () => ["All", ...new Set(developers.map((dev) => dev.role))],
    []
  );

  const skills = useMemo(() => {
    const skillMap = new Map();
    developers.forEach((dev) => {
      dev.skills.forEach((skill) => {
        const normalizedSkill = normalizeSkill(skill);
        // Keep the first occurrence of the skill (preserving original casing)
        if (!skillMap.has(normalizedSkill)) {
          skillMap.set(normalizedSkill, skill);
        }
      });
    });
    return ["All", ...Array.from(skillMap.values())].sort();
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkills((prev) => {
      const newSkills = new Set(prev);
      if (skill === "All") {
        return new Set(["All"]);
      }
      newSkills.delete("All");
      if (newSkills.has(skill)) {
        newSkills.delete(skill);
        if (newSkills.size === 0) newSkills.add("All");
      } else {
        newSkills.add(skill);
      }
      return newSkills;
    });
  };

  const clearFilters = () => {
    setSelectedRole("All");
    setSelectedSkills(new Set(["All"]));
  };

  // Update the filter logic to include pinned developer
  const filteredDevelopers = useMemo(() => {
    let filtered = developers.filter((dev) => {
      const roleMatch = selectedRole === "All" || dev.role === selectedRole;
      const skillsMatch =
        selectedSkills.has("All") ||
        Array.from(selectedSkills).every((selectedSkill) =>
          dev.skills.some(
            (devSkill) =>
              normalizeSkill(devSkill) === normalizeSkill(selectedSkill)
          )
        );
      return roleMatch && skillsMatch;
    });

    const haylemeskelIndex = filtered.findIndex(
      (dev) => dev.email === "haylemeskelhaylemariam@gmail.com"
    );

    if (
      haylemeskelIndex !== -1 &&
      pinnedDeveloper !== "haylemeskelhaylemariam@gmail.com"
    ) {
      const haylemeskel = filtered[haylemeskelIndex];
      filtered.splice(haylemeskelIndex, 1);
      filtered.unshift(haylemeskel);
    }

    // If there's a pinned developer and it's in the filtered list, move it to the 3rd position
    if (pinnedDeveloper) {
      const pinnedIndex = filtered.findIndex(
        (dev) => dev.email === pinnedDeveloper
      );
      if (pinnedIndex !== -1) {
        const pinnedDev = filtered[pinnedIndex];
        filtered.splice(pinnedIndex, 1);
        // Insert at the 3rd position (index 2), or at the end if there are fewer than 3 items
        const insertPosition = Math.min(2, filtered.length);
        filtered.splice(insertPosition, 0, pinnedDev);
      }
    }

    return filtered;
  }, [selectedRole, selectedSkills, pinnedDeveloper]);

  const activeFiltersCount =
    (selectedRole === "All" ? 0 : 1) +
    (selectedSkills.has("All") ? 0 : selectedSkills.size);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E2E8F0] mb-2 sm:mb-4">
          Our Amazing Team
        </h1>
        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto">
          Meet the talented developers behind progHubs
        </p>
      </div>

      {/* Filter Toggle Button */}
      <div className="flex flex-col xs:flex-row flex-wrap gap-1.5 mb-3 items-start xs:items-center">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full xs:w-auto px-2.5 sm:px-3 py-1.5 flex items-center justify-between bg-[#1E293B] rounded-lg border border-[#334155] text-[#94A3B8] hover:border-[#4ADE80]/20"
        >
          <div className="flex items-center gap-1.5">
            <FaFilter className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
            <span className="text-xs">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="px-1 py-0.5 text-[10px] bg-[#4ADE80]/10 text-[#4ADE80] rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>
          <FaChevronDown
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 transition-transform ${
              isFilterOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-1 items-center w-full xs:w-auto xs:flex-1 mt-1.5 xs:mt-0">
            {selectedRole !== "All" && (
              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-[#1E293B] rounded-md border border-[#334155] text-[10px]">
                <span className="text-[#94A3B8]">Role: </span>
                <span className="text-[#4ADE80]">{selectedRole}</span>
                <button
                  onClick={() => setSelectedRole("All")}
                  className="ml-0.5 text-[#EF4444] hover:text-[#EF4444] transition-colors"
                >
                  <FaTimes className="w-1.5 h-1.5" />
                </button>
              </div>
            )}
            {!selectedSkills.has("All") &&
              Array.from(selectedSkills).map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-1 px-1.5 py-0.5 bg-[#1E293B] rounded-md border border-[#334155] text-[10px]"
                >
                  <span className="text-[#4ADE80]">{skill}</span>
                  <button
                    onClick={() => handleSkillClick(skill)}
                    className="ml-0.5 text-[#EF4444] hover:text-[#EF4444] transition-colors"
                  >
                    <FaTimes className="w-1.5 h-1.5" />
                  </button>
                </div>
              ))}
            <button
              onClick={clearFilters}
              className="px-1.5 py-0.5 text-[10px] bg-[#1E293B] rounded-md border border-[#334155] text-[#EF4444] 
                hover:bg-[#EF4444]/10 hover:border-[#EF4444]/20 transition-all duration-300"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Filtering Section */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mb-4 flex flex-col xs:flex-row flex-wrap items-start gap-2 bg-[#1E293B]/50 rounded-lg p-2 sm:p-3">
              {/* Role Filter Dropdown */}
              <div className="flex flex-col gap-1 w-full xs:w-auto">
                <span className="text-[10px] text-[#94A3B8]">Role:</span>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full xs:w-auto px-2 py-1 text-[10px] rounded-md bg-[#1E293B] text-[#94A3B8] border border-transparent
                    hover:border-[#4ADE80]/20 hover:bg-[#4ADE80]/10 hover:text-[#4ADE80]
                    focus:outline-none focus:border-[#4ADE80]/20 focus:bg-[#4ADE80]/10 focus:text-[#4ADE80]"
                  style={{ WebkitAppearance: "none", MozAppearance: "none" }}
                >
                  {roles.map((role) => (
                    <option
                      key={role}
                      value={role}
                      className="bg-[#1E293B] text-[#94A3B8]"
                    >
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Skills Filter Buttons */}
              <div className="flex-1 w-full xs:w-auto">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-[#94A3B8]">
                    Skills (matches all selected):
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      className={`group px-1.5 py-0.5 text-[10px] rounded-md transition-all duration-300 flex items-center gap-1
                        ${
                          selectedSkills.has(skill)
                            ? "bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20"
                            : "bg-[#334155]/50 text-[#94A3B8] hover:bg-[#4ADE80]/10 hover:text-[#4ADE80] border border-transparent"
                        }`}
                    >
                      {skill}
                      {selectedSkills.has(skill) && skill !== "All" && (
                        <FaTimes className="w-1.5 h-1.5 opacity-0 group-hover:opacity-100" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Developer Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {isLoading ? (
          <div className="col-span-full flex items-center justify-center py-12">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-4 border-[#4ADE80]/20 border-t-[#4ADE80] animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-8 h-8 rounded-full border-4 border-[#00CED1]/20 border-t-[#00CED1] animate-spin"
                  style={{ animationDirection: "reverse" }}
                />
              </div>
            </div>
          </div>
        ) : filteredDevelopers.length > 0 ? (
          filteredDevelopers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-full"
            >
              {/* Card glow effect */}
              <div
                className="absolute -inset-0.5 bg-[#4ADE80] rounded-xl opacity-0 
                group-hover:opacity-[0.03] blur-sm transition-opacity duration-500"
              />

              <div
                className="relative bg-[#1E293B] rounded-xl border border-[#334155] 
                transition-all duration-500 group-hover:border-[#4ADE80]/10 h-full flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-xl bg-[#1E293B]">
                  {dev.image ? (
                    <>
                      <img
                        src={dev.image}
                        alt={dev.name}
                        className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-60" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:bg-[#4ADE80]/5 transition-all duration-300">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80] to-[#3B82F6] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1E293B] border-2 border-[#4ADE80]/20 flex items-center justify-center group-hover:border-[#4ADE80]/40 transition-all duration-300">
                          <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4ADE80] to-[#3B82F6] text-transparent bg-clip-text">
                            {dev.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg sm:text-xl font-bold text-[#E2E8F0] group-hover:text-[#4ADE80] transition-colors duration-300">
                          {dev.name}
                        </h3>
                        <p className="text-sm text-[#94A3B8] group-hover:text-[#3B82F6] transition-colors duration-300">
                          {dev.role}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-3 sm:p-4 flex flex-col flex-grow">
                  <div className="mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-[#E2E8F0] line-clamp-1">
                      {dev.name}
                    </h3>
                    <p className="text-xs text-[#4ADE80] line-clamp-1">
                      {dev.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#94A3B8] mb-2 sm:mb-3 line-clamp-2">
                    {dev.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                    {dev.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-1.5 py-0.5 bg-[#334155] text-[#CBD5E1] text-[10px] rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {dev.skills.length > 3 && (
                      <span className="px-1.5 py-0.5 bg-[#334155] text-[#CBD5E1] text-[10px] rounded-full">
                        +{dev.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <motion.a
                        href={dev.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                      >
                        <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                      <motion.a
                        href={dev.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                      >
                        <FaLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                      <motion.a
                        href={dev.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                      >
                        <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                      <motion.a
                        href={dev.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                      >
                        <FaTelegram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${dev.email}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                      >
                        <FaEnvelope className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                      <motion.a
                        href={dev.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                      >
                        <FaGlobe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full flex flex-col items-center justify-center py-8 sm:py-12 px-4"
          >
            <div className="bg-[#1E293B] rounded-xl p-4 sm:p-6 border border-[#334155] text-center max-w-md w-full">
              <div className="text-[#4ADE80] mb-3">
                <FaFilter className="w-5 h-5 sm:w-6 sm:h-6 mx-auto opacity-50" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#E2E8F0] mb-2">
                No developers found
              </h3>
              <p className="text-xs text-[#94A3B8]">
                No developers match your current filter criteria. Try adjusting
                your filters or
                <button
                  onClick={clearFilters}
                  className="text-[#4ADE80] hover:underline focus:outline-none"
                >
                  clear all filters
                </button>
                .
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Content */}
      <DevelopersBottom />
    </div>
  );
};

const DevelopersBottom = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div className="bg-[#1E293B] rounded-xl p-8 border border-[#334155] relative overflow-hidden">
          <div className="relative">
            <h3 className="text-4xl font-bold text-[#4ADE80] mb-3">20+</h3>
            <p className="text-[#94A3B8] text-lg">Active Developers</p>
            <div className="absolute -right-2 -bottom-2 text-[#4ADE80]/10 text-6xl font-bold">
              20+
            </div>
          </div>
        </div>
        <div className="bg-[#1E293B] rounded-xl p-8 border border-[#334155] relative overflow-hidden">
          <div className="relative">
            <h3 className="text-4xl font-bold text-[#4ADE80] mb-3">15+</h3>
            <p className="text-[#94A3B8] text-lg">Tech Stacks</p>
            <div className="absolute -right-2 -bottom-2 text-[#4ADE80]/10 text-6xl font-bold">
              15+
            </div>
          </div>
        </div>
        <div className="bg-[#1E293B] rounded-xl p-8 border border-[#334155] relative overflow-hidden">
          <div className="relative">
            <h3 className="text-4xl font-bold text-[#4ADE80] mb-3">50+</h3>
            <p className="text-[#94A3B8] text-lg">Projects Completed</p>
            <div className="absolute -right-2 -bottom-2 text-[#4ADE80]/10 text-6xl font-bold">
              50+
            </div>
          </div>
        </div>
        <div className="bg-[#1E293B] rounded-xl p-8 border border-[#334155] relative overflow-hidden">
          <div className="relative">
            <h3 className="text-4xl font-bold text-[#4ADE80] mb-3">100%</h3>
            <p className="text-[#94A3B8] text-lg">Satisfaction Rate</p>
            <div className="absolute -right-2 -bottom-2 text-[#4ADE80]/10 text-6xl font-bold">
              100%
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E8F0] mb-12 text-center">
          What Our Developers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1E293B] rounded-xl p-8 border border-[#334155] relative">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#4ADE80]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#94A3B8] text-lg mb-6">
                  "Being part of this team has been an incredible journey. The
                  collaborative environment and cutting-edge projects have
                  helped me grow exponentially."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#3B82F6] flex items-center justify-center text-[#1E293B] font-bold text-lg">
                  HD
                </div>
                <div className="ml-4">
                  <h4 className="text-[#E2E8F0] font-semibold text-lg">
                    Haylemeskel
                  </h4>
                  <p className="text-[#94A3B8] text-sm">
                    Founder & Lead Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1E293B] rounded-xl p-8 border border-[#334155] relative">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#4ADE80]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#94A3B8] text-lg mb-6">
                  "The diversity of projects and the supportive community make
                  this the perfect place to enhance your skills and build
                  amazing things."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#3B82F6] flex items-center justify-center text-[#1E293B] font-bold text-lg">
                  DN
                </div>
                <div className="ml-4">
                  <h4 className="text-[#E2E8F0] font-semibold text-lg">
                    Dagmawit
                  </h4>
                  <p className="text-[#94A3B8] text-sm">Backend Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1E293B] rounded-xl p-8 border border-[#334155] relative">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#4ADE80]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#94A3B8] text-lg mb-6">
                  "The opportunity to work on real-world projects and learn from
                  experienced developers has been invaluable for my career
                  growth."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#3B82F6] flex items-center justify-center text-[#1E293B] font-bold text-lg">
                  DS
                </div>
                <div className="ml-4">
                  <h4 className="text-[#E2E8F0] font-semibold text-lg">
                    Dawit
                  </h4>
                  <p className="text-[#94A3B8] text-sm">Mobile Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#4ADE80]/10 to-[#3B82F6]/10 rounded-xl p-8 sm:p-12 border border-[#334155] text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E2E8F0] mb-4">
          Join Our Growing Team
        </h2>
        <p className="text-[#94A3B8] mb-8 max-w-2xl mx-auto">
          Are you passionate about technology and looking for a collaborative
          environment to grow your skills? We're always looking for talented
          developers to join our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/Hayle_HB"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#4ADE80] text-[#1E293B] rounded-lg font-semibold hover:bg-[#4ADE80]/90 transition-colors duration-300"
          >
            Contact Us
          </a>
          <a
            href="https://github.com/Hayle-HB"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#4ADE80] text-[#4ADE80] rounded-lg font-semibold hover:bg-[#4ADE80]/10 transition-colors duration-300"
          >
            View Our Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Developers;
