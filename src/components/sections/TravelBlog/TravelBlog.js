import React from 'react';
import './TravelBlog.css';
import travelBg from '../../../images/slider/slider2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const TravelBlog = () => {
    return (
    <section id="travel-blog" className="pt-85 pb-55">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="site-tile mb-100">
                        <h3>Travel Blog</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="blog-active blog-arrow top-arrow-some-screen">
                        <div className="blog-items">
                            <div className="blog-img" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.22) , rgba(0, 0, 0, 0.22)), url(${travelBg})` }}>
                                <div className="blog-play-btn">
                                    <div className="play-btn">
                                        <a className="blog-popup-video" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=b3B8NQCde4w">
                                            <FontAwesomeIcon icon={faPlay}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-text">
                                <h2>Travel Is Place Where mind Going Be Refresh</h2>
                                <p>You're constantly on the go, and your busy lifestyle is full of stressful situations. When you swap your everyday routine with leisure time, afternoon naps, and the freedom to make your own schedule, it releases the ‘happy hormone’ called serotonin that does a world of good to your mental health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default TravelBlog;