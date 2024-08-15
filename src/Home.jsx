import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/4786.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Get Your Dream Home with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
