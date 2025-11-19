"use client"

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { education } from "@/data/education";

const Education = () => {
  return (
    <section id="education" className="py-8 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-300">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8  transform  h-full w-0.5 bg-purple-300" />
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative flex items-center mb-12`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-purple-200 rounded-full z-10 shadow-lg" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="w-full max-w-2xl  border border-white/20 rounded-xl shadow-lg p-6 ml-16"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className=" font-semibold ">{edu.field}</p>
                  </div>
                  <div className="flex items-center text-sm   ml-2 mt-1">
                    <Calendar size={16} className="mr-1 text-purple-200" />
                    {edu.startYear} - {edu.endYear}
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <MapPin size={16} className="mr-2 text-purple-200 " />
                  <span className="">{edu.institution}</span>
                </div>
                <p className="mb-4 text-sm">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
