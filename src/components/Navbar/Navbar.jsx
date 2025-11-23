// Navbar.jsx
import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to="/" className="text-white">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" className="text-white">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-books" className="text-white">
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-book" className="text-white">
          Add Book
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myBooks" className="text-white">
            My Books
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Logout Successful..!!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div
        className={`navbar ${
          location.pathname === "/" ? "absolute" : "relative"
        } z-50 bg-transparent max-w-screen-xl mx-auto left-0 right-0`}
      >
        <div className="navbar-start">
          {/* mobile dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <Link to="/" className="charm-bold text-3xl text-white">
            The Book Heaven
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
        </div>

        <div className="navbar-end flex gap-3 items-center">
          <ThemeToggle />
          {user ? (
            <div className="flex gap-3 justify-center items-center">
              <div>
                <img
                  className="w-14 rounded-full border-2 border-primary"
                  data-tooltip-id="profile-tooltip"
                  data-tooltip-content={user.displayName}
                  src={user.photoURL}
                  alt=""
                />
                <Tooltip id="profile-tooltip" place="bottom" />
              </div>
              <button onClick={handleLogOut} className="btn btn-primary">
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <Link to="/auth/Login" className="btn btn-primary md:mr-3">
                Login
              </Link>
              <Link to="/auth/Register" className="btn btn-primary">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
