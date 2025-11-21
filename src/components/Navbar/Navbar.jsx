import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import ThemeController from '../../utils/ThemeControler/ThemeControler';

// Active link style function
const getLinkStyle = ({ isActive }) => {
    return {
        color: isActive ? '#2563eb' : '', // Blue color when active
        borderBottom: isActive ? '2px solid #2563eb' : 'none', // Underline when active
        paddingBottom: '2px'
    };
};

const Navbar = () => {

    const links = <>
        <li><NavLink to="/" style={getLinkStyle}>Home</NavLink></li>
        <li><NavLink to="/all-books" style={getLinkStyle}>All Books</NavLink></li>
        <li><NavLink to="/add-book" style={getLinkStyle}>Add Book</NavLink></li>
        <li><NavLink to="/myBooks" style={getLinkStyle}>My Books</NavLink></li>
        </>
    return (
      <div>
        <div className="navbar fixed z-50 bg-transparent max-w-screen-xl mx-auto left-0 right-0">
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
            <button className="mr-5 btn">
              <NavLink to="/auth-Login" style={getLinkStyle}>
                Login
              </NavLink>
            </button>
            <button className="mr-5 btn">
              <NavLink to="/auth-Register" style={getLinkStyle}>
                Register
              </NavLink>
            </button>
            <button className="btn">
              <NavLink to="/auth-LogOut" style={getLinkStyle}>
                Log Out
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;