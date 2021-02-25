import {Request, Response} from 'express';
const {saveGato, searchGato, mapResult, deleteGatos} = require('../Models/gatoModel')
const {getGatos, searchGatosByBreed, searchGatosByCategory} = require('../util/getGatos');


export const refillGato = async (req: Request, res: Response) => {
    const {opt, filter} = req.body.data;
    switch(opt){
        case 0 :
            let newGatos = await getGatos();
            if(newGatos)
                res.status(200).json({
                    statusCode: 200,
                    msg: newGatos,
                    status: 'ok'
                })
            else
                res.status(500).json({
                    statusCode: 500,
                    msg: 'Error | No se obtuvieron nuevos gatos',
                    status: 'error'
                })
            break;
        case 2 :
            let gatosBreed = await searchGatosByBreed(filter);
                if(gatosBreed){
                    let isBreedSaved = await saveGato(mapResult(gatosBreed));
                    if(isBreedSaved){
                        let breedSearch = await searchGato(filter, opt)
                        if(breedSearch){
                            res.status(200).json({
                                statusCode: 200,
                                msg: breedSearch,
                                status: 'ok'
                            })
                        }else
                        res.status(500).json({
                            statusCode: 500,
                            msg: 'No se guardaron los datos',
                            status: 'Error'
                        })
                    }else 
                        res.status(500).json({
                            statusCode: 500,
                            msg: 'No se guardaron los datos',
                            status: 'Error'
                        })
                }else res.status(500).json({
                    statusCode: 500,
                    msg: 'No se obtuvieron datos de la api',
                    status: 'Error'
                })
            break;
        case 3 :
            let gatosCategory = await searchGatosByCategory(filter);
            if(gatosCategory){
                let isCategorySaved = await saveGato(mapResult(gatosCategory));
                if(isCategorySaved){
                    let categorySearch = await searchGato(filter, opt)
                    if(categorySearch){
                        res.status(200).json({
                            statusCode: 200,
                            msg: categorySearch,
                            status: 'ok'
                        })
                    }else
                    res.status(500).json({
                        statusCode: 500,
                        msg: 'No se guardaron los datos',
                        status: 'Error'
                    })
                }else 
                    res.status(500).json({
                        statusCode: 500,
                        msg: 'No se guardaron los datos',
                        status: 'Error'
                    })
            }else res.status(500).json({
                statusCode: 500,
                msg: 'No se obtuvieron datos de la api',
                status: 'Error'
            })

            break;
        default :
        res.status(400).json({
            statusCode: 400,
            msg: 'Error | Peticion erronea',
            status: 'Error'
        })
            break;
    }
}