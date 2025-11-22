import React, { use } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);
  const location = useLocation();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/all-books">All Books</NavLink>
      </li>
      <li>
        <NavLink to="/add-book">Add Book</NavLink>
      </li>
      <li>
        <NavLink to="/myBooks">My Books</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className={`navbar ${location.pathname==='/' ? 'absolute':'relative'} z-50 bg-transparent max-w-screen-xl mx-auto left-0 right-0`}>
        <div className="navbar-start">
          <div className="dropdown">
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to="/" className="charm-bold text-3xl">
            The Book Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button className="btn">
              <Link to="/auth/LogOut">Log Out</Link>
            </button>
          ) : (
            <div>
              <button className="mr-5 btn">
                <Link to="/auth/Login">Login</Link>
              </button>
              <button className="mr-5 btn">
                <Link to="/auth/Register">Register</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
