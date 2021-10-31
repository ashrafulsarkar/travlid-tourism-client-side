import React from 'react';
import useAuth from '../../../hooks/useAuth';
import DashboardSidebar from '../../sections/DashboardSidebar/DashboardSidebar';
import './MyAccount.css';

const MyAccount = () => {
    const {user} = useAuth();
    return (
        <div className="my-account-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <DashboardSidebar></DashboardSidebar>
                    </div>
                    <div className="col-lg-8">
                        <div>
                            <h2>Dashboard</h2>
                        </div>
                        <div className="user-details">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" value={user.displayName} readOnly/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" value={user.email} readOnly/>
                            </div>
                            <div>
                                <label htmlFor="photoURL">Photo URL</label>
                                <input type="text" id="photoURL" value={user.photoURL} readOnly/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;