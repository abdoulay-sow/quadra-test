
const admin = require('firebase-admin');



exports.returnThings = (collectionName, resultType, arg = null) => {
    let dbRef = admin.firestore().collection(collectionName)
    
    

    console.log("Db ref => ", dbRef)

    if (resultType === 'array') {
        console.log("arg => ", arg)
        if (arg !== null && arg !== undefined) {
            if (arg.id && arg.subColection) {
                dbRef = dbRef.doc(arg.id).collection(arg.subCollection)
            }

            if (arg.where !== null && arg.where !== undefined) {

                arg.where.forEach(value => {
                    console.log('Value => ', value)
                    dbRef = dbRef.where(value.column, value.operator, value.id)
                })
            }
            if (arg.orderBy !== null && arg.orderBy !== undefined) {
                arg.orderBy.forEach(value => {
                    dbRef = dbRef.orderBy(value.column, value.direction)
                })
            }
            if (arg.startAfter !== null && arg.startAfter !== undefined) {
                dbRef = dbRef.startAfter(arg.startAfter)
            }
            if (arg.limit !== null && arg.limit !== undefined) {
                dbRef = dbRef.limit(arg.limit)
            }



        }
        return dbRef.get().then(snap => {            
            let dataArr = []
            snap.forEach(doc => {
                if (!doc.exists) {
                    return
                }
                let bundle = {}
                bundle = doc.data()
                bundle.id = doc.id
                dataArr.push(bundle)
            })
            return dataArr
        }).catch(err => {
            console.log('Err => ', err)
            return []
        })
    } else if (resultType === 'object') {
        dbRef = dbRef.doc(arg.id)
        return dbRef.get().then(doc => {
            if (!doc.exists) {
                return undefined
            }

            let data = doc.data()
            data.id = doc.id

            return data
        }).catch(err => {
            console.log("Err => ", err)
            return undefined
        })
    } 

    
}

exports.addDocument = (collectionName, documentToAdd, arg) => {
    let dbRef = admin.firestore().collection(collectionName)

    if(arg !== null && arg !== undefined) 
    {
        dbRef = dbRef.doc(arg.id).collection(arg.subColection)
    }

    return dbRef.add(documentToAdd)
}

exports.deleteDocument = (collectionName, documentId, arg = null) => {
    let dbRef = admin.firestore().collection(collectionName).doc(documentId)

    if(arg !== null) {
        if(arg.id && arg.subColection) {
            dbRef = dbRef.collection(arg.subColection).doc(arg.id)
        }
    }
    return dbRef.delete()    
}