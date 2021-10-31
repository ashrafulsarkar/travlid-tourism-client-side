import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DashboardSidebar from '../../sections/DashboardSidebar/DashboardSidebar';
import MyOrderService from '../../sections/MyOrderService/MyOrderService';

const MyOrder = () => {
    const {user} = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [myService, setMyService] = useState([]);


    const serviceStatus = (data) =>{
        const mydata = myOrder.map(d => d.status);
        for (let index = 0; index < data.length; index++) {
            data[index]['status'] = mydata[index];
        }
        setMyService(data);
    }

    useEffect(()=>{
        fetch(`https://frightening-corpse-85903.herokuapp.com/order/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyOrder(data);
            
            
        })
        .catch(e => {
            console.log(e);
        })
    },[]);


    useEffect(()=>{
        const serviceID = JSON.stringify(myOrder.map(order => order.serviceId));
        fetch(`https://frightening-corpse-85903.herokuapp.com/services/myorder/${serviceID}`)
        .then(res => res.json())
        .then(data => {
            // setMyService(data);
            serviceStatus(data);
        });
    },[myOrder]);

    const updateMyService = (id) =>{
        const remaining = myService.filter(service => service._id !== id);
        setMyOrder(remaining);
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
                            <h2>My Order</h2>
                        </div>
                        <div className="row all-service">
                            {
                                myService.map(myService => <MyOrderService key={myService._id} myService={myService} myOrder={myOrder}  updateMyService={updateMyService}></MyOrderService>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;