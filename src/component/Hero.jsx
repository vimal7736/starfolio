import React from 'react';
import propic from '../assets/vimals.png';
import { motion } from "framer-motion";

export default function Hero() {
    const sideAnimation = {
        hidden: { x: "-100vw", opacity: 0.9 },
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
        hidden: { x: "100vw", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: 0.2
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <motion.div
                    variants={rightSideAnimation}
                    className='w-full pt-0 lg:pt-10 lg:w-1/2'>
                    <div className='flex justify-center lg:p-8 shadow-2xl'>
                        <img
                            src={propic}
                            alt=""
                            className=' w-[250px] h-[300px] rounded-full shadow-xl border border-[#1d3838]'
                            style={{
                                filter: 'brightness(0.8) contrast(1.2)',
                                boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.7)'
                            }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={sideAnimation}
                    className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-10'>
                        <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>
                            Vimal Suresh T
                        </h2>
                        <span className=' bg-gradient-to-r from-stone-200 to-stone-500 bg-clip-text text-3xl tracking-tighter text-transparent'>
                            React js Developer
                        </span>
                        <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                        Transitioned from a marine engineer to a new career, discovering an unexpected passion along the way. I bring over 2 years ofprofessional experience in web development, specializing in React.js. I am dedicated to developing ,designing and implementing front-end solutions using React.js, ensuring good performance and delivering  good user experience.Additionally, I am currently involved in an ongoing  MERN project, where I contribute to full-stack development
                        </p>
                        <a
                            href="/vimal.pdf"
                            download
                            className='bg-white rounded-full p-4 text-sm text-stone-900 mb-10'
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
