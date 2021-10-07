import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {

    const styleFriend ={
        border: '3px solid red',
        padding : '10px',
        margin :'10px',
        borderRadius:'25px',
        backgroundColor:"skyblue"
    }

    const {name,id , phone , website , address} = props.friend;
    return (
        <div style={styleFriend}>
           
            <h2>Name : {name}</h2>
            <h5>Call Number : {phone}</h5>
            <p>Visite : {website}</p>
            <p> <small>Address : {address.city}</small> </p>
           <Link to={`/friends/ ${id}`}>Visite Me</Link>
        
        </div>
    );
};

export default Friend;