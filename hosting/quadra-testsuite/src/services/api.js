// import Vue from 'vue';
import axios from 'axios'
var env = require('../environnements/env.json');

export default {
    // if there is a subdocument just put '-' between the documents name

    
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