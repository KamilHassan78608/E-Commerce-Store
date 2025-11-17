import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ShopContext } from '../contents/ShopContext'
import { Search, User, Package, LogOut, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const { setshowsearch, showsearch, countCartItems } = useContext(ShopContext)

  const handlesearch = () => {
    setshowsearch(!showsearch);
    navigate("/collection");
  }

  return (
    <div className="flex justify-between items-center py-5 font-medium px-4 md:px-10 relative">
      {/* Logo */}
      <Link to='/'><img src={logo} alt="Dukan Logo" className="w-40 md:w-50" /></Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-10 text-[12px] text-gray-700">
        <NavLink to="/" className="navLink">
          <p>HOME</p>
          <hr className="beneath" />
        </NavLink>
        <NavLink to="/collection" className="navLink">
          <p>COLLECTION</p>
          <hr className="beneath" />
        </NavLink>
        <NavLink to="/contact" className="navLink">
          <p>CONTACT</p>
          <hr className="beneath" />
        </NavLink>
        <NavLink to="/about" className="navLink">
          <p>ABOUT</p>
          <hr className="beneath" />
        </NavLink>
      </ul>


      {/* Right Icons */}
      <div className="flex items-center gap-3 md:gap-5">

        {/* Search */}
        <Search
          onClick={handlesearch}
          className="w-5 h-5 text-gray-700 cursor-pointer hover:text-black transition-colors duration-300"
        />

        {/* User Dropdown */}
        <div className="relative">
          <Link to='/login'><User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition-colors duration-300" /></Link>
          <div className="hidden group-hover:flex absolute right-0 mt-2 flex-col gap-2 w-36 py-5 px-5 bg-slate-100 text-gray-700 rounded shadow-md text-[10px]">
            <p className="flex items-center gap-2 cursor-pointer hover:text-black">
              <User className="w-4 h-4" /> My Profile
            </p>
            <hr />
            <p className="flex items-center gap-2 cursor-pointer hover:text-black">
              <Package className="w-4 h-4" /> Orders
            </p>
            <hr />
            <p className="flex items-center gap-2 cursor-pointer hover:text-black">
              <LogOut className="w-4 h-4" /> Log Out
            </p>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition-colors duration-300" />
          <p className="absolute -right-1 -bottom-1 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {countCartItems()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <Menu
            onClick={() => setIsVisible(true)}
            className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition-colors duration-300"
          />
        </div>
      </div>


      {/* Mobile Dropdown Menu */}
      {isVisible && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-black/20 backdrop-blur-md">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsVisible(false)} className="text-gray-700 hover:text-gray-900 mt-18 pr-[10vw]">
              <X size={24} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col items-center gap-6 text-gray-700">
            <NavLink
              to="/"
              className="text-lg font-medium hover:text-blue-500 border-b-2"
              onClick={() => setIsVisible(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/collection"
              className="text-lg font-medium hover:text-blue-500 border-b-2"
              onClick={() => setIsVisible(false)}
            >
              COLLECTION
            </NavLink>
            <NavLink
              to="/contact"
              className="text-lg font-medium hover:text-blue-500 border-b-2"
              onClick={() => setIsVisible(false)}
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/about"
              className="text-lg font-medium hover:text-blue-500 border-b-2"
              onClick={() => setIsVisible(false)}
            >
              ABOUT
            </NavLink>
          </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
