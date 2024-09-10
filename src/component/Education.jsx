import React from 'react';
import { motion } from 'framer-motion';

export default function Education({ education }) {
  return (
    <div className="pb-24 bg-transparent py-16 px-4 lg:px-20">
      <h2 className="my-20 text-center text-4xl  text-gray-400">
        Education
      </h2>
      <div className="flex flex-col items-center">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="mb-8 p-6 shadow-lg rounded-lg w-full max-w-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-semibold text-gray-800">{edu.degree}</p>
            <p className="mt-2 text-lg text-gray-600">{edu.school}</p>
            <p className="mt-2 text-lg text-gray-500">Graduation Year: {edu.graduation_year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
