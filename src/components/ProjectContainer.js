import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import Carousel from "./Carousel";
import data from "../data/data.json";

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     let left = require('../images/left-arrow.png'),
//     leftUrl = `url(${left}`
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: leftUrl, width:'44px', height:"76px"}}
//         onClick={onClick}
//       />
//     );
//   }

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     let right = require('../images/right-arrow.png'),
//         rightUrl = `url(${right}`

//     return (

//       <div
//         className={className}
//         style={{ ...style, display: "block", background: rightUrl, width:'44px', height:"76px"}}
//         onClick={onClick}
//       />
//     );
//   }
class ProjectContainer extends Component {
  state = {
    filter: "none",
    display: "hide",
    selectedFilter: ""
  };
  handleFilterChange = filter => {
    this.setState({
      filter,
      display: "hide",
      selectedFilter: ""
    });
  };
  handleDisplayChange = () => {
    this.setState({
      display: "show"
    });
  };
  handleSelectedFilterChange = selectedFilter => {
    this.setState({
      selectedFilter
    });
  };

  render() {
    let {} = this.props;
    let { filter, display, selectedFilter } = this.state;
    return (
      <section id="project">
        <div className="project-picture">
          <h1>PROJECTS</h1>
        </div>
        <div className="project-list">
          <div className="project-type-container">
            <button className="btn" onClick={() => this.handleDisplayChange()}>
              {filter == "none" ? "Select Project Type" : filter}
            </button>
            <div className={`dropdown-container ${display}`}>
              <div
                className="project-all-projects"
                onClick={() => this.handleFilterChange("all projects")}
              >
                All Projects
              </div>
              <div
                className="project-languages"
                onClick={() => this.handleFilterChange("languages")}
              >
                Languages
              </div>
              <div
                className="project-frameworks"
                onClick={() => this.handleFilterChange("frameworks/libraries")}
              >
                Frameworks/Libraries
              </div>
              <div
                className="project-deployments"
                onClick={() => this.handleFilterChange("deployment")}
              >
                Deployment
              </div>
            </div>
          </div>
          <Carousel
            settings={{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 3

              // responsive: [
              //     {
              //       breakpoint: 640,
              //       settings: {
              //         slidesToShow: 1,
              //       }
              //     }]
            }}
            languages={["ruby", "sql", "javascript", "html", "css"]}
            libraries={["rails", "react", "redux", "node-js"]}
            deployment={["aws", "heroku", "netlify"]}
            filter={filter}
            handleSelectedFilterChange={this.handleSelectedFilterChange}
          />

          {data.map((item, i) => {
            const {
              id,
              image,
              description,
              technologies_used,
              deployed_link,
              github_link
            } = item;
            var lowerTech = technologies_used.toLowerCase();
            console.log(lowerTech.indexOf(selectedFilter) > -1);
            return (
              lowerTech.indexOf(selectedFilter) > -1 && (
                <Project
                  key={`${i}yankees`}
                  id={id}
                  image={image}
                  description={description}
                  technologies_used={technologies_used}
                  deployed_link={deployed_link}
                  github_link={github_link}
                />
              )
            );
          })}
        </div>
      </section>
    );
  }
}

export default ProjectContainer;
