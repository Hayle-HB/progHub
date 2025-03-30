import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Developers = () => {
  const developers = [
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      bio: "Passionate about building scalable applications and mentoring junior developers.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://twitter.com/alexchen",
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      bio: "UI/UX enthusiast with a focus on creating beautiful and accessible interfaces.",
      skills: ["React", "Next.js", "TailwindCSS", "Figma"],
      github: "https://github.com/sarahj",
      linkedin: "https://linkedin.com/in/sarahj",
      twitter: "https://twitter.com/sarahj",
    },
    {
      name: "Michael Rodriguez",
      role: "Backend Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      bio: "Backend specialist with expertise in microservices and cloud architecture.",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      github: "https://github.com/michaelr",
      linkedin: "https://linkedin.com/in/michaelr",
      twitter: "https://twitter.com/michaelr",
    },
    {
      name: "Emma Wilson",
      role: "DevOps Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      bio: "Infrastructure expert focused on automation and cloud optimization.",
      skills: ["Kubernetes", "Terraform", "CI/CD", "AWS"],
      github: "https://github.com/emmaw",
      linkedin: "https://linkedin.com/in/emmaw",
      twitter: "https://twitter.com/emmaw",
    },
    {
      name: "David Kim",
      role: "Mobile Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      bio: "Cross-platform mobile developer with a passion for native performance.",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      github: "https://github.com/davidk",
      linkedin: "https://linkedin.com/in/davidk",
      twitter: "https://twitter.com/davidk",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },
    {
      name: "Lisa Chen",
      role: "Security Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      bio: "Security specialist focused on application security and penetration testing.",
      skills: [
        "OWASP",
        "Penetration Testing",
        "Security Auditing",
        "Compliance",
      ],
      github: "https://github.com/lisac",
      linkedin: "https://linkedin.com/in/lisac",
      twitter: "https://twitter.com/lisac",
    },

  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#E2E8F0] mb-4">
          Our Amazing Team
        </h1>
        <p className="text-xl text-[#94A3B8]">
          Meet the talented developers behind progHubs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((dev, index) => (
          <motion.div
            key={dev.name}
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
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={dev.avatar}
                  alt={dev.name}
                  className="w-16 h-16 rounded-full border-2 border-[#4ADE80]/20"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#E2E8F0]">
                    {dev.name}
                  </h3>
                  <p className="text-[#4ADE80] text-sm">{dev.role}</p>
                </div>
              </div>

              <p className="text-[#94A3B8] text-sm mb-4">{dev.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {dev.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-[#334155] text-[#CBD5E1] text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={dev.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#94A3B8] hover:text-[#4ADE80] transition-colors duration-200"
                >
                  <FaTwitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
