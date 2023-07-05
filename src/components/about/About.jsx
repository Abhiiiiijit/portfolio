import React from "react";
import "./about.css";
import ME from "../../assets/Me/me_8.jpg";
import { MdWorkHistory } from "react-icons/md";
// import { SiCodeproject } from "react-icons/si";
import {FaCode} from "react-icons/fa";
import { FcStackOfPhotos } from "react-icons/fc";
// import project from "../../assets/logo/project.png"
export default function About() {
  return (
    <>
      <section id="about">
        <p style={{ textAlign: "center" }}>Wanna Know me</p>
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
                <MdWorkHistory className="about_icon" />
                <h5>Experience</h5>
                <h6 style={{ color: "gray" }}>Fresher</h6>
              </article>
              <article className="about_card">
                <FaCode className="about_icon" />
                {/* <img src={project} alt="" className="about_icon"/> */}
                <h5>Projects</h5>
                <h6 style={{ color: "gray" }}>5 Major Project</h6>
              </article>
              <article className="about_card">
                <FcStackOfPhotos className="about_icon" />
                <h5>Photograhy</h5>
                <h6 style={{ color: "gray" }}>Mobi-Graphy</h6>
              </article>
            </div>
            <p style={{ marginTop: "5%" }}>
              Welcome to my portfolio !&#128515; I am Abhijit, a passionate and
              dedicated individual with a strong desire to learn and grow in the
              field of Software Development. As a fresher with zero work
              experience, I bring a fresh perspective, enthusiasm, and a
              willingness to take on new challenges.
            </p>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ marginTop: "5%", fontWeight: "bold" }}
            >
              Lets Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
