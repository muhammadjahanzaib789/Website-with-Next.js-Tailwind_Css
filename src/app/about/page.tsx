import Image from 'next/image';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const About =() => {
    return(
        <div>
            <h2 className="mt-24 text-center text-4x1 font-bold underline text-cyan-600"> About Me </h2>
        
        
            <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/images/profile.png"
            width={400}
            height={300}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan hover:text-yellow-300">
              Hello! I'm Front-End Developer
            </h1>
            <p className="mb-8 leading-relaxed text-cyan-300">
            As a front-end developer, you specialize in creating engaging and responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks. Let me know if you need any tips, tools, or resources related to front-end development!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-[30px] text-blue-400 border-0 py-2 px-6 rounded text-lg" >
              <FaLinkedin />
              </button>
              <button className="inline-flex text-[30px] text-blue-400 border-0 py-2 px-6 rounded text-lg" >
              <FaGithub />
              </button>
              <button className="inline-flex text-[30px] text-blue-400 border-0 py-2 px-6 rounded text-lg" >
              <FaFacebook />
              </button>
              <button className="inline-flex text-[30px] text-blue-400 border-0 py-2 px-6 rounded text-lg" >
              <FaInstagram />

              </button>
              
              
            </div>
          </div>
        </div>
      </div>
      <Skills/>
      
    
      </div>
    )
}

export default About

export const Skills = () => {
    return (
        <div>
            <h2 className="mt-18  text-center text-4x1 font-bold underline text-cyan-600"> My Skills </h2>
            <ul className=''>
            <li className=" mb-3 text-2x1 text-white  ml-16">HTML</li><div className="w-[25%] ml-16 mb-3 h-4 bg-green-600 rounded-2x1"></div>
            <li className="mb-3 text-2x1 text-white font-semibold ml-16">CSS</li><div className="w-[35%] ml-16 mb-3 h-4 bg-red-600 rounded-2x1"></div>
            <li className="mb-3 text-2x1 text-white font-semibold ml-16
            ">Javascript</li><div className="w-[22%] ml-16 mb-3 h-4 bg-blue-600 rounded-2x1"></div>
            <li className="mb-3 text-2x1 text-white font-semibold ml-16">Typescript</li><div className="w-[27%] ml-16 mb-3 h-4 bg-yellow-600 rounded-2x1"></div>
            <li className="mb-3 text-2x1 text-white font-semibold ml-16">React</li><div className="w-[30%] ml-16 mb-3 h-4 bg-orange-600 rounded-2x1"></div>
            <li className="mb-3 text-2x1 text-white font-semibold ml-16">Next.js</li><div className="w-[32%] ml-16 mb-3 h-4 bg-sky-600 rounded-2x1"></div>
                
            
        </ul>
        </div>
        
    )
}
 
















