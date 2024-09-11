import React from 'react';
import { motion } from 'framer-motion';

export default function Projects({ projects }) {
  return (
    <div className="pb-24 ">
      <h2 className="my-20 text-center text-4xl text-white">Projects</h2>
      <div className="flex flex-wrap  justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-950 rounded-2xl w-full lg:w-1/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-teal-300">{project.title}</h3>
            <p className="mt-2 text-lg text-gray-400">{project.description}</p>
            <div className="mt-4">
              <h4 className="font-bold text-teal-500">Technologies:</h4>
              <p className="text-gray-500">{project.technologies.join(', ')}</p>
            </div>
            <div className="mt-4">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-teal-400 underline"
                whileHover={{ scale: 1.2, color: '#00FFDD', textShadow: '0px 0px 10px #00FFDD' }}
              >
                Demo
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 underline"
                whileHover={{ scale: 1.2, color: '#00FFDD', textShadow: '0px 0px 10px #00FFDD' }}
              >
                Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
