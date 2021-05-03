import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-gray-400 p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">NevisCRM</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Dashboard
            </Link>
            <Link
              to="/students"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Студенты
            </Link>
          </div>
          <div>
            <span className="mr-4 inline-block">{user.username}</span>
            <button
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-green-300 mt-4 lg:mt-0"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
