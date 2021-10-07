import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [friend , SetFriends] =useState([])

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => SetFriends(data))
    },[])
    return (

<>
        <h1>Total Friend {Friend.length}</h1>
        <div className="friend">
           
            {
                friend.map( friend => <Friend
                key={friend.id}
                friend={friend}
                ></Friend> )
            }
        </div>
    
    </>
    );
};

export default Friends;