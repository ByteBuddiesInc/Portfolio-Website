import { useRef } from "react";
import "./App.css";
import myImage from './edward.png'
import evanPhoto from './evan.png'

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
          <li onClick={() => scrollToSection(main)} id="logo">
            BYTE BUDDIES
          </li>
          <li onClick={() => scrollToSection(services)} className="link"
            id="a">
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
        <div className="profile-container">
          <div className="profile-image">
            <img src={myImage} alt="Profile" className="profile-img" />
          </div>
          <div className="profile-image">
            <img src={evanPhoto} alt="Profile" className="profile-img" />
          </div>
        </div>
        <div className="main-text-container">
          <p className="main-text">
            Hey there! We're Edward and Evan, a duo of freelance web developers from Seattle.<br />
            We work with entrepreneurs, businesses, and nonprofits like <strong>you</strong>.
          </p>
        </div>
      </div>





      <div ref={services} className="services">
        <h1 className="page-title">Services</h1>
        <div className="services-container">
          <p className="services-left">Web Design</p>
        </div>

        <div className="services-container">
          <p>Data Base Management</p>
        </div>

        <div className="services-container">
          <p className="services-right">Maintenance</p>
        </div>
      </div>


      <div ref={about} className="about">
        <div className="about-text">
          <h3>About Us</h3>
          <p>Our company was founded by two college students who are passionate about web development and helping businesses succeed online. We believe in building strong, long-lasting relationships with our clients and delivering high-quality work that exceeds their expectations at competitive rates.</p>
        </div>
      </div>

      <div ref={contact} className="contact">
        <h2 className="contact-text">Let's Connect!</h2>
        <h1 className="contact-text">elee714@uw.edu</h1>
      </div>
    </div>
  );
}

export default App;