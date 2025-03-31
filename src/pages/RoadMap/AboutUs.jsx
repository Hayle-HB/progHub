import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import progHubs from "./proghubs.png";
const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [progressHeight, setProgressHeight] = useState(0);
  const contentRefs = useRef({});
  const navRef = useRef(null);

  const features = [
    {
      title: "Innovation Hub",
      description:
        "A space where developers collaborate on cutting-edge projects using the latest technologies.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Global Community",
      description:
        "Connect with talented developers from around the world, share knowledge, and grow together.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: "Learning & Growth",
      description:
        "Continuous learning through hands-on projects, mentorship, and collaborative development.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      ),
    },
    {
      title: "Open Source",
      description:
        "Contribute to meaningful open-source projects that make a difference in the developer community.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const sections = [
    {
      id: "overview",
      title: "Overview",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">Overview</h2>
          <p className="text-[#94A3B8] mb-6">
            progHubs is a dynamic platform dedicated to fostering collaboration
            and innovation in the software development community. We bring
            together passionate developers from around the world to create
            meaningful projects and drive technological advancement.
          </p>
          <p className="text-[#94A3B8] mb-6">
            Our platform serves as a bridge between innovative ideas and their
            implementation, creating an ecosystem where creativity meets
            technical excellence.
          </p>
        </div>
      ),
    },
    {
      id: "mission",
      title: "Our Mission",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">
            Our Mission
          </h2>
          <p className="text-[#94A3B8] mb-6">
            Our mission is to create an inclusive environment where developers
            can grow, collaborate, and make a lasting impact on the tech
            community through innovative projects and knowledge sharing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E293B]/50 p-4 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-2">Empowerment</h3>
              <p className="text-sm text-[#94A3B8]">
                Enabling developers to reach their full potential through
                mentorship and resources.
              </p>
            </div>
            <div className="bg-[#1E293B]/50 p-4 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-[#94A3B8]">
                Fostering creativity and technological advancement in every
                project.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "vision",
      title: "Our Vision",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">Our Vision</h2>
          <p className="text-[#94A3B8] mb-6">
            We envision a future where collaboration knows no boundaries, and
            every developer has the opportunity to contribute to meaningful
            projects that shape the digital landscape.
          </p>
          <div className="bg-gradient-to-r from-[#4ADE80]/10 to-[#3B82F6]/10 p-6 rounded-lg border border-[#334155]">
            <h3 className="text-[#E2E8F0] font-semibold mb-3">Future Goals</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                <span className="text-[#94A3B8]">
                  Global developer community expansion
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                <span className="text-[#94A3B8]">
                  Advanced collaboration tools
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                <span className="text-[#94A3B8]">
                  AI-powered development assistance
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "values",
      title: "Core Values",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">
            Core Values
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-[#4ADE80]" />
              <div>
                <h3 className="text-[#E2E8F0] font-semibold">
                  Innovation First
                </h3>
                <p className="text-[#94A3B8]">
                  Pushing boundaries and exploring new technologies
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-[#4ADE80]" />
              <div>
                <h3 className="text-[#E2E8F0] font-semibold">Collaboration</h3>
                <p className="text-[#94A3B8]">
                  Working together to achieve greater results
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-[#4ADE80]" />
              <div>
                <h3 className="text-[#E2E8F0] font-semibold">
                  Continuous Learning
                </h3>
                <p className="text-[#94A3B8]">
                  Always growing and sharing knowledge
                </p>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "technology",
      title: "Technology Stack",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">
            Technology Stack
          </h2>
          <p className="text-[#94A3B8] mb-6">
            We leverage cutting-edge technologies to provide the best
            development experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1E293B]/50 p-4 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-2">Frontend</h3>
              <ul className="space-y-2">
                <li className="text-sm text-[#94A3B8]">React & Next.js</li>
                <li className="text-sm text-[#94A3B8]">TailwindCSS</li>
                <li className="text-sm text-[#94A3B8]">TypeScript</li>
              </ul>
            </div>
            <div className="bg-[#1E293B]/50 p-4 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-2">Backend</h3>
              <ul className="space-y-2">
                <li className="text-sm text-[#94A3B8]">Node.js</li>
                <li className="text-sm text-[#94A3B8]">GraphQL</li>
                <li className="text-sm text-[#94A3B8]">MongoDB</li>
              </ul>
            </div>
            <div className="bg-[#1E293B]/50 p-4 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-2">DevOps</h3>
              <ul className="space-y-2">
                <li className="text-sm text-[#94A3B8]">Docker</li>
                <li className="text-sm text-[#94A3B8]">Kubernetes</li>
                <li className="text-sm text-[#94A3B8]">CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "features",
      title: "Key Features",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="relative group"
              >
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#4ADE80] to-[#3B82F6] rounded-lg opacity-0 
              group-hover:opacity-20 transition-opacity duration-300 blur"
                />
                <div
                  className="relative bg-[#1E293B] p-4 rounded-lg border border-[#334155] 
              group-hover:border-[#4ADE80]/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-1.5 bg-[#4ADE80]/10 rounded-lg text-[#4ADE80]">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#E2E8F0]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#94A3B8]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "benefits",
      title: "Benefits",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">
            Member Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-3">
                Career Growth
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#4ADE80]" />
                  <div>
                    <h4 className="text-[#E2E8F0]">Portfolio Building</h4>
                    <p className="text-sm text-[#94A3B8]">
                      Work on real projects that showcase your skills
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#4ADE80]" />
                  <div>
                    <h4 className="text-[#E2E8F0]">Skill Development</h4>
                    <p className="text-sm text-[#94A3B8]">
                      Access to workshops and learning resources
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-3">
                Community Perks
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#4ADE80]" />
                  <div>
                    <h4 className="text-[#E2E8F0]">Networking</h4>
                    <p className="text-sm text-[#94A3B8]">
                      Connect with industry professionals
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#4ADE80]" />
                  <div>
                    <h4 className="text-[#E2E8F0]">Exclusive Events</h4>
                    <p className="text-sm text-[#94A3B8]">
                      Access to member-only workshops and meetups
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "community",
      title: "Community",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">Community</h2>
          <p className="text-[#94A3B8] mb-6">
            Join our thriving community of developers, where you can:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1E293B]/50 p-4 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-2">Collaborate</h3>
              <p className="text-sm text-[#94A3B8]">
                Work with other developers on exciting projects
              </p>
            </div>
            <div className="bg-[#1E293B]/50 p-4 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-2">Learn</h3>
              <p className="text-sm text-[#94A3B8]">
                Access resources and mentorship opportunities
              </p>
            </div>
            <div className="bg-[#1E293B]/50 p-4 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-2">Share</h3>
              <p className="text-sm text-[#94A3B8]">
                Contribute your knowledge and experience
              </p>
            </div>
            <div className="bg-[#1E293B]/50 p-4 rounded-lg border border-[#334155]">
              <h3 className="text-[#E2E8F0] font-semibold mb-2">Grow</h3>
              <p className="text-sm text-[#94A3B8]">
                Advance your career through real-world projects
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "join",
      title: "Join Us",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">
            Join progHubs Today
          </h2>
          <p className="text-[#94A3B8] mb-6">
            Take the first step towards being part of an innovative developer
            community.
          </p>
          <div className="bg-gradient-to-r from-[#4ADE80]/5 to-[#3B82F6]/5 p-6 rounded-lg border border-[#334155]">
            <h3 className="text-[#E2E8F0] font-semibold mb-4">
              Getting Started
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#4ADE80]/10 flex items-center justify-center text-[#4ADE80]">
                  1
                </div>
                <p className="text-[#94A3B8]">Create your developer profile</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#4ADE80]/10 flex items-center justify-center text-[#4ADE80]">
                  2
                </div>
                <p className="text-[#94A3B8]">Choose your areas of interest</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#4ADE80]/10 flex items-center justify-center text-[#4ADE80]">
                  3
                </div>
                <p className="text-[#94A3B8]">Connect with the community</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = contentRefs.current[sectionId];
    if (element) {
      const offset = window.innerHeight / 3;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      // Get current and target progress
      const targetIndex = sections.findIndex((s) => s.id === sectionId);
      const targetProgress = ((targetIndex + 0.5) / sections.length) * 100;
      const startProgress = progressHeight;
      const startTime = performance.now();
      const duration = 1500; // Increased duration for smoother movement

      // Enhanced smooth animation
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Enhanced spring animation curve
        const springCurve = (t) => {
          const b = 0.2; // More damping for smoother movement
          const c = 1.0; // Slightly reduced spring constant
          return (
            1 +
            Math.pow(2, -10 * t) * Math.sin(((t - b / 4) * (2 * Math.PI)) / c)
          );
        };

        const easedProgress = springCurve(progress);
        const currentProgress =
          startProgress + (targetProgress - startProgress) * easedProgress;
        setProgressHeight(currentProgress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      // Start the animation
      requestAnimationFrame(animate);

      // Smooth scroll with matching duration
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let targetSection = sections[0].id;
      let minDistance = Infinity;

      // Find the closest section
      for (const section of sections) {
        const element = contentRefs.current[section.id];
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const middle = (top + bottom) / 2;
          const distance = Math.abs(middle - window.innerHeight / 2);

          if (distance < minDistance) {
            minDistance = distance;
            targetSection = section.id;
          }
        }
      }

      if (targetSection !== activeSection) {
        setActiveSection(targetSection);

        // Animate progress change smoothly
        const targetIndex = sections.findIndex((s) => s.id === targetSection);
        const targetProgress = ((targetIndex + 0.5) / sections.length) * 100;
        const startProgress = progressHeight;
        const startTime = performance.now();
        const duration = 800; // Shorter duration for scroll-based updates

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Smooth easing function
          const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);
          const easedProgress = easeOutQuint(progress);

          const currentProgress =
            startProgress + (targetProgress - startProgress) * easedProgress;
          setProgressHeight(currentProgress);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    };

    // Throttle scroll event for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [activeSection, progressHeight]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl mx-auto mb-16 sm:mb-24 pt-8"
      >
        {/* Background Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4ADE80]/20 via-[#00CED1]/20 to-[#FF8C00]/20 rounded-lg opacity-75 blur-2xl" />

        {/* Image Container */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
          <img
            src={progHubs}
            alt="progHubs"
            className="w-full h-full object-contain rounded-lg shadow-2xl"
          />

          {/* Floating Particles */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#FF8C00]/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${
                    2 + Math.random() * 3
                  }s infinite ease-in-out ${Math.random() * 2}s`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4ADE80] via-[#00CED1] to-[#FF8C00] text-transparent bg-clip-text">
            Where Innovation Meets Community
          </h1>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-xl mx-auto">
            Join the next generation of developers shaping the future
          </p>
        </motion.div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1E293B]/95 backdrop-blur-md border-t border-[#334155]">
          <div className="max-w-6xl mx-auto px-4">
            {/* Current Section Indicator */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                <span className="text-sm font-medium text-[#E2E8F0]">
                  {sections.find((s) => s.id === activeSection)?.title}
                </span>
              </div>
              <span className="text-xs text-[#4ADE80]">
                {`${sections.findIndex((s) => s.id === activeSection) + 1} of ${
                  sections.length
                }`}
              </span>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-1.5 py-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300
                    ${
                      activeSection === section.id
                        ? "bg-[#4ADE80] w-4"
                        : "bg-[#334155] hover:bg-[#4ADE80]/50"
                    }`}
                  aria-label={`Go to ${section.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <nav className="relative" ref={navRef}>
              {/* Progress Line */}
              <div className="absolute right-0 top-0 bottom-0 w-px">
                <svg
                  className="h-full w-16 absolute -right-8"
                  viewBox="0 0 16 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="progressGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset={`${Math.max(0, progressHeight - 6)}%`}
                        stopColor="#334155"
                      />
                      <stop
                        offset={`${Math.max(0, progressHeight - 4)}%`}
                        stopColor="#4ADE80"
                      />
                      <stop offset={`${progressHeight}%`} stopColor="#4ADE80" />
                      <stop
                        offset={`${Math.min(100, progressHeight + 4)}%`}
                        stopColor="#4ADE80"
                      />
                      <stop
                        offset={`${Math.min(100, progressHeight + 6)}%`}
                        stopColor="#334155"
                      />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M8 0 Q12 25 8 50 Q4 75 8 100"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    className="path-line"
                    style={{
                      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </svg>
              </div>

              <ul className="space-y-6 relative pr-8">
                {sections.map((section) => (
                  <li key={section.id} className="relative">
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left w-full group transition-colors duration-300 ${
                        activeSection === section.id
                          ? "text-[#4ADE80]"
                          : "text-[#94A3B8] hover:text-[#E2E8F0]"
                      }`}
                    >
                      <span className="relative">{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-16 sm:space-y-24 pb-20 lg:pb-0">
          {sections.map((section) => (
            <div
              key={section.id}
              ref={(el) => (contentRefs.current[section.id] = el)}
              className="scroll-mt-8 sm:scroll-mt-16"
            >
              <div className="space-y-8">{section.content}</div>
            </div>
          ))}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-4 sm:py-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-10 py-2.5 sm:py-3 bg-[#1E293B] text-[#4ADE80] rounded-md
                border-2 border-[#4ADE80] font-medium 
                transition-all duration-200
                hover:bg-[#4ADE80]/10"
            >
              Become a Member
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
