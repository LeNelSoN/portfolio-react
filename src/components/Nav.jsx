import React from 'react'
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";
import { SiHomeassistant, SiAboutdotme } from "react-icons/si";
import { GiSkills, GiIdea } from "react-icons/gi";
import { useMediaQuery } from 'react-responsive'
import BtnCv from './BtnCv';

const Nav = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    
  return (
    <nav class="navbar navbar-expand-lg position-absolute bottom-0 nav-lg ">
    <div className={`${!isMobile && 'position-fixed shadow-lg vh-100 px-3'} ${isMobile && "fixed-bottom bg-dark"} `}>

        <ul className={`navbar-nav d-flex flex-row flex-md-column justify-content-between ${isMobile && 'vw-100'} `}>
          <li className="nav-item h2 mx-3">
            <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/">
              <SiHomeassistant/>
              <small>Home</small>
            </Link>
          </li>
          <li className="nav-item h2 mx-3">
            <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/About">
              <SiAboutdotme/>
              <small>About</small>
            </Link>
          </li>
          <li className="nav-item h2 mx-3">
            <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/Skills">
              <GiSkills/>
              <small>Skills</small>
            </Link>
          </li>
          <li className="nav-item h2 mx-3">
            <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/Projects">
              <GiIdea />
              <small>Projects</small>
            </Link>
          </li>
          <li className="nav-item h2 mx-3">
            <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/Links">
              <BiLink/>
              <small>Links</small>
            </Link>
          </li> 
        {!isMobile && <BtnCv/>}
        </ul>
      </div>
  </nav>
   )
}

export default Nav