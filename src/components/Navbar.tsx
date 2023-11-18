import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  const navbarList = [
    { name: "แผนที่ SDGs", path: "/map" },
    { name: "โครงการ", path: "/projects" },
    { name: "เพิ่มโครงการ", path: "/add-projects" },
    { name: "รายงานผล", path: "/result" },
  ];

  return (
    <div>
      <nav className="bg-navy border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="pl-6 text-2xl text-white font-bold">
            SusTrack
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {navbarList.map((nav) => (
                <Link
                  className={
                    window.location.pathname == nav.path
                      ? "block py-4 px-4 text-white rounded-2xl md:p-0 bg-lightblue"
                      : "block py-2 px-3 text-white rounded-2xl md:p-0 hover:bg-lightblue"
                  }
                  key={nav.path}
                  to={nav.path}
                >
                  {nav.name}
                </Link>
              ))}
              <Link
                className=" text-gray-800 hover:bg-lightblue hover:text-white px-3 py-1 bg-gray-200 rounded-full transition ease-linear duration-200"
                to="/login"
              >
                Login
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
