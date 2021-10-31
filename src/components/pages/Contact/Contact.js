import React from 'react';
import Banner from '../../sections/Banner/Banner';
import ClientsSay from '../../sections/ClientsSay/ClientsSay';
import Contactfrom from '../../sections/Contactfrom/Contactfrom';
import TravelBlog from '../../sections/TravelBlog/TravelBlog';
import './Contact.css';

const Contact = () => {
    return (
        <main>
            <Banner pageName="Contact"></Banner>
            <Contactfrom></Contactfrom>
            <ClientsSay></ClientsSay>
            <TravelBlog></TravelBlog>
        </main>
    );
};

export default Contact;