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

import Header from './components/Header'
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </Router>
  );
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

export default App;
