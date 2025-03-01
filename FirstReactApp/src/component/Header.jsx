import React from 'react';
import { Link } from "react-router-dom";
/*import "./App.css";*/

export default function Header() {
  return (
    <div>
      <header className="header">
      <h1 className="logo">My First React App</h1>
      <nav>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/Aboout">About Me</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
    </div>
  );
}





/*export default Header;*/
