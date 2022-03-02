/*** ----- HEADER ----- ***/
import { Services } from '../Application/Services';
import { World, Product, Pallier } from '../Application/world';


// Création container du header
export function displayHeader(world: World, services: Services) {
    let html = (
/*
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <img src={services.server + world.logo} className='WorldIcon' />
                <a className="navbar-brand" href="#">{world.name}</a>
            </div>
        </nav>*/




    <div className='header'>
        <div className='nomJeu'>
            <img src={services.server + world.logo} className='worldIcon' />
            <a> {world.name}</a>
        </div>
        <div className='moneyTt'>
            {world.money} $
        </div>
        <div className='idJoueur'>
            ID: 
        </div>
    </div>);
    return html
}