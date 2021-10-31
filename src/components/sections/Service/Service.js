import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {title, price, image, _id, shortDis} = props.service;
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="destination-items mb-30">
                <div className="destination-img pb-30">
                    <img src={image} alt=""/>
                </div>
                <div className="destination-text">
                    <h4>{title}</h4>
                    <p className="price">Start From: ${price}</p>
                    <p>{shortDis}</p>
                    <div className="destBtn">
                        <Link to={`/checkout/${_id}`} className="btn">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;