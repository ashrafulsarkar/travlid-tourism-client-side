import React, { useEffect, useState } from 'react';
import Banner from '../../sections/Banner/Banner';
import './Checkout.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import { useHistory, useParams } from 'react-router';


const Checkout = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useAuth();
    const history = useHistory();
    const peram = useParams();
    const serviceID = peram.id;

    const [service, setService] = useState('');
    

    useEffect(()=>{
        fetch(`https://frightening-corpse-85903.herokuapp.com/services/${serviceID}`)
        .then(res => res.json())
        .then(data => {
            setService(data);
        })
        .catch(error => {
            if (error) {
                history.push('/');
            }
        });
    },[]);

    /**
     * handel order
     * @param {*} data recive form data
     */
    const onSubmit = async data => {
        await fetch('https://frightening-corpse-85903.herokuapp.com/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.insertedId);
            if(data.insertedId){
                history.push('/thankyou');
            }
        });
    };
    
    return (
        <main>
            <Banner pageName="Check Out"></Banner>
            <section id="blog-post" className="pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 order-2 order-md-1">
                            <div className="check-out">
                                <div className="check-details">
                                    <div className="check-title mb-50">
                                        <h3>Your Details</h3>
                                    </div>
                                    <div className="check-form">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 mb-50">
                                                    <input type="text" {...register("name", { required: true })} value={user.displayName} readOnly/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mb-50">
                                                    <input type="text" {...register("email", { required: true })} value={user.email}/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mb-50">
                                                    <input type="text" {...register("address", { required: true })} placeholder="Address*"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mb-50">
                                                    <input type="text" {...register("city", { required: true })} placeholder="City*"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mb-50">
                                                    <input type="text" {...register("state", { required: true })} placeholder="State*"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mb-50">
                                                    <input type="text" {...register("postalCode", { required: true })} placeholder="Postal Code*"/>
                                                </div>
                                                <input type="hidden" {...register("serviceId", { required: true })} value={serviceID}/>
                                                <input type="hidden" {...register("status", { required: true })} value="Pending"/>
                                                <div className="col-lg-12 mb-50">
                                                    <div className="check-out-btn">
                                                        <input type="submit" className="btn" value="Book Now"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 order-1 order-md-2">
                            <div className="side-bar pb-50">
                                <div className="cart">
                                    <div className="cart-items">
                                        <div className="cart-img">
                                            <img src={service.image} alt=""/>
                                        </div>
                                        <div className="cart-details">
                                            <h4>{service.title}</h4>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="cart-items">
                                        <span>Travel Information</span>
                                    </div>
                                    <hr/>
                                    <div className="cart-items">
                                        <div className="cart-info">
                                            <ul>
                                                <li>Total Price : ${service.price}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Checkout;