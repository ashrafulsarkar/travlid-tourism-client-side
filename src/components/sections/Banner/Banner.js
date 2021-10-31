import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import cheImg from '../../../images/slider/check_out.jpg';

const Banner = ({pageName}) => {
    return (
        <div className="slider-area">
            <div className="slider-part" style={{background: `linear-gradient(rgba(0, 0, 0, 0.2) , rgba(0, 0, 0, 0.2)), url(${cheImg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;