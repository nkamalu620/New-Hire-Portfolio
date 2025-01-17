import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    deployedLink: 'https://link-to-deployed-project-one.com',
    githubLink: 'https://github.com/username/project-one',
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    deployedLink: 'https://link-to-deployed-project-two.com',
    githubLink: 'https://github.com/username/project-two',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a>
            <br />
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;