import React, { Component } from "react";
import PropTypes from "prop-types";
import BackButton from "../../components/backButton";

import "./style.css";
class Projects extends Component {
  static propTypes = {
    prop: PropTypes
  };
  componentDidMount() {}
  render() {
    return (
      <div className="project-page">
        <div className="section-1 h-screen w-2/5 bg-indigo">
          <div className="title underline text-5xl text-white">Projects</div>
          <BackButton />
        </div>
        <div className="section-2" />
      </div>
    );
  }
}
export default Projects;
