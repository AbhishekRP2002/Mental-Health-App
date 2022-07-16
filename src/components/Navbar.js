import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from "./images/logo_mh.svg";
import {auth} from '../firebase-config.js';
import {signOut} from "firebase/auth";
function Navbar({isAuth,setIsAuth}) {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  const signUserOut = () =>{
  signOut(auth).then(()=>{
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname="/login";
    });
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navibar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        <Link className="logo" to="/home">
         <img src={logo} alt="" />
        </Link>

        

        {!isAuth ? <Link to="/login"> <button className='btn btn-primary create'>Create Account</button> </Link>:<button className='btn btn-primary create' onClick={signUserOut}>Log Out</button>}
        </div>
        
        <navi className={sidebar ? 'navi-menu active' : 'navi-menu'}>
          <ul className='navi-menu-items' onClick={showSidebar}>
            <li className='navibar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>


            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}


          </ul>


        </navi>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
