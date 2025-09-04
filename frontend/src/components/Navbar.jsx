import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [visible, setVisible] = useState(false);


  return (
    <div className="flex items-center justify-between py-5 font-medium">
     
     <Link to='/'><img src={assets.logo} alt="Logo" className="h-10 w-36" /></Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 mx-auto border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 mx-auto border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 mx-auto border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 mx-auto border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

        {/* Profile Dropdown */}
        <div className="group relative">
          <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" />
          <div className="hidden group-hover:block absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className="relative">
              <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
              <p className="absolute -right-2 -bottom-2 bg-red-500 w-4 h-4 text-white text-xs flex items-center justify-center rounded-full">10</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="Menu" className="w-5 cursor-pointer sm:hidden" />
      </div>
      {/* sidebar menu for small screens */}

      <div className= {`absolute top-0 right-0 bottom-0 overflow-hidden bg-white  transition-all ${visible ? 'w-full' : 'w-0' }`}>
          <div className="flex flex-col text-gray-600">
            <div onClick={()=>{setVisible(false)}} className="flex items-center gap-4 p-3 cursor-pointer">
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
              </div>
                  <NavLink onClick={()=>{setVisible(false)}} className= "py-2 pl-6 border" to= '/'>Home</NavLink>
                  <NavLink onClick={()=>{setVisible(false)}} className= "py-2 pl-6 border" to= '/collection'>Collection</NavLink>
                  <NavLink onClick={()=>{setVisible(false)}} className= "py-2 pl-6 border" to= '/about'>About</NavLink>
                  <NavLink onClick={()=>{setVisible(false)}} className= "py-2 pl-6 border" to= '/contact'>Contact</NavLink>
            </div>
            </div>
      </div>
  );
};

export default Navbar;
