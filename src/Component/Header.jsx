import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('You Logged Out Successfully');
      })
      .catch(err => {
        console.error(err);
        toast.error('Something went wrong!');
      });
  };

  const navLinks = (
    <>
      <Link className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" to="/">Home</Link>
      <Link className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" to="/all-games">All Games</Link>
      <Link className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" to="/about-us">About Us</Link>
      <Link className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" to="/contact-us">Contact Us</Link>
      <Link className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" to="/support">Support</Link>
    </>
  );

  return (
    <div className="navbar bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-11/12 mx-auto transition-colors duration-300">
      
      {/* Navbar Start */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={-1} className="menu dropdown-content bg-white dark:bg-gray-800 rounded-box mt-3 w-52 p-2 shadow gap-2 flex flex-col transition-colors duration-300">
            {navLinks}
            {!user && (
              <>
                <Link className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" to="/auth/login">Login</Link>
                <Link className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" to="/auth/register">Register</Link>
              </>
            )}
            {user && (
              <>
                <Link to="/auth/my-profile">
                  <img
                    className="h-10 w-10 rounded-full border object-cover"
                    src={user.photoURL || "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg"}
                    alt="User"
                  />
                </Link>
                <button onClick={handleLogOut} className="btn btn-outline w-full">Log Out</button>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link className="text-2xl font-semibold ml-2" to="/">Gamehub</Link>
      </div>

      {/* Navbar Center / Desktop */}
      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal px-1 gap-4 items-center">
          {navLinks}
          {!user && (
            <>
              <Link className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" to="/auth/login">Login</Link>
              <Link className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" to="/auth/register">Register</Link>
            </>
          )}
          {user && (
            <>
              <Link to="/auth/my-profile">
                <img
                  className="h-10 w-10 rounded-full border object-cover"
                  src={user.photoURL || "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg"}
                  alt="User"
                />
              </Link>
              <button onClick={handleLogOut} className="btn btn-outline ml-2">Log Out</button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
