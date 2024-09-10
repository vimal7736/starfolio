import React from 'react'
import { FaGit, FaLinkedin ,FaTwitter  } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import logo from '../assets/log.png'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6 '>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" area-label= "Home">
        <img src={logo} width={80} height={80} />
        </a>
      </div>
      <div className='m-8 flex justify-center items-center gap-4 text-3xl'>
        <a href="https://www.linkedin.com/in/vimal-suresh-t-6273b0241/"
           target='_blank'
           rel="noopener noreferrer"
           aria-label='LinkedIn'
        >
        <FaLinkedin/>
        </a>
        <a href="https://github.com/vimal7736?tab=repositories"
           target='_blank'
           rel="noopener noreferrer"
           aria-label='GitHub'
        >
        <FaGit/>
        </a>
        <a href="https://www.instagram.com/vimalsureshh/"
           target='_blank'
           rel="noopener noreferrer"
           aria-label='Instagram'
        >
        <ImInstagram/>
        </a>
        <a 
           aria-label='Twitter'
        >
        <FaTwitter/>
        </a>
        
      </div>
      
    </nav>
  )
}
