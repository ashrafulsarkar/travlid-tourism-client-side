import React from 'react';
import { Link } from 'react-router-dom';
import './DeshboardService.css';

const DeshboardService = (props) => {
    const {image, title, price, _id} = props.service;
    const updateServices = props.updateServices;

    const handerDelete = async id =>{
        if (window.confirm("Are you sure you want to delete it?")) {
            await fetch(`http://localhost:5000/services/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    updateServices(id);
                }
            })
        }
    }
    return (
        <div className="col-md-6">
            <div className="service mb-30">
                <div className="service-img">
                    <img src={image} alt="" />
                </div>
                <div className="service-details">
                    <h3>{title}</h3>
                    <p>Price: ${price}</p>
                    <div>
                        <button onClick={()=>handerDelete(_id)}>Delete</button>
                        <Link to={`/myaccount/update/${_id}`}>Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeshboardService;