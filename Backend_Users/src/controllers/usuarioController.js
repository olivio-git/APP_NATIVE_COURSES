const { Usuario } = require('../db');
const { ClientError } = require('../utils/errors');
const response = require('../utils/response');

const registerUserController = async (req,res) => {
    const user = req.body;
    if(!user){
        throw new ClientError('Data null');
    }
    console.log(user)
    const result = await Usuario.create({
        imagen_url: "",
        nombre: user.nombre,
        apellidos: user.apellidos,
        descripcion_perfil: "",
        semestre: user.semestre,
        correo: user.email,
        contraseña: user.password,
        estad: true,
        telefono: user.telefono,
    })
    if(result){
        response(res,200,result)
    }
};
const loginUserController = async (req,res) => {
    const user = req.body;
    if(!user){
        throw new ClientError('Data null',401);
    } 
    const userResult = await Usuario.findOne({
        where:{
            correo: user.email
        }
    })
    if(!userResult){
        throw new ClientError('User not found',404);
    }
    if(!userResult){
        throw new ClientError('User password not found',404);
    }
    if(userResult.contraseña == user.password){
        console.log(userResult)
        response(res,200,"Login exitoso!")
    }
};
module.exports = {
    registerUserController,
    loginUserController
}