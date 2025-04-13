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

import Gizachew from "../../assets/Images/Developers/Gizachewu.jpg";
import Haylemeskel from "../../assets/Images/Developers/Haylemeskel.jpg";
import Nurhusen from "../../assets/Images/Developers/Nurhusen.jpg";
import Amanuel from "../../assets/Images/Developers/AmanMobile.jpg";
import Dagmawi from "../../assets/Images/Developers/Dagmawi.jpg";
import Dawit from "../../assets/Images/Developers/DawitSema.jpg";
import DagmawitNegash from "../../assets/Images/Developers/DagnawutNegash12.jpg";
import Haymanot from "../../assets/Images/Developers/Haymanot.jpg";
import Bezawit_A from "../../assets/Images/Developers/Bezawit_A.jpg";
import YonatanGetachew from "../../assets/Images/Developers/YonatanGetachew.jpg";
import AbelMekonen from "../../assets/Images/Developers/Abel_.jpg";
import DanielYilma from "../../assets/Images/Developers/DaneilYilma.jpeg";
import HananAb from "../../assets/Images/Developers/HananAb (2).jpeg";
import Amira from "../../assets/Images/Developers/Amira.jpg";
import Mqkda from "../../assets/Images/Developers/Makqida.jpg";
import YordanosH from "../../assets/Images/Developers/YordanosH.jpg";
import Daniel_Temesgen from "../../assets/Images/Developers/Daniel_Temesgen.jpg";
import Kitessa_Fikadu from "../../assets/Images/Developers/Kitessa_Fikadu.jpg";
import Zelalem_Legesse from "../../assets/Images/Developers/Zelalem_Legesse.jpg";
import Mistire_Daniel from "../../assets/Images/Developers/Mistire_Daniel.jpg";
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
      name: "Haymanot Aweke",
      role: "UI/UX designer",
      image: Haymanot,
      bio: " A skilled UI/UX designer creating intuitive, user-centered digital experiences",
      skills: ["prototype", "Figma", "Wireframe", "User research"],
      GitHub: "https://github.com/hanabif",
      linkedin: "https://www.linkedin.com/in/haymanot-aweke?",
      twitter: " ",
      email: "haymanotaweke9@gmail.com",
      telegram: "https://t.me/Nanamicrush",
      portfolio:
        "https://www.figma.com/design/n2xiAlxoQuVe3sIkKCFADo/Haymanot-Aweke-portfolio?node-id=0-1&t=DsMjOvPqTI2RMr4g-1",
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
      name: "Bezawit Yehalem",
      role: "UI/UX designer",
      image: Bezawit_A,
      bio: "Passionate about building scalable applications and mentoring junior developers.",
      skills: ["Figma", "Prototype", "Wireframe", "React", "TailwindCSS"],
      github: "https://github.com/bezu3007",
      linkedin: "https://www.linkedin.com/in/bezawit-yehalem",
      twitter: "",
      email: "bezayayi@gmail.com",
      telegram: "https://t.me/bezu3022",
      portfolio: "",
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
      image: Amanuel,
      bio: "Freelance Mobile App Developer | Crafting beautiful, user-friendly apps with Kotlin, Jetpack Compose & Firebase. Let's turn your app idea into reality! DM for collaborations.",
      skills: ["Kotlin", "Jetpack compose", "Python", "Flutter"],
      github: "https://github.com/amanuelyosef",
      linkedin: "https://www.linkedin.com/in/amanuel-yosef-ab2685333/",
      twitter: "https://x.com/AmanuYosi",
      email: "amanuyosi@gmail.com",
      telegram: "https://t.me/proaman777",
    },
    {
      name: "Yonatan Getachew",
      role: "Machine Learning Engineer",
      image: YonatanGetachew,
      bio: "Seeing the future to AGI and building cool things to reach out there.",
      skills: [
        "LLM",
        "DeepLearning",
        "Anomaly Detection",
        "Reinforcement Leraning",
      ],
      github: "https://github.com/jajos12",
      linkedin: "https://linkedin.com/yonatangetachew98a789245",
      twitter: "https://twitter.com/alexchen",
      email: "yonatangetachew91@gmail.com",
      telegram: "https://t.me/jajos77",
    },
    {
      name: "Abel Mekonen",
      role: "Full Stack Developer",
      image: AbelMekonen,
      bio: "Passionate about building helpful and useful applications",
      skills: ["React", "Django", " MySQL", "Javascript"],
      github: "https://github.com/bella-247",
      linkedin: "https://www.linkedin.com/in/abel-mekonen-89b57b323",
      twitter: "",
      email: "abelmekonen247@gmail.com",
      telegram: "https://t.me/ydkbellathelatest",
      portfolio: "",
    },
    {
      name: "Daniel Yilma",
      role: "Backend Developer",
      image: DanielYilma,
      bio: "Passionate backend developer.",
      skills: ["Flask", "Django", "Node.js"],
      github: "https://github.com/Danielyilma",
      linkedin: "https://www.linkedin.com/in/daniel-yilma-858135256/",
      twitter: "https://x.com/DanielYilm66671",
      email: "deathland2352@gmail.com",
      telegram: "https://t.me/Daniy2r4",
      portfolio: "",
    },
    {
      name: "Hanan Abdulshikur",
      role: "Frontend Developer",
      bio: "Passionate Frontend Developer creating user-friendly, responsive web applications with a focus on design and functionality.",
      skills: ["React", "tailwind", "next.js", "shadcn"],
      github: "https://github.com/devhan-hub",
      linkedin: "https://www.linkedin.com/in/hanan-abdulshikur/",
      twitter: "",
      email: "hanabduman@gmail.com",
      telegram: "https://t.me/hanuninaaa",
      image: HananAb,
    },

    {
      name: "Amira Abdurahman",
      role: "Frontend Developer",
      image: Amira,
      bio: "Passionate about crafting responsive, user-friendly websites that merge clean code with sleek design",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      github: "https://github.com/ami798",
      linkedin: "https://www.linkedin.com/in/amira-abdurahman-282704298/",
      twitter: "https://x.com/amiprin7",
      email: "amiraabdurahman8@gmail.com",
      telegram: "https://t.me/amiprin7",
    },
    {
      name: "Mqkda Yoseph ",
      role: "Full Stack Developer",
      bio: "Passionate about building scalable applications and mentoring junior developers.",
      skills: ["React", "Node.js", "Dart", "Flutter"],
      github: "https://github.com/Makda-Yoseph",
      linkedin:
        "https://www.linkedin.com/in/makda-zewge-08b145289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "",
      email: "makdayosephzewge@gmail.com",
      telegram: "https://t.me/makl-da",
      image: Mqkda,
    },
    {
      name: "Yordanos Hailu",
      role: "UI/UX designer",
      bio: "Dedicated to creating user-centered designs that enhance user experience.",
      skills: ["Figma", "Wireframe", "Prototyping", "User Centric Design"],
      linkedin: "https://www.linkedin.com/in/yordanos-hailu/",
      email: "yordiih59@gmail.com",
      telegram: "https://t.me/yordih00",
      portfolio: "https://dribbble.com/yordiHailu",
      twitter: "",
      github: "",
      image: YordanosH,
    },
    {
      name: "Daniel Temesgen",
      role: "Fullstack Developer",
      image: Daniel_Temesgen,
      bio: "hello new world.",
      skills: [
        "Node.js",
        "Javascript",
        "Tailwind",
        "PHP",
        "React",
        "NextJs",
        "SQL",
        "MongoDB",
      ],
      github: "https://github.com/hope-dies-here",
      linkedin: "https://www.linkedin.com/in/daniel-temesgen-a560b2353",
      twitter: "https://twitter.com/",
      email: "onyourleftpal@gmail.com",
      telegram: "https://t.me/o_uranus",
      portfolio: "https://dannny-pf.netlify.app",
    },
    {
      name: "Kitessa Fikadu",
      role: "Backend Developer",
      profileImg: "",
      bio: "Passionate about building scalable backend and AI-driven solutions.",
      skills: [
        "FastAPI",
        "Django",
        "NestJS",
        "Gin",
        "Clean Architecture",
        "Microservices",
        "Machine Learning",
      ],
      github: "https://github.com/kitessafikadu",
      linkedin: "https://linkedin.com/kitessafikadu",
      twitter: "https://twitter.com/kitessafikadu",
      email: "kitessafikadu@gmail.com",
      telegram: "https://t.me/kitessafikadu",
      image: Kitessa_Fikadu,
    },
    {
      name: "Zelalem Legesse",
      role: "Full Stack Developer",
      profileImg: "https://api.dicebear.com/7.x/avataaars/svg?seed=zelalem",
      bio: "A passionate Full stack developer building high-performance, scalable, and user-friendly web applications.",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "React",
        "GitHub",
        "Git",
        "REST API",
        "PostgreSQL",
        "Authentication",
      ],
      github: "https://github.com/zelalem888",
      linkedin: "https://www.linkedin.com/in/zelalemlegesse/",
      twitter: "https://x.com/ZelalemLegess13",
      email: "legessezelalem888@gmail.com",
      telegram: "https://t.me/Zlelew",
      portfolio: "https://zelalemportfolio.vercel.app/",
      image: Zelalem_Legesse,
    },
    {
      name: "Abedela Bedru",
      role: "Full Stack Developer",
      bio: "Curious mind. Disciplined soul. I build, I grow, and I never settle.",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "ExpressJS",
        "MongoDB",
        "EJS",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/codistiano",
      linkedin: "https://linkedin.com/in/abedela-bedru",
      twitter: "https://twitter.com/codistiano",
      email: "codistiano@gmail.com",
      telegram: "https://t.me/codistiano",
      portfolio: "https://codistiano.vercel.app/",
      image: false,
    },
    {
      name: "Mistire Daniel",
      role: "Backend Developer",
      bio: "Aspiring Junior Software Developer.",
      skills: ["Python", "Django", "Javascript", "Git/Github"],
      github: "https://github.com/Mistire",
      linkedin: "https://www.linkedin.com/in/mistire-daniel-87b451229/",
      twitter: "https://x.com/Mistire37",
      email: "mistiredan@gmail.com",
      telegram: "https://t.me/therealmistire",
      portfolio: "",
      image: Mistire_Daniel,
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
    </div>
  );
};

export default Developers;
