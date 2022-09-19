import { GiSkills, GiIdea } from "react-icons/gi";
import { SiHomeassistant, SiAboutdotme } from "react-icons/si";
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {
  const isMobile = useMediaQuery({ query: '(min-width: 680px)' })

  const handleClickForPdf = () => {
    window.open("/Nelis_Valentin.pdf");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg position-absolute top-0 start-0 shadow-lg nav-lg">
        <div class="container-fluid">
            <ul className="navbar-nav d-flex flex-column text-center">
              <li className="nav-item h2">
                <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/">
                  <SiHomeassistant/>
                  <small>Home</small>
                </Link>
              </li>
              <li className="nav-item h2">
                <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/About">
                  <SiAboutdotme/>
                  <small>About</small>
                </Link>
              </li>
              <li className="nav-item h2">
                <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/Skills">
                  <GiSkills/>
                  <small>Skills</small>
                </Link>
              </li>
              <li className="nav-item h2">
                <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/Projects">
                  <GiIdea />
                  <small>Projects</small>
                </Link>
              </li>
              <li className="nav-item h2">
                <Link className="nav-link text-light d-flex flex-column align-items-center m-lg-2" to="/Links">
                  <BiLink/>
                  <small>Links</small>
                </Link>
              </li>

           <button onClick={handleClickForPdf} className="btn btn-dark mt-5">Mon CV Ici!</button>
            </ul>
          </div>
      </nav>
    </>
  );
};

export default NavBar;
