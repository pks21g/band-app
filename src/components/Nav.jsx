import { NavLink, Outlet } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header>
        <NavLink to="/band-app" className="logo">
          <h1>Disco Fighter</h1>
        </NavLink>
        <nav>
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
      <Outlet />
    </>
  );
};
export default Nav;
