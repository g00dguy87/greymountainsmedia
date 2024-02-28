import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion'

const textVariants = {
    initial:{
        x:-500,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className='wrapper'>
            <motion.div 
            className='textContainer' 
            variants={textVariants} 
            initial="initial"
            animate="animate"
            >
                <motion.h2 variants={textVariants}>Grey Mountains Media</motion.h2>
                <motion.h1 variants={textVariants}>Deine rundum Agentur für alles</motion.h1>
                <motion.div variants={textVariants} className='buttons'>
                    <motion.button variants={textVariants}>Mehr Erfahren</motion.button>
                    <motion.button variants={textVariants}>Kontaktieren</motion.button>
                </motion.div>
                <motion.img variants={textVariants} src='/scroll.png' alt='scroll' />
            </motion.div>
        </div>
        <div className='slidingTextContainer'>
            Film & Fernsehen
        </div>
        <div className='imageContainer'>
            <img src='hero.png' alt='gm' />
        </div>
    </div>
  )
}

export default Hero
