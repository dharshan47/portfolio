"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  return (
    <section id="projects" className="py-8 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-300 mb-6">
            Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="flex flex-col justify-between border border-white/20 rounded-2xl shadow-md hover:shadow-lg overflow-hidden w-full max-w-sm "
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden m-6">
                <Image
                  src={item.image}
                  alt="Project Img"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>

              {/* CONTENT */}
              <div className="px-4 pb-6 flex flex-col grow">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center mt-2">
                  {item.title}
                </h1>

                <p className="lg:text-base text-sm text-gray-400 text-center mt-2 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* TECH + LINK */}
                <div className="flex items-center justify-center">
                  {item.technologies.map((icon, idx) => (
                    <div
                      key={idx}
                      className="border border-white/20 rounded-full bg-slate-950
                        md:h-10 md:w-10 w-8 h-8 flex justify-center items-center mb-4"
                      style={{
                        transform: `translateX(-${5 * idx + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="tech-icon" fill className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex justify-center items-center">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                    >
                      View Code
                    </a>
                    <FaGithub className="ms-3" color="#CBACF9" />
                  </div>

                  <div className="flex justify-center items-center">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                    >
                      Check Live Site
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          onClick={() => router.push("/other-projects")}
          className="flex justify-center md:mt-0 mt-6 "
        >
          <MagicButton
            title="Show other projects"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
