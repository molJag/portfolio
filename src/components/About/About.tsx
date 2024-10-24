import mockData from "../../mocks/about.json";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="separator"></div>
      <h2 className="about__title">
        <span className="highlight">{mockData.about} </span>
        {mockData.title}
      </h2>

      <div className="about__content">
        <p>{mockData.description}</p>
        <p>{mockData.description2}</p>
        <button className="btn secondary">{mockData.cv}</button>
      </div>
    </section>
  );
}

export default About;
