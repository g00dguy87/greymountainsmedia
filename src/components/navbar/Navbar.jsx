import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Grey Mountains Media</span>
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
