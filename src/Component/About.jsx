import React from 'react'
import about from '../assets/about.jpg'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../constants'
const About = () => {
    return (
        <div className=' border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>About
                <span className=' text-neutral-500'>Me</span>
            </motion.h1>
            <div className=' flex flex-wrap'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}

                    className='w-full lg:w-1/2 lg:px-8 pb-8 '>
                    <div className=' flex items-center justify-center'>
                        <img src={about} className=' rounded-2xl' alt="" />
                    </div>

                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className=' flex justify-center items-center'>
                        <p className=' my-2 max-w-xl py-6 lg:text-xl'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About