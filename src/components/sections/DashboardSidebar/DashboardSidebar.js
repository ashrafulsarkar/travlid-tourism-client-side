import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
    const {user, logOut} = useAuth();
    const userImage = user.photoURL;
    return (
        <div className="user-info">
            <img src={userImage} alt="" />
            <h4>{user.displayName}</h4>
            <ul>
                <li><Link to='/myaccount'>Dashboard</Link></li>
                <li><Link to='/myaccount/allservices'>All Services</Link></li>
                <li><Link to='/myaccount/addservice'>Add Service</Link></li>
                <li><Link to='/myaccount/allorder'>All Order</Link></li>
                <li><Link to='/myaccount/myorder'>My Order</Link></li>
                <li><Button onClick={logOut}>Logout</Button></li>
            </ul>
        </div>
    );
};

export default DashboardSidebar;