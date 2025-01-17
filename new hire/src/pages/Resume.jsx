import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
        <header>
            <h1>Nkechi Kamalu</h1>
            <p>Web Developer</p>
            <p>Email: nkamalu96@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
        </header>
        <section className="summary">
            <h2>Summary</h2>
            <p>I am skillfull in JavaScript, React, Node.js, HTML & CSS, and Typescript.</p>
        </section>
        <section className="skills">
            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>TypeScript</li>
            </ul>
        </section>
        <section className="experience">
            <h2>Experience</h2>
            <div className="job">
                <h3>Job Title at Company Name</h3>
                <p>Location | Dates of Employment</p>
                <ul>
                    <li>Responsibility or achievement 1</li>
                    <li>Responsibility or achievement 2</li>
                    <li>Responsibility or achievement 3</li>
                </ul>
            </div>
            {/* Repeat for additional job experiences */}
        </section>
        <section className="education">
            <h2>Education</h2>
            <div className="school">
                <h3>Degree in Field of Study</h3>
                <p>University Name | Graduation Year</p>
            </div>
        </section>
        <footer>
            <h2>Contact</h2>
            <p>LinkedIn: your-linkedin-profile</p>
            <p>GitHub: your-github-profile</p>
        </footer>
    </div>
);
};

export default Resume;