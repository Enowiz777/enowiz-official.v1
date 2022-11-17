import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Content(){
  return (
    <div className="flex justify-center">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default Content;