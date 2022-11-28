import React from "react";
import contactImg from "../../images/Contact.jpg";
import faq from "../../images/FAQ.jpg";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-Section">
      <div>
        <img src={contactImg} alt="" className="img-fluid w-100" />
      </div>

      {/* Contact Information Start    */}

      <div className="row row-cols-1 row-cols-md-4  container mx-auto mb-5  mt-5 justify-content-center">
        <div className="card  h-60 shadow p-3  me-5  contact border border-light rounded">
          <h4>

            <i className="fas fa-envelope"></i>  Email Here <hr />
            ferdows22@gmail.com
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4>
            <i className="fas  fa-map-marker-alt"></i>  Location Here <hr />
            Airport , Dhaka-1229
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4><i className="fas fa-phone-alt"></i>
            Call Here <hr />
            +8801878037384
          </h4>
        </div>
      </div>

      {/* Contact Information End    */}


    </div>
  );
};

export default Contact;
