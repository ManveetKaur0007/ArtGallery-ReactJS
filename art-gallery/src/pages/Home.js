import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/backgroundImage-home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>The Art Gallery</h1>
        <p> Language without Words </p>
        <Link to="/work">
          <button> Learn more </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
