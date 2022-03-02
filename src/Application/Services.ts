/*** ----- CLASSE SERVICES ----- ***/
import axios, { AxiosError, AxiosPromise } from "axios";
import { World, Product, Pallier } from '../Application/world';

export { Services };


class Services {

    // Notre serveur = "http://localhost:8080/"
    server = "https://isiscapitalist.kk.kurasawa.fr/" // Serveur prof
    api = this.server + "adventureisis/generic";
    user = "";

    constructor(user: string) {
        this.user = user
    }

    private static handleError(error: AxiosError): AxiosPromise<any> {
        console.error('An error occurred', error.toJSON);
        return Promise.reject(error.message || error);
    }

    private static setHeaders(user: string) {
        return {
            "X-User": user
        }
    }

    // Obtention données du monde sur le serveur
    getWorld(): AxiosPromise<World> {
        console.log(this.api + '/world')
        return axios({
            method: 'get',
            url: this.api + '/world',
            headers: Services.setHeaders(this.user)
        }).catch(Services.handleError)
    }

}