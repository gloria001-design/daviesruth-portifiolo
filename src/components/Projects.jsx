import { FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    title: "HedgeNest",
    description:
      "A collaborative real estate web application built during an intensive frontend development program.",
    link: "http://hedge-nest.vercel.app",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "TCA Astrid Bank",
    description:
      "A modern banking website featuring responsive layouts and clean UI.",
    link: "https://tca-astrid.vercel.app",
    tech: ["React", "Responsive"],
  },
  {
    title: "New Age Website Clone",
    description:
      "A responsive recreation of the New Age website.",
    link: "https://new-age-website-clone.vercel.app",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Groceria",
    description:
      "A grocery shopping web application with a responsive interface.",
    link: "#",
    tech: ["React", "API"],
  },
  {
    title: "Instagram Clone",
    description:
      "A frontend recreation of Instagram.",
    link: "#",
    tech: ["React"],
  },
  {
    title: "Asana Clone",
    description:
      "A task management interface inspired by Asana.",
    link: "#",
    tech: ["React"],
  },
  {
    title: "Paystack Clone",
    description:
      "A responsive clone of the Paystack landing page.",
    link: "#",
    tech: ["HTML", "CSS"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-icon">
              <FaLaptopCode />
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo →
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;