import {Request, Response} from 'express';
const {getGatos} = require('../util/getGatos');
const {saveGato, gatosRandom, deleteGatos, mapResult} = require('../Models/gatoModel')

export const catPost = async (req: Request, res: Response) => {
    await deleteGatos();
    let gatos = await getGatos();
    let isGatoSaved = await saveGato(mapResult(gatos));
    if(isGatoSaved){
        let newGatos = await gatosRandom();
        res.status(200).json({
            statusCode: 200,
            msg: newGatos,
            status: 'ok'
        })
    }else
        res.status(500).json({
            statusCode: 500,
            msg: 'Hubo un error obteniendo la informacion',
            status: 'error'
        })
}
