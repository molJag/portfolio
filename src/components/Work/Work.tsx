import "./Work.css";
import cosmeticStoneSvg from "../../assets/images/cosmetic-stone.svg";

import mockData from "../../mocks/work.json";
import { WorkType } from "./work.model";

function Work() {
  return (
    <section id="my-work" className="work">
      <h2 className="work__title">
        <span className="highlight">{mockData.title}</span>
      </h2>

      <div className="work__content">
        <ul className="work__content--text-list">
          {mockData.experiences.map((skill: WorkType, index: number) => {
            return (
              <li key={index}>
                <span className="work__content--text-description">
                  {`${skill.dates} / ${skill.role}`}
                </span>
                <span className="work__content--text-company">
                  {skill.companyName}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer-decoration"><img src={cosmeticStoneSvg} alt="decorative stone" /></div>
    </section>
  );
}

export default Work;
