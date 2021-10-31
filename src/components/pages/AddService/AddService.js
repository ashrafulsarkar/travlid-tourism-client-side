import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardSidebar from '../../sections/DashboardSidebar/DashboardSidebar';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [massage, setMassage] = useState('');
    const onSubmit = async  data => {
        await fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setMassage('Data insert Successfully.');
            }else{
                setMassage('Data not inserted.');
            }
        })
        .finally(
            reset({ title: '', price: '', image: '' })
        );
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
                            <h2>Add Service</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <p>{massage}</p>
                            </div>
                            <div>
                                <label htmlFor="title">Title</label>
                                <input id="title" {...register("title", { required: true })} />
                                {errors.title && <span>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor="price">Service Price</label>
                                <input type="number" id="price" {...register("price", { required: true })} />
                                {errors.price && <span>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor="shortDis">Short Description</label>
                                <input type="text" id="shortDis" {...register("shortDis", { required: true })} />
                                {errors.price && <span>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor="image">Image URL</label>
                                <input type="url" id="image" {...register("image", { required: true })} />
                                {errors.image && <span>This field is required</span>}
                            </div>
                            <div>
                                <input type="submit" value="Add Service" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;