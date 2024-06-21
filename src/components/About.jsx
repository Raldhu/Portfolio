import React from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'

function About() {
  const paragraphs = ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
    <p key={index} className="my-2 max-w-xl py-2">{paragraph}</p>
  ));
  return (
    <section id="about">
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'> About 
        <span className='text-neutral-500'> Me</span></h1>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{x:-100, opacity:0}}
            transition={{delay:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                 <div className='flex items-center justify-center'>
                    <img className='rounded-3xl' src={aboutImg} alt="about"/>
                 </div>
            </motion.div>
            <motion.div
             whileInView={{opacity:1, x:0}}
             initial={{x:100, opacity:0}}
             transition={{delay:0.5}}
            className='w-full lg:w-1/2'>
                     <div className='lg:pl-8'>
                     {paragraphs}
                     </div>
                 </motion.div>
        </div>
    </div>
    </section>
  )
}

export default About