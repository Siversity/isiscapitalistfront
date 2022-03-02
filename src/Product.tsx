/*** ----- PRODUITS ----- ***/
import { Services } from './Services';
import { World, Product, Pallier } from './world';


// Type ProductProps
type ProductProps = {
    prod: Product
    services: Services
}


// Affichage design d'un produit
export default function ProductComponent({ prod, services }: ProductProps) {
    let html = (
        <div className='col justify-content-start rounded productsColumns'>
            <div className='row justify-content-center'>{prod.name}</div>
            <div className='row'><img src={services.server + prod.logo} className='productsIcons' /></div>
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
            <ProductComponent prod={world.products.product[i]} services={services} />
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
