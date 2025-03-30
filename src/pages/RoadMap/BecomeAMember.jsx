import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
      title: "Create Your Profile",
      description: "Start your journey by creating a professional profile",
      requirements: [
        "Professional profile picture",
        "Detailed bio describing your skills",
        "Links to your portfolio/projects",
        "Your tech stack and expertise",
      ],
      icon: "01",
      color: "#4ADE80",
    },
    {
      id: 2,
      title: "Skill Assessment",
      description: "Demonstrate your technical abilities",
      requirements: [
        "Complete coding challenges",
        "Pass technical assessment",
        "Show problem-solving skills",
        "Code quality evaluation",
      ],
      icon: "02",
      color: "#4ADE80",
    },
    {
      id: 3,
      title: "Team Collaboration",
      description: "Show your teamwork capabilities",
      requirements: [
        "Participate in group projects",
        "Contribute to discussions",
        "Help other community members",
        "Share knowledge and resources",
      ],
      icon: "03",
      color: "#4ADE80",
    },
    {
      id: 4,
      title: "Final Interview",
      description: "Meet the progHubs team",
      requirements: [
        "Technical discussion",
        "Team fit evaluation",
        "Project planning skills",
        "Communication assessment",
      ],
      icon: "04",
      color: "#4ADE80",
    },
    {
      id: 5,
      title: "Project Assignment",
      description: "Get started with your first project",
      requirements: [
        "Project overview briefing",
        "Team introduction",
        "Development environment setup",
        "Initial tasks assignment",
      ],
      icon: "05",
      color: "#4ADE80",
    },
    {
      id: 6,
      title: "Onboarding Process",
      description: "Complete the formal onboarding process",
      requirements: [
        "Documentation review",
        "Access setup",
        "Team guidelines",
        "Workflow orientation",
      ],
      icon: "06",
      color: "#4ADE80",
    },
    {
      id: 7,
      title: "First Sprint",
      description: "Participate in your first development sprint",
      requirements: [
        "Sprint planning",
        "Task implementation",
        "Code review process",
        "Sprint retrospective",
      ],
      icon: "07",
      color: "#4ADE80",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#E2E8F0] mb-4">
          Join progHubs
        </h1>
        <p className="text-xl text-[#94A3B8]">
          Follow the path to become part of our elite development team
        </p>
      </div>

      <div className="relative">
        {/* Creative timeline indicator */}
        <div className="absolute left-6 top-0 bottom-0 w-12">
          {/* Background line with gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#334155] via-[#334155] to-transparent" />

          {/* Animated progress line */}
          <div
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-[#4ADE80] via-[#4ADE80] to-transparent transition-all duration-500"
            style={{
              height: `${(activeStep / steps.length) * 100}%`,
              filter: "drop-shadow(0 0 8px rgba(74, 222, 128, 0.3))",
            }}
          />

          {/* Step indicators */}
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="absolute left-0 w-full"
              style={{
                top: `${(index / (steps.length - 1)) * 100}%`,
              }}
            >
              {/* Hexagonal step indicator */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8
                  ${step.id <= activeStep ? "scale-110" : "scale-100"}
                  transition-all duration-300`}
              >
                <div
                  className={`absolute inset-0 
                  ${
                    step.id <= activeStep
                      ? "bg-[#4ADE80] shadow-lg shadow-[#4ADE80]/20"
                      : "bg-[#334155]"
                  }
                  transition-all duration-300
                  clip-path-hexagon`}
                />

                {/* Inner hexagon */}
                <div
                  className={`absolute inset-1
                  ${
                    step.id <= activeStep
                      ? "bg-[#4ADE80] shadow-inner"
                      : "bg-[#1E293B]"
                  }
                  transition-all duration-300
                  clip-path-hexagon
                  flex items-center justify-center`}
                >
                  <span
                    className={`text-xs font-bold
                    ${
                      step.id <= activeStep
                        ? "text-[#1E293B]"
                        : "text-[#4ADE80]"
                    }`}
                  >
                    {step.id}
                  </span>
                </div>

                {/* Active step indicator */}
                {step.id === activeStep && (
                  <motion.div
                    className="absolute -inset-2 bg-[#4ADE80] opacity-20 clip-path-hexagon"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>

              {/* Step connection line */}
              <div
                className={`absolute left-1/2 w-24 h-0.5 -translate-y-1/2
                  ${
                    step.id <= activeStep
                      ? "bg-gradient-to-r from-[#4ADE80] to-transparent"
                      : "bg-[#334155]"
                  }
                  transition-all duration-300`}
                style={{ left: "100%" }}
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 space-y-24" ref={timelineRef}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="relative group ml-32 w-full">
                {/* Card glow effect */}
                <div
                  className="absolute -inset-0.5 bg-[#4ADE80] rounded-xl opacity-0 
                  group-hover:opacity-[0.03] blur-sm transition-opacity duration-500"
                />

                <div
                  className="relative bg-[#1E293B] rounded-xl p-6 border border-[#334155] 
                  transition-all duration-500 group-hover:border-[#4ADE80]/10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#E2E8F0]">
                        {step.title}
                      </h3>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full transition-colors duration-300
                        ${
                          step.id <= activeStep
                            ? "text-[#4ADE80] bg-[#4ADE80]/5"
                            : "text-[#94A3B8] bg-[#94A3B8]/10"
                        }`}
                      >
                        Step {step.id}
                      </span>
                    </div>
                    <p className="text-[#94A3B8] mb-4">{step.description}</p>

                    <div className="grid grid-cols-2 gap-3">
                      {step.requirements.map((req, reqIndex) => (
                        <div
                          key={reqIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#475569]" />
                          <span className="text-sm text-[#CBD5E1]">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#334155] text-[#E2E8F0] rounded-full font-semibold 
            shadow-lg hover:bg-[#475569] transition-all duration-300
            border border-[#475569] hover:border-[#4ADE80]"
        >
          Start Your Journey
        </motion.button>
      </div>
    </div>
  );
};

// Add the required styles to your global CSS or style tag
const styles = `
  .clip-path-hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
`;

export default BecomeAMember;
