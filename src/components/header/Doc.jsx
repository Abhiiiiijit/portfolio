import React from "react";

export default function Doc() {
  return (
    <>
      <div className="cta" style={{ fontWeight: "bold" }}>
        {/* <button className="btn btn-outline-primary"> */}
        <a
          href="https://drive.google.com/file/d/1w36IU2kUKHf2-gsxGcXBdUDKc6WnVk7l/view?usp=sharing"
          download
          className="btn"
          style={{ textDecoration: "none" }}
        >
          Resume
        </a>
        {/* </button> */}
        {/* <button type="button" className="btn btn-outline-warning" style={{color:"white"}}> */}
        <a
          href="#contact"
          style={{ textDecoration: "none" }}
          className="btn btn-primary"
        >
          Contact Us
        </a>
        {/* </button> */}
      </div>
    </>
  );
}
