import React, { use } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

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
      {
        user && <li>
        <NavLink to="/myBooks">My Books</NavLink>
      </li>
      }
      
    </>
  );
  const handleLogOut =()=>{
    logOut()
    .then(res => {
      navigate('/');
    })
    .catch(err=> console.log(err)
    )
  }
  return (
    <div>
      <div
        className={`navbar ${
          location.pathname === "/" ? "absolute" : "relative"
        } z-50 bg-transparent max-w-screen-xl mx-auto left-0 right-0`}
      >
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
            <div className="flex gap-3 justify-center items-center">
              <div>
                <img className="w-14"
                  data-tooltip-id="profile-tooltip"
                  data-tooltip-content={user.displayName}
                  src={user.photoURL}
                  alt=""
                />
                <Tooltip id="profile-tooltip" place="bottom" />
              </div>
              <button onClick={handleLogOut} className="btn">
                Log Out
              </button>
            </div>
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
