import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/4786.jpg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Pranav Contruction</strong>
                  </h1>
                  <h2 className="my-2">
                    We are the Team Of Talented Developers
                  </h2>
                  <div className="mt-2">
                    <NavLink
                      to={props.visit}
                      className="btn-get-started btn btn-outline-primary"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 pt-5 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="img"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
