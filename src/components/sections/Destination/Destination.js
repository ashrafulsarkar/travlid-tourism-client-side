import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Destination.css';

const Destination = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://frightening-corpse-85903.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data.slice(0, 6));
        });
    },[]);

    return (
    <section id="destination">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="site-tile">
                        <h3>Top Destination</h3>
                    </div>
                </div>
            </div>
            <div className="destination-filter">
                <div className="row">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    </section>
    );
};

export default Destination;