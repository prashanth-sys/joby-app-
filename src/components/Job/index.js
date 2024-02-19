import { Component } from "react";
import Header from "../Header";
import "./index.css";
import { async } from "fast-glob";

class Job extends Component {
  componentDidMount() {
    this.getJobs();
  }

  getJobs = async () => {
    const url = "https://apis.ccbp.in/jobs";
    const option = {
      method: "GET",
    };
    const fetchData = await fetch(url, option);
    console.log(fetchData);
    const jobDetails = await fetchData.json();
    console.log(jobDetails);
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>Job</h1>
        </div>
      </div>
    );
  }
}
export default Job;
