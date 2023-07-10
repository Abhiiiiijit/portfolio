import React from "react";
import "./Skills.css";
// Frontend
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import js from "../../assets/logo/javascript.gif";
import react from "../../assets/logo/react.png";

// Backend
import mdb from "../../assets/logo/mongodb.png";
import sql from "../../assets/logo/sql.png"

// language
import java from "../../assets/logo/java.gif";
import python from "../../assets/logo/python.gif";
import latex from "../../assets/logo/latex.png";

// Tools
import vs from "../../assets/logo/vscode.png";
import snapseed from "../../assets/logo/snapseed.png";
import colab from "../../assets/logo/colab.png";
import as from "../../assets/logo/as.png";
export default function Skills() {
  return (
    <section id="skill" style={{ marginTop: "1%" }}>
      <p style={{ textAlign: "center" }}>Wanna Know My Skills</p>
      <h2
      // style={{ color: "black" }}
      >
        My Skills
      </h2>
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
              <img src={sql} alt="" className="experience_details-icon" />
              <div>
               <h4>SQL</h4>
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
              <img src={java} alt="" className="experience_details-icon" />
              <div>
                <h4>JAVA</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={python} alt="" className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Beginner</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={latex} alt="" className="experience_details-icon" />
              <div>
                <h4>LaTex</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Beginner</h6>
              </div>
            </article>
          </div>
        </div>

        {/* Tools or Software */}
        <div className="experience_frontend">
          <h3>Tools and Software</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={vs} alt="" className="experience_details-icon" />
              <div>
                <h4>VS Code</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Experienced</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={colab} alt="" className="experience_details-icon" />
              <div>
                <h4>Google Colab</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
            <article className="experience_details">
              <img src={as} alt="" className="experience_details-icon" />
              <div>
                <h4>Android Studio</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Beginner</h6>
              </div>
            </article>
                        <article className="experience_details">
              <img src={snapseed} alt="" className="experience_details-icon" />
              <div>
                <h4>Snapseed</h4>
                <h6 style={{ marginTop: "2%", color: "gray" }}>Intermidate</h6>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
