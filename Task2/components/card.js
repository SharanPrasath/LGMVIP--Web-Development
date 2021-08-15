import React from 'react';
import './card.css';

const Card = props => {
    return (
        //props or properties is used to access the properties which was passed using the card component in cardinfo.js
        <div className='cards'>
        <div className="card">
            <img className="pro-pic" alt="" src={`https://reqres.in/img/faces/${props.id}-image.jpg`} />
            <div>
                <h2 className="name">{props.name}{props.lname}</h2>
                
                <h3 className='email'>{props.email}</h3>
                
                
            </div>
            
            
            
            
            
        </div>
        
        </div>
    )
}

export default Card;