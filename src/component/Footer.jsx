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
            href="https://www.linkedin.com/in/vimal-suresh-t-6273b0241/"
            whileHover={{ scale: 1.2 }}
            className="text-white text-lg font-semibold"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/vimal7736"
            whileHover={{ scale: 1.2 }}
            className="text-[#145555] text-lg font-semibold"
          >
            GitHub
          </motion.a>
         
        </div>
      </div>
      <div className="mt-6 text-center text-white text-sm">
        © {new Date().getFullYear()} - Dogliens All rights reserved.
      </div>
    </footer>
  );
}
