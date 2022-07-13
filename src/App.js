import React, { Component, useState } from 'react';

import './App.css';
import Card from './Card'
import DrawButton from './DrawButton';
//import profiles from './profiles';
import aidar from "./media/aidar.png";
import kairosh from "./media/kairosh.png";
import maksat from "./media/maksat.png";
import jarasar from "./media/jarasar.png";
import dalida from "./media/dalida.png";
import baurzhan from "./media/baurzhan.png";
import yerlan from "./media/yerlan.png";
import aidyn from "./media/aidyn.png";
import Form from 'react-bootstrap/Form';



//console.log(profiles);

function App()  {

  const list = [
    {
        id: "1",
        name: "Dalida",
        image: dalida,
        hint: "bossin"
    },
    {
        id: "2",
        name: "Aidar",
        image: aidar,
        hint: "red hat"
    },
    {
        id: "3",
        name: "Kairosh",
        image: kairosh,
        hint: "worldwide crush"
    },
    {
        id: "4",
        name: "Baurzhan",
        image: baurzhan,
        hint: "tuner"
    },
    {
      id: "5",
      name: "Maksat",
      image: maksat,
      hint: "instacut"
    },
    {
      id: "6",
      name: "Jarasar",
      image: jarasar,
      hint: "babyface hacker"
    },
    {
      id: "7",
      name: "Yerlan",
      image: yerlan,
      hint: "dude from kyzylorda"
    },
    {
      id: "8",
      name: "Aidyn",
      image: aidyn,
      hint: "doooha"
    },

]

const options  = list.map((item) => item.name) 

const getRandomCard = () => {
  let card = cards[Math.floor(Math.random() * cards.length)];
  return card;
}

  const [cards, setCards] = useState(list);
  const [current, setCurrent] = useState( getRandomCard());
  const [selected, setSelected] = useState(-1);
  const [message, setMessage] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value)
    console.log("val:", e.target.value)
  } 

  const updateCard = () => {
    setCurrent(getRandomCard())
  }

  const checkAnswer = () => {
    if (selected === current.id){
      document.getElementById('root').style.backgroundColor = '#018001'
      setMessage("Correct!")

      setTimeout(() => {document.getElementById('root').style.backgroundColor = 'lightblue'}, 100)
      
    }
    else {
        setMessage("Wrong!")
    }
  }

    return (
      <div className='App'>
      <h1>Media.io guesser</h1>
        <div className='card-row'> 
          <Card image={current.image}
                name={current.name}
                id={current.id} 
                hint={current.hint} 
          />

        </div>

        <div className='button-row'>
          <Form.Select className = " col" id = "dropdown-basic" aria-label="Default select example"
            onChange={handleSelect}>
            <option>Open this select menu</option>
            {options.map((option, id) =>
              <option value = {id+1}>{option}</option>
            )}
          </Form.Select>

          <div className='' style={{marginTop: "10px",display: "grid", gridTemplateColumns: "80% 30%"}}>
          <button className = "check col" onClick={checkAnswer} >Check</button>
          <h1 className = "col-6" style={{position:'relative', marginLeft: "50%"}}>{message}</h1>
          </div>
          <DrawButton className=" col" drawCard={updateCard} />
          
        </div>
      </div>
    );
}

export default App;