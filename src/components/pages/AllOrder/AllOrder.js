import React, { useEffect, useState } from 'react';
import AllOrderData from '../../sections/AllOrderData/AllOrderData';
import DashboardSidebar from '../../sections/DashboardSidebar/DashboardSidebar';
import './AllOrder.css';

const AllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [data, setData] = useState(false);
    useEffect(()=>{
        fetch('https://frightening-corpse-85903.herokuapp.com/order')
        .then(res => res.json())
        .then(data => {
            setAllOrder(data);
        });
    },[data])

    const updateData = (id) =>{
        setData(id);
        setData(false);
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
                            <h2>All Order</h2>
                            <div className="row all-service">
                                <div className="col order-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>SL</th>
                                                <th>Order ID</th>
                                                <th>Order Details</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allOrder.map(order => <AllOrderData key={order._id} order={order} updateData={updateData}></AllOrderData>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrder;