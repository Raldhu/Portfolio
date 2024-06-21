// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { TbBrandLeetcode } from "react-icons/tb";
// import { SiCodeforces } from "react-icons/si";
// import logo from '../assets/logo.png';
// import {Link} from 'react-scroll'

// function Navbar() {
//   return (
//     <nav className="mb-20 flex items-center fixed justify-between py-3 top-0 left-0 w-full h-[75px] bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100
// ">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-14" src={logo} alt="" />
//       </div>
//       <div className="m-8 flex gap-3 text-xl">
//         <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className=" cursor-pointer hover:text-purple-600">Home</Link>
//         <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">About Me</Link>
//         <Link to="technologies" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Technologies</Link>
//         <Link to="education" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Education</Link>
//         <Link to="experience" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Experience</Link>
//         <Link to="project" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Portfolio</Link>
//         <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer hover:text-purple-600">Contact</Link>
//       </div>
//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//       <a href="https://www.linkedin.com/in/yatin-yadav-iitrpr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//           <FaLinkedin className="text-[#006394] hover:scale-110"/>
//         </a>
//         <a href="https://github.com/Raldhu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//         <FaGithub className="text-[#F7F7F7] hover:scale-110"/>
//         </a>
//         {/* <a href="https://www.linkedin.com/in/yatin-yadav-iitrpr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//         <FaInstagram />
//         </a> */}
//         <a href="https://leetcode.com/u/RALDHU/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
//         <TbBrandLeetcode className="text-[#EB9E1A] hover:scale-110"/>
//         </a>
//         <a href="https://codeforces.com/profile/RALDHU" target="_blank" rel="noopener noreferrer" aria-label="CodeForces">
//         <SiCodeforces className="text-[#BA1B1C] hover:scale-110"/>
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodeforces } from "react-icons/si";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <motion.nav
      className="mb-20 flex items-center fixed justify-between py-3 top-0 left-0 w-full h-[75px] bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="" />
      </div>
      <div className="hidden md:flex m-8 gap-3 text-xl">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-red-600"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-red-600"
        >
          About Me
        </Link>
        <Link
          to="technologies"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-red-600"
        >
          Technologies
        </Link>
        <Link
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-red-600"
        >
          Education
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-red-600"
        >
          Experience
        </Link>
        <Link
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-red-600"
        >
          Project
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer hover:text-red-600"
        >
          Contact
        </Link>
      </div>
      <div className="hidden md:flex m-8 items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/yatin-yadav-iitrpr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-[#006394] hover:scale-110" />
        </a>
        <a
          href="https://github.com/Raldhu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-[#F7F7F7] hover:scale-110" />
        </a>
        <a
          href="https://leetcode.com/u/RALDHU/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <TbBrandLeetcode className="text-[#EB9E1A] hover:scale-110" />
        </a>
        <a
          href="https://codeforces.com/profile/RALDHU"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CodeForces"
        >
          <SiCodeforces className="text-[#BA1B1C] hover:scale-110" />
        </a>
      </div>
      <div className="md:hidden flex items-center m-8">
        <button onClick={handleClick}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>
      <div
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col items-center justify-center"
            : "hidden"
        }
      >
        <Link
          onClick={handleClick}
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer py-6 text-4xl hover:text-red-600"
        >
          Home
        </Link>
        <Link
          onClick={handleClick}
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer py-6 text-4xl hover:text-red-600"
        >
          About Me
        </Link>
        <Link
          onClick={handleClick}
          to="technologies"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer py-6 text-4xl hover:text-red-600"
        >
          Technologies
        </Link>
        <Link
          onClick={handleClick}
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer py-6 text-4xl hover:text-red-600"
        >
          Education
        </Link>
        <Link
          onClick={handleClick}
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer py-6 text-4xl hover:text-red-600"
        >
          Experience
        </Link>
        <Link
          onClick={handleClick}
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer py-6 text-4xl hover:text-red-600"
        >
          Project
        </Link>
        <Link
          onClick={handleClick}
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer py-6 text-4xl hover:text-red-600"
        >
          Contact
        </Link>
        <div className="flex items-center justify-center gap-4 py-6 text-4xl">
          <a
            href="https://www.linkedin.com/in/yatin-yadav-iitrpr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-[#006394] hover:scale-110" />
          </a>
          <a
            href="https://github.com/Raldhu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-[#F7F7F7] hover:scale-110" />
          </a>
          <a
            href="https://leetcode.com/u/RALDHU/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <TbBrandLeetcode className="text-[#EB9E1A] hover:scale-110" />
          </a>
          <a
            href="https://codeforces.com/profile/RALDHU"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeForces"
          >
            <SiCodeforces className="text-[#BA1B1C] hover:scale-110" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
