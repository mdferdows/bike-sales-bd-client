
import React, { useState } from 'react';

import MyOrders from './MyOrders';
import Pay from './Pay';
import UserReview from './UserReview';

const User = () => {
    const [active, setActive] = useState('My Orders')

    return (
        <div className="row user">
            <div className="d-flex flex-column flex-shrink-0 bg-light vh-700 col-md-1 col-3 pt-5 ps-2 mx-auto">
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    <li className="nav-link active py-3 border-bottom nav-item" onClick={() => setActive('My Orders')}> <i className="fas fa-cart-plus"></i> <small>My Orders</small></li>


                    <li className="nav-link  py-3 border-bottom nav-item" onClick={() => setActive('UserReview')}> <i className="fa fa-home"></i> <small>Review</small></li>
            


                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('Pay')}><i className="fab fa-cc-amazon-pay"></i> <small>Pay</small> </li>

                </ul>
            </div>
            <div className="col-md-11 col-9" >
                {
                    (active === 'My Orders' && <MyOrders></MyOrders>) ||
                    (active === 'UserReview' && <UserReview></UserReview>) ||
                    (active === 'Pay' && <Pay></Pay>)
                }
            </div>
        </div>
    );
};

export default User;