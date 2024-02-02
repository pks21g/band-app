import { NavLink, Outlet, useLocation } from "react-router-dom";
import Headroom from "react-headroom";
import { useEffect, useState } from "react";
const Nav = () => {
  
  return (
    
    <>
      <Headroom>
        <header>
          <NavLink to="/band-app" className="logo">
            <h1>Disco Fighter</h1>
          </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="/band-app" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/band-app/live" >Live</NavLink>
              </li>
              <li>
                <NavLink to="/band-app/store" >Store</NavLink>
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
