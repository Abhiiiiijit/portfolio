import React from "react";
import "./header.css";
import Doc from "./Doc";
import ME from "../../assets/Me/me_7.png"
import Social from "./Social";
export default function Header() {
  return (
    // <div>
    //   I am Header
    // </div>
    <>
      <header id="header">
        <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Abhijit</h1>
        <p>Web Developer </p>
        <Doc/>
        <Social/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
      </header>
    </>
  );
}
