import React from 'react'
import Profilepic from "../assets/Pro.jpg"
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 '>
            <div className=" flex flex-wrap">
                <div className=" w-full lg:w-1/2 ">
                    <div className=" flex flex-col items-center lg:items-start">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className=" pb-16 text-6xl font-thin tracking-tight lg:mg-16 lg:text-8xl">
                            Rishabh
                        </motion.h1>
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Frontend Devloper
                        </motion.span>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 }}
                            className=' my-2 max-w-xl tracking-tighter py-6 font-light lg:text-xl '
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className=' w-full lg:w-1/2 lg:px-8 lg:pb-8  '>
                    <div className=" flex justify-center items-center ">
                        <motion.img 
                        initial={{x:100 , opacity:0}} 
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:2.5 }}
                        src={Profilepic} 
                        className=' rounded-[10px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero