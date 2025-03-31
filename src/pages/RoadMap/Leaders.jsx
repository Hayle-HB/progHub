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
  FaDatabase,
  FaPalette,
  FaMobile,
  FaBrain,
  FaMoneyBillWave,
  FaComments,
  FaCalendarAlt,
  FaServer,
  FaReact,
  FaAndroid,
  FaApple,
  FaCogs,
  FaChartBar,
  FaRobot,
  FaUsersCog,
  FaNetworkWired,
} from "react-icons/fa";

const Leaders = () => {
  // Simplified data structure with exactly 3 levels
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
              {
                name: "Frontend Lead",
                role: "Frontend Development Lead",
                icon: FaReact,
              },
              {
                name: "Backend Lead",
                role: "Backend Development Lead",
                icon: FaDatabase,
              },
              {
                name: "AI Lead",
                role: "AI/ML Development Lead",
                icon: FaBrain,
              },
            ],
          },
          {
            name: "Project Manager",
            role: "Technical Operations",
            icon: FaChartLine,
            children: [
              {
                name: "Tech Lead",
                role: "Technical Team Lead",
                icon: FaCode,
                children: [
                  {
                    name: "Senior Developer",
                    role: "Senior Software Engineer",
                    icon: FaCode,
                  },
                  {
                    name: "Junior Developer",
                    role: "Junior Software Engineer",
                    icon: FaCode,
                  },
                ],
              },
              {
                name: "DevOps Lead",
                role: "Infrastructure Lead",
                icon: FaServer,
                children: [
                  {
                    name: "Cloud Engineer",
                    role: "Cloud Infrastructure Engineer",
                    icon: FaNetworkWired,
                  },
                  {
                    name: "Security Engineer",
                    role: "Security Operations Engineer",
                    icon: FaShieldAlt,
                  },
                ],
              },
              {
                name: "Mobile Lead",
                role: "Mobile Development Lead",
                icon: FaMobile,
                children: [
                  {
                    name: "iOS Developer",
                    role: "iOS Development Engineer",
                    icon: FaApple,
                  },
                  {
                    name: "Android Developer",
                    role: "Android Development Engineer",
                    icon: FaAndroid,
                  },
                ],
              },
              {
                name: "QA Lead",
                role: "Quality Assurance Lead",
                icon: FaShieldAlt,
                children: [
                  {
                    name: "Test Engineer",
                    role: "Software Test Engineer",
                    icon: FaCogs,
                  },
                  {
                    name: "Automation Engineer",
                    role: "Test Automation Engineer",
                    icon: FaRobot,
                  },
                ],
              },
            ],
          },
          {
            name: "COO",
            role: "Chief Operations Officer",
            icon: FaUsers,
            children: [
              {
                name: "HR Manager",
                role: "Human Resources Manager",
                icon: FaUsersCog,
              },
              {
                name: "Finance Manager",
                role: "Financial Operations Manager",
                icon: FaMoneyBillWave,
              },
              {
                name: "Marketing Manager",
                role: "Marketing Operations Manager",
                icon: FaChartBar,
              },
            ],
          },
        ],
      },
    ],
  };

  // Function to collect all nodes below level 2
  const collectLowerNodes = (node) => {
    let nodes = [];
    if (node.children) {
      node.children.forEach((child) => {
        if (child.children) {
          nodes = [...nodes, ...child.children];
          child.children.forEach((grandChild) => {
            if (grandChild.children) {
              nodes = [...nodes, ...grandChild.children];
            }
          });
        }
      });
    }
    return nodes;
  };

  // Collect all lower level nodes
  const lowerLevelNodes = collectLowerNodes(leaders.children[0]);

  const LeaderNode = ({ leader, level = 0, isLastLevel = false }) => {
    const Icon = leader.icon;
    const hasChildren =
      leader.children && leader.children.length > 0 && !isLastLevel;

    return (
      <div className="relative">
        {/* Node */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: level * 0.1 }}
          className={`relative p-3 rounded-lg bg-[#1E293B]/40 backdrop-blur-sm border border-[#4ADE80]/20
            ${
              level === 0 ? "w-44" : "w-36"
            } hover:border-[#4ADE80]/40 transition-colors duration-300`}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="p-2 rounded-full bg-[#4ADE80]/10">
              <Icon
                className={`${
                  level === 0 ? "text-xl" : "text-lg"
                } text-[#4ADE80]`}
              />
            </div>
            <div className="text-center">
              <h3
                className={`font-semibold ${
                  level === 0 ? "text-base" : "text-sm"
                } text-white`}
              >
                {leader.name}
              </h3>
              <p className="text-[10px] text-[#94A3B8]">{leader.role}</p>
            </div>
          </div>
        </motion.div>

        {/* Children Container */}
        {hasChildren && (
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ top: "100%" }}
          >
            <div
              className="flex items-start"
              style={{ gap: "240px", marginTop: "60px" }}
            >
              {leader.children.map((child, index) => (
                <div
                  key={child.name}
                  className="relative flex flex-col items-center"
                >
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2"
                    style={{
                      width: "2px",
                      height: "60px",
                      top: "-60px",
                      background: "#4ADE80",
                    }}
                  />
                  <LeaderNode
                    leader={child}
                    level={level + 1}
                    isLastLevel={level === 1}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-6"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Leadership Structure
        </h2>
        <p className="text-[#94A3B8] max-w-2xl mx-auto">
          Our organizational structure is designed to ensure efficient
          collaboration and innovation across all departments of progHubs.
        </p>
      </motion.div>

      <div className="flex-1 min-h-[1200px] relative pb-20">
        <div className="absolute inset-0">
          <div className="flex flex-col items-center p-8">
            <LeaderNode leader={leaders} />

            {/* Grid of lower level nodes */}
            <div className="grid grid-cols-7 gap-x-8 gap-y-32 mt-[400px] relative pb-20">
              {lowerLevelNodes.map((node, index) => (
                <div
                  key={node.name}
                  className="relative flex flex-col items-center"
                >
                  {/* Connection Line with Circle */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    style={{
                      top: "-60px",
                    }}
                  >
                    {/* Circle with B */}
                    <div className="w-5 h-5 rounded-full bg-[#1E293B] border-2 border-[#4ADE80] flex items-center justify-center text-[#4ADE80] text-xs font-semibold mb-1">
                      B
                    </div>
                    {/* Line */}
                    <div
                      style={{
                        width: "2px",
                        height: "35px",
                        background: "#4ADE80",
                      }}
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative p-3 rounded-lg bg-[#1E293B]/40 backdrop-blur-sm border border-[#4ADE80]/20 w-36 hover:border-[#4ADE80]/40 transition-colors duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-2 rounded-full bg-[#4ADE80]/10">
                        <node.icon className="text-lg text-[#4ADE80]" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-sm text-white">
                          {node.name}
                        </h3>
                        <p className="text-[10px] text-[#94A3B8]">
                          {node.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
