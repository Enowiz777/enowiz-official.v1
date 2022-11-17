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
import Navbar from "./components/Navbar"
import Content from "./components/Content"

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Content />

      <div>Footer</div>
    </Router>
  );
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

export default App;
