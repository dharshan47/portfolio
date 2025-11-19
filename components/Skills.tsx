"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";

const iconMap: {
  [key: string]: React.FC<{ size?: number; style?: React.CSSProperties }>;
} = {
  FaHtml5,
  FaCss3Alt,
  SiJavascript,
  SiTypescript,
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  ReactRouter: ({ size = 48, style }) => (
    <Image
      src="/skills/react-router.png"
      alt="React Router"
      width={size}
      height={size}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
};

const Skills = () => {
  const router = useRouter();
  return (
    <section id="skills" className="py-8 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-300">
            Skills
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6">
            {skills.map((skill, idx) => {
              const IconComponent = iconMap[skill.icon || skill.image || ""];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                  className="flex flex-col items-center p-6 border border-white/20 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && (
                      <IconComponent size={48} style={{ color: skill.color }} />
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-300 text-center group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
          <div
            onClick={() => router.push("/other-skills")}
            className="flex justify-center md:mt-0 mt-6 "
          >
            <MagicButton
              title="Show other skills"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
