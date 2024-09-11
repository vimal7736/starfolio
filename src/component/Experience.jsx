import React from 'react';
import { motion } from 'framer-motion';

export default function Experience({ experiences }) {
  return (
    <div className="pb-24 px-4 lg:px-20 bg-light-blue-50">
      <h2 className="my-20 text-center text-4xl  text-gray-400">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  text-stone-200 gap-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-lg shadow-lg  border border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 25px rgba(0, 150, 136, 0.4)' }}
          >
            <h3 className="text-3xl font-semibold text-teal-600 pb-4 ">
              {experience.title}
            </h3>
            <h4 className="text-xl text-gray-300 ">
              {experience.company} <br /> {experience.duration}
            </h4>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-500">
              {experience.responsibilities.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-lg"
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            {experience.projects && (
              <div className="mt-6">
                <h4 className="text-xl font-bold text-teal-600">Projects:</h4>
                <ul className="mt-2 list-disc pl-5 text-gray-500">
                  {experience.projects.map((project, idx) => (
                    <motion.li
                      key={idx}
                      className="text-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {project}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
