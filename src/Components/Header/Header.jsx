import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const logo = 'https://i.ibb.co/TmYqw6T/logo.png';
  const links = (
    <>
      <li>
        <NavLink
          to={'/'}
          className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active-nav' : 'nav-link')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/about'}
          className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active-nav' : 'nav-link')}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/events'}
          className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active-nav' : 'nav-link')}>
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/Blog'}
          className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active-nav' : 'nav-link')}>
          Blog
        </NavLink>
      </li>
    </>
  );

  const changeBackground = () => {
    if (window.scrollY >= 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <div
      className={
        navbar ? 'bg-white fixed top-0 w-full' : 'bg-transparent transition-all duration-300 fixed top-0 w-full'
      }
      data-aos="fade-down">
      <div className="container mx-auto">
        <div className="navbar items-center py-4">
          <div className="navbar-start">
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 gap-5 mr-6 hidden lg:flex">{links}</ul>
            <div className="dropdown dropdown-left">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {links}
                <Link to={'/login'} className="primary-btn">
                  Log in
                </Link>
              </ul>
            </div>
            <Link to={'/login'} className="primary-btn hidden lg:inline-block" data-aos="zoom-in-left">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
