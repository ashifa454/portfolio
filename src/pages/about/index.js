import React, { Component } from "react";
import BackButton from "../../components/backButton";
import "./style.css";
class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="section-1 h-screen w-2/5 bg-indigo float-left">
          <div className="title text-5xl underline text-white text-center">About Me </div>
          <BackButton />
        </div>
        <div className="section-2 p-6 float-left">HERE IS A TEXT</div>
      </div>
    );
  }
}
export default About;
