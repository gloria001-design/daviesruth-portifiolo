const projects = [
  {
    title: "HedgeNest",
    description:
      "A collaborative real estate web application built during an intensive frontend development program.",
    link: "http://hedge-nest.vercel.app",
  },
  {
    title: "TCA Astrid Bank",
    description:
      "A modern banking website featuring responsive layouts and clean UI.",
    link: "https://tca-astrid.vercel.app",
  },
  {
    title: "New Age Website Clone",
    description:
      "A responsive recreation of the New Age website with modern frontend practices.",
    link: "https://new-age-website-clone.vercel.app",
  },
  {
    title: "Groceria",
    description:
      "A grocery shopping web application with a responsive interface.",
    link: "#",
  },
  {
    title: "Instagram Clone",
    description:
      "A frontend recreation of Instagram with reusable React components.",
    link: "#",
  },
  {
    title: "Asana Clone",
    description:
      "A task management interface inspired by Asana.",
    link: "#",
  },
  {
    title: "Paystack Landing Page Clone",
    description:
      "A responsive clone of the Paystack landing page.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;