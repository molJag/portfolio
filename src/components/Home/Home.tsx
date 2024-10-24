import mockData from "../../mocks/home.json";
import './Home.css';

function Home() {
  return (
    <section className='home-section'>
        <div className='main-title-home'>
          <h2>Johnny</h2>
          <h3>{mockData.role}</h3>
        </div>
    </section>
  );
}

export default Home;