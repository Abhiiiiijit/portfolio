import React from "react";
import "./navbar.css";
import {FaBook} from "react-icons/fa";
import {FcHome,FcBusinessContact} from "react-icons/fc";
import {SiAboutdotme, SiCodeproject} from "react-icons/si"

import { useState } from "react";
export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FcHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <SiCodeproject />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FcBusinessContact />
      </a>
    </nav>
  );
}
