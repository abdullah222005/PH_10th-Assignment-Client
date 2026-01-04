import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";
import { User, BookOpen, LayoutDashboard, LogOut } from "lucide-react";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="navbar bg-base-100 shadow px-6">
          <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
            ☰
          </label>
          <h2 className="text-xl font-bold ml-2">User Dashboard</h2>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="w-72 bg-base-100 border-r">
          <div className="p-6 text-center border-b">
            <img
              src={user?.photoURL}
              alt="profile"
              className="w-20 h-20 rounded-full mx-auto border-2 border-primary"
            />
            <h3 className="font-bold mt-3">{user?.displayName}</h3>
            <p className="text-sm opacity-70">{user?.email}</p>
          </div>

          <ul className="menu p-4 gap-2">
            <li>
              <NavLink to="/dashboard" end>
                <LayoutDashboard size={18} />
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/profile">
                <User size={18} />
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-books">
                <BookOpen size={18} />
                My Books
              </NavLink>
            </li>
            <li className="mt-10">
              <button
                onClick={logOut}
                className="btn btn-outline btn-error w-full"
              >
                <LogOut size={18} />
                Logout
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
