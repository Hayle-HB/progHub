import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaArrowLeft } from "react-icons/fa";

const BecomeAMember = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeStep, setActiveStep] = useState(1);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const elements = timelineRef.current.children;
        const viewportHeight = window.innerHeight;
        const viewportMiddle = window.scrollY + viewportHeight / 2;
        const buffer = viewportHeight * 0.2;

        for (let i = elements.length - 1; i >= 0; i--) {
          const element = elements[i];
          const rect = element.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          const elementMiddle = absoluteTop + rect.height / 2;

          if (Math.abs(viewportMiddle - elementMiddle) < buffer) {
            setActiveStep(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: "Our Journey",
      description: "Understanding our evolution and current state",
      requirements: [
        "Why we didn't go as planned?",
        "Lack of team structure and leadership",
        "Current reorganization phase",
        "Ready to start fresh",
      ],
      icon: "01",
      color: "#4ADE80",
    },
    {
      id: 2,
      title: "Developer Commitment",
      description: "Becoming part of progHubs",
      requirements: [
        "Willingness to join progHubs",
        "Commitment to team goals",
        "Active participation",
        "Dedication to learning",
      ],
      icon: "02",
      color: "#4ADE80",
    },
    {
      id: 3,
      title: "Task Completion",
      description: "Prove your capabilities",
      requirements: [
        "Complete assigned tasks",
        "Meet project deadlines",
        "Quality code submission",
        "Documentation requirements",
      ],
      icon: "03",
      color: "#4ADE80",
    },
    {
      id: 4,
      title: "Task Levels",
      description: "Choose your path",
      requirements: [
        "Medium: Learning track",
        "Hard: Main project participation",
        "Advanced: Core project leadership",
        "Select based on expertise",
      ],
      icon: "04",
      color: "#4ADE80",
    },
    {
      id: 5,
      title: "Team Assignment",
      description: "Find your place in progHubs",
      requirements: [
        "Based on task performance",
        "Skill level assessment",
        "Team fit evaluation",
        "Project alignment",
      ],
      icon: "05",
      color: "#4ADE80",
    },
    {
      id: 6,
      title: "Project Work",
      description: "Start contributing",
      requirements: [
        "Leader-assigned tasks",
        "Time-bound deliverables",
        "Regular progress updates",
        "Team collaboration",
      ],
      icon: "06",
      color: "#4ADE80",
    },
    {
      id: 7,
      title: "Performance Tracking",
      description: "Measuring your impact",
      requirements: [
        "Commitment level monitoring",
        "Group activity tracking",
        "Task completion rate",
        "Team contribution",
      ],
      icon: "07",
      color: "#4ADE80",
    },
  ];

  const renderArrow = (direction, isActive) => (
    <div className="flex items-center justify-center w-8">
      {direction === "right" && (
        <FaArrowRight
          className={`w-5 h-5 ${
            isActive ? "text-[#4ADE80]" : "text-[#334155]"
          }`}
        />
      )}
      {direction === "left" && (
        <FaArrowLeft
          className={`w-5 h-5 ${
            isActive ? "text-[#4ADE80]" : "text-[#334155]"
          }`}
        />
      )}
      {direction === "down" && (
        <div className="h-8 flex items-center">
          <FaArrowDown
            className={`w-5 h-5 ${
              isActive ? "text-[#4ADE80]" : "text-[#334155]"
            }`}
          />
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4ADE80] to-[#22C55E] bg-clip-text text-transparent mb-3"
        >
          Join progHubs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto"
        >
          Follow the path to become part of our elite development team
        </motion.p>
      </div>

      {/* Mobile Progress Indicator */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#94A3B8]">Progress</span>
          <span className="text-sm text-[#4ADE80]">
            {activeStep} of {steps.length}
          </span>
        </div>
        <div className="h-1 bg-[#1E293B] rounded-full">
          <div
            className="h-full bg-[#4ADE80] rounded-full transition-all duration-300"
            style={{ width: `${(activeStep / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="relative" ref={timelineRef}>
        <div className="space-y-4 sm:space-y-8">
          {Array.from({ length: Math.ceil(steps.length / 3) }).map(
            (_, rowIndex) => {
              const startIdx = rowIndex * 3;
              const rowSteps = steps.slice(startIdx, startIdx + 3);
              const isReverse = rowIndex % 2 === 1;
              const isLastRow = rowIndex === Math.ceil(steps.length / 3) - 1;

              return (
                <div key={rowIndex} className="relative">
                  {/* Desktop Layout */}
                  <div
                    className={`hidden sm:flex ${
                      isReverse ? "flex-row-reverse" : "flex-row"
                    } items-center justify-center gap-2`}
                  >
                    {rowSteps.map((step, colIndex) => {
                      const isActive = step.id <= activeStep;
                      const isLastInRow = colIndex === rowSteps.length - 1;

                      return (
                        <React.Fragment key={step.id}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: step.id * 0.1 }}
                            className="w-[300px]"
                            onMouseEnter={() => setHoveredStep(step.id)}
                            onMouseLeave={() => setHoveredStep(null)}
                          >
                            <div
                              className={`relative overflow-hidden rounded-lg p-4 transition-all duration-300
                            ${
                              hoveredStep === step.id
                                ? "bg-[#1E293B]"
                                : "bg-[#1E293B]/80"
                            }
                            border border-[#334155] ${
                              isActive ? "border-[#4ADE80]/30" : ""
                            }`}
                            >
                              <div className="relative z-10">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-base font-bold text-[#E2E8F0]">
                                    {step.title}
                                  </h3>
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-xs font-medium
                                  ${
                                    isActive
                                      ? "text-[#4ADE80] bg-[#4ADE80]/10"
                                      : "text-[#94A3B8] bg-[#94A3B8]/10"
                                  }`}
                                  >
                                    Step {step.id}
                                  </span>
                                </div>
                                <p className="text-[#94A3B8] mb-3 text-xs">
                                  {step.description}
                                </p>
                                <div className="grid grid-cols-2 gap-1">
                                  {step.requirements.map((req, reqIndex) => (
                                    <div
                                      key={reqIndex}
                                      className="flex items-center space-x-1.5 group"
                                    >
                                      <div
                                        className={`w-1 h-1 rounded-full transition-colors duration-300
                                      ${
                                        isActive
                                          ? "bg-[#4ADE80]"
                                          : "bg-[#475569]"
                                      }`}
                                      />
                                      <span className="text-[10px] text-[#CBD5E1] group-hover:text-[#E2E8F0] transition-colors duration-300">
                                        {req}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                          {!isLastInRow &&
                            renderArrow(isReverse ? "left" : "right", isActive)}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Mobile Layout */}
                  <div className="sm:hidden space-y-4">
                    {rowSteps.map((step) => {
                      const isActive = step.id <= activeStep;
                      return (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: step.id * 0.1 }}
                          className="relative"
                        >
                          <div
                            className={`relative overflow-hidden rounded-lg p-4 transition-all duration-300
                          ${isActive ? "bg-[#1E293B]" : "bg-[#1E293B]/80"}
                          border border-[#334155] ${
                            isActive ? "border-[#4ADE80]/30" : ""
                          }`}
                          >
                            <div className="relative z-10">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-bold text-[#E2E8F0]">
                                  {step.title}
                                </h3>
                                <span
                                  className={`px-2 py-0.5 rounded-full text-xs font-medium
                                ${
                                  isActive
                                    ? "text-[#4ADE80] bg-[#4ADE80]/10"
                                    : "text-[#94A3B8] bg-[#94A3B8]/10"
                                }`}
                                >
                                  Step {step.id}
                                </span>
                              </div>
                              <p className="text-[#94A3B8] mb-3 text-xs">
                                {step.description}
                              </p>
                              <div className="grid grid-cols-1 gap-2">
                                {step.requirements.map((req, reqIndex) => (
                                  <div
                                    key={reqIndex}
                                    className="flex items-center space-x-2"
                                  >
                                    <div
                                      className={`w-1 h-1 rounded-full
                                    ${
                                      isActive ? "bg-[#4ADE80]" : "bg-[#475569]"
                                    }`}
                                    />
                                    <span className="text-xs text-[#CBD5E1]">
                                      {req}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          {step.id !== steps.length && (
                            <div className="flex justify-center my-2">
                              <FaArrowDown
                                className={`w-4 h-4 ${
                                  isActive ? "text-[#4ADE80]" : "text-[#334155]"
                                }`}
                              />
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Desktop Down Arrow */}
                  {!isLastRow && (
                    <div className="hidden sm:flex justify-center mt-2 mb-2">
                      {renderArrow("down", activeStep >= (rowIndex + 1) * 3)}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12 pb-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2.5 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-[#1E293B] rounded-full text-sm font-semibold 
            shadow-lg shadow-[#4ADE80]/20 hover:shadow-[#4ADE80]/30 transition-all duration-300
            border border-[#4ADE80]/20 hover:border-[#4ADE80]/40"
        >
          Start Your Journey
        </motion.button>
      </div>
    </div>
  );
};

export default BecomeAMember;
