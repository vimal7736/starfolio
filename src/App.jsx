import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Tech from './component/Tech'
import Experience from './component/Experience'
import Projects from './component/Projects'
import Education from './component/Education'
import Contact from './component/Contact'
import Footer from './component/Footer'
// import data from './data.json'

function App() {

  const data = {
    experience: [
      {
          "title": "React-js Developer",
          "company": "Tecbert LLP",
          "duration": "September 2023 - Present",
          "responsibilities": [
              "Developed and maintained web applications using React",
              "Collaborated with cross-functional teams to define, design, and ship new features.",
              "Improved application performance by optimizing code and implementing best practices."
          ]
      },
      {
          "title": "React-js Developer",
          "company": "Infinite Open Source Solutions LLP",
          "duration": "December 2022 - July 2023",
          "responsibilities": [
              "Developed and maintained web applications using React",
              "Assisted in database design and optimization.",
              "Participated in code reviews and provided constructive feedback."
          ],
          "projects": [
              "Time Tracking Software",
              "Direct Selling software"
          ]
      },
      {
          "title": "Mern Stack Intern",
          "company": "Futura Lab",
          "duration": "june 2022 - Dec 2022",
          "responsibilities": [
              "Learning web applications using Mern"
          ]
          
      },
      {
          "title": "Bussiness Development Executive",
          "company": "TechBert",
          "duration": "jan 2021 - April 2022",
          "responsibilities": [
              "bussiness Development Executive"
          ]
          
      },
      {
          "title": "Trainee Marine Engineer",
          "company": "Albatross Shipping Co.",
        //   "duration": "6 months",
          "responsibilities": [
              "Engine Maintanance"
          ]
          
      },
      {
          "title": "Trainee Marine Engineer",
          "company": "Nautilus Shipping Co.",
        //   "duration": "6 months",
          "responsibilities": [
              "Engine Maintanance"
          ]
          
      }
  ],
    projects: [
      {
          "title": " JWT Authentication ",
          "description": "Complete Login and Signup with MERN Stack, MongoDB, Express, React and Node Authentication",
          "technologies": [
              "React",
              "Node.js",
              "Mongo DB",
              "JWT",
              "Tailwind",
              "Express",
              "JavaScript"
          ],
          "link": "https://jwtauth-five.vercel.app/", 
          "github": "https://github.com/vimal7736/jwtAuth/tree/main"  
      },
      {
          "title": "To Do",
          "description": "A versatile to-do app developed with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, update, and manage tasks efficiently. The application features a responsive design, ensuring usability across devices, making task management simple, organized, and accessible..",
          "technologies": [
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "CSS",
              "JavaScript"
          ],
          "link": "https://todo-isuy.vercel.app/",
          "github": "https://github.com/vimal7736/todo/"
      },
      {
          "title": "Ongoing Job Portal",
          "description": "A comprehensive full-stack job portal developed using React, Tailwind CSS, Supabase, ShadCN UI, and Clerk. The platform allows users to post jobs, apply for positions, and manage applications with seamless authentication and database integration. A modern solution for job seekers and recruiters.",
          "technologies": [
              "React",
              "Supabase",
              "clerk",
              "shadcn ui",
              "Tailwind",
              "CSS",
              "JavaScript"
          ],
          "link": "https://jobportal-silk.vercel.app/", 
          "github": "https://github.com/vimal7736/jobportal"  
      },
     
      {
          "title": "Expense Tracker",
          "description": "A user-friendly expense tracking application built with React. It allows users to add, delete, and track transactions while maintaining a persistent state using localStorage. The app provides a clear view of income, expenses, and the current balance, making financial management simple and efficient.",
          "technologies": [
              "React",
              "Context Api",
              "CSS",
              "JavaScript"
          ],
          "link": "https://income-expense-tracker-liard.vercel.app/", 
          "github": "https://github.com/vimal7736/Expense-Tracker"  
      },
      
      {
          "title": "Filter Cart",
          "description": "A dynamic e-commerce filter cart project built with React, focusing on filtering products using queries and categories. The application provides a seamless user experience with a clean UI, enabling users to search, filter, and browse products effortlessly, enhancing shopping convenience and satisfaction.",
          "technologies": [
              "React",
              "CSS",
              "JavaScript"
          ],
          "link": "https://aishu-cart.vercel.app/",
          "github": "https://github.com/vimal7736/AishuCart"
      },
      {
          "title": "Making Custom Hooks",
          "description": "Making Helpfull hooks for my projects for easy web development",
          "technologies": [
              "React",
              "CSS",
              "JavaScript"
          ],
          "link": "https://customhook-nu.vercel.app/", 
          "github": "https://github.com/vimal7736/customhook"  
      },
      {
          "title": "Ongoing Fullstack",
          "description": "A full-stack real estate application developed using React, Node.js, Express, Prisma, and MongoDB. It enables users to browse, list, and manage real estate properties. The app offers a robust backend with a user-friendly frontend, combining modern design with powerful functionality for property management.",
          "technologies": [
              "React",
              "Node.js",
              "Express",
              "Prisma",
              "MongoDB",
              "SCSS",
              "JavaScript"
          ],
          "link": "https://github.com/vimal7736/pawsbae-estate-frontend",
          "github": "https://github.com/vimal7736/pawsbaeestate-back-end",
          "frontend":"https://github.com/vimal7736/pawsbae-estate-frontend"
      }
     
     
      
  ],
    education: [
      {
        degree: "B-Tech in Marine Engineer",
        school: "St.Josephs Boys Higher Secondary School",
        graduation_year: 2015
      }
    ]
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Tech />
      <Experience experiences={data.experience} />
      <Projects projects={data.projects} />
      <Education education={data.education} />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
