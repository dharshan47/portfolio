"use client";

import React from "react";
import Image from "next/image";
import { SiRedux, SiZod } from "react-icons/si";
import { otherSkills } from "@/data/skills";
import { FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const iconMap: {
  [key: string]: React.FC<{ size?: number; style?: React.CSSProperties }>;
} = {
  SiRedux,
  SiZod,
  FaGithub,
  VscVscode,
  Tanstack: ({ size = 48, style }) => (
    <Image
      src="/skills/tanstack.png"
      alt="TanStack Query"
      width={size}
      height={size}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
  Prisma: ({ size = 48, style }) => (
    <Image
      src="/skills/prisma.png"
      alt="Prisma"
      width={size}
      height={size}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
  Betterauth: ({ size = 48, style }) => (
    <Image
      src="/skills/better auth.png"
      alt="Better Auth"
      width={size}
      height={size}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
  Shadcn: ({ size = 48, style }) => (
    <Image
      src="/skills/shadcnui.png"
      alt="Shadcn UI"
      width={size}
      height={size}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
  HookForm: ({ size = 48, style }) => (
    <Image
      src="/skills/ReactHookForm.png"
      alt="React Hook Form"
      width={size}
      height={size}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
  Neon: ({ size = 48, style }) => (
    <Image
      src="/skills/neon.png"
      alt="Neon Database"
      width={size}
      height={size}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
  Netlify: ({ size = 48, style }) => (
    <Image
      src="/skills/Netlify.png"
      alt="Netlify"
      width={size}
      height={size}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
  Vercel: ({ size = 48, style }) => (
    <Image
      src="/skills/Vercel.png"
      alt="Vercel"
      width={size}
      height={size}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
};

const OtherSkills = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {otherSkills.map((skill, idx) => {
        const IconComponent = iconMap[skill.icon || skill.image || ""];
        return (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
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
  );
};

export default OtherSkills;
