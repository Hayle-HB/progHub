import React, { useState, useMemo } from "react";
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

const Developers = () => {
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedSkills, setSelectedSkills] = useState(new Set(["All"]));
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const developers = [
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      bio: "Passionate about building scalable applications and mentoring junior developers.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://twitter.com/alexchen",
      email: "alex.chen@example.com",
      telegram: "https://t.me/alexchen",
      portfolio: "https://alexchen.dev",
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      bio: "UI/UX enthusiast with a focus on creating beautiful and accessible interfaces.",
      skills: ["React", "Next.js", "TailwindCSS", "Figma"],
      github: "https://github.com/sarahj",
      linkedin: "https://linkedin.com/in/sarahj",
      twitter: "https://twitter.com/sarahj",
      website: "https://sarahj.com",
      email: "sarah.j@example.com",
      telegram: "https://t.me/sarahj",
      portfolio: "https://sarahj.dev",
    },
    {
      name: "Michael Rodriguez",
      role: "Backend Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      bio: "Backend specialist with expertise in microservices and cloud architecture.",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      github: "https://github.com/michaelr",
      linkedin: "https://linkedin.com/in/michaelr",
      twitter: "https://twitter.com/michaelr",
      email: "michael.r@example.com",
      telegram: "https://t.me/michaelr",
      portfolio: "https://michaelr.dev",
    },
    {
      name: "Emma Wilson",
      role: "DevOps Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      bio: "Infrastructure expert focused on automation and cloud optimization.",
      skills: ["Kubernetes", "Terraform", "CI/CD", "AWS"],
      github: "https://github.com/emmaw",
      linkedin: "https://linkedin.com/in/emmaw",
      twitter: "https://twitter.com/emmaw",
      email: "emma.w@example.com",
      telegram: "https://t.me/emmaw",
      portfolio: "https://emmaw.dev",
    },
    {
      name: "David Kim",
      role: "Mobile Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      bio: "Cross-platform mobile developer with a passion for native performance.",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      github: "https://github.com/davidk",
      linkedin: "https://linkedin.com/in/davidk",
      twitter: "https://twitter.com/davidk",
      email: "david.k@example.com",
      telegram: "https://t.me/davidk",
      portfolio: "https://davidk.dev",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
      email: "lisa.c@example.com",
      telegram: "https://t.me/lisac",
      portfolio: "https://lisac.dev",
    },
    {
      name: "James Smith",
      role: "Frontend Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      bio: "Specializing in responsive web design and modern JavaScript frameworks.",
      skills: ["Vue.js", "React", "SASS", "Webpack"],
      github: "https://github.com/jamessmith",
      linkedin: "https://linkedin.com/in/jamessmith",
      twitter: "https://twitter.com/jamessmith",
      email: "james.s@example.com",
      telegram: "https://t.me/jamessmith",
      portfolio: "https://jamessmith.dev",
    },
    {
      name: "Maria Garcia",
      role: "Backend Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      bio: "Expert in building robust APIs and database optimization.",
      skills: ["Java", "Spring Boot", "MongoDB", "Redis"],
      github: "https://github.com/mariag",
      linkedin: "https://linkedin.com/in/mariag",
      twitter: "https://twitter.com/mariag",
      email: "maria.g@example.com",
      telegram: "https://t.me/mariag",
      portfolio: "https://mariag.dev",
    },
    {
      name: "Ryan Taylor",
      role: "Full Stack Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan",
      bio: "Full stack developer with a strong focus on clean code and best practices.",
      skills: ["Angular", "Node.js", "MySQL", "Docker"],
      github: "https://github.com/ryant",
      linkedin: "https://linkedin.com/in/ryant",
      twitter: "https://twitter.com/ryant",
      email: "ryan.t@example.com",
      telegram: "https://t.me/ryant",
      portfolio: "https://ryant.dev",
    },
    {
      name: "Sophie Anderson",
      role: "DevOps Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
      bio: "Passionate about automating deployment processes and improving system reliability.",
      skills: ["Jenkins", "AWS", "Docker", "Ansible"],
      github: "https://github.com/sophiea",
      linkedin: "https://linkedin.com/in/sophiea",
      twitter: "https://twitter.com/sophiea",
      email: "sophie.a@example.com",
      telegram: "https://t.me/sophiea",
      portfolio: "https://sophiea.dev",
    },
    {
      name: "Carlos Martinez",
      role: "Mobile Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      bio: "Specialized in native iOS and Android development with cross-platform expertise.",
      skills: ["Swift", "Kotlin", "Flutter", "Firebase"],
      github: "https://github.com/carlosm",
      linkedin: "https://linkedin.com/in/carlosm",
      twitter: "https://twitter.com/carlosm",
      email: "carlos.m@example.com",
      telegram: "https://t.me/carlosm",
      portfolio: "https://carlosm.dev",
    },
    {
      name: "Nina Patel",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina",
      bio: "Expert in cybersecurity with focus on threat detection and incident response.",
      skills: ["Ethical Hacking", "Network Security", "Cryptography", "SIEM"],
      github: "https://github.com/ninap",
      linkedin: "https://linkedin.com/in/ninap",
      twitter: "https://twitter.com/ninap",
      email: "nina.p@example.com",
      telegram: "https://t.me/ninap",
      portfolio: "https://ninap.dev",
    },
    {
      name: "Thomas Weber",
      role: "Frontend Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
      bio: "Creative developer focusing on interactive web experiences and animations.",
      skills: ["Three.js", "WebGL", "React", "GSAP"],
      github: "https://github.com/thomasw",
      linkedin: "https://linkedin.com/in/thomasw",
      twitter: "https://twitter.com/thomasw",
      email: "thomas.w@example.com",
      telegram: "https://t.me/thomasw",
      portfolio: "https://thomasw.dev",
    },
    {
      name: "Julia Lee",
      role: "Full Stack Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
      bio: "Full stack developer specializing in e-commerce and payment systems.",
      skills: ["Vue.js", "Laravel", "PostgreSQL", "Stripe"],
      github: "https://github.com/julial",
      linkedin: "https://linkedin.com/in/julial",
      twitter: "https://twitter.com/julial",
      email: "julia.l@example.com",
      telegram: "https://t.me/julial",
      portfolio: "https://julial.dev",
    },
  ];

  // Extract unique roles and skills
  const roles = useMemo(
    () => ["All", ...new Set(developers.map((dev) => dev.role))],
    []
  );
  const skills = useMemo(
    () => ["All", ...new Set(developers.flatMap((dev) => dev.skills))],
    []
  );

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

  // Filter developers based on selected filters
  const filteredDevelopers = useMemo(() => {
    return developers.filter((dev) => {
      const roleMatch = selectedRole === "All" || dev.role === selectedRole;
      const skillsMatch =
        selectedSkills.has("All") ||
        Array.from(selectedSkills).every((skill) => dev.skills.includes(skill));
      return roleMatch && skillsMatch;
    });
  }, [selectedRole, selectedSkills]);

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
      <div className="flex flex-col xs:flex-row flex-wrap gap-2 mb-4 items-start xs:items-center">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full xs:w-auto px-3 sm:px-4 py-2 flex items-center justify-between bg-[#1E293B] rounded-lg border border-[#334155] text-[#94A3B8] hover:border-[#4ADE80]/20"
        >
          <div className="flex items-center gap-2">
            <FaFilter className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="text-xs sm:text-sm">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs bg-[#4ADE80]/10 text-[#4ADE80] rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>
          <FaChevronDown
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform ${
              isFilterOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center w-full xs:w-auto xs:flex-1 mt-2 xs:mt-0">
            {selectedRole !== "All" && (
              <div className="flex items-center gap-1 px-2 py-0.5 sm:py-1 bg-[#1E293B] rounded-md border border-[#334155] text-[10px] sm:text-xs">
                <span className="text-[#94A3B8]">Role: </span>
                <span className="text-[#4ADE80]">{selectedRole}</span>
                <button
                  onClick={() => setSelectedRole("All")}
                  className="ml-1 text-[#EF4444] hover:text-[#EF4444] transition-colors"
                >
                  <FaTimes className="w-2 h-2" />
                </button>
              </div>
            )}
            {!selectedSkills.has("All") &&
              Array.from(selectedSkills).map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-1 px-2 py-0.5 sm:py-1 bg-[#1E293B] rounded-md border border-[#334155] text-[10px] sm:text-xs"
                >
                  <span className="text-[#4ADE80]">{skill}</span>
                  <button
                    onClick={() => handleSkillClick(skill)}
                    className="ml-1 text-[#EF4444] hover:text-[#EF4444] transition-colors"
                  >
                    <FaTimes className="w-2 h-2" />
                  </button>
                </div>
              ))}
            <button
              onClick={clearFilters}
              className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-[#1E293B] rounded-md border border-[#334155] text-[#EF4444] 
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
            <div className="mb-6 flex flex-col xs:flex-row flex-wrap items-start gap-3 bg-[#1E293B]/50 rounded-lg p-3 sm:p-4">
              {/* Role Filter Dropdown */}
              <div className="flex flex-col gap-1.5 w-full xs:w-auto">
                <span className="text-[10px] sm:text-xs text-[#94A3B8]">
                  Role:
                </span>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full xs:w-auto px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-md bg-[#1E293B] text-[#94A3B8] border border-transparent
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
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-xs text-[#94A3B8]">
                    Skills (matches all selected):
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      className={`group px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md transition-all duration-300 flex items-center gap-1
                        ${
                          selectedSkills.has(skill)
                            ? "bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20"
                            : "bg-[#334155]/50 text-[#94A3B8] hover:bg-[#4ADE80]/10 hover:text-[#4ADE80] border border-transparent"
                        }`}
                    >
                      {skill}
                      {selectedSkills.has(skill) && skill !== "All" && (
                        <FaTimes className="w-1.5 h-1.5 sm:w-2 sm:h-2 opacity-0 group-hover:opacity-100" />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredDevelopers.length > 0 ? (
          filteredDevelopers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card glow effect */}
              <div
                className="absolute -inset-0.5 bg-[#4ADE80] rounded-xl opacity-0 
                group-hover:opacity-[0.03] blur-sm transition-opacity duration-500"
              />

              <div
                className="relative bg-[#1E293B] rounded-xl p-4 sm:p-6 border border-[#334155] 
                transition-all duration-500 group-hover:border-[#4ADE80]/10"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <img
                    src={dev.avatar}
                    alt={dev.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#4ADE80]/20"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#E2E8F0]">
                      {dev.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4ADE80]">
                      {dev.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] mb-3 sm:mb-4">
                  {dev.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {dev.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-[#334155] text-[#CBD5E1] text-[10px] sm:text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <motion.a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                  >
                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                  >
                    <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    href={dev.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                  >
                    <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    href={dev.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                  >
                    <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${dev.email}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                  >
                    <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    href={dev.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                  >
                    <FaGlobe className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full flex flex-col items-center justify-center py-12 sm:py-16 px-4"
          >
            <div className="bg-[#1E293B] rounded-xl p-6 sm:p-8 border border-[#334155] text-center max-w-md w-full">
              <div className="text-[#4ADE80] mb-4">
                <FaFilter className="w-6 h-6 sm:w-8 sm:h-8 mx-auto opacity-50" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E2E8F0] mb-2">
                No developers found
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8]">
                No developers match your current filter criteria. Try adjusting
                your filters or{" "}
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
    </div>
  );
};

export default Developers;
