import React from 'react';
import Service1 from '../../../images/Service1.jpg';
import Service2 from '../../../images/Service2.jpg';
import Service3 from '../../../images/Service3.jpg';
import Service4 from '../../../images/Service4.jpg';
import Service5 from '../../../images/Service5.jpg';

const Decoration = () => {
    return (
        <div className="container my-5">
            <h2 className="  AddServiceHeader p-3  mx-auto mt-1 mb-3">

                Our Best Service       </h2>


            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <img width="100%" src={Service1} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img width="100%" src={Service2} alt="" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-6 col-md-6 col-12">
                    <p className='text-justify'>
                        We’re friendly, bike-loving expert bike mechanics, eager to get the people of Crouch End, Muswell Hill, Hornsey, Haringey and all around North London out cycling as quickly, safely and enjoyably as possible from our central Crouch End bike shop, Butternut Bikes.

                        Whether you’re looking to service and revive an old bike, assemble or check a new bike, mend brakes, gears or punctures or are in need of tips to become a more confident cyclist – we are here .</p>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="col-lg-6 col-md-6 col-12">
                                <img className="" width="100%" src={Service3} alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt-3">
                                <img width="100%" src={Service4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6">
                            <img width="100%" src={Service5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Decoration;