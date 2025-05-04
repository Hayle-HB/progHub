import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#4ADE80] via-[#00CED1] to-[#FF8C00] text-transparent bg-clip-text">
                  Get in Touch
                </span>
              </h1>
              <p className="text-[#94A3B8]">
                Have questions or want to collaborate? We'd love to hear from
                you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1E293B] p-4 rounded-lg border border-[#334155]"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg text-[#4ADE80]">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#E2E8F0]">
                      Email
                    </h3>
                    <p className="text-sm text-[#94A3B8]">
                      proghubs.team@gmail.com
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1E293B] p-4 rounded-lg border border-[#334155]"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#3B82F6]/10 rounded-lg text-[#3B82F6]">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#E2E8F0]">
                      Phone
                    </h3>
                    <p className="text-sm text-[#94A3B8]">+251962484250</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#1E293B] p-4 rounded-lg border border-[#334155]"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#FF8C00]/10 rounded-lg text-[#FF8C00]">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#E2E8F0]">
                      Location
                    </h3>
                    <p className="text-sm text-[#94A3B8]">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/company/progHubs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0A66C2]/10 rounded-lg text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/proghubs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#333]/10 rounded-lg text-[#333] hover:bg-[#333]/20 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/proghubs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#1DA1F2]/10 rounded-lg text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#E2E8F0] mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-lg text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80] transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#E2E8F0] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-lg text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80] transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#E2E8F0] mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-lg text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80] transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#E2E8F0] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-lg text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80] transition-all duration-300"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-[#4ADE80] to-[#00CED1] text-[#1E293B] rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
