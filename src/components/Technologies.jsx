import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiAdobelightroom, SiAdobephotoshop, SiChakraui, SiChartdotjs, SiPostman, SiSocketdotio } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import {animate, motion} from 'framer-motion'

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition: {
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
});

function Technologies() {
  return (
    <div className=' border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-[#F4470B]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoCss3 className='text-7xl text-[#254BDD]' />
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandJavascript className='text-7xl text-[#E3C42F]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-[#59C9F1]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-[#17B2B3]'/>
            </motion.div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:2}}
        className='py-4 flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandCpp className='text-7xl text-[#00427E]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbSql className='text-7xl text-[#D47131]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoMongodb className='text-7xl text-[#00E661]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-[#7FC728]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiChakraui className='text-7xl text-[#5AC3C3]'/>
            </motion.div>
            
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:2}}
        className='py-4 flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSocketdotio className='text-7xl text-[#FFFFFF]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPostman className='text-7xl text-[#EA6631]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAdobephotoshop className='text-7xl text-[#2FA3F7]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAdobelightroom className='text-7xl text-[#2FA3F7]'/>
            </motion.div>
            {/* <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiChakraui className='text-7xl text-[#5AC3C3]'/>
            </motion.div> */}
            
        </motion.div>
    </div>
  )
}

export default Technologies