import Header from "../Header";
import "./index.css";

const Home = () => (
  <>
    <div className="home-container">
      <Header />
      <h1 className="heading">
        Find The Job That <br />
        Fits Your Life
      </h1>
      <p className="description">
        Millions of people searching for jobs, salary <br />
        information, company reviews. Find the job that fits your <br />
        abilities and potential.
      </p>
      <button type="button" className="button">
        Find Jobs
      </button>
    </div>
  </>
);
export default Home;
