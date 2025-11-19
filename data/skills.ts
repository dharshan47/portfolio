export interface Skill {
  name: string;
  icon?: string;
  color?: string;
  image?: string;
}

export const skills: Skill[] = [
  {
    name: "HTML5",
    icon: "FaHtml5",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: "FaCss3Alt",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: "SiJavascript",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: "SiTypescript",
    color: "#3178C6",
  },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
  {
    name: "React",
    icon: "FaReact",
    color: "#61DAFB",
  },
  {
    name: "React Router",
    icon: "ReactRouter",
  },
  {
    name: "Next.js",
    icon: "SiNextdotjs",
    color: "#FFFFFF",
  },
];

export const otherSkills: Skill[] = [
  {
    name: "Redux",
    icon: "SiRedux",
    color: "#764ABC",
  },
  {
    name: "React Hook Form",
    image: "HookForm",
  },
  {
    name: "Zod",
    icon: "SiZod",
    color: "#3E67B1",
  },

  {
    name: "Tanstack Query",
    icon: "Tanstack",
  },
  {
    name: "Shadcn UI",
    icon: "Shadcn",
  },
  {
    name: "Prisma",
    icon: "Prisma",
  },
  {
    name: "Neon",
    icon: "Neon",
  },
  {
    name: "Better Auth",
    icon: "Betterauth",
  },
  {
    name: "GitHub",
    icon: "FaGithub",
    color: "#FFFFFF",
  },
  {
    name: "VS Code",
    icon: "VscVscode",
    color: "#007ACC",
  },
  {
    name: "Netlify",
    icon: "Netlify",
  },
  {
    name: "Vercel",
    icon: "Vercel",
  },
];
