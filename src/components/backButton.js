import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdClear } from "react-icons/md";
const style = {
  borderRadius: "100px",
  transition: ".2s"
};
class BackButton extends Component {
  render() {
    return (
      <Link to="/">
        <MdClear
          style={style}
          className="bg-white text-4xl p-1 m-4 shadow hover:shadow-md text-grey-darker hover:text-grey-darkest"
        />
      </Link>
    );
  }
}
export default BackButton;
