import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaTelegram,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Projects", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Learning Hub", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Code of Conduct", href: "#" },
        { name: "Licensing", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/progHubs",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/progHubs",
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/progHubs",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "Discord",
      href: "https://discord.gg/progHubs",
      icon: <FaDiscord className="w-5 h-5" />,
    },
    {
      name: "Telegram",
      href: "https://t.me/progHubs",
      icon: <FaTelegram className="w-5 h-5" />,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@progHubs",
      icon: <FaYoutube className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/progHubs",
      icon: <FaInstagram className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="relative mt-24 bg-[#0A0F1C]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111827]/50 to-[#0A0F1C]" />

      <div className="relative max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8 xl:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4ADE80] to-[#22C55E]">
                progHubs
              </h2>
              <p className="text-[#94A3B8] max-w-xs">
                Building the future of collaborative development. Join our
                community of innovative developers.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                    title={item.name}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation sections */}
          <div className="mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-[#E2E8F0] tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((item, itemIndex) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: (index * 4 + itemIndex) * 0.1,
                      }}
                    >
                      <a
                        href={item.href}
                        className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 pt-8 pb-6 border-t border-[#1E293B]"
        >
          <p className="text-[#64748B] text-sm text-center">
            © {new Date().getFullYear()} progHubs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
