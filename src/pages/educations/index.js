import React, { Component } from "react";
import PropTypes from "prop-types";
import BackButton from "../../components/backButton";
import "./style.css";
class Educations extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          title: "Bachelor of Technology",
          stream: "Computer Science and Engineering",
          university: {
            label: "Guru Gobind Singh Indraprastha University",
            link: "http://www.ipu.ac.in/"
          },
          location: {
            label: "New Delhi 110064",
            link: "https://goo.gl/maps/t4kj9Q8qyHE2"
          },
          duration: "Graduated 2018",
          courseDescription: "B. Tech is a 4 years Technical Course"
        },
        {
          title: "Diploma",
          location: {
            label: "New Delhi 110064",
            link: "https://goo.gl/maps/XShiHtxzyvH2"
          },
          stream: "Computer Science and Engineering",
          university: {
            label: "Jamia Millia Islamia University",
            link: "https://www.jmi.ac.in/"
          },
          duration: "Graduation 2015",
          courseDescription: ""
        },
        {
          title: "BDSVM Noida",
          stream: "Higher Secondary",
          location: {
            label: "Noida 201301",
            link: "https://goo.gl/maps/MzdLMtXhD612"
          },
          university: {
            label: "Central Board of Secondary Education",
            link:"http://bdsvidyamandirnoida.in/"
          },
          duration: "Graduated 2010",
          courseDescription: ""
        }
      ]
    };
  }
  render() {
    const { educations } = this.state;
    return (
      <div className="education-page">
        <div className="section-1 float-left h-screen w-2/5 bg-indigo">
          <div className="title text-5xl underline text-white">Educations</div>{" "}
          <BackButton />
        </div>
        <div className="section-2 w-3/5 float-left">
          {educations.map(item => {
            return (
              <div className="ed-tile ml-8 my-4 p-4 rounded shadow bg-grey-lightest">
                <h3>{item.title}</h3>
                <p className="stream text-grey-darkest pt-0 px-0 text-sm">
                  {item.stream}
                </p>
                <p className="text-grey-darkest pt-0 px-0 text-sm">
                  {item.duration}
                </p>
                <span className="text-sm text-grey-darkest pt-2 pb-0 px-0">
                  <a target="_blank" href={item.university.link}>
                    {item.university.label}
                  </a>
                </span>
                <span className="duration text-sm text-grey-darkest py-0 px-0">
                  <a
                    href={item.location.link}
                    target="_blank"
                    className="no-underline text-grey-darkest hover:underline"
                  >
                    {item.location.label}
                  </a>
                </span>
                <div className="discription my-4">{item.courseDescription}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Educations;
