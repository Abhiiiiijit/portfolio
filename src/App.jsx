// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skill from "./components/skills/Skills";
import Services from "./components/services/Services";
import Project from "./components/Project/Project";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Education from "./components/education/Education";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Education/>
      <Skill/>
      <Project />
      {/* <Services /> */}
      {/* <Testimonial /> */}
      {/* Error to be Correct in Testimonials */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
