import React, { Component } from "react";
import Name from "../../asset/name";
import Footer from "../../components/footer";
import SocialLinks from "../../components/social";
import { Link } from "react-router-dom";
import "./style.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { label: "About", link: "/about" },
        { label: "Education", link: "/education" },
        { label: "Projects", link: "/projects" },
        { label: "Expereinces", link: "/experiences" },
        { label: "Contact", link: "/contact" },
        { label: "Download Resume", link: "/download" }
      ]
    };
  }
  componentDidMount() {
    // anime({
    //   targets: this.nameRef,
    //   loop: true,
    //   direction: "alternate",
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: "easeInOutSine",
    //   duration: 700,
    //   delay: (el, i) => {
    //     return i * 500;
    //   }
    // });
  }
  render() {
    const { links } = this.state;
    return (
      <div className="page">
        <div className="section-1 h-screen">
          <SocialLinks />
          <div className="title text-5xl text-white">
            <Name />
          </div>
          <div className="actions">
            {links.map(item => {
              return (
                <Link
                  className="text-xl hover:border-grey text-grey-lightest btn mx-1"
                  to={item.link}
                >
                  <span className="px-8 py-2">{item.label}</span>
                </Link>
              );
            })}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Home;
