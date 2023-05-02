import { useRef } from "react";
import "./App.css";

function App() {
  const services = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

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
          <li onClick={() => scrollToSection(services)} className="link">
            Services
          </li>
          <li onClick={() => scrollToSection(about)} className="link">
            About
          </li>
          <li onClick={() => scrollToSection(contact)} className="link">
            Contact
          </li>
        </ul>
      </div>
      <div ref={services} className="services">
        <div className="services-container">
          <h1 className="services-text">Byte Buddies</h1>
        </div>
      </div>

      <div ref={about} className="about">
        <h3>About</h3>
      </div>
      <div ref={contact} className="contact">
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default App;
