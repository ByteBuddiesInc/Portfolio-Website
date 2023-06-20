import { useRef } from "react";
import "./App.css";
import myImage from './edward.png'
import evanPhoto from './evan.png'

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const main = useRef(null);

  const handleEmailClick = () => {
    window.location.href = 'mailto:elee714@uw.edu';
  };

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
          <li onClick={() => scrollToSection(about)} className="link"
            id="a">
            About
          </li>
          <li onClick={() => scrollToSection(projects)} className="link" id="b">
            Projects
          </li>
          <li onClick={() => scrollToSection(contact)} className="link" id="c">
            Contact
          </li>
        </ul>
      </div>

      <div ref={main} className="main">
        <div className="main-text-container">
          <p className="main-text">
            <span className="small-text">Hey there! We're</span> <br></br>Edward and Evan<span id="comma"><strong>,</strong></span>{' '}<br></br>
            <span className="small-text">a duo of freelance web developers from Seattle.
              We work with entrepreneurs, businesses, and nonprofits like{' '}
              <strong>you.</strong></span>
          </p>
        </div>
      </div>

      <div ref={about} className="about">
        <div className="about-container">
          <div className="projects-text">
            <h1 id="page-title">About Us!</h1>
            <p>We believe in building strong, long-lasting relationships with our clients and delivering high-quality work that exceeds their expectations at competitive rates.</p>
            <p>With a strong background in HTML, CSS, SASS, JavaScript, Bootstrap, and mySQL, we create custom designs that will match your web needs.</p>
            <p>Reach out to us today and let's discuss how we can bring your vision to life!</p>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-image">
            <img src={myImage} alt="Profile" className="profile-img" />
            <div className="filler-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis elit eget nisi blandit, sed commodo est fringilla. Sed vel tortor sit amet enim scelerisque feugiat. Ut eleifend, lorem non viverra hendrerit, eros lectus auctor ipsum, vel viverra est urna id nisi.
            </div>
          </div>
          <div className="profile-image">
            <img src={evanPhoto} alt="Profile" className="profile-img" />
            <div className="filler-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis elit eget nisi blandit, sed commodo est fringilla. Sed vel tortor sit amet enim scelerisque feugiat. Ut eleifend, lorem non viverra hendrerit, eros lectus auctor ipsum, vel viverra est urna id nisi.
            </div>
          </div>
        </div>
      </div>




      <div ref={projects} className="projects">

      </div>

      <div ref={contact} className="contact">
        <h2 className="contact-smaller">Let's Connect!</h2>
        <div className="email-button">
          <button onClick={handleEmailClick} className="email-content">elee714@uw.edu</button>
        </div>

      </div>
    </div>
  );
}
export default App;