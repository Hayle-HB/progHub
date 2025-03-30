import React from "react";
import { motion } from "framer-motion";
import {
  FaCrown,
  FaUserTie,
  FaCode,
  FaChartLine,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

const Leaders = () => {
  const leaders = {
    name: "progHubs",
    role: "Organization",
    icon: FaCrown,
    children: [
      {
        name: "CEO",
        role: "Chief Executive Officer",
        icon: FaUserTie,
        children: [
          {
            name: "CTO",
            role: "Chief Technology Officer",
            icon: FaCode,
            children: [
              { name: "Lead Developer", role: "Technical Lead", icon: FaCode },
              {
                name: "DevOps Engineer",
                role: "Infrastructure Lead",
                icon: FaShieldAlt,
              },
              { name: "UI/UX Lead", role: "Design Lead", icon: FaLightbulb },
            ],
          },
          {
            name: "COO",
            role: "Chief Operations Officer",
            icon: FaChartLine,
            children: [
              {
                name: "Project Manager",
                role: "Project Lead",
                icon: FaChartLine,
              },
              { name: "QA Lead", role: "Quality Assurance", icon: FaShieldAlt },
              {
                name: "Product Manager",
                role: "Product Lead",
                icon: FaLightbulb,
              },
            ],
          },
          {
            name: "CCO",
            role: "Chief Community Officer",
            icon: FaUsers,
            children: [
              {
                name: "Community Manager",
                role: "Community Lead",
                icon: FaUsers,
              },
              {
                name: "Content Lead",
                role: "Content Strategy",
                icon: FaLightbulb,
              },
              {
                name: "Partnership Manager",
                role: "Partnership Lead",
                icon: FaHandshake,
              },
            ],
          },
        ],
      },
    ],
  };

  const LeaderNode = ({ leader, level = 0 }) => {
    const Icon = leader.icon;

    return (
      <div className="flex flex-col items-center">
        {/* Node */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: level * 0.1 }}
          className={`relative p-4 rounded-lg bg-[#1E293B]/40 backdrop-blur-sm border border-[#4ADE80]/20
            ${
              level === 0 ? "w-48" : "w-40"
            } hover:border-[#4ADE80]/40 transition-colors duration-300`}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="p-2 rounded-full bg-[#4ADE80]/10">
              <Icon
                className={`${
                  level === 0 ? "text-2xl" : "text-xl"
                } text-[#4ADE80]`}
              />
            </div>
            <div className="text-center">
              <h3
                className={`font-semibold ${
                  level === 0 ? "text-lg" : "text-base"
                } text-white`}
              >
                {leader.name}
              </h3>
              <p className="text-xs text-[#94A3B8]">{leader.role}</p>
            </div>
          </div>
        </motion.div>

        {/* Children */}
        {leader.children && (
          <div className="flex flex-col items-center mt-4">
            {/* Vertical line */}
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#4ADE80]/20 to-[#4ADE80]/10" />

            {/* Horizontal lines container */}
            <div className="flex justify-center gap-8">
              {leader.children.map((child, index) => (
                <div key={child.name} className="flex flex-col items-center">
                  {/* Horizontal line */}
                  {index > 0 && (
                    <div className="absolute top-0 w-8 h-0.5 bg-gradient-to-r from-[#4ADE80]/20 to-[#4ADE80]/10" />
                  )}
                  <LeaderNode leader={child} level={level + 1} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Leadership Structure
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Our organizational structure is designed to ensure efficient
            collaboration and innovation across all departments of progHubs.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <LeaderNode leader={leaders} />
        </div>
      </div>
    </div>
  );
};

export default Leaders;
