import React from 'react'
import Tortue from '../assets/tortue.svg'
import BtnCv from './BtnCv'

const Links = () => {
  return (
    <div id="Links" className="bg-footer">
        <div className="container vh-100 d-flex">
            <div className="row d-flex flex-column justify-content-center align-items-center ">
                <div className="col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a href="https://twitter.com/" target="_blank" className="text-muted text-decoration-none m-lg-5 m-3 h3" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/" target="_blank" className="text-muted text-decoration-none m-lg-5 m-3 h3" rel="noreferrer">Linkedin</a>
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center " >
                    <a href="mailto:Nelis.valentin@gmail.com" className="text-muted text-decoration-none h3">Nelis.valentin@gmail.com</a>
        <BtnCv/>
                    <img className="img-fluid" src={Tortue} alt="tortue"/>
                </div>
                <div className="col-lg-6">
                    <hr/>
                    <p>Réalisé par Valentin Nelis</p>
                </div>
            </div>
        </div>
    </div>  )
}

export default Links