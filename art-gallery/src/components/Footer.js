import React from 'react';
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <a href="https://github.com/ManveetKaur0007"><AiFillGithub /></a> Example of adding proper icons*/}
        <AiOutlineInstagram /> <AiOutlineLinkedin /> <AiFillGithub />
      </div>
      <p> &copy; 2022 The Art Gallery</p>
    </div>
  );
}

export default Footer;