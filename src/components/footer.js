import React, { Component } from "react";
const style = {
  fontFamily: "Bangers, cursive",
  letterSpacing: '2px',

};
class Footer extends Component {
  render() {
    return (
      <div className="text-white text-center pin-b absolute" style={style}>
        {`Sincerely Open Sourced`}
      </div>
    );
  }
}
export default Footer;
