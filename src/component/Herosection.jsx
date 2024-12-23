import React from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

const Herosection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Building Exceptional <span className='bg-gradient-to-r from-orange-400 via-teal-300
             to-teal-600 text-transparent bg-clip-text'>MERN Stack Applications</span>
        </h1>
        <p className="mt-10 text-lg text-center text-gray-500 max-w-4xl">
            I specialize in creating dynamic and robust web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). With a focus on scalable architectures and intuitive user interfaces, I bring ideas to life through code.
        </p>

       
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className='rounded-lg w-1/3 border border-x-blue-700 shadow-blue-400 mx-2 my-4'>
                <source src={video1} type='video/mp4' />
            </video>
            <video autoPlay loop muted className='rounded-lg w-1/3 border border-x-blue-700 shadow-blue-400 mx-2 my-4'>
                <source src={video2} type='video/mp4' />
            </video>
            <video autoPlay loop muted className='rounded-lg w-1/3 border border-x-blue-700 shadow-blue-400 mx-2 my-4'>
                <source src={video3} type='video/mp4' />
            </video>
        </div>
    </div>
  );
}

export default Herosection;
