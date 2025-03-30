import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaLaptopCode, FaPalette } from "react-icons/fa";

const JoinTeam = () => {
  const positions = [
    {
      title: "Frontend Developer",
      description: "Build beautiful and responsive user interfaces",
      requirements: [
        "React/Next.js expertise",
        "TypeScript proficiency",
        "UI/UX design principles",
        "Performance optimization",
      ],
      icon: FaCode,
    },
    {
      title: "Backend Developer",
      description: "Design and implement robust server solutions",
      requirements: [
        "Node.js/Express",
        "Database design",
        "API architecture",
        "Security best practices",
      ],
      icon: FaServer,
    },
    {
      title: "Full Stack Developer",
      description: "Handle both frontend and backend development",
      requirements: [
        "Full stack expertise",
        "System architecture",
        "DevOps practices",
        "Code optimization",
      ],
      icon: FaLaptopCode,
    },
    {
      title: "UI/UX Designer",
      description: "Create intuitive and beautiful user experiences",
      requirements: [
        "Design systems",
        "User research",
        "Prototyping",
        "Visual design",
      ],
      icon: FaPalette,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#E2E8F0] mb-4">
          Join Our Core Team
        </h1>
        <p className="text-xl text-[#94A3B8]">
          Be part of the team that shapes the future of progHubs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {positions.map((position, index) => (
          <motion.div
            key={position.title}
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
              className="relative bg-[#1E293B] rounded-xl p-6 border border-[#334155] 
              transition-all duration-500 group-hover:border-[#4ADE80]/10"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-[#4ADE80]">
                  <position.icon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E2E8F0] mb-2">
                    {position.title}
                  </h3>
                  <p className="text-[#94A3B8] mb-4">{position.description}</p>

                  <div className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <div
                        key={reqIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#475569]" />
                        <span className="text-sm text-[#CBD5E1]">{req}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 px-4 py-2 bg-[#334155] text-[#E2E8F0] rounded-lg text-sm font-medium
                      hover:bg-[#475569] transition-all duration-300
                      border border-[#475569] hover:border-[#4ADE80]"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-[#94A3B8] mb-6">
          Don't see a position that matches your skills? We're always looking
          for talented individuals.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#334155] text-[#E2E8F0] rounded-full font-semibold 
            shadow-lg hover:bg-[#475569] transition-all duration-300
            border border-[#475569] hover:border-[#4ADE80]"
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  );
};

export default JoinTeam;
