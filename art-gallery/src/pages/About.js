import React from "react";
import BackImage from "../assets/images/backgroundImage-1.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BackImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>There's this notion that to grow a business, you have to be ruthless.
          But we know there's a better way to grow. One where what's good for the
          bottom line is also good for customer. We believe businesses can grow 
          with a conscience, and succeed with a soul - and that they can do it 
          with inbound. That's why we've created an ecosystem uniting software,
          education, and community to help businesses grow better every day. 
          
          We're a small, tight-knit team focused on making The Art Gallery 
          empowering and easy to use. Some of us run our own Art Gallery stores, 
          other are musicians, illustrators, and flimmakers. We've worked hard to 
          build a company where we do big things. We're here to help you do the same.
        </p>
        <p className="link">Project made by:<br/>
          <a href="https://manveetkaur0007.wixsite.com/index">Manveet Kaur</a><br/>
          <a href="http://file:///F:/DevFolio/index.html">Simranjit Kaur</a></p>
      </div>
    </div>
  );
}

export default About;