import React from "react";
import "./footer.css";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo" rel="noreferrer">
        abhiiiiiiijeet
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
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
      <div className="footer_copyright">
        <p>&copy; abhiiiiiiijeet  All rights reserved</p>
      </div>
    </footer>
  );
}
