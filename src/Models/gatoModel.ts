const {db, insertRow, postTable} = require('../Models/db');
import {queries} from '../util/queries';

const saveGato = (gatos: any) => {
    return db.none(insertRow(gatos, postTable))
    .then((r: any)=>{
        console.log('Datos guardados!');
        return true;
    })
    .catch((r: any)=>{
        console.log('Error guardando: ' + r);
        return false;
    })
}

const gatosRandom = async () => {
    return await db.many(queries.MANY_GATOS_RANDOM)
    .then((r: any)=>{
        return r
    })
    .catch((r: any)=>{
        return r
    })
}

const searchGato = async (filter: string, option: number) => {
    let query: string;
    if(option === 2) query = queries.SELECT_GATOS_BY_BREED(filter);
    else query = queries.SELECT_GATOS_BY_CATEGORY(filter);
    return await db.many(query)
        .then((r:any)=>{
            return r;
        })
        .catch((r: any)=>{
            return r;
        })
}

const deleteGatos = async () => {
    return await db.none(queries.DELETE_POST)
    .then((r: any)=>{
        return true;
    })
    .catch((r: any)=>{
        return false;
    })
}

//Crea un array con todos los datos necesarios para la db
const mapResult = (gatos: any) => {
    let newGatos:any = [];
    gatos.map((gato: any, index: any)=>{
        const {breeds = false, categories = false, id, url} = gato;
        let gatoObj : any = {post_id: id, post_url: url}
        if(breeds[0]){ gatoObj = {...gatoObj, post_breed: breeds[0].name, post_origin: breeds[0].origin, post_breed_id: breeds[0].id}}
        else{gatoObj = {...gatoObj, post_breed: null, post_origin: null, post_breed_id: null}}
        if(categories[0]){gatoObj = {...gatoObj, post_category: categories[0].name, post_category_id: categories[0].id}}
        else{gatoObj = {...gatoObj, post_category: null, post_category_id: null}}
        newGatos.push(gatoObj);
    })
    return newGatos;
}


module.exports = {saveGato, gatosRandom, deleteGatos, mapResult, searchGato}
