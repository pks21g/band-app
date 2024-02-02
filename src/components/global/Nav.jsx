import { NavLink, Outlet } from "react-router-dom";
import Headroom from "react-headroom";
import { useState } from "react";
const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const hide = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      <Headroom className="navheader">
        <header>
          <NavLink to="/band-app" className="logo">
            <h1>Disco Fighter</h1>
          </NavLink>
          <nav className={`"navigation" ${!isActive} ? "active" : ""`} >
            <ul>
              <li>
                <NavLink to="/band-app">Home</NavLink>
              </li>
              <li>
                <NavLink to="/band-app/live">Live</NavLink>
              </li>
              <li>
                <NavLink to="/band-app/store">Store</NavLink>
              </li>
              <li>
                <NavLink to="/band-app/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </Headroom>
      <Outlet />
    </>
  );
};
export default Nav;
