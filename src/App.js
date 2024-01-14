import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mohamed Asik Sapteen</h1>
        <p>Java Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>4+ years experienced Java developer with expertise in SDLC, Agile, and Waterfall methodologies...</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Microservices</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        {/* Include your work experience details here */}
        <p>Current: Java Developer at Unum, TX (July 2023 - Present)</p>
        <p>Previous: Java Developer at Infoway Solutions, India (Oct 2021 - Aug 2022)</p>
        <p>Earlier: Java Developer at ByteCraft System, India (Jan 2019 - Sep 2021)</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        {/* Include your education details here */}
        <p>Masters of Science in Information Systems | New Jersey Institute of Technology - Newark, NJ (GPA – 3.7/4.00)</p>
        <p>Bachelors in Computer Science and Engineering | Government College of Technology - Coimbatore, Tamil Nadu</p>
      </section>

      <footer>
        <p>Contact me at: <a href="mailto:ashik.s@itechsavy.me">ashik.s@itechsavy.me</a></p>
      </footer>
    </div>
  );
}

export default App;
