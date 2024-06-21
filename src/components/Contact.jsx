import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
import { FaEnvelope } from 'react-icons/fa';
import { MdPhone } from "react-icons/md";
import { IoHome } from "react-icons/io5";

function Contact() {
    const handleEmailClick = () => {
        window.location.href = "mailto:yadavyatin4@gmail.com";
      };
  return (
    
    <div className='border-neutral-900 pb-20'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}} 
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}} 
            className='my-4 items-center justify-center flex'><IoHome className='mx-2'/>
            <span>{CONTACT.address}</span></motion.p>
            
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}} 
            className='my-4 items-center justify-center flex'> <MdPhone className='mx-2'/>
            <span>{CONTACT.phoneNo}</span></motion.p>
           <div className="flex items-center justify-center">
          <a
            onClick={handleEmailClick}
            aria-label="Email"
            className="text-white cursor-pointer transition transform hover:text-green-600 hover:scale-110"
          >
            <FaEnvelope size={24} />
          </a>
          <span
            onClick={handleEmailClick}
            className="ml-4 text-white cursor-pointer transition transform hover:text-bold hover:scale-110"
          >
            yadavyatin4@gmail.com
          </span>
        </div>
        </div>
    </div>
  )
}

export default Contact