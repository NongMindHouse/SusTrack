import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  // setShowMenu false when change page
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  const navbarList = [
    { name: "แผนที่ SDGs", path: "/map" },
    { name: "โครงการ", path: "/projects" },
    { name: "เพิ่มโครงการ", path: "/add-projects" },
    { name: "รายงานผล", path: "/result" },
  ];

  return (
    <nav className="bg-navy border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      <div className="min-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="pl-6 text-2xl text-white font-bold">
          <img src="images/sdgs-circle-no-text.png" className="inline h-8"/>
          <img src="images/mascot/mascot-laptop-right.png" className="inline h-10 mx-2"/>
          SusTrack
        </Link>
        {/* Bar3 */}
        <button
          type="button"
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lightblue"
        >
          {showMenu ? <img src="/icon/close.svg" /> : <img src="/icon/bar3.svg" />}
        </button>

        {/* NavList */}
        <div className={showMenu ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"}>
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navbarList.map((nav) => (
              <Link
                className={
                  pathname == nav.path
                    ? "block py-1 px-4 text-white rounded-2xl bg-lightblue"
                    : "block py-1 px-4 text-white rounded-2xl hover:bg-lightblue transition-all duration-100 ease-linear hover:scale-105"
                }
                key={nav.path}
                to={nav.path}
              >
                {nav.name}
              </Link>
            ))}
            <Link
              className=" text-gray-800 hover:bg-lightblue hover:text-white px-3 py-1 bg-gray-200 rounded-full transition ease-linear duration-200 hover:scale-105"
              to="/login"
            >
              เข้าสู่ระบบ
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
