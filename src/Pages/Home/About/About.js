import React from "react";
import ABoutImg from "../../../images/About.jpg";
import AboutHeader from "../../../images/About-Header.png";
import "./About.css";
const About = () => {
  return (
    <div className="  About-Container " id="About">
      <div>
        <img
          src={AboutHeader}
          alt=""
          width="100%"
          height="300px"
          className="mb-3"
        />
      </div>
      <h2 className=" my-5 About-header p-3 m-3 mx-auto"> About Bike Sales BD</h2>
      <div className=" mb-4 ">
        <div className="row d-flex">
          <div className="col-md-6 ">
            <img src={ABoutImg} alt="" width="100%" />
          </div>
          <div className="col-md-6  p-5 my-auto mx-auto">
            <h1 className="text-danger mb-2">
              <b>Bike Sales BD</b>
            </h1>
            <h4 className="p-4 text-justify">

              We’re friendly, bike-loving expert bike mechanics, eager to get the people of Crouch End, Muswell Hill, Hornsey, Haringey and all around North London out cycling as quickly, safely and enjoyably as possible from our central Crouch End bike shop, Butternut Bikes.

              Whether you’re looking to service and revive an old bike, assemble or check a new bike, mend brakes, gears or punctures or are in need of tips to become a more confident cyclist – we are here .


            </h4>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;
