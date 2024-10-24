import "./Contribution.css";

import mockData from "../../mocks/contribution.json";

function Contribution() {
  return (
    <section id="my-contribution" className="contribution">
      <h2 className="contribution__title">{mockData.title}</h2>

      <div className="contribution-wrapper">
        <div className="contribution__content">
          <ul className="contribution__content-list">
            {mockData.clients.map((client: string[], index: number) => (
              <li key={index}>
                <img
                  key={index}
                  src={`./images/${client}.svg`}
                  alt="logo company"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contribution;
