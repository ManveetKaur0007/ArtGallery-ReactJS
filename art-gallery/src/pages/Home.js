import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/backgroundImage-home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>The Art Gallery</h1>
        <h2> Language without Words </h2>
        <p>Project made by:<br/>
          <a href="https://manveetkaur0007.wixsite.com/index">Manveet Kaur</a><br/>
          <a href="http://file:///F:/DevFolio/index.html">Simranjit Kaur</a></p>
        <Link to="/work">
          <button> Learn more </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
