import React, { Component, useState } from 'react';

import './App.css';
import Card from './Card'
import DrawButton from './DrawButton';
//import profiles from './profiles';



//console.log(profiles);

function App()  {

  const list = [
    {
        id: "1",
        name: "Dalida",
        image: "https://d3grfap2l5ikgv.cloudfront.net/5d6b99d329a6ab50ccbc0bf6/public/5ea743d19bf15e2d300cc224.jpg",
        hint: "bossin"
    },
    {
        id: "2",
        name: "Aidar",
        image: "https://d3grfap2l5ikgv.cloudfront.net/5d6b99d329a6ab50ccbc0bf6/public/5ea743d19bf15e2d300cc224.jpg",
        hint: "red hat"
    },
    {
        id: "3",
        name: "Kairosh",
        image: "https://d3grfap2l5ikgv.cloudfront.net/5d6b99d329a6ab50ccbc0bf6/public/5ea743d19bf15e2d300cc224.jpg",
        hint: "no heartbreak: translate"
    },
    {
        id: "4",
        name: "Bauka",
        image: "https://d3grfap2l5ikgv.cloudfront.net/5d6b99d329a6ab50ccbc0bf6/public/5ea743d19bf15e2d300cc224.jpg",
        hint: "tuner"
    }
]


const getRandomCard = () => {
  let card = cards[Math.floor(Math.random() * cards.length)];
  return card;
}

  const [cards, setCards] = useState(list);
  const [current, setCurrent] = useState(    {
    id: "1",
    name: "Dalida",
    image: "https://d3grfap2l5ikgv.cloudfront.net/5d6b99d329a6ab50ccbc0bf6/public/5ea743d19bf15e2d300cc224.jpg",
    hint: "bossin"
});

  /*useEffect(()=>{
    
  }*/


  const updateCard = () => {
    setCurrent(getRandomCard())
  }


    return (
      <div className='App'>
      <h1>Guess the person</h1>
        <div className='card-row'> 
          <Card image={current.image}
                name={current.name}
                id={current.id} 
                hint={current.hint} 
          />
        </div>
        <div className='button-row'>
          <DrawButton drawCard={updateCard} />
        </div>
      </div>
    );
}

export default App;