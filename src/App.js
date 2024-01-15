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
      <p>
        My experience has helped me gain in-depth knowledge of writing well-designed, testable, and efficient code by using best software development practices. I have gained insights into how the IT industry works. As a software developer here, I've had the opportunity to learn about modern technologies and efficient database operations. Our internal team members' approach to designing optimal code, handling vast amounts of client data, and making the best business decisions kindled a spark within me to explore this dynamic field. I got to deal with members of the payment gateway team, and their ability to anticipate the business impact. My initial function in my team was to create an optimal code based on the client's requirements. Following that, I took responsibility for managing the project on my own, gathering requirements, managing my colleagues, and soon after, I began developing the application, which further inspired me. For cost-cutting reasons, I have managed several clients' databases while designing and developing efficient code to allow multitenancy in the application. My endeavor garnered a lot of appreciation.

        Moreover, I worked on containerizing applications with docker and created a Kubernetes cluster to recover the application in the event of a disaster as well as to maintain replicas of microservices.On top of this I have integrated microservices with keycloak an open source software product to provide role based authentication for specific microservices .Furthermore I utilized Kong API gateway to expose api’s in  a secure manner.In addition, I was in charge of mitigating and resolving the log4j vulnerability in several projects at my company. On the other hand, I'm working on designing apps that employ the MEF standard, which allows telecom-related devices to communicate with numerous partners domains and service domains.
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
      setOpen(false);
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
          <nav>
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
            <ul className={`nav-links ${isOpen && isMobile ? 'open' : ''}`}>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
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