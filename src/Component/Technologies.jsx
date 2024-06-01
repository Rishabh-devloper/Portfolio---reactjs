import React from 'react'
import { RiBootstrapFill, RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'

import { motion } from 'framer-motion'


const iconVariants = (duration) => ({
  intial: { y: -10 },
  animate: { y: [10, -10], transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse" } }
})

const Technologies = () => {
  return (
    <div className=' border-b border-neutral-900 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='text-4xl my-20 text-center '>Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2.5 }}
        className=" flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className=' text-7xl text-cyan-400' />

        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className=' text-7xl text-cyan-400' />

        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4">

          <RiJavascriptFill className=' text-7xl text-yellow-500' />

        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"

          className=" rounded-2xl border-4 border-neutral-800 p-4">
          <RiBootstrapFill className=' text-7xl text-purple-500' />

        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Fill className=' text-7xl text-orange-400' />

        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Fill className=' text-7xl text-blue-500' />

        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies