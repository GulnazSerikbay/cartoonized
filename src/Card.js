import React from 'react';
import './Card.css';

//this is a functional and presentational component
const Card = (props) => (
  <div className='card-container'>
    <div className='card'>
      <div className='front' style={{backgroundImage: `url(${props.image})`}}>
        <div className='question' ><img src={props.image} alt={props.name}></img>{props.name}</div>
      </div>
      <div className='back'>
        <div className='answer'>{props.hint}</div>
        <div className='description'>{props.id}</div>
      </div>
    </div>
  </div>
);

export default Card;