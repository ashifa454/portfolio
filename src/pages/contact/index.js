import React, { Component } from "react";
import PropTypes from "prop-types";
import BackButton from "../../components/backButton";
import "./style.css";
class Contact extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="contact-page">
        <div className="section-1 h-screen w-2/5 bg-indigo">
          <div className="title underline text-5xl text-white">Contact Me</div>{" "}
          <BackButton />
        </div>
        <div className="section-2" />
      </div>
    );
  }
}
export default Contact;
