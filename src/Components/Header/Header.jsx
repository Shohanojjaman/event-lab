import Hamburger from 'hamburger-react';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

const defaultUserPic = 'https://i.ibb.co/zxqmRnL/user.png';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);
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
          to={'/Blogs'}
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
        navbar ? 'bg-white fixed top-0 w-full z-10' : 'bg-transparent transition-all duration-300 fixed top-0 w-full'
      }>
      <div className="container mx-auto">
        <div className="navbar items-center py-4">
          <div className="navbar-start" data-aos="fade-right">
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-end" data-aos="fade-left">
            <ul className="menu menu-horizontal px-1 gap-5 mr-6 hidden lg:flex">{links}</ul>
            <div className="drawer lg:hidden">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex justify-end">
                <label htmlFor="my-drawer-4" className="btn-ghost btn btn-primary">
                  <Hamburger toggled={isOpen} toggle={setOpen} />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay bg-black text-white"></label>
                <ul className="menu p-4 w-80 min-h-full bg-black text-base-content">
                  {links}
                  <Link to={'/login'} className="primary-btn">
                    Log in
                  </Link>
                </ul>
              </div>
            </div>
            {user && (
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img className="w-10" src={user.photoURL ? user?.photoURL : defaultUserPic} alt="" />
                </div>
              </label>
            )}
            <button className="primary-btn hidden lg:inline-block ml-4">
              {user ? (
                <Link onClick={logOut} to={'/login'}>
                  LogOut
                </Link>
              ) : (
                <Link to={'/login'}>Login</Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
