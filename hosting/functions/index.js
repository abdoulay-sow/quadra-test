const functions = require('firebase-functions');
const express = require('express');
const admin = require("firebase-admin");
const serviceAccount = require('./quadra-testsuite.json');
const { uuid } = require('uuidv4');
let controllerservices = require('./services/controllerservices');
// const { default: a©quadra-testsuite/src/services/api');

const app = express();

let cors = {
    origin: ["http://localhost:5000", "http://localhost:8080"]
}






app.all('*', function (req, res, next) {
    let origin = req.headers.origin;
    console.log('Origin => ', origin)
    if (cors.origin.indexOf(origin) >= 0) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });




app.get('/timestamp', (req, res) => {
    res.send(`${Date.now()}`)
})

app.get('/api/categories', async (req, res) => {

    let data = await controllerservices.returnThings('categories', 'array')

    console.log('Categories => ', data)

    res.send(data)

})

app.get('/api/category/:id', async (req, res) => {

    let id = req.params.id

    let data = await controllerservices.returnThings('categories', 'object', {id})

    console.log('Category => ', data)

    res.send(data)

})

app.get('/api/article/:id', async (req, res) => {

    let id = req.params.id

    let data = await controllerservices.returnThings('articles', 'object', { id })

    console.log('Article => ', data)

    res.send(data)

})


app.get('/api/category-articles/:id', async (req, res) => {

    console.log(req.params.id)

    let idCategory = req.params.id

    let data = await controllerservices.returnThings('articles', 'array', 
    { where: [{column: 'category_id', operator:'==',id: idCategory}] })

    console.log('Categories => ', data)

    res.send(data)

})

app.get('/api/search/:slug', async (req, res) => {
    let query = req.params.slug

    let data = await controllerservices.returnThings('articles', 'array',
        { limit: 10, where: [{ column: 'nom', operator: '>=', id: query }] })

    console.log("Data => ", data)

    res.send(data)
})



app.get('/api/seed/:categorie_nbr/:article_nbr_for_each_category', async (req, res) => {

    let categorieNbr = Number.parseInt(req.params.categorie_nbr)

    // let articlesNbrForCategories = Number.parseInt(req.params.article_nbr_for_each_category)

    let firestore = admin.firestore()
    let timestamp = admin.firestore.Timestamp.now().toMillis()


    try {
        if (isNaN(categorieNbr)) {
            throw new Error("Les parametres doiventr des nombres")
        }

        if (categorieNbr > 10) {
            throw new Error("Le nombre de categorie est trop élevé")
        }

        // Math.floor(Math.random() * (max - min + 1)) + min
        
        // if (articlesNbrForCategories > 10) {
        //     throw "Le nombre d'articles par categories est trop élevé"
        // }

        for (let i = 0; i < categorieNbr; i++) {
            let articlesNbrForCategories = Math.floor(Math.random() * (10 - 1 + 1)) + 1
            let categorieToAdd = {                
                id: uuid(),
                nom: "Categorie " + (i + 1),
                article_nbr: articlesNbrForCategories,
                image: "https://firebasestorage.googleapis.com/v0/b/quadra-testsuite.appspot.com/o/category%2F%20%20OqCoB4G5bPHXgVMLDy3L%2Fphoto.jpg?alt=media&token=da0d00b5-a8f0-4362-88df-ebc2264a5f64",
                date: timestamp
            } 

            /* eslint-disable no-await-in-loop */
            let categorie = await controllerservices.addDocument('categories', categorieToAdd)
            /* eslint-enable no-await-in-loop */
            

            for(let j = 0; j < articlesNbrForCategories; j++) {
                let articleToAdd = {
                    id: uuid(),
                    nom: "Article "+ (j+1) + " de la Catégorie "+ (i + 1),
                    image: "https://firebasestorage.googleapis.com/v0/b/quadra-testsuite.appspot.com/o/category%2F%20%20OqCoB4G5bPHXgVMLDy3L%2Fphoto.jpg?alt=media&token=da0d00b5-a8f0-4362-88df-ebc2264a5f64",
                    contenu: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu turpis eu felis porttitor mattis. Proin sagittis tortor et faucibus placerat. In sodales dui nibh. Curabitur ac tortor ullamcorper, commodo turpis at, pharetra magna. Nulla feugiat fringilla massa, et cursus purus vehicula vitae. In varius in diam non ultricies. Nulla vitae risus mi. Mauris magna eros, lacinia eu nisl id, vehicula lobortis eros. Praesent accumsan tortor vel tristique varius. In hac habitasse platea dictumst. Aliquam erat volutpat. Suspendisse eu ante at quam molestie ornare ut scelerisque ipsum. Mauris hendrerit ex lorem, vitae tincidunt velit feugiat sed. Sed egestas vulputate felis ac tincidunt. Quisque dapibus nisi purus, in molestie quam vestibulum eu. Sed maximus ut turpis at elementum.`,
                    category_id: categorie.id,
                    date: timestamp                  
                }

                /* eslint-disable no-await-in-loop */
                await controllerservices.addDocument('articles', articleToAdd)
                /* eslint-enable no-await-in-loop */
            }
        }   


        res.send({ok: "ok"})

    } catch (err) {
        res.send({error: err})
    }



})


app.get('/api/delete_all', async (req, res) => {

    try{
        let articles = await controllerservices.returnThings('articles', 'array')
        let categories = await controllerservices.returnThings('categories', 'array')

        if (articles !== null && articles !== undefined) {
            if (Array.isArray(articles)) {
                for (let i = 0; i < articles.length; i++) {
                    /* eslint-disable no-await-in-loop */
                    await controllerservices.deleteDocument('articles', articles[i].id)
                        .catch(err => {
                            throw err
                        })
                    /* eslint-enable no-await-in-loop */
                }
            }
        }
        if (categories !== null && categories !== undefined) {
            if (Array.isArray(categories)) {
                for (let i = 0; i < categories.length; i++) {
                    /* eslint-disable no-await-in-loop */
                    await controllerservices.deleteDocument('categories', categories[i].id)
                        .catch(err => {
                            throw err
                        })
                    /* eslint-enable no-await-in-loop */
                }
            }
        }

        res.send({ok: "ok"})
    } catch(e) {
        console.log(e)

        res.send({error: "Erreur Suppression"})
    }
    

})
exports.app = functions.https.onRequest(app)
