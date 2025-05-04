import React from "react";
import { motion } from "framer-motion";
import progHubs from "../../assets/Images/progHubs/progHubsHomeHeroSectionImage.png";
import {
  FaCode,
  FaUsers,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { number: "10K+", label: "Active Developers", color: "text-[#4ADE80]" },
    { number: "500+", label: "Projects", color: "text-[#3B82F6]" },
    { number: "50+", label: "Countries", color: "text-[#FF8C00]" },
    { number: "24/7", label: "Support", color: "text-[#4ADE80]" },
  ];

  const features = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Advanced Development Tools",
      description:
        "Access cutting-edge tools and frameworks for modern development",
      color: "text-[#4ADE80]",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Global Community",
      description: "Connect with developers worldwide and grow your network",
      color: "text-[#3B82F6]",
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Rapid Innovation",
      description: "Stay ahead with the latest technologies and methodologies",
      color: "text-[#FF8C00]",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <div className="relative w-full max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-24 pt-6 sm:pt-8 lg:pt-12">
          {/* Main Container */}
          <div className="relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#4ADE80] via-[#00CED1] to-[#FF8C00] text-transparent bg-clip-text">
                  Where Innovation
                </span>
                <br />
                <span className="text-[#E2E8F0]">Meets Community</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Join the next generation of developers shaping the future
                through collaboration and innovation.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#4ADE80] text-[#1E293B] rounded-lg font-medium hover:bg-[#4ADE80]/90 transition-colors text-sm sm:text-base">
                  Get Started
                </button>
                <button className="px-4 sm:px-6 py-2.5 sm:py-3 border border-[#4ADE80] text-[#4ADE80] rounded-lg font-medium hover:bg-[#4ADE80]/10 transition-colors text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
              {/* Main Image Container */}
              <div className="relative bg-[#1E293B] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#334155] shadow-xl sm:shadow-2xl overflow-hidden group">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80] via-[#3B82F6] to-[#4ADE80] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] bg-[#1E293B] rounded-2xl sm:rounded-3xl" />
                </div>

                {/* Image Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/5 to-[#3B82F6]/5" />

                {/* Main Image */}
                <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={progHubs}
                    alt="progHubs"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 via-[#1E293B]/20 to-transparent" />
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#4ADE80]/30 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#3B82F6]/30 rounded-br-xl" />

                {/* Professional Badge */}
                <div className="absolute top-4 right-4 bg-[#1E293B]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#4ADE80]/30">
                  <span className="text-xs font-medium text-[#4ADE80]">
                    Top 1% Developers
                  </span>
                </div>

                {/* Floating Code Elements */}
                <div className="absolute top-1/4 left-4 w-2 h-2 bg-[#4ADE80]/30 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-4 w-2 h-2 bg-[#3B82F6]/30 rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 left-6 w-2 h-2 bg-[#FF8C00]/30 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-6 w-2 h-2 bg-[#4ADE80]/30 rounded-full animate-pulse" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -right-3 w-6 h-6 bg-[#4ADE80]/10 rounded-full blur-lg"
              />
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#3B82F6]/10 rounded-full blur-lg"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={() => scrollToSection("features")}
            className="group flex flex-col items-center gap-1 sm:gap-1.5 text-[#94A3B8] hover:text-[#4ADE80] transition-colors"
          >
            <span className="text-[10px] xs:text-xs sm:text-sm font-medium">
              Scroll Down
            </span>
            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full border-2 border-current flex items-center justify-center"
            >
              <svg
                className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3"
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
            </motion.div>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-[#94A3B8]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E2E8F0] mb-4">
            Why Choose progHubs?
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Join a community that's shaping the future of software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1E293B] p-6 rounded-xl border border-[#334155] hover:border-[#4ADE80]/30 transition-colors"
            >
              <div className={`${feature.color} mb-4`}>{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#E2E8F0] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#94A3B8]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 lg:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E2E8F0] mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-[#94A3B8] mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already building the future with
          us. Start your journey today and unlock endless possibilities.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-[#4ADE80] text-[#1E293B] rounded-lg font-medium hover:bg-[#4ADE80]/90 transition-colors"
        >
          Get Started Now
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
