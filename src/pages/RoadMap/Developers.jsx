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

import Gizachew from "../../assets/Images/Developers/Gizachewu.jpg";
import Haylemeskel from "../../assets/Images/Developers/Haylemeskel.jpg";
import Nurhusen from "../../assets/Images/Developers/Nurhusen.jpg";
import Aman from "../../assets/Images/Developers/AmanMobile.jpg";
import Dagmawi from "../../assets/Images/Developers/Dagmawi.jpg";
import Dawit from "../../assets/Images/Developers/DawitSema.jpg";
import DagmawitNegash from "../../assets/Images/Developers/DagnawutNegash12.jpg";

const Developers = () => {
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedSkills, setSelectedSkills] = useState(new Set(["All"]));
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const developers = [
    {
      name: "Haylemeskel Haylemariam",
      role: "Founder & Software Developer",
      image: Haylemeskel,
      bio: "Founder of EcoFarmIQ and progHubs. Passionate about AI-driven solutions, team collaboration, and building impactful projects.",
      skills: [
        "Microservices",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Python",
        "Machine Learning",
        "REST APIs",
        "Team Leadership",
      ],
      github: "https://www.github.com/Hayle-HB",
      linkedin:
        "https://www.linkedin.com/in/haylemeskel-haylemariam-b9212b298/",
      twitter: "https://x.com/Hayle_HB",
      email: "haylemeskelhaylemariam@gmail.com",
      telegram: "https://t.me/Hayle_HB",
      portfolio: "https://ecofarmiq.vercel.com",
    },
    {
      name: "Dagmawit Negash",
      role: "Backend Developer",
      image: DagmawitNegash,
      bio: "Passionate about building scalable website and mentoring junior developers.",
      skills: ["Python", "Node.js", "Django", "Mysql", "MongoDB", "Express.js"],
      github: "https://github.com/DagmawitN",
      linkedin:
        "https://www.linkedin.com/in/dagmawit-negash-1950a3304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "",
      email: "21dagmawitnegash@gmail.com",
      telegram: "https://t.me/Daginegash",
      portfolio: "https://github.com/Cam-Link/local-server",
    },
    {
      name: "Dagmawi Milkias",
      role: "FrontEnd  Developer",
      image: Dagmawi,
      bio: "Highly Motivated and results-oriented Front-End Developer passionate about building responsive and visually engaging websites and web applications.Strong foundation in core web development principles and extensive experience working with leading JavaScript frameworks and libraries",
      skills: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "Figma",
        "responsive design",
        "networking",
        "collaboration",
      ],
      github: "https://github.com/Dagi2004",
      linkedin: "https://linkedin.com/dagmawimilkias",
      twitter: "https://twitter.com/alexchen",
      email: "dagmawimilkias@gmail.com",
      telegram: "https://t.me/DagmawiDev",
      portfolio: "https://dagmawiimilkias.netlify.app/",
    },
    {
      name: "Gizachew Mohammed",
      role: "Backend Developer",
      image: Gizachew,
      bio: "Backend Developer passionate about building scalable APIs, optimizing databases, and integrating AI into backend solutions.",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Python",
        "REST APIs",
      ],
      github: "https://github.com/gechjs",
      linkedin: "https://www.linkedin.com/in/gizachew-mohammed/",
      twitter: "https://twitter.com/GizachewMo50513",
      email: "gizachew980@gmail.com",
      telegram: "https://t.me/Gech192127",
      portfolio: "https://gizachewm.com",
    },

    {
      name: "Dawit Sema",
      role: "Mobile Developer",
      image: Dawit,
      bio: "Experienced in building scalable Flutter applications, AI automation, and backend systems. Passionate about mentoring and optimizing workflows.",
      skills: [
        "Flutter",
        "Dart",
        "React",
        "TailwindCSS",
        "TypeScript",
        "Python",
        "Automation",
        "Django",
        "n8n",
        "Make.com",
      ],
      github: "https://github.com/DawitSema",
      linkedin: "https://linkedin.com/in/DawitSema",
      twitter: "https://twitter.com/DawitSema",
      email: "dawitsema2004@gmail.com",
      telegram: "https://t.me/DawitSema",
      portfolio: "https://dawitsema.vercel.app/",
    },
    {
      name: "Nurhusen mohammedteum",
      role: "Frontend Developer",
      image: Nurhusen,
      bio: "Fullstack developer specialized on frontend development Passionate about building scalable applications and mentoring junior developers.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Javascript",
        "MySql",
      ],
      github: "https://github.com/nurhussenm",
      linkedin: "https://www.linkedin.com/in/nurhusenm",
      twitter: "https://x.com/NURHussenM74947",
      email: "mohammedteumnurhusen@gmail.com",
      telegram: "https://t.me/NUMUTU",
      portfolio: "https://nurhussen.netlify.app",
    },

    {
      name: "Amanuel Yosef",
      role: "Mobile App Developer",
      image: Aman,
      bio: "Freelance Mobile App Developer | Crafting beautiful, user-friendly apps with Kotlin, Jetpack Compose & Firebase. Let’s turn your app idea into reality! DM for collaborations.",
      skills: ["Kotlin", "Jetpack compose", "Python", "Flutter"],
      github: "https://github.com/amanuelyosef",
      linkedin: "https://www.linkedin.com/in/amanuel-yosef-ab2685333/",
      twitter: "https://x.com/AmanuYosi",
      email: "amanuyosi@gmail.com",
      telegram: "https://t.me/proaman777",
      portfolio: "https://github.com/amanuelyosef",
    },

    {
      name: "David Kim",
      role: "Mobile Developer",
      image: Haylemeskel,
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
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

  // Update the filter logic to be case-insensitive
  const filteredDevelopers = useMemo(() => {
    return developers.filter((dev) => {
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
                <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-t-xl bg-[#1E293B]">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#E2E8F0]">
                      {dev.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4ADE80]">
                      {dev.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#94A3B8] mb-3 sm:mb-4 line-clamp-3">
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

                  <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto">
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
    </div>
  );
};

export default Developers;
