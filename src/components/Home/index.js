import Header from "../Header"; // Importing the Header component
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import "./index.css"; // Importing CSS file for styling

const Home = () => (
  <>
    <div className="home-container">
      {/* Render the Header component */}
      <Header />

      {/* Main Heading */}
      <h1 className="heading">
        Find The Job That <br />
        Fits Your Life
      </h1>

      {/* Description */}
      <p className="description">
        Millions of people searching for jobs, salary <br />
        information, company reviews. Find the job that fits your <br />
        abilities and potential.
      </p>

      {/* Link to navigate to Jobs page */}
      <Link to="/jobs" className="link">
        <button type="button" className="button">
          Find Jobs
        </button>
      </Link>
    </div>
  </>
);

export default Home;
