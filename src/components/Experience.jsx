import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="pb-4 z-50">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      {EXPERIENCES.map((exp, idx) => (
        <div key={idx} className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            {exp.role} <span className="text-purple-300">@ {exp.company}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-20">
            {exp.projects.map((project, pIdx) => (
              <motion.div
                key={pIdx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: pIdx * 0.1 }}
                className="bg-neutral-900 p-4 rounded-2xl shadow-lg text-left"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-purple-200">
                    {project.name}
                  </h3>
                  <span className="text-sm text-neutral-400">
                    {project.year}
                  </span>
                </div>
                <ul className="list-disc list-inside text-neutral-400 mb-3">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg w-full h-48 object-cover mb-3"
                  />
                )}
                {project.playstore && (
                  <a
                    href={project.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    View on Play Store →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
