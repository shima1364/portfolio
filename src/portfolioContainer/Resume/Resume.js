import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarousalOffSetStyle] = useState({});
  const ResumeHeading = (props) => (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {/* {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )} */}
        </div>  
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>
  );
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  const programmingSkillDetails = [
    { skill: "Java Script", ratingPercentage: 70 },
    { skill: "React Js", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "Express JS", ratingPercentage: 50 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "BootStrap", ratingPercentage: 80 },
    { skill: "css", ratingPercentage: 70 },
  ];

  const resumeDetails = [
    
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"University of Tehran, Tehran, Iran"}
          subHeading={"Bachelor in Applied Chemistry"}
        />
        <ResumeHeading
          heading={"WBS Coding School, Berlin, Germany"}
          subHeading={
            "Graduation Certificate for Full Stack web and App Development"
          }
        />
        <ResumeHeading
          heading={"Sematec IT professional training center, Tehran, Iran"}
          subHeading={"Graduation Certificate for Front End Web Development"}
        />
      </div>,
      <div className="resume-screen-container" key="work-experience">
        <ResumeHeading
          heading={"Novin Ebtekar Co., Tehran, Iran"}
          subHeading={"Marketing Specialist"}
        />
        <ResumeHeading
          heading={"Viromed lab, Tehran, Iran"}
          subHeading={"Laboratory Analyst"}
        />
        <ResumeHeading
          heading={"Hakim Chemical Process CO., Qazvin, Iran"}
          subHeading={"Quality Control Inspector"}
        />
      </div>,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills">
      
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"/>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              >
                
              </div>
            </div>
          </div>
        ))}
      </div>
  
  ];
  const handelCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handelCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
        />
      </div>
    ));
  };
  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-detailes-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container">
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"/>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-detailes">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
