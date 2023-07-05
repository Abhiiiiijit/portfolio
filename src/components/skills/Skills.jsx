import React from "react";
import "./Skills.css";
// Frontend
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import js from "../../assets/logo/javascript.gif";
import react from "../../assets/logo/react.png";

// Backend
import mdb from "../../assets/logo/mongodb.png";
export default function Skills() {
  return (
    <section id="skill" style={{marginTop:"1%"}}>
      <p style={{ textAlign: "center" }}>Wanna Know My Skills</p>
      <h2>My Skills</h2>
      <div className="container experience_container">
        
        
        {/* FrontEnd */}
        <div className="experience_frontend">
          
          <h3>Frontend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} alt="" className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Experienced</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={css} alt="" className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} alt="" className="experience_details-icon" />
              <div>
                <h4>JS</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={react} alt="" className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
          </div>
        </div>
        
        {/* Backend */}
        <div className="experience_backend">
          
          <h3>Backend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={mdb} alt="" className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Beginner</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={css} alt="" className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} alt="" className="experience_details-icon" />
              <div>
                <h4>JS</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
          </div>
        </div>


        {/* Language */}
        <div className="experience_language">
          <h3>Language</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} alt="" className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Experienced</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={css} alt="" className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} alt="" className="experience_details-icon" />
              <div>
                <h4>JS</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
          </div>
        </div>

        {/* Tools or Software */}
        <div className="experience_frontend">
          <h3>Tools and Software</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} alt="" className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Experienced</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={css} alt="" className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} alt="" className="experience_details-icon" />
              <div>
                <h4>JS</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={react} alt="" className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
