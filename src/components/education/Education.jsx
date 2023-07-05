import React from "react";
import "./education.css";
import { ImPointRight } from "react-icons/im";
import {MdOutlineLocationCity} from "react-icons/md";
import {GrScorecard} from "react-icons/gr";
export default function Education() {
  return (
    <section id="education" style={{marginTop:"1%"}}>
      <p style={{ textAlign: "center" }}>Education Timeline</p>
      <h2>Education</h2>
      <div className="container services_container">
        {/* Service_1 */}
        <article className="service">
          <div className="service_head">
            <h2>SSPM's SSRVM</h2>
            <p style={{textAlign:"center" ,color:"gray"}}>School</p>
          </div>
          <ul className="service_list">
            <li>
              <MdOutlineLocationCity className="service_list-icon" />
              <span>Borivali, Mumbai</span>
            </li>
            <li>
              <GrScorecard className="service_list-icon" />
              <span>10th CBSE, 94.6%</span>
            </li>
            <li>
              <ImPointRight className="service_list-icon" />

              <span>About to be Written</span>
            </li>
          </ul>
        </article>
        {/* Service 2 */}
        <article className="service">
          <div className="service_head">
            <h2>PACE Junior Science College</h2>
            <p style={{textAlign:"center" ,color:"gray"}}>Junior College</p>
          </div>
          <ul className="service_list">
            <li>
              <MdOutlineLocationCity className="service_list-icon" />
              <span>Borivali, Mumbai</span>
            </li>
            <li>
              <GrScorecard className="service_list-icon" />
              <span>12th HSC, 88.9%</span>
            </li>
            <li>
              <ImPointRight className="service_list-icon" />
              <span>About to be Written</span>
            </li>
          </ul>
        </article>
        {/* Service_3 */}
        <article className="service">
          <div className="service_head">
            <h2>VIT AP University</h2>
            <p style={{textAlign:"center" ,color:"gray"}}>Degree</p>
          </div>
          <ul className="service_list">
            <li>
              <MdOutlineLocationCity className="service_list-icon" />
              <span>Amaravathi, AP</span>
            </li>
            <li>
              <GrScorecard className="service_list-icon" />
              <span>Currently 8.74 CGPA</span>
            </li>
            <li>
              <ImPointRight className="service_list-icon" />
              <span>About to be Written</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
