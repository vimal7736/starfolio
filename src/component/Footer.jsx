import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className=" text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Vimal Suresh T.</h3>
          <p className="text-lg">React.js Developer</p>
        </div>
        <div className="flex space-x-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-white text-lg font-semibold"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-white text-lg font-semibold"
          >
            GitHub
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-white text-lg font-semibold"
          >
            Twitter
          </motion.a>
        </div>
      </div>
      <div className="mt-6 text-center text-white text-sm">
        © {new Date().getFullYear()} Vimal Suresh T. All rights reserved.
      </div>
    </footer>
  );
}
