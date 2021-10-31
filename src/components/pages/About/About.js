import React from 'react';
import './About.css';
import Banner from '../../sections/Banner/Banner';
import ClientsSay from '../../sections/ClientsSay/ClientsSay';
import TravelBlog from '../../sections/TravelBlog/TravelBlog';

const About = () => {
    return (
        <main>
            <Banner pageName="About"></Banner>
            <ClientsSay></ClientsSay>
            <TravelBlog></TravelBlog>
        </main>
    );
};

export default About;