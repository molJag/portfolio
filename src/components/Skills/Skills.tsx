import "./Skills.css";

import mockData from "../../mocks/skills.json";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">
        <span className="highlight">{mockData.subtitle} </span>
      </h2>

      <div className="skills__content">
        <div className="skills__content--cosmetic"></div>
        <div className="skills__content--text">
          <ul className="skills__content--text-list">
            {mockData.skills.map((skill: string[], index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;