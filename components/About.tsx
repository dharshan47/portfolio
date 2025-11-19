"use client";


import { motion } from "framer-motion";
import Canvas3D from "./Canvas3D";
import { Download, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="md:-mt-14  pb-16 scroll-mt-19">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-300">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center "
          >
            <div className="w-70 h-70 lg:w-80 lg:h-80 border-3 border-purple-300 rounded-full overflow-hidden flex items-center justify-center">
              {/* Canvas3D fills the parent container */}
              <Canvas3D className="w-full h-full overflow-hidden rounded-full" />
            </div>
          </motion.div>

          {/*Content  */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-center md:text-left "
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Hello! I’m{" "}
              <span className="text-purple-300 font-bold">Dharshan M</span>, a Commerce graduate with a strong interest in frontend development. I enjoy understanding how websites work and focus on creating clean, responsive, and user-friendly interfaces. I’m continuously improving my skills, exploring modern tools, and learning new techniques to become a stronger and more effective developer.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
              <motion.a
                href="/Dharshan M Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-purple-200 text-white font-semibold rounded-full transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                View Resume
                <ExternalLink size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Dharshan M Resume.pdf"
                download="Dharshan M Resume.pdf"
                className="px-6 py-3 border-2 border-purple-200 font-semibold rounded-full hover:bg-roleLight hover:text-white dark:hover:bg-roleDark dark:hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Download
                <Download size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
