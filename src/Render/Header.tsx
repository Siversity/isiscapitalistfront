/*** ----- HEADER ----- ***/
import { Services } from '../Application/Services';
import { World, Product, Pallier } from '../Application/world';
import {transform} from "../utils";



// Création container du header
export function displayHeader(world: World, services: Services) {
    let html = (
    <div className='header'>
        <div className='nomJeu'>
            <img src={services.server + world.logo} className='worldIcon' />
            <a> {world.name}</a>
        </div>
        <div className='moneyTt'>
        <span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span>
        </div>
        <div className='idJoueur'>
            ID: 
        </div>
    </div>);
    return html
}