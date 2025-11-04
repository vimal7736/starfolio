import { useRef, useState } from 'react'
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
import Herosection from './component/Herosection'
// import data from './data.json'

function App() {
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToExperience = () => {
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    };


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
                "title": "DSA visualizer",
                "description": "Data Structure visual concepts using React",
                "technologies": [
                    "React",
                    "TypeScript",
                    "Tailwind",
                    "SchadcN UI",
                    "Framer Motion",
                ],
                "link": "https://dsa-concept-visualiser.vercel.app/",
                "github": "https://github.com/vimal7736/DSA_Concept_Visualiser"
            },
            {
                "title": "Doctor Appointment Booking System",
                "description": "A full-stack application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to manage doctor appointment bookings. This system includes three roles: patients, doctors, and administrators. Patients can register, log in, book appointments, and manage their bookings. Doctors can view appointments, track earnings, and update profiles. Administrators can manage appointments and doctor profiles. The platform also integrates online payment gateways for secure payment processing.",
                "technologies": [
                    "React",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "JavaScript",
                    "CSS"
                ],
                "link": "https://doctor-appointment-bay-nine.vercel.app/",
                "github": "https://github.com/vimal7736/doctor_appointment"
            }
            ,
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
                "title": "Task Management System",
                "description": "A complete task management application with secure login and signup functionality using MERN Stack, MongoDB, Express, React, and Node.js. Features include user authentication with JWT, task creation, deletion, and updates. State management is implemented using Redux Toolkit, and API calls are made through RTK Query. Notifications are handled via Toastify.",
                "technologies": [
                    "React",
                    "Node.js",
                    "MongoDB",
                    "JWT",
                    "Tailwind",
                    "Express",
                    "JavaScript",
                    "Redux Toolkit",
                    "RTK Query",
                    "Toastify"
                ],

                "link": "https://github.com/vimal7736/task_management_nine_dots",
                "github": "https://github.com/vimal7736/task_management_nine_dots"
            }
            ,
            // {
            //     "title": "To Do",
            //     "description": "A versatile to-do app developed with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, update, and manage tasks efficiently. The application features a responsive design, ensuring usability across devices, making task management simple, organized, and accessible..",
            //     "technologies": [
            //         "React",
            //         "Node.js",
            //         "Express",
            //         "MongoDB",
            //         "CSS",
            //         "JavaScript"
            //     ],
            //     "link": "https://todo-isuy.vercel.app/",
            //     "github": "https://github.com/vimal7736/task_management_nine_dots"
            // },


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
                "frontend": "https://github.com/vimal7736/pawsbae-estate-frontend"
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

            <Herosection />
            <div className="flex justify-center my-10">
                <button
                    className="bg-gradient-to-r from-teal-500 to-orange-800 p-3 rounded-lg text-white"
                    onClick={scrollToProjects}
                >
                    Explore My Projects
                </button>
            </div>
            <Tech />
            <div ref={experienceRef}></div>
            <Experience experiences={data.experience} />
            <div ref={projectsRef}></div>
            <Projects projects={data.projects} />
            <Education education={data.education} />
            <Contact />
            <button
                className="bg-gradient-to-r from-orange-500 via-teal-400 to-teal-800 p-3 rounded-lg text-white"
                onClick={scrollToExperience}
            >
                Explore My Experience
            </button>
            <Footer />
        </div>
    )
}

export default App
