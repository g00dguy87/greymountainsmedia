import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        >Grey Mountains Media</motion.span>
        <div className="social">
            <a href='https://www.instagram.com/brandit.podcast/' target="_blank">
            <i className='fa-brands fa-instagram'></i>
            </a>
            <a href='https://www.tiktok.com'>
            <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href='https://www.youtube.com/@brandit.podcast' target="_blank">
            <i className='fa-brands fa-youtube'></i>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
