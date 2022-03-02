/*** ----- RENDER REACT ----- ***/
import React, { useState, useEffect, useRef } from 'react';
import {calcScore} from '../Render/Product';

import '../Style/Css/App.css';

import '../Style/Css/Header.css'
import '../Style/Css/Product.css'

import { displayHeader } from '../Render/Header';
import { displayTable } from '../Render/Product';

import { Services } from "../Application/Services";
import { World, Product, Pallier } from '../Application/world';

export default App;


// React render
function App() {
  console.log("changement Leandre")

  // Obtention des données
  let {world, services} = GetData();

  const savedCallback = useRef(calcScore)
    useEffect(() => savedCallback.current = calcScore)
    useEffect(() => {
        let timer = setInterval(() => savedCallback.current(), 100)
        return function cleanup() {
            if (timer) clearInterval(timer)
        }
    }, [])

  // Affichage HTML
  return displayHTML(world, services);
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

  // Retour des données
  return {world, services};
}


// Fonction test
function test(world : World) {
  return (<div>{world.lastupdate}</div>);
}


// Affichage HTML final
/* Ordre d'affichage : Header / Produits / Foot */
function displayHTML(world : World, services : Services) {
  // HTML array output
  let output = []

  // HTML test
  /*let testDisplay = test(world);
  output.push(testDisplay);
  let testDisplay2 = test(world);
  output.push(testDisplay2);*/

  //HTML header
  let header = displayHeader(world, services)
  output.push(header)
  // HTML container produits
  let products = displayTable(world, services)
  output.push(products)

  // Affichage client
  return (<div>{output}</div>);
}


export function onProductionDone(p: Product): void {
  // calcul de la somme obtenue par la production du produit
  let gain = 3
  // ajout de la somme à l’argent possédé
    console.log(gain)
  }