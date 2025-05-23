import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin, image }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src={image} alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;


