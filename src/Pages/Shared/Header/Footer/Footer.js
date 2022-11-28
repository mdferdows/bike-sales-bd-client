import React from "react";
import "./Footer.css";
import Logo from "../../../../images/Logo.png";
import Payment from "../../../../images/Payment.png"
const Footer = () => {

  return (
    <div>
      <div className="footer-container ">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-center">
                <img src={Logo} alt="" width="250" height="100" />
                <h3>Bike_Sale_BD</h3>

                <p className="mt-4 ">

                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>For Contact</h3>



                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <h5><i className="fas fa-phone-alt"></i> +8801878037484</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p><i className="fas fa-map-marker-alt"></i> Airport,Dhaka-1229 Bangladesh.</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-3">
              <div className="left-container text-center mt-2 mx-auto">
                <h3>Pay With</h3>

                <img src={Payment} alt="" width="100%" height="150px" className="mx-auto" />

              </div>
            </div>
          </div>
          <p className="p-2">
            <small>
              Copyright &copy; 2022. All rights
              reserved by Md Ferdow Hasan and Bike_Sale_BD
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
