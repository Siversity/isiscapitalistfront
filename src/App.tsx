import React, { useState, useEffect } from 'react';
import './App.css';

import { Services } from "./Services";
import { World, Product, Pallier } from './world';

console.log("Je démarre initial")


function App() {
  console.log("Je démarre")

  let world = GetData();



  return showHTML(world);
}

// Obtention données
function GetData() {
  const [services, setServices] = useState(new Services(""))
  const [world, setWorld] = useState(new World())
  const username = "TestWorld";

  useEffect(() => {
    let services = new Services(username)
    setServices(services)
    services.getWorld().then(response => {
      console.log("J'affiche les data")
      console.log(response.data)
      setWorld(response.data)
    }
    )
  }, [])

  return world;
}

function test(world : World) {
  return (<div>{world.lastupdate}</div>);
}

function showHTML(world : World) {
  // HTML array output
  let buffer = []

  // HTML test
  let testDisplay = test(world);
  let testDisplay2 = test(world);

  buffer.push(testDisplay);
  buffer.push(testDisplay2);

  let output = buffer;

  // Affichage client
  return (<div>{buffer}</div>);
}




export default App;

