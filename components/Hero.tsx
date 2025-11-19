"use client"


import { Spotlight } from "./ui/spotlight";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { motion } from "framer-motion";

const Hero = () => {
  const roles = ["Web Developer", "Front End Developer", "React Developer"];
  const typingText = useTypingAnimation(roles, 100, 2000);
  return (
    <div className="min-h-screen w-full mt-16 p-4 bg-linear-to-r ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative  z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi,I'm Dharshan"
            className="text-center text-[48px] md:text-6xl lg:text-7xl"
          />

          {/* Typing Animation */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center md:mb-0 mb-6"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold  dark:text-purple-200 mb-6 ">
              {typingText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg   mx-auto">
              Passionate about creating beautiful, responsive web applications
              with modern technologies. I love turning ideas into reality
              through clean code and thoughtful user experiences.
            </p>
          </motion.div>
          <motion.a href="#projects" initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </motion.a>
        </div>   
      </div>
    </div>
  );
};

export default Hero;
