import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectCurrentTheme } from "../../feature/theme/theme";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaArrowLeft,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

const JoinForm = ({ position, onBack }) => {
  const currentTheme = useSelector(selectCurrentTheme);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: position || "",
    github: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    skills: [],
    motivation: "",
    availability: "",
    resume: null,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showCustomSkill, setShowCustomSkill] = useState(false);
  const [customSkill, setCustomSkill] = useState("");
  const [apiError, setApiError] = useState("");

  // Theme styles
  const themeStyles = {
    light: {
      background: "bg-white/50",
      text: "text-gray-900",
      secondaryText: "text-gray-600",
      border: "border-gray-200/50",
      inputBg: "bg-white/80",
      inputBorder: "border-gray-300",
      inputFocus: "focus:border-[#4ADE80] focus:ring-[#4ADE80]/20",
      buttonBg: "bg-[#4ADE80]",
      buttonHover: "hover:bg-[#3CB371]",
      buttonText: "text-white",
      cardBg: "bg-white/50",
    },
    dark: {
      background: "bg-[#1E293B]/50",
      text: "text-[#E2E8F0]",
      secondaryText: "text-[#94A3B8]",
      border: "border-[#334155]/50",
      inputBg: "bg-[#1E293B]/80",
      inputBorder: "border-[#334155]",
      inputFocus: "focus:border-[#4ADE80] focus:ring-[#4ADE80]/20",
      buttonBg: "bg-[#4ADE80]",
      buttonHover: "hover:bg-[#3CB371]",
      buttonText: "text-white",
      cardBg: "bg-[#1E293B]/50",
    },
  };

  const styles = themeStyles[currentTheme];

  // Predefined skill sets based on position
  const skillSets = {
    "Frontend Developer": [
      "React",
      "Vue",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "SASS",
      "Redux",
      "Next.js",
      "Webpack",
      "Responsive Design",
      "UI/UX",
      "Accessibility",
    ],
    "Backend Developer": [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "Flask",
      "Java",
      "Spring",
      "PHP",
      "Laravel",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "RESTful APIs",
      "GraphQL",
      "Authentication",
      "Security",
    ],
    "Full Stack Developer": [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "MongoDB",
      "Express",
      "Django",
      "RESTful APIs",
      "Docker",
      "AWS",
      "CI/CD",
      "Git",
      "Agile",
    ],
    "UI/UX Designer": [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Photoshop",
      "Illustrator",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design Systems",
      "Typography",
      "Color Theory",
      "Responsive Design",
      "Accessibility",
    ],
    "Mobile Developer": [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "iOS",
      "Android",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Firebase",
      "App Store",
      "Google Play",
      "Mobile UI/UX",
      "Push Notifications",
    ],
    "ML/AI Engineer": [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Neural Networks",
      "Computer Vision",
      "NLP",
      "Machine Learning",
      "Deep Learning",
      "Model Deployment",
    ],
    "Event Organizer": [
      "Event Planning",
      "Project Management",
      "Communication",
      "Logistics",
      "Budgeting",
      "Marketing",
      "Social Media",
      "Community Management",
      "Public Speaking",
      "Team Leadership",
      "Problem Solving",
    ],
    "Data Analyst": [
      "SQL",
      "Python",
      "R",
      "Excel",
      "Tableau",
      "Power BI",
      "Data Visualization",
      "Statistical Analysis",
      "Data Cleaning",
      "Business Intelligence",
      "Machine Learning",
      "Data Mining",
      "Reporting",
    ],
    "Security Specialist": [
      "Cybersecurity",
      "Penetration Testing",
      "Security Protocols",
      "Encryption",
      "Authentication",
      "Authorization",
      "Compliance",
      "Incident Response",
      "Vulnerability Assessment",
      "Security Auditing",
      "Network Security",
    ],
    "Customer Support": [
      "Communication",
      "Problem Solving",
      "Customer Service",
      "Product Knowledge",
      "Troubleshooting",
      "Documentation",
      "Team Collaboration",
      "Time Management",
      "Empathy",
      "Active Listening",
      "Conflict Resolution",
    ],
    Other: [
      "Communication",
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
      "Project Management",
      "Leadership",
      "Adaptability",
      "Creativity",
      "Critical Thinking",
      "Organization",
      "Initiative",
    ],
  };

  const positions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Mobile Developer",
    "ML/AI Engineer",
    "Event Organizer",
    "Data Analyst",
    "Security Specialist",
    "Customer Support",
    "Other",
  ];

  // Update available skills when position changes
  useEffect(() => {
    if (formData.position && skillSets[formData.position]) {
      // Keep only skills that are in the new position's skill set
      const filteredSkills = formData.skills.filter((skill) =>
        skillSets[formData.position].includes(skill)
      );
      setFormData((prev) => ({ ...prev, skills: filteredSkills }));
    }
  }, [formData.position]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        resume: file,
      });

      if (errors.resume) {
        setErrors({
          ...errors,
          resume: "",
        });
      }
    }
  };

  const toggleSkill = (skill) => {
    if (formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: formData.skills.filter((s) => s !== skill),
      });
    } else {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
      });
    }
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !formData.skills.includes(customSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, customSkill.trim()],
      });
      setCustomSkill("");
      setShowCustomSkill(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.position) newErrors.position = "Please select a position";
    if (!formData.experience.trim())
      newErrors.experience = "Experience is required";
    if (formData.skills.length === 0)
      newErrors.skills = "At least one skill is required";
    if (!formData.motivation.trim())
      newErrors.motivation = "Motivation is required";
    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const formDataToSend = new FormData();

        // Append all form fields
        Object.keys(formData).forEach((key) => {
          if (key === "skills") {
            formDataToSend.append(key, JSON.stringify(formData[key]));
          } else if (key === "resume") {
            formDataToSend.append(key, formData[key]);
          } else {
            formDataToSend.append(key, formData[key]);
          }
        });

        const response = await fetch("http://localhost:5000/api/applications", {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to submit application");
        }

        if (data.success) {
          setSubmitSuccess(true);
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            position: position || "",
            github: "",
            linkedin: "",
            portfolio: "",
            experience: "",
            skills: [],
            motivation: "",
            availability: "",
            resume: null,
          });
        } else {
          throw new Error(data.message || "Failed to submit application");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setApiError(
          error.message || "Failed to submit application. Please try again."
        );
        setSubmitSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // className={`${styles.cardBg} rounded-xl border ${styles.border} p-6 sm:p-8 shadow-lg`}
      >
        <div className="flex items-center mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mr-4 p-2 rounded-full bg-[#4ADE80]/10 text-[#4ADE80]"
            onClick={onBack || (() => window.history.back())}
          >
            <FaArrowLeft />
          </motion.button>
          <h1 className={`text-2xl sm:text-3xl font-bold ${styles.text}`}>
            Join Our Team
          </h1>
        </div>

        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-[#4ADE80]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[#4ADE80]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className={`text-xl font-bold ${styles.text} mb-2`}>
              Application Submitted!
            </h2>
            <p className={`${styles.secondaryText} mb-6`}>
              Thank you for your interest in joining our team. We'll review your
              application and get back to you soon.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 ${styles.buttonBg} ${styles.buttonText} rounded-md font-medium`}
              onClick={onBack || (() => window.history.back())}
            >
              Return to Positions
            </motion.button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {apiError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md"
              >
                <p className="text-sm font-medium">{apiError}</p>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2
                  className={`text-lg font-semibold ${styles.text} border-b ${styles.border} pb-2`}
                >
                  Personal Information
                </h2>

                <div>
                  <label
                    className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-[#4ADE80]" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                        focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-[#4ADE80]" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                        focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-[#4ADE80]" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                        focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h2
                  className={`text-lg font-semibold ${styles.text} border-b ${styles.border} pb-2`}
                >
                  Professional Information
                </h2>

                <div>
                  <label
                    className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                  >
                    Position <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={`w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                      focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                  >
                    <option value="">Select a position</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.position}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                  >
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                      focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                    placeholder="e.g., 3 years"
                  />
                  {errors.experience && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.experience}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                  >
                    Skills <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {formData.position && skillSets[formData.position] && (
                      <div className="flex flex-wrap gap-1.5">
                        {skillSets[formData.position].map((skill) => (
                          <motion.button
                            key={skill}
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleSkill(skill)}
                            className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${
                              formData.skills.includes(skill)
                                ? "bg-[#4ADE80]/20 text-[#4ADE80] border border-[#4ADE80]/30"
                                : `${styles.cardBg} ${styles.border} ${styles.text}`
                            }`}
                          >
                            {skill}
                          </motion.button>
                        ))}
                      </div>
                    )}

                    {!formData.position && (
                      <p className={`text-sm ${styles.secondaryText}`}>
                        Please select a position to see relevant skills
                      </p>
                    )}

                    <div className="flex items-center mt-2">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowCustomSkill(!showCustomSkill)}
                        className={`flex items-center px-3 py-1 rounded-full text-sm font-medium 
                          ${styles.cardBg} ${styles.border} ${styles.text} mr-2`}
                      >
                        <FaPlus className="mr-1" /> Add Custom Skill
                      </motion.button>

                      {formData.skills.length > 0 && (
                        <span className={`text-sm ${styles.secondaryText}`}>
                          {formData.skills.length} selected
                        </span>
                      )}
                    </div>

                    {showCustomSkill && (
                      <div className="flex items-center mt-2">
                        <input
                          type="text"
                          value={customSkill}
                          onChange={(e) => setCustomSkill(e.target.value)}
                          className={`flex-1 rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                            focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                          placeholder="Enter custom skill"
                        />
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={addCustomSkill}
                          className={`ml-2 px-3 py-2 ${styles.buttonBg} ${styles.buttonText} rounded-md font-medium`}
                        >
                          Add
                        </motion.button>
                      </div>
                    )}

                    {errors.skills && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.skills}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h2
                className={`text-lg font-semibold ${styles.text} border-b ${styles.border} pb-2`}
              >
                Social Links
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                  >
                    GitHub Profile
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaGithub className="text-[#4ADE80]" />
                    </div>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                        focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                      placeholder="https://github.com/username"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                  >
                    LinkedIn Profile
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLinkedin className="text-[#4ADE80]" />
                    </div>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                        focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                  >
                    Portfolio Website
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaFileAlt className="text-[#4ADE80]" />
                    </div>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                        focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h2
                className={`text-lg font-semibold ${styles.text} border-b ${styles.border} pb-2`}
              >
                Additional Information
              </h2>

              <div>
                <label
                  className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                >
                  Why do you want to join our team?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                    focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                  placeholder="Tell us why you're interested in joining our team..."
                />
                {errors.motivation && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.motivation}
                  </p>
                )}
              </div>

              <div>
                <label
                  className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                >
                  Availability
                </label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className={`w-full rounded-md ${styles.inputBg} ${styles.inputBorder} ${styles.inputFocus} 
                    focus:outline-none focus:ring-2 p-2 ${styles.text}`}
                  placeholder="e.g., Full-time, Part-time, Remote"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium ${styles.secondaryText} mb-1`}
                >
                  Resume/CV <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-[#4ADE80]"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm">
                      <label
                        htmlFor="resume-upload"
                        className={`relative cursor-pointer rounded-md font-medium ${styles.text} 
                        hover:text-[#4ADE80] focus-within:outline-none`}
                      >
                        <span>Upload a file</span>
                        <input
                          id="resume-upload"
                          name="resume"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                        />
                      </label>
                      <p className={`pl-1 ${styles.secondaryText}`}>
                        or drag and drop
                      </p>
                    </div>
                    <p className={`text-xs ${styles.secondaryText}`}>
                      PDF, DOC, or DOCX up to 10MB
                    </p>
                    {formData.resume && (
                      <p className={`text-sm ${styles.text} mt-2`}>
                        Selected: {formData.resume.name}
                      </p>
                    )}
                  </div>
                </div>
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-500">{errors.resume}</p>
                )}
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full py-3 ${styles.buttonBg} ${
                  styles.buttonText
                } rounded-md font-medium 
                  transition-all duration-200 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default JoinForm;
