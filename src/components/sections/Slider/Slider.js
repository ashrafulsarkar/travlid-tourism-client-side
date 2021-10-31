import React from 'react';
import './Slider.css';
import slider from '../../../images/slider/slider1.jpg';

const Slider = () => {
    return (
        <div className="slider-area">
            <div className="slider-part" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.2) , rgba(0, 0, 0, 0.2)), url(${slider})`}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-title">
                                <h2>Discover Your Right Places With Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;