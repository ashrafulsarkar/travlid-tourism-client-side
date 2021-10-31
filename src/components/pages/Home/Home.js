import React from 'react';
import ClientsSay from '../../sections/ClientsSay/ClientsSay';
import Destination from '../../sections/Destination/Destination';
import Slider from '../../sections/Slider/Slider';
import TravelBlog from '../../sections/TravelBlog/TravelBlog';

const Home = () => {
    return (
        <main>
            <Slider></Slider>
            <Destination></Destination>
            <ClientsSay></ClientsSay>
            <TravelBlog></TravelBlog>
        </main>
    );
};

export default Home;