import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import resumePDF from './assets/Mohamed Asik Sapteen_Resume.pdf';

function ConnectWithMe() {
    return (
        <div>
            <h2>Connect with Me</h2>
            <p>Feel free to explore more about my work and connect with me:</p>
            <ul>
                <li>
                    <a href="https://github.com/awzzmashiq" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/mohamed-asik-sapteen-013947203/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} /> linkedin
                    </a>
                </li>
                <li>
                    <a href="mailto:ashik.s@itechsavy.me" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} /> ashik.s@itechsavy.me
                    </a>
                </li>
            </ul>
            <p style={{ marginTop: '20px', fontSize: '18px' }}>
                Download my resume: <a href={resumePDF} download style={{ textDecoration: 'none', color: '#61dafb', fontWeight: 'bold' }}>Resume.pdf</a>
            </p>

        </div>
    );
}

export default ConnectWithMe;
