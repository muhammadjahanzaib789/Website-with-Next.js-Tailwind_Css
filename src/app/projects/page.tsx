import Image from 'next/image'
import React from 'react'


const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-600 lg:w-1/3 lg:mb-0 mb-4">
        There are my some projects
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto text-cyan-200 leading-relaxed text-base">
    
      I craft responsive, user-centric web applications using HTML, CSS, JavaScript, and modern frameworks like React. Check out my projects for a mix of creativity and functionality!      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
         
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
           width={300}
           height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/images/project_01.jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image
           width={300}
           height={300}
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/images/project_02.png"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
           width={300}
           height={300}
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/images/project_03.png"
          />
        </div>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects
