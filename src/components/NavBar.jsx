import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";


const NavBar = () => {
    
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    const handleClickForPdf = () => {
      window.open("/Nelis_Valentin.pdf")
    }

  return (
    <>
      <div onClick={handleClick} className="w-100 d-flex justify-content-end fixed-top">
        <button
          className="btn btn-secondary btn-lg m-3 "
          type="button"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div
        className={`offcanvas transition offcanvas-top bg-dark bg-gradient ${show && 'show'}`}
  
      >
        <div className="offcanvas-header d-flex flex-column">
          <div className="w-100 d-flex flex-row-reverse">
            <button className="btn" onClick={handleClick}>
            <AiFillCloseCircle className="fs-1"/>
            </button>
          </div>
          <div>
            <h1 className="offcanvas-title h2" id="offcanvasLabel">
              Menu
            </h1>
          </div>
        </div>
        <div className="offcanvas-body container-lg">
          <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-center">
            <ul className="navbar-nav d-flex flex-column text-center">
              <li className="nav-item h2" >
                <Link onClick={handleClick} className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item h2" >
                <Link onClick={handleClick} className="nav-link" to='/About'>About</Link>
              </li>
              <li className="nav-item h2" >
                <Link onClick={handleClick} className="nav-link" to='/Skills'>Skills</Link>
              </li>
              <li className="nav-item h2" >
                <Link onClick={handleClick} className="nav-link" to='/Projects'>Projects</Link>
              </li>
              <li className="nav-item h2" >
                <Link onClick={handleClick} className="nav-link" to='/Links'>Links</Link>
              </li>
            </ul>
          </nav>
      <button onClick={handleClickForPdf} className="btn btn-dark btn-lg ">Mon CV Ici!</button>
        </div>
      </div>

    </>
  );
};

export default NavBar;
