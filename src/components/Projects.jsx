import { FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    title: "HedgeNest",
    description:
      "A fintech web application developed in collaboration with a team of developers. HedgeNest delivers a secure and intuitive experience for saving, transferring, and managing funds using stablecoin-powered technology, with a strong focus on accessibility and modern financial innovation.",
    live: "http://hedge-nest.vercel.app",
    github: "#",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "TCA Astrid Bank",
    description:
      "A modern banking website featuring responsive layouts, reusable React components, and a clean user interface that delivers a seamless digital banking experience.",
    live: "https://tca-astrid.vercel.app",
    github: "https://github.com/daviesruth82/TCA_ASTRID",
    tech: ["React", "Responsive Design"],
  },
  {
    title: "New Age Website Clone",
    description:
      "A responsive recreation of the New Age website built with modern frontend development practices, emphasizing clean design and responsiveness.",
    live: "https://new-age-website-clone.vercel.app",
    github: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Groceria",
    description:
      "A responsive grocery shopping web application that provides users with an intuitive interface for browsing products and managing shopping experiences.",
    live: "#",
    github: "https://github.com/daviesruth82/groceria",
    tech: ["React", "API"],
  },
  {
    title: "Instagram Clone",
    description:
      "A frontend recreation of Instagram built with reusable React components and responsive layouts to replicate the core user interface.",
    live: "#",
    github: "https://github.com/daviesruth82/instagram",
    tech: ["React"],
  },
  {
    title: "Asana Clone",
    description:
      "A task management application inspired by Asana, featuring a clean dashboard interface and responsive layouts for organizing tasks.",
    live: "#",
    github: "https://github.com/daviesruth82/ASANA",
    tech: ["React"],
  },
  {
    title: "Paystack Landing Page Clone",
    description:
      "A responsive clone of the Paystack landing page built to strengthen frontend development skills and responsive web design techniques.",
    live: "#",
    github: "#",
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
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}

              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;