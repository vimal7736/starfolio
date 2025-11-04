import React from 'react'
import { FaGit, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import logo from '../assets/log.png'
import { motion } from "framer-motion";


export default function Navbar() {
  const sideAnimation = {
    hidden: { x: "100vw", opacity: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 30,
        delay: 1
      }
    }
  };

  const rightSideAnimation = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 30,
        delay: 0.2
      }
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex items-center justify-between py-6 '>
      <motion.div
        variants={rightSideAnimation}

        className='flex flex-shrink-0 items-center'>
        <a href="/" area-label="Home">
          <img src={logo} width={80} height={80} />
        </a>
      </motion.div>
      <motion.div
        variants={sideAnimation}

       className='m-8 flex justify-center items-center gap-8 text-3xl'>
        <a href="https://www.linkedin.com/in/vimal-suresh-t-6273b0241/"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/vimal7736?tab=repositories"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='GitHub'
        >
          <FaGit />
        </a>
        <a href="https://www.instagram.com/vimalsureshh/"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='Instagram'
        >
          <ImInstagram />
        </a>
        

      </motion.div>

    </motion.div>
  )
}
