import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContext";
import logo from "../../Assets/logo.svg";

const activeStyle = {
  textDecoration: "underline",
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);

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

  return (
    <header className="p-4 bg-gray-800 fixed w-full z-20 top-0">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <div className="flex items-center">
            <img className="w-16 h-16" src={logo} />

            <h1 className="text-xl font-bold hidden md:block">Matrimony</h1>
          </div>
          <ul className="items-stretch hidden space-x-3 lg:flex">{navItems}</ul>
        </div>
        <div className="flex relative">
          <div className="items-center flex-shrink-0 flex">
            {user ? (
              <img
                alt="avatar"
                className="w-12 h-12 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src={user?.photoURL}
              />
            ) : (
              <Link to={"/login"} className="btn-primary">
                Log in
              </Link>
            )}
          </div>
          <button
            className="p-4 md:hidden"
            onClick={() => setShow((currState) => !currState)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
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
            className={`absolute right-0 z-30 space-y-2 top-20 md:hidden bg-gray-800 p-8 ${
              show ? "block" : "hidden"
            }`}
          >
            {navItems}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
