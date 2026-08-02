const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React",
  "Git",
  "GitHub",
  "Responsive Design",
  "Figma",
  "REST APIs",
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;