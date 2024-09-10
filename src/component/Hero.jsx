import React from 'react'
import propic from '../assets/vimals.png'
import resume from '../resume.pdf'

export default function Hero() {
    return (
        <div className='pb-4 lg:mb-36' >
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full pt-0 lg:pt-10 lg:w-1/2'>
                    <div className='flex justify-center lg:p-8 '>
                        <img
                            src={propic}
                            alt=""
                            className=' w-[250px] h-[300px] rounded-full border border-stone-400'
                            style={{
                                filter: 'brightness(0.8) contrast(1.2)',
                                boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.7)'
                            }}
                        />


                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-10'>
                        <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>
                            Vimal Suresh T
                        </h2>
                        <span className=' bg-gradient-to-r from-stone-200 to-stone-500 bg-clip-text text-3xl tracking-tighter text-transparent' >
                            React js Developer
                        </span>
                        <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                            With over 2 years ofexperience in building  web applications using React.js, I have a grasp of front-end technologies and modern development practices.  My expertise with React, Node, MongoDB, Tailwind allows me to create seamless user experiences while maintaining code quality. Passionate about continuous learning, I thrive in collaborative environments and am always eager to take on new challenges to push the boundaries of web development.
                        </p>
                        <a href="/resume.pdf"
                           download
                           className='bg-white rounded-full p-4 text-sm text-stone-900 mb-10'
                            >
                                Download Resume
                        </a>

                    </div>

                </div>

            </div>
        </div>
    )
}
