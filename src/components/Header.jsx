import { AiOutlineClose } from "react-icons/ai"; 
import { GiHamburgerMenu } from "react-icons/gi"; 
import { CgSoftwareDownload } from "react-icons/cg"; 
import React,{useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
import Navbar from './Navbar';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css'


const Header = () => {
    const [icon, setIcon] =useState(true);
    let navigate=useNavigate()
    const toggleMenu = () => {
        setIcon(prevIcon => !prevIcon);
    };
    useEffect(() => {
      console.log('Navbar is rendered');
    }, [icon]);
    return (
        <header className="header">
            <div className="container">
                <h1><Link to="/"><img src={logo} alt="logo"  className="logo" /></Link></h1>
                <Navbar />
                <div className="mobileBar">
                  {icon ? ( <GiHamburgerMenu className="hamburgerIcon" onClick={toggleMenu} /> ) : (<AiOutlineClose className="closeIcon" onClick={toggleMenu} /> )}
          
                  <CSSTransition
                  in={!icon}
                  timeout={300}
                  classNames="menu"
                  unmountOnExit
                  ><Navbar /></CSSTransition>
                </div>
                <button className="btn" onClick={() => navigate('/UploadPage')}><CgSoftwareDownload /></button>
            </div>
        </header>
    );
};

export default Header;