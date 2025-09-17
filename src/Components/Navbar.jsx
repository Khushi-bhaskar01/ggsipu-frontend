import React, { useState } from 'react'
import logo from "../assets/ipulogo.png"
import './Navbar.css'
import bglight from '../assets/usictlight.png'
import bgdark from '../assets/usictdark.png'
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import "@fontsource/roboto";
import Typewriter from "typewriter-effect";
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
 const [theme, setTheme] = useState("light");
 document.body.className = theme;
const bg = theme === 'light' ? bglight : bgdark; 

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;  
  };
  return (
    <div className="cont">
    <div className='navbar'>
        <img className='navbar_bg' src={bg} alt="" />
        <div className="navbar_left">
            <img className='navbar_logo' src={logo} alt="" />
        </div>

        <div className="navbar_mid">
             <Link to="/" className="navbar_pages">Home</Link>
            <Link to="/dean" className="navbar_pages dean">Dean</Link>
            <Link to="/faculty" className="navbar_pages">Faculty</Link>
            <Link to="/staff" className="navbar_pages">Staff</Link>
            <a href='https://ggsipu-academics.vercel.app/' target='_blank' className="navbar_pages">Academics</a>
            <a href='http://ipu.ac.in/exam_datesheet.php#' target='_blank' className="navbar_pages">Examination</a>
            <a href="http://ipu.ac.in/notices_usict.php" target='_blank' className="navbar_pages">Notices</a>
            <Link to="/placement" className="navbar_pages">Placement</Link>
            <a href='http://ipu.ac.in/alumni_usict.php' target='_blank' className="navbar_pages">Alumni</a>
            <Link to="/vice" className="navbar_pages">Vice Chancellor</Link>
            <Link to="/contact" className="navbar_pages">Contact Us</Link>
        </div>

        <div className="navbar_right">
           
            <input type="text" placeholder="Search... " className="navbar_input" />
            <div className="navbar_fillerdiv"></div>
            <button  className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? <BsMoonStars size={24}/> : <FiSun size={24}/>}
            </button>


        </div>
        
    </div>
    <div className="cont_textcont">
        <p className="cont_text">UNIVERSITY SCHOOL OF INFORMATION <br/> COMMUNICATION TECHNOLOGY</p>
        <p className="cont_smalltext"> <span className='cont_insp'>Inspiring </span>  
          <span>
            <Typewriter
              options={{
              strings: ["Innovation", "Creativity" ,"Teamwork"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </span></p>
    </div>
            <Outlet />
    </div>
  )
}

export default Navbar