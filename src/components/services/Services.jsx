import React from "react";
import "./services.css";
import { ImPointRight } from "react-icons/im";
export default function Services() {
  return (
    <section id="services">
      <p style={{ textAlign: "center" }}>What I Offer</p>
      <h2>My Services</h2>
      <div className="container services_container">
        {/* Service_1 */}
        <article className="service">
          <div className="service_head">
            <h2>UI/UX</h2>
          </div>
          <ul className="service_list">
            <li>
              <ImPointRight className="service_list-icon" />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <ImPointRight className="service_list-icon" />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <ImPointRight className="service_list-icon" />  

              <span>Lorem ipsum dolor sit amet.</span>
            </li>
          </ul>
        </article>
        {/* Service 2 */}
        <article className="service">
          <div className="service_head">
            <h2>Web Development</h2>
          </div>
          <ul className="service_list">
            <li>
              <ImPointRight className="service_list-icon" />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <ImPointRight className="service_list-icon" />  
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <ImPointRight className="service_list-icon" />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
          </ul>
        </article>
        {/* Service_3 */}
        <article className="service">
          <div className="service_head">
            <h2>XYZ</h2>
          </div>
          <ul className="service_list">
            <li>
              <ImPointRight className="service_list-icon" />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <ImPointRight className="service_list-icon" />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <ImPointRight className="service_list-icon" />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
