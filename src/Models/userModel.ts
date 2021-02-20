const {db, insertRow, userTable} = require('../Models/db');
const {queries} = require('../util/queries');
const humps = require('humps');


const checkUser = (user: any) => {
        return db.one(queries.SELECT_USER(user.googleId))
        .then((r: any)=>{
            return r;
        })
        .catch((r: any)=>{
            return false;    
        });
}

const registerUser = (user: any) => {
    const query = insertRow(humps.decamelizeKeys(user), userTable);
    return db.none(query)
    .then((r:any)=>{
        console.log('Creado: ', r);
        return r;
    })
    .catch((r: any)=>{
        console.log('Error creando: ', r);
        return r;
    })
}



module.exports = {checkUser, registerUser}