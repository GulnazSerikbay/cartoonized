import React from 'react';
import './Card.css';

//this is a functional and presentational component
const Card = (props) => (
  <div className='card-container'>
    <div className='card'>
      <div className='front' style={{backgroundImage: `url("${props.image}")`, backgroundPosition: 'center',
        backgroundSize: 'cover',}}>
        <div className='question' >{props.name}</div>
      </div>
      <div className='back'>
        <div className='answer'>HINT: {props.hint}</div>
        <div className='description'></div>
      </div>
    </div>
  </div>
);

export default Card;