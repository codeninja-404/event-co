import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="p-2 lg:px-20">
      <div className="navbar rounded-full  bg-black border text-gray-400 container mx-auto px-2 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <p className=" normal-case text-2xl text-white font-bold">Event.CO</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              {" "}
              <div className="  flex items-center p-2">
                <div className="avatar pr-2">
                  <div className=" w-8 rounded-full ring-2 ring-blue-500 ring-offset-base-100 ring-offset-1">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <p className="text-green-500">{user.displayName}</p>
              </div>
              <Link
                onClick={() => logOut()}
                to="/"
                className="btn btn-outline btn-xs text-xs text-red-500"
              >
                Log Out
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline btn-xs text-xs text-green-500"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
