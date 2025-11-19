"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const handleScroll = (sectionId: string) => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      // Already on homepage → just scroll
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Go to home and then scroll
      router.push(`/#${sectionId}`);
    }
  };

  const socialLinks = [
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=dharshan0747@gmail.com",
      icon: Mail,
      color: "#EA4335",
    },
    {
      name: "GitHub",
      url: "https://github.com/dharshan47",
      icon: FaGithub,
      color: "#FFFFFF",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/dharshan47",
      icon: FaLinkedin,
      color: "#0A66C2",
    },
  ];
  return (
    <footer
      className="border-t  "
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="text-center ">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-2">
              Dharshan M
            </h3>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 border border-white/20 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
                  style={{ "--hover-color": link.color } as React.CSSProperties}
                >
                  <IconComponent
                    size={24}
                    className="text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors "
                    style={{ color: "var(--hover-color)" }}
                  />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {["About", "Education", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => handleScroll(item.toLowerCase())}
                    className="dark:hover:text-neutral-300 "
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-gray-200 dark:border-gray-700 pt-8"
          >
            <div className="  text-sm text-neutralLight dark:text-neutralDark">
              <span>© {currentYear} Dharshan. All rights reserved. </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
