import React from 'react';

const AllOrderData = (props) => {
    const {_id, name, email, status, address} = props.order;
    const updateData = props.updateData;

    const handerAproved = async id =>{
        if (window.confirm("Are you sure you want to Update it?")) {
            await fetch(`https://frightening-corpse-85903.herokuapp.com/order/${id}`,{
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({'status':'Approved'})
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    updateData(true);
                }
            })
        }
    }

    let i = 1;
    return (
        <tr>
            <td>{i++}</td>
            <td>{_id}</td>
            <td>
                <h5>{name}</h5>
                <p>{email}</p>
                <p>{address}</p>
            </td>
            <td>{status}</td>
            <td>{
                (status === 'Pending') ? <button  onClick={()=>handerAproved(_id)} >approve</button>:'Approved'
                }</td>
        </tr>
    );
};

export default AllOrderData;