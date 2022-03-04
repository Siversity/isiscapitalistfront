/*** ----- RENDER REACT ----- ***/
import React, { useState, useEffect, useRef } from 'react';

import '../Style/Css/App.css';

import '../Style/Css/Header.css'
import '../Style/Css/Foot.css'
import '../Style/Css/Product.css'

import { displayHeader } from '../Render/Header';
import { displayFoot } from '../Render/Foot';
import { displayManager } from '../Render/Manager';
import ProductComponent, { displayTable } from '../Render/Product';

import { Services } from "../Application/Services";
import { World, Product, Pallier } from '../Application/world';

export default App;


// React render
function App() {
  // Hooks
  const [services, setServices] = useState(new Services(""))
  const [world, setWorld] = useState(new World())
  const username = "";

  useEffect(() => {
    let services = new Services(username)
    setServices(services)
    services.getWorld().then(response => {
      setWorld(response.data)
    }
    )
  }, [])
  console.log(world);

  // Affichage HTML
  return displayHTML(world, services);
}


// Affichage HTML final
/* Ordre d'affichage : Header / Produits / Foot */
function displayHTML(world: World, services: Services) {
  // HTML array output
  let output = []

  //HTML header
  let header = displayHeader(world, services)
  output.push(header)

  // HTML container produits
  let products = displayTable(world, services)
  output.push(products)

  let footer = displayFoot(world,services)
  output.push(footer)

  // Affichage client
  return (<div>{output}</div>);
}


// A implémenter <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export function onProductionDone(prod: Product): void {
  // calcul de la somme obtenue par la production du produit
  let gain : number = (prod.revenu * prod.croissance)
  // ajout de la somme à l’argent possédé
  console.log(gain)
  // addToScore(gain) // Où trouver money.world ??? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
}