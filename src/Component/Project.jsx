import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <div className=' border-b border-neutral-800'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=' my-20 text-center text-4xl'>Project</motion.h2>
      <div className="">
        {PROJECTS.map((project, index) =>
        (
          <div key={index} className=' mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=" w-full lg:w-1/4">
              <img src={project.image} className=' mb-6 rounded' width={150} height={150} alt="" />

            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=" w-full max-w-xl lg:w-3/4">
              <h3 className=" mb-2 font-semibold">{project.title}</h3>
              <p className=" mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className=" mr-2 inline-block rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-700">{tech}</span>
              ))}
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Project