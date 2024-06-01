import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import logo from "../assets/Logo.png"
const NavBar = () => {
  return (
    <nav className=" bg-transparent mb-20 flex items-center justify-between py-6">
      <div className=' flex flex-shrink-0 items-center'>
        
        {/* <img src={logo} alt="" /> */}
        <h1 className=' text-6xl'>Ri</h1>

      </div>
      <div className=" flex m-8 items-center gap-4 justify-center text-2xl">
        <a href="https://github.com/Rishabh-devloper"> <FaGithub /></a>
        <a href="https://www.linkedin.com/in/rishabh-mishra-7a62b0289/"> <FaLinkedin /> </a>
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default NavBar