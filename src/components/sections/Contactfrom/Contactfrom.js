import React from 'react';

const Contactfrom = () => {
    return (
        <section id="travel_agency" className="pt-135 pb-55">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact-title mb-65">
                        <h3>Get In Touch</h3>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 order-2 order-md-1 d-flex align-items-center">
                    <div className="contact-info mt-50">
                        <ul>
                            <li><i className="fas fa-phone-alt"></i> +98347238545743</li>
                            <li><i className="fas fa-envelope"></i> amrmonbalanay@gmail.com</li>
                            <li><i className="fas fa-map-marker-alt"></i> Dhaka,gulsan 23,Bangladesh</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 order-1 order-md-2">
                    <form action="#">
                        <div className="contact-form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-15">
                                    <input type="text" placeholder="Your Name"/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-15">
                                    <input type="email" placeholder="Email Address"/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-15">
                                    <input type="text" placeholder="Type Of Work"/>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-15">
                                    <input type="text" placeholder="Your Budget"/>
                                </div>
                                <div className="col-lg-12 mb-15">
                                    <textarea name="text" id="text" cols="30" rows="10" placeholder="Enter Message"></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <div className="contact-btn">
                                        <a href="/" className="btn">SEND NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Contactfrom;