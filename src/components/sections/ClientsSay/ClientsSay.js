import React from 'react';
import './ClientsSay.css';
import img1 from '../../../images/testimonial/testimonial2.jpg';
import img2 from '../../../images/testimonial/testimonial1.jpg';

const ClientsSay = () => {
    return (
        <section id="client-say" className="pt-80 pb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="site-tile mb-100">
                        <h3>Clients Say About Us</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-30">
                    <div className="testimonial-items">
                        <div className="testimonial-part">
                            <div className="user-info">
                                <div className="user-img">
                                    <img src={img1} alt=""/>
                                </div>
                                <div className="test-user-details">
                                    <h3>Fahmida Siddika</h3>
                                    <p>Tourist</p>
                                </div>
                                <div className="test-icon d-none d-sm-block">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                            <div className="user-says">
                                <p>You have a daily routine that involves working, taking care of your family, creating a savings plan for the future, and more that keeps you within your comfort zone. But sometimes, you need to look beyond. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="testimonial-items">
                        <div className="testimonial-part">
                            <div className="user-info">
                                <div className="user-img">
                                    <img src={img2} alt=""/>
                                </div>
                                <div className="test-user-details">
                                    <h3>Ashraful Sarkar</h3>
                                    <p>Tourist</p>
                                </div>
                                <div className="test-icon d-none d-sm-block">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                            <div className="user-says">
                                <p>Traveling gives you multiple opportunities to get active, and physical exercise has a direct link to mental wellbeing. To further enhance the effect of the outdoors, include natural settings in your itinerary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ClientsSay;