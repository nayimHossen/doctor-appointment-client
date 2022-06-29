import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const menuItems = (
    <>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/">Appointment</NavLink></li>
      <li><NavLink to="/">Review</NavLink></li>
      <li><NavLink to="/">Contact</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </>
  );

  return (
    <div className="navbar md:justify-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl">Doctor Portal</Link>
      </div>
      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
