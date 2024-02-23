import React from 'react'
import "./hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='wrapper'>
            <div className='textContainer'>
                <h2>Grey Mountains Media</h2>
                <h1>Deine rundum Agentur für alles</h1>
                <div className='buttons'>
                    <button>Mehr Erfahren</button>
                    <button>Kontaktieren</button>
                </div>
                <img src='/scroll.png' alt='scroll' />
            </div>
        </div>  
        <div className='imageContainer'>
            <img src='hero.png' alt='gm' />
        </div>
    </div>
  )
}

export default Hero
