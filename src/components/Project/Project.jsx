import React from "react";
import "./project.css";
import img1 from "../../assets/project/Weather.png";
import img4 from "../../assets/project/textutil.png";
const Projects = [
  {
    id: 1,
    image: img1,
    title: "Weather Application",
    about_project:
      "Weather Web Application made using React JS and OpenWeather API",
    github: "https://github.com/Abhiiiiijit/Weather",
    demo: "https://seetheforecast.netlify.app/",
  },
  {
    id: 2,
    image: img1,
    title: "Bring Me Meal",
    about_project:
      "Food Delivery/Ordering App made using React.js, Bootstrap, Node.js, MongoDB, Express.js",
    github: "https://github.com/Abhiiiiijit/Food-Delivery",
    demo: "#",
  },
  {
    id: 3,
    image: img1,
    title: "Alcohol Sensed Engine Lock System",
    about_project:
      "IoT based group project made using Live hardware on Arduino UNO along with gas sensor, motors, LCD, WiFi Module etc",
    github: "https://github.com/Abhiiiiijit/Alcohol-Sensed-Engine-Lock-System",
    demo: "#",
  },
  {
    id: 4,
    image: img4,
    title: "Textutils",
    about_project:"Text Utility app i.e to perform various function like count, capitalize, to lowercase etc",
    github: "https://github.com/Abhiiiiijit/TextUtils",
    demo: "https://abhiiiiijit.github.io/TextUtils/",
  }
];
const Project = () => {
  return (
    <section id="project">
      <p style={{ textAlign: "center" }}>Personal and Courses Works</p>
      <h2>Projects</h2>
      <div className="container project_container">
        {Projects.map(({ id, image, title, about_project, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3 style={{textAlign:"center"}}>{title}</h3>
              <p style={{ marginTop: "1%", marginBottom: "3%" }}>
                {about_project}
              </p>
              <div className="project-item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Project;
