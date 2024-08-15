import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/about.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="contact Now"
      />
    </>
  );
};

export default About;
