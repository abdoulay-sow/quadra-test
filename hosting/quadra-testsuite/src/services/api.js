import axios from 'axios'
var env = require('../environnements/env.json');

export default {    

    /* 
    *
    *   L'url de l'api est fixé dans les fichiers env
    *   
    */
    
    /* 
    *   getData prend en Parametre le qui pointe sur le serveur
    *   Réécris l'url en ajoutant le chemein
    *   Enfin fait un Appel Rest qui recupere les données du Serveur
    * 
    *   @param {string}  Le chemin
    *   @return {Promise<any>}
    */
    getData(route) {
        let rewriteRoute = env.urlApi + '/' + route

        console.log("Route => ", route)
        
        return axios.get(rewriteRoute).then((data) => {
            
            return data.data
        }).catch(err => {
            console.log('Route Missed => ', rewriteRoute, ' err => ', err)
            return undefined
        })

        
    },

    /*
    *   posData prend en Parametre le qui pointe sur le serveur
    *   Réécris l'url en ajoutant le chemein
    *   Prend des éléments à uploader
    *   Enfin fait un Appel Rest qui Envoie les données au Serveur
    *
    *   @param {string}  Le chemin
    *   @param {object}  Les éléments
    *   @return {Promise<any>}
    */
    postData(route, elements) {
        let rewriteRoute = env.urlApi + '/' + route
        return axios.post(rewriteRoute, elements).then(data => {
            return data.data
        }).catch(err => {
            console.log("error => ", err)
            return undefined
        })
    }
}