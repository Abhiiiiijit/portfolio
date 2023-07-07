import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7hd3t6b",
        "template_ocf1yth",
        form.current,
        "ThX_UTHjZmCPEif8h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };
  return (
    <section id="contact">
      <p style={{ textAlign: "center" }}>Wanna Talk and Know me</p>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMarkEmailRead className="contact_option-icon" />
            <h4>Email</h4>
            <h5>abhijeetbosedas8@gmail.com</h5>
            <a href="mailto:abhijeetbosedas8@gmail.com">Send A Message</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 7506426396</h5>
            <a href="https://wa.me/7506426396">Ping Me</a>
          </article>
          <article className="contact_option">
            <AiFillLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Abhijit Bose Das</h5>
            <a
              href="https://www.linkedin.com/in/abhijit-bose-das-5b6b1719b/"
              target="_blank"
              rel="noreferrer"
            >
              Connect
            </a>
          </article>
        </div>
        <form className="form_effect" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email ID"
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type your message here"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
