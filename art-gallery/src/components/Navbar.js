import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {AiOutlineMenu} from "react-icons/ai";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <h1>Art Gallery</h1>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/work"> Work </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/work"> Work </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <AiOutlineMenu/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;