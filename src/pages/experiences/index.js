import React, { Component } from "react";
import PropTypes from "prop-types";
import BackButton from "../../components/backButton";
import "./style.css";
class Experience extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="experiences-page">
        <div className="section-1 h-screen w-2/5 bg-indigo">
          <div className="title underline text-5xl text-white">HOME</div> <BackButton />
        </div>
        <div className="section-2" />
      </div>
    );
  }
}
export default Experience;
