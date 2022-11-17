import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

export default App;
