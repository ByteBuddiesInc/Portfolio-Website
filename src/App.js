import { useRef } from "react";
import "./App.css";

function App() {
  const services = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const main = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div className="hero">
        <ul>
        <li onClick={() => scrollToSection(main)} id="logo" className="link">
            BYTE BUDDIES
          </li>
          <li onClick={() => scrollToSection(services)} className="link"
          id= "a">
            Services
          </li>
          <li onClick={() => scrollToSection(about)} className="link" id="b">
            About
          </li>
          <li onClick={() => scrollToSection(contact)} className="link" id="c">
            Contact
          </li>
        </ul>
      </div>

      <div ref={main} className="main">
          <div className="main-container">
            <p style={{ fontSize: "28px" }}>Hi! We're two freelance web developers based in Seattle.<br></br>We work with entepeneurs, businesses, and nonprofits like you.</p>
          </div>
          
      </div>

      <div ref={services} className="services">
        <div className="services-container">
          <h3 className="services-text">A good website goes a long way.</h3>
        </div>
      </div>

      <div ref={about} className="about">
  <div className="about-text">
    <h3>About Us</h3>
    <p>Our company was founded by two college students who are passionate about web development and helping businesses succeed online. We believe in building strong, long-lasting relationships with our clients and delivering high-quality work that exceeds their expectations at competitive rates.</p>
  </div>
</div>

      <div ref={contact} className="contact">
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default App;
