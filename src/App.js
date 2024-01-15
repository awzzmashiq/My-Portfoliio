import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes, Navigate } from 'react-router-dom';
import ConnectWithMe from './ConnectWithMe';
import HamburgerMenu from 'react-hamburger-menu';


function Home() {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <p>
        I am Mohamed Asik Sapteen, a Java Developer with a passion for creating robust and efficient software solutions.
      </p>
      <footer>
        <ConnectWithMe />
      </footer>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        I am a Java backend developer with over 4 years of experience, specializing in SDLC, Agile, and Waterfall methodologies. I hold a Masters of Science in Information Systems from New Jersey Institute of Technology, and a Bachelors in Computer Science and Engineering from Government College of Technology, Tamil Nadu.
      </p>
      <p>
        My technical skills include proficiency in Core Java, Java EE technologies, and frameworks such as Spring MVC, Spring Boot, and Hibernate. I am well-versed in cloud platforms like AWS and Azure, containerization with Docker, and orchestration using Kubernetes.
      </p>
      <p>
        I am passionate about software development and always strive to stay updated with the latest technologies and best practices.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <p>
        Here are some highlights of my recent projects:
      </p>
      <ul>
        <li>Developed a responsive and user-friendly web application using JSF and integrated backend logic with front-end technologies.</li>
        <li>Led the end-to-end development of a Java-based backend application for a Telecom Product, enhancing capacity, reducing downtime, and improving service response time.</li>
        <li>Engineered a comprehensive reporting system that consolidated data from multiple sources, increasing team efficiency by 35%.</li>
      </ul>
    </div>
  );
}



function App() {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setOpen(false); // Close the menu when resizing for a better user experience
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {isMobile && (
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={toggleMenu}
              width={32}
              height={24}
              strokeWidth={3}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
            />
          )}
          <nav>
            <ul className={`nav-links ${isOpen && isMobile ? 'open' : ''}`}>
              {isOpen && isMobile && (
                <>
                  <li><NavLink to="/home">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/projects">Projects</NavLink></li>
                </>
              )}
            </ul>
          </nav>
        </header>
        <section>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/my-portfolio" element={<Navigate to="/home" />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
