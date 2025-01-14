import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import logo from "../../Assets/logo.svg";

const activeStyle = {
  textDecoration: "underline",
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, setUser, signoutUser, setLoading } = useContext(AuthContext);

  const navItems = (
    <>
      <li className="flex">
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return isActive ? activeStyle : {};
          }}
          rel="noopener noreferrer"
          className="flex items-center px-4 -mb-1 dark:border- dark:text-violet-600 dark:border-violet-600"
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to={"/biodatas"}
          style={({ isActive }) => {
            return isActive ? activeStyle : {};
          }}
          rel="noopener noreferrer"
          className="flex items-center px-4 -mb-1 dark:border- dark:text-violet-600 dark:border-violet-600"
        >
          Biodatas
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to={"/about"}
          style={({ isActive }) => {
            return isActive ? activeStyle : {};
          }}
          rel="noopener noreferrer"
          className="flex items-center px-4 -mb-1 dark:border- dark:text-violet-600 dark:border-violet-600"
        >
          About
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to={"/contact"}
          style={({ isActive }) => {
            return isActive ? activeStyle : {};
          }}
          rel="noopener noreferrer"
          className="flex items-center px-4 -mb-1  dark:border- dark:text-violet-600 dark:border-violet-600"
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li className="flex">
          <NavLink
            to={"/dashboard"}
            style={({ isActive }) => {
              return isActive ? activeStyle : {};
            }}
            rel="noopener noreferrer"
            className="flex items-center px-4 -mb-1  dark:border- dark:text-violet-600 dark:border-violet-600"
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    signoutUser()
      .then(() => {
        setUser(() => null);
        toast.success("Logout successfull.");
      })
      .catch(() => toast.error("Something went wrong."))
      .finally(() => setLoading(false));
  };

  return (
    <header className="p-4 dark:bg-gray-100 border-b border-black dark:text-gray-800 relative">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="flex items-center">
          <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
          <h1 className="font-bold">Martrimony</h1>
        </div>
        <ul className="items-stretch hidden space-x-3 lg:flex">{navItems}</ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {user ? (
            <>
              <img
                alt="avatar"
                className="w-12 h-12 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src={user?.photoURL}
              />
              <button
                onClick={handleLogout}
                className="self-center border border-black px-8 py-3 rounded"
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              to={"/login"}
              className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800"
            >
              Log in
            </Link>
          )}
        </div>
        <button
          className="p-4 lg:hidden"
          onClick={() => setShow((currState) => !currState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul
          className={`${
            show ? "block" : "hidden"
          } bg-white p-8 absolute right-3 top-16 z-40 space-y-2 lg:hidden`}
        >
          {navItems}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
