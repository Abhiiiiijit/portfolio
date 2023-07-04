import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMediumM,
  FaInstagram,
} from "react-icons/fa";
export default function Social() {
  return (
    <>
      <div className="header_socials">
        <a
          href="https://instagram.com/abhiiiiiiijeet?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/abhijit-bose-das-5b6b1719b"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Abhiiiiijit"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        {/* <a href="#Medium" target="_blank" rel="noreferrer"><FaMediumM /></a> */}
        <a href="#twitter" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </>
  );
}
