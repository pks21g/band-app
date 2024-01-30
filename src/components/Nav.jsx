import { NavLink, Outlet } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header>
        <h1>Disco Fighter</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/band-app">Home</NavLink>
            </li>
            <li>
              <NavLink to="/band-app/live">Live</NavLink>
            </li>
            <li>
              <NavLink to="/band-app/store" target="_blank">Store</NavLink>
            </li>
            <li>
              <NavLink to="/band-app/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default Nav;
