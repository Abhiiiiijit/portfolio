import React from "react";
import "./about.css";
import ME from "../../assets/Me/me_8.jpg"

export default function About() {
  return (
    <>
      <section id="about">
        <h5>Wanna Know me</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="" />
            </div>
          </div>
          <div className="aboutcontent">
            <div className="about_cards">
              <article className="about_card">
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
