/*** ----- PRODUITS ----- ***/
import { Services } from '../Application/Services';
import { World, Product, Pallier } from '../Application/world';

import { ProgressBar } from './ProgressBar';
import { onProductionDone } from '../Application/App';

import React, { useState, useEffect, useRef } from 'react';

// Type ProductProps
type ProductProps = {
    prod: Product
    onProductionDone: (product: Product) => void
    services: Services
}


// Affichage design d'un produit
export default function ProductComponent({ prod, onProductionDone, services }: ProductProps) {
    let html = (
        <div className='col'>
            <div className='row'>
                <div className='col justify-content-start doubleBorderProduct ' >
                    <div className='row justify-content-center bccFont nameProduct'>{prod.name}</div>
                    <div className='row'><img src={services.server + prod.logo} className='productsIcons' onClick={() => activateProduct(prod)} /></div>
                    <div className='row'>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col doubleBorderProduct ' >
                    <div className='row bccFont nameProduct'>
                        <div className='col text-center'>
                            {prod.quantite}
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <div className='text-center'>
                                    {prod.timeleft}
                                </div>
                            </div>
                            <div className='row '>
                                <div className='text-center'>
                                    {prod.cout}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Affichage HTML
    return html
}


// Création container des produits
export function displayTable(world: World, services: Services) {
    // Création du tableau regroupant les produits
    let columnsContainer = []
    for (var i = 0; i < world.products.product.length; i++) {
        let columnHTML = (
            <ProductComponent prod={world.products.product[i]} onProductionDone={onProductionDone} services={services} />
        );
        columnsContainer.push(columnHTML)
    };

    // Création du bloc des produits
    let productsContainer = (
        <div className='container' id='productsContainer'>
            <div className='row'>
                {columnsContainer}
            </div>
        </div>
    );

    // Affichage tableau avec un nombre de colonnes égal au nombre de produits
    return productsContainer
}


// Fonction d'activation d'un produit
function activateProduct(prod: Product) {
    console.log(prod.name);
}





export function calcScore() {

    console.log('test')



}