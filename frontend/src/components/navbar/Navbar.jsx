import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import contactImg from "../../assets/contact.png"
import {Link} from 'react-scroll';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="Navbar">
      <a href="/" className="logoText"><span>T</span>ax<span>Q</span>uilt.</a>
      <div className="desktopMenu">
        <Link activeClass='active' to='home' spy={true} smooth="true" offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='features' spy={true} smooth="true" offset={-50} duration={500} className="desktopMenuListItem">Features</Link>
        <Link activeClass='active' to='uses' spy={true} smooth="true" offset={-50} duration={500} className="desktopMenuListItem">How to use</Link>
        <Link activeClass='active' to='about' spy={true} smooth="true" offset={-80} duration={500} className="desktopMenuListItem">About Us</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} className="desktopMenuImg" />Contact Us</button>

      <div className="mobMenu" onClick={()=>setShowMenu(!showMenu)}><FiMenu/></div>
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='home' spy={true} smooth="true" offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='features' spy={true} smooth="true" offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Features</Link>
        <Link activeClass='active' to='uses' spy={true} smooth="true" offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>How to use</Link>
        <Link activeClass='active' to='about' spy={true} smooth="true" offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About Us</Link>
        <Link activeClass='active' to='contact' spy={true} smooth="true" offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

