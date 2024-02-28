import React from 'react'
import "./hero.scss"

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
            <div className='textContainer' variants={textVariants}>
                <h2 variants={textVariants}>Grey Mountains Media</h2>
                <h1 variants={textVariants}>Deine rundum Agentur für alles</h1>
                <div variants={textVariants} className='buttons'>
                    <button variants={textVariants}>Mehr Erfahren</button>
                    <button variants={textVariants}>Kontaktieren</button>
                </div>
                <img variants={textVariants} src='/scroll.png' alt='scroll' />
            </div>
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
