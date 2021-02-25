import {Request, Response} from 'express';
const {checkUser, registerUser} = require('../Models/userModel');
const checkToken = require('../util/checkToken');

export const login = async (req: Request, res: Response) => {
    const userProfile = req.body.data;
    const {Authorize} = req.body.headers;

    //Verifica si el token existe y la duracion del token
    const token = await checkToken(Authorize);

    //Si el token es valido y la cuenta es correcta lo busca en la base de datos, si no esta, lo registra
    if(token.sub === userProfile.googleId && token.isExpired === false){
        let userAcc = await checkUser(userProfile)
        if(userAcc===false){
            userAcc = await registerUser(userProfile);
            if(userAcc === null)
                res.status(200).json({
                    statusCode: 200,
                    msg: 'Usuario creado exitosamente | Logeado exitosamente',
                    status: 'ok'
                })
            else
                res.status(500).json({
                    statusCode: 500,
                    msg: `Error | ${userAcc}`,
                    status: 'error'
                })
        }
        else{
            res.status(200).json({
                statusCode: '200',
                msg: 'Usuario existente | Logeado exitosamente',
                status: 'ok'
            })
        }
    }else{
        res.status(401).json({
            statusCode: '401',
            msg: 'Token expirado | No se logro logear',
            status: 'Error'
        })
    }      

}
