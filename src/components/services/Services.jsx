import React from "react";
import "./services.css";
import img1 from "../../assets/work/kuhoo.png";

const Work = [
  {
    id: 1,
    image: img1,
    title: "SDE Intern",
    about_project:
      "Frontend Intern using Flutter",
    location:"BKC, Mumbai, Maharastra, India",
    github: "https://github.com/Abhiiiiijit/Weather",
    demo: "https://seetheforecast.netlify.app/",
  },
];
const Services = () => {
  return (
    <section id="services" style={{ marginTop: "5%" }}>
      <p style={{ textAlign: "center" }}>Jobs and Internships</p>
      <h2>Work</h2>
      <div className="container project_container">
        {Work.map(({ id, image, title, about_project, location,github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3 style={{ textAlign: "center" }}>{title}</h3>
              <p style={{ marginTop: "1%", marginBottom: "3%" }}>
                {about_project}
              </p>
              <p style={{ marginTop: "1%", marginBottom: "3%" }}>
                {location}
              </p>
              <div className="project-item-cta" style={{ display: "flex" }}>
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
