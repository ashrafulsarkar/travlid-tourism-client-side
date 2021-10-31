import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import DashboardSidebar from '../../sections/DashboardSidebar/DashboardSidebar';

const UpdateService = () => {
    const history = useHistory();
    const peram = useParams();
    const serviceID = peram.id;
    
    const [massage, setMassage] = useState('');
    const [service, setService] = useState('');

    //update title
    const handelTitle = (e)=>{
        const titleUpdate = e.target.value; //event.target.value
        const updateTitle = {title: titleUpdate, price: service.price, image: service.image, shortDis: service.shortDis};
        setService(updateTitle);
    }
    //update title
    const handelPrice = (e)=>{
        const priceUpdate = e.target.value;
        const updatePrice = {title: service.title, price: priceUpdate, image: service.image, shortDis: service.shortDis};
        setService(updatePrice);
    }
    //update title
    const handelImage = (e)=>{
        const imageUpdate = e.target.value;
        const updateImage = {title: service.title, price: service.price, image: imageUpdate, shortDis: service.shortDis};
        setService(updateImage);
    }

    //update title
    const handelshortDis = (e)=>{
        const shortDisUpdate = e.target.value;
        const updateshortDis = {title: service.title, price: service.price, image: service.image, shortDis: shortDisUpdate};
        setService(updateshortDis);
    }

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




    const handleSubmit = async e => {
        e.preventDefault();

        await fetch(`https://frightening-corpse-85903.herokuapp.com/services/${serviceID}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setMassage('Data Update Successfully.');
            }else{
                setMassage('Data not Updated.');
            }
        });
        
    };
    return (
        <div className="my-account-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <DashboardSidebar></DashboardSidebar>
                    </div>
                    <div className="col-lg-8 add-service">
                        <div>
                            <h2>Update Service</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <p>{massage}</p>
                            </div>
                            <div>
                                <label htmlFor="title">Title</label>
                                <input id="title" onChange={handelTitle} required value={service?.title}/>
                            </div>
                            <div>
                                <label htmlFor="price">Service Price</label>
                                <input type="number" onChange={handelPrice} id="price" required value={service?.price}/>
                            </div>
                            <div>
                                <label htmlFor="shortDis">Service Price</label>
                                <input type="text" onChange={handelshortDis} id="shortDis" required value={service?.shortDis}/>
                            </div>
                            <div>
                                <label htmlFor="image">Image URL</label>
                                <input type="url" id="image" onChange={handelImage} required value={service?.image}/>
                            </div>
                            <div>
                                <input type="submit" value="Update Service" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateService;