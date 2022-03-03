/*** ----- PRODUITS ----- ***/
import { Services } from '../Application/Services';
import { World, Product, Pallier } from '../Application/world';

import Box from '@mui/material/Box';
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
    // Initialisation barre de progression
    prod.progressbar = 0;
    const [progress, setProgress] = useState(prod.progressbar);


    // Initialisation boocle de calcul du score
    const savedCallback = useRef(calcScore())
    useEffect(() => savedCallback.current = calcScore())
    useEffect(() => {
        let timer = setInterval(() => savedCallback.current = calcScore(), 100)
        return function cleanup() {
            if (timer) clearInterval(timer)
        }
    }, [])


    // Fonction d'activation d'un produit
    function ActivateProduct() {
        // Nom produit
        console.log(prod.name);

        // Temps restant
        prod.timeleft = prod.vitesse

        // Last update
        prod.lastupdate = Date.now()

        // Progress bar
        let pourcentage: number = (prod.timeleft * 100) / prod.vitesse
        prod.progressbar = pourcentage
        setProgress(100)
    }


    // Fonction de calcul du score
    function calcScore() {
        // On vérifie que le produit est bien en cours de production
        if (prod.timeleft > 0) {

            // Calcul du temps restant
            let timeRemaining = Date.now() - prod.lastupdate

            // Actualisation du temps restant
            prod.timeleft = prod.timeleft - timeRemaining
            console.log('Il reste ' + prod.timeleft)

            // Calcul du pourcentage de temps passé
            let pourcentage = (prod.timeleft * 100) / prod.vitesse
            prod.progressbar = Math.round(pourcentage)
            // setProgress(prod.progressbar) // --> CRASH ???

            // On vérifie que le produit a bien fini sa production
            if (prod.timeleft <= 0) {
                console.log('Le produit : ' + prod.name + ' a rapporté ' + prod.revenu * prod.croissance)

                // On réinitialise la progression de la production
                prod.timeleft = 0
                setProgress(0)
            }
        }
    }


    // Affichage HTML
    let prop = { prod, onProductionDone, services }
    let html = (
        <div className='col'>
            <div className='row'>
                <div className='col justify-content-start doubleBorderProduct ' >
                    <div className='row justify-content-center bccFont nameProduct'>{prod.name}</div>
                    <div className='row'><img src={services.server + prod.logo} className='productsIcons' onClick={() => ActivateProduct()} /></div>
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
                                <div className='text-center' id={prod.id + 'bar'}>
                                    <Box sx={{ width: '100%' }}>
                                        <ProgressBar transitionDuration={"0.1s"} customLabel={" "} completed={progress} />
                                    </Box>
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
        </div >
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