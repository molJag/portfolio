import mockData from "../../mocks/home.json";
import './Home.css';

function Home() {
  return (
    <section className='home-section'>
        <div className='main-title-home'>
          <h2>
            Hello, I am <br />
            <span> Johnny</span>
          </h2>
          <h3>{mockData.role}</h3>
        </div>
    </section>
  );
}

export default Home;