import React from "react";
import "./services.css";
import img1 from "../../assets/work/kuhoo.png";

const Work = [
  {
    id: 1,
    image: img1,
    title: "SDE Intern",
    date:"2nd Jan, 2024 - 19th May, 2024",
    about_project:
      "Partner Onboarding of LOS Portal ",
    location:"BKC, Mumbai, Maharastra, India",
    linkedin: "https://www.linkedin.com/company/kuhoo-edufintech/mycompany/",
    webstite: "https://www.kuhoo.com/",
  },  
  {
    id: 2,
    image: img1,
    title: "SDE I",
    date:"19th May, 2024 - Present",
    about_project:
      "Partner On-boarding and Agent On-boarding of LOS Portal, LLDs ",
    location:"BKC, Mumbai, Maharastra, India",
    linkedin: "https://www.linkedin.com/company/kuhoo-edufintech/mycompany/",
    webstite: "https://www.kuhoo.com/",
  },

];
const Services = () => {
  return (
    <section id="services" style={{ marginTop: "5%" }}>
      <p style={{ textAlign: "center" }}>Jobs and Internships</p>
      <h2>Work</h2>
      <div className="container project_container">
        {Work.map(({ id, image, title, date,about_project, location,linkedin, webstite }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3 style={{ textAlign: "center" }}>{title}
              <h6 style={{ marginTop: "2%", color: "gray" }}>{date}</h6></h3>
              <p style={{ marginTop: "1%", marginBottom: "3%" }}>
                {about_project}
              </p>
              <p style={{ marginTop: "1%", marginBottom: "3%" }}>
                <span style={{fontWeight:"bold"}}>Location:- </span>{location}
              </p>
              <div className="project-item-cta" style={{ display: "flex" }}>
                <a
                  href={linkedin}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <a
                  href={webstite}
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
