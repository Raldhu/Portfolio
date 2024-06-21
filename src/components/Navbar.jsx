import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodeforces } from "react-icons/si";
import logo from '../assets/logo.png';
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <nav className="mb-20 flex items-center fixed justify-between py-3 top-0 left-0 w-full h-[75px] bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100
">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="" />
      </div>
      <div className="m-8 flex gap-3 text-xl">
        <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className=" cursor-pointer hover:text-purple-600">Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">About Me</Link>
        <Link to="technologies" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Technologies</Link>
        <Link to="education" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Education</Link>
        <Link to="experience" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Experience</Link>
        <Link to="project" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Portfolio</Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Contact</Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/yatin-yadav-iitrpr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-[#006394] hover:scale-110"/>
        </a>
        <a href="https://github.com/Raldhu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="text-[#F7F7F7] hover:scale-110"/>
        </a>
        {/* <a href="https://www.linkedin.com/in/yatin-yadav-iitrpr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
        </a> */}
        <a href="https://leetcode.com/u/RALDHU/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
        <TbBrandLeetcode className="text-[#EB9E1A] hover:scale-110"/>
        </a>
        <a href="https://codeforces.com/profile/RALDHU" target="_blank" rel="noopener noreferrer" aria-label="CodeForces">
        <SiCodeforces className="text-[#BA1B1C] hover:scale-110"/>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
