import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>

      <div className="h-24 bg-amber-300">
        <h1 className="text-2xl">Enowiz</h1>
        <div >
          <ul className="flex space-x-5">
            <li>
              <Link to="/">Home</Link>
            </li>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
          </ul>

        </div>
      </div>
    </Router>
      <div className="flex flex-row">
        <div className="h-screen basis-1/4 bg-teal-300">01</div>
        <div className="basis-3/4">09</div>
      </div>
    </>
  );
}

export default App;
