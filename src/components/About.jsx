import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id="About" className="container">
        <div className="vh-100 text-center d-flex flex-column align-items-center justify-content-center  p-5">
            <h2 className="h2">Bienvenue dans mon monde</h2>
            <br />        
            <p >Cela serait un peu cliché de dire que je suis passionné par le développement web, car des passions, j'en ai déjà plusieurs. Juste que j'aime ça et par conséquent, j'y consacre du temps.</p>
            <p >Avant, j'étais artiste de rue et apprendre par moi-même à toujours était ma façon de faire. Échasses, jonglage, manipulation du feu, mise en scène sont des choses que j'ai pratiqué à des degrés différents.</p>
            <p >Maintenant, cela serait Javascript, React, Css, Bootstrap...</p>

            <Link className="btn btn-dark btn-lg transition" to='/Skills'>En savoir plus ?</Link>
        </div>
    </section>  )
}

export default About