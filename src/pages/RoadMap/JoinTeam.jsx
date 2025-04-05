import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectCurrentTheme } from "../../feature/theme/theme";
import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaPalette,
  FaArrowLeft,
  FaMobile,
  FaRobot,
  FaCalendarAlt,
  FaChartLine,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import JoinForm from "./JoinForm";

const JoinTeam = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Theme styles
  const themeStyles = {
    light: {
      background: "bg-white/50",
      text: "text-gray-900",
      secondaryText: "text-gray-600",
      border: "border-gray-200/50",
      cardBg: "bg-white/50",
      cardBorder: "border-gray-200/50",
      cardHover: "hover:border-[#4ADE80]/30",
      buttonBg: "bg-[#4ADE80]",
      buttonHover: "hover:bg-[#3CB371]",
      buttonText: "text-white",
    },
    dark: {
      background: "bg-[#1E293B]/50",
      text: "text-[#E2E8F0]",
      secondaryText: "text-[#94A3B8]",
      border: "border-[#334155]/50",
      cardBg: "bg-[#1E293B]/50",
      cardBorder: "border-[#334155]/50",
      cardHover: "hover:border-[#4ADE80]/30",
      buttonBg: "bg-[#4ADE80]",
      buttonHover: "hover:bg-[#3CB371]",
      buttonText: "text-white",
    },
  };

  const styles = themeStyles[currentTheme];

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
    {
      title: "Mobile Developer",
      description: "Build cross-platform mobile applications",
      requirements: [
        "React Native/Flutter",
        "iOS/Android development",
        "Mobile UI/UX",
        "App performance optimization",
      ],
      icon: FaMobile,
    },
    {
      title: "ML/AI Engineer",
      description: "Develop intelligent systems and algorithms",
      requirements: [
        "Python/TensorFlow/PyTorch",
        "Machine learning algorithms",
        "Data preprocessing",
        "Model deployment",
      ],
      icon: FaRobot,
    },
    {
      title: "Event Organizer",
      description: "Plan and execute community events and workshops",
      requirements: [
        "Event planning",
        "Community management",
        "Communication skills",
        "Logistics coordination",
      ],
      icon: FaCalendarAlt,
    },
    {
      title: "Data Analyst",
      description: "Analyze data to drive business decisions",
      requirements: [
        "SQL/Python",
        "Data visualization",
        "Statistical analysis",
        "Business intelligence",
      ],
      icon: FaChartLine,
    },
    {
      title: "Security Specialist",
      description: "Ensure application and data security",
      requirements: [
        "Security protocols",
        "Penetration testing",
        "Compliance standards",
        "Incident response",
      ],
      icon: FaShieldAlt,
    },
    {
      title: "Customer Support",
      description: "Provide excellent support to our users",
      requirements: [
        "Communication skills",
        "Problem-solving",
        "Product knowledge",
        "User empathy",
      ],
      icon: FaHeadset,
    },
  ];

  const handleApply = (position) => {
    setSelectedPosition(position.title);
    setShowForm(true);
  };

  const handleBack = () => {
    setShowForm(false);
    setSelectedPosition(null);
  };

  if (showForm) {
    return <JoinForm position={selectedPosition} onBack={handleBack} />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // className={`${styles.cardBg} rounded-xl border ${styles.border} p-6 sm:p-8 shadow-lg`}
      >
        <div className="text-center mb-8">
          <h1 className={`text-2xl sm:text-3xl font-bold ${styles.text} mb-4`}>
            Join Our Core Team
          </h1>
          <p className={`${styles.secondaryText} max-w-3xl mx-auto`}>
            Be part of the team that shapes the future of progHubs. We're
            looking for talented individuals who are passionate about technology
            and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${styles.cardBg} rounded-lg border ${styles.cardBorder} p-6 transition-all duration-300 ${styles.cardHover}`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-[#4ADE80]">
                  <position.icon />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${styles.text} mb-2`}>
                    {position.title}
                  </h3>
                  <p className={`${styles.secondaryText} mb-4`}>
                    {position.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {position.requirements.map((req, reqIndex) => (
                      <div
                        key={reqIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                        <span className={`text-sm ${styles.secondaryText}`}>
                          {req}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleApply(position)}
                    className={`w-full py-2.5 ${styles.buttonBg} ${styles.buttonText} rounded-md font-medium 
                      transition-all duration-200 ${styles.buttonHover}`}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className={`${styles.secondaryText} mb-6`}>
            Don't see a position that matches your skills? We're always looking
            for talented individuals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleApply({ title: "Other" })}
            className={`px-6 py-2.5 ${styles.buttonBg} ${styles.buttonText} rounded-md font-medium 
              transition-all duration-200 ${styles.buttonHover}`}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default JoinTeam;
