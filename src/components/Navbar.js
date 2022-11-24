import React from 'react';
import {
    NavLink,
  } from "react-router-dom";

function Navbar(){
  return (
    <nav className="mb-8 font-normal flex justify-center space-x-6 m-4">
        <NavLink className="px-2 py-1 rounded-lg focus:bg-[#55efc4] hover:bg-[#55efc4] transition duration-500 hover:scale-125" to="">Home</NavLink>
        <NavLink className="px-2 py-1 rounded-lg focus:bg-[#55efc4] hover:bg-[#55efc4] transition duration-500 hover:scale-125" to="projects">Projects</NavLink>
        <NavLink className="px-2 py-1 rounded-lg focus:bg-[#55efc4] hover:bg-[#55efc4] transition duration-500 hover:scale-125" to="tech-stack">Tech Stack</NavLink>
        <NavLink className="px-2 py-1 rounded-lg focus:bg-[#55efc4] hover:bg-[#55efc4] transition duration-500 hover:scale-125" to="contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar;