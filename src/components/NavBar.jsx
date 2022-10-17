import { Outlet } from 'react-router-dom';
import Nav from "./Nav";

const NavBar = () => {

  const screenView =
    <div className="main">  
      <Outlet/>
      <Nav/>
    </div>
  return (
    screenView
  );
};

export default NavBar;
