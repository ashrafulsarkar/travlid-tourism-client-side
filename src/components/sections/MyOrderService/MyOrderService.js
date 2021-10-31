import React from 'react';
import './MyOrderService.css';

const MyOrderService = (props) => {
    const {image, title, price, _id, status} = props.myService;
    const updateMyService = props.updateMyService;

    const handerDelete = async id =>{
        if (window.confirm("Are you sure you want to delete it?")) {
            await fetch(`https://frightening-corpse-85903.herokuapp.com/order/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    updateMyService(id);
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
                    <p className="price">Price: ${price}</p>
                    <p>Status: {status}</p>
                    <div>
                        <button onClick={()=>handerDelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderService;