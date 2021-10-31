import React, { useEffect, useState } from 'react';
import DashboardSidebar from '../../sections/DashboardSidebar/DashboardSidebar';
import DeshboardService from '../../sections/DeshboardService/DeshboardService';
import './AllServices.css';

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        });
    },[]);

    const updateServices = (id) =>{
        const remaining = services.filter(service => service._id !== id);
        setServices(remaining);
    }

    return (
        <div className="my-account-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <DashboardSidebar></DashboardSidebar>
                    </div>
                    <div className="col-lg-8">
                        <div>
                            <h2>All Service</h2>
                            <div className="row all-service">
                                {
                                    services.map(service => <DeshboardService key={service._id} service={service} updateServices={updateServices}></DeshboardService>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;