import nodeSvg from '../../assets/icons/node.svg';
import reactSvg from '../../assets/icons/vuejs.svg';
import angularSvg from '../../assets/icons/angular.svg';
import backendSvg from '../../assets/icons/backend.svg';

import "./Skills.css";

import mockData from "../../mocks/skills.json";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">
        <span className="highlight">{mockData.subtitle} </span>
      </h2>

      <div className="skills__content">
        <ul className="skills__content-list">
          <li className="skills__content-list-item">
            <header className='skills__content-header'>
              <div className="skills__content-header--logos">
                <img src={reactSvg} alt="react js" />
                <img src={angularSvg} alt="angular js" />
              </div>
              Backend development
            </header>
            <p>
              I have experience in backend development creating scalable solutions. Wheter you need API development, database design, I have experience in developing backend services using Nodejs, PHP etc.
            </p>
          </li>
          <li className="skills__content-list-item">
            <header className='skills__content-header'>
              <div className="skills__content-header--logos">
                <img src={nodeSvg} alt="node js" />
                <img src={backendSvg} alt="node js" /><br/>
              </div>
              Frontend Angular o React
            </header>
            <p>
              I specialize in front-end development for creating scalable and high performance web applications using Angular, React and others library.
            </p>
          </li>
          <li className="skills__content-list-item">
            <header className='skills__content-header'>
              <div className="skills__content-header--logos">
              </div>
              SEO / Google Analytics
            </header>
            <p>
              I optimize websites for performance and SEO, ensuring better search engine rankings and user experience.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
