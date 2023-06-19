import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading";
import "./AboutMe.css";

export default function AboutMe() {
  const SCREEN_CONSTSANT = {
    description:
      "Motivated and productive MERN developer with a strong passion for learning. Leveraging skills from an unrelated bachelor's degree, I am dedicated to acquiring hands-on experience and delivering high-quality results. Committed to continuous growth and contributing to innovative projects.",
    highlights: {
      bullets: [
        "Full Stack web and mobile developer",
        "MERN (MongoDB, Express.js, React, Node.js) stack",
        "Context API for State Management",
        "Proficient in building responsive and user-friendly web applications",
      ],
      heading: "Here are a Few Highlights",
    },
  };

  const aboutMeItems = () => {
    return SCREEN_CONSTSANT.highlights.bullets.map((item, index) => (
      <div className="highlight" key={index}>
        <div className="highlight-blob"></div>
        <span>{item}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container">
      <div className="about-me-parent">
        <ScreenHeading title="About Me" subHeading="Why choose Me?" />
        <div className="about-me-card">
          <div className="about-me-profile"/>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANT.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANT.highlights.heading}</span>
              </div>
              {aboutMeItems()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
