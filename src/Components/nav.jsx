import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar]">
        <ul className="nav">
          <NavLink to="/">Counter</NavLink>
          <NavLink to="./contact">Contact</NavLink>
          <NavLink to="./countert">Countert</NavLink>
          <NavLink to="./notfound">Test</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;