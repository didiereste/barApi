const AppDataSource = require('../config/connection');
const Jwt = require('../utils/jwt');
const { sendSuccess, sendError } = require('../utils/responseHandler');
const  bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const validator = require('validator');


const login = async (req, res) => {
    try{
        const {username, password} = req.body

        const userRepository= AppDataSource.getRepository(User);
        const userExists= await userRepository.findOne({where: { username:username }});
        
        if(!userExists){
            return sendError(res,404,'Usuario no existe');
        }

        if (!validator.isLength(password, { min: 8})) {
            return sendError(res, 400, 'La contraseña debe tener minimo 8 caracteres');
        }

        const isPasswordValid = await bcrypt.compare(password, userExists.password);
        
        if (!isPasswordValid) {
            return sendError(res, 401, 'Contraseña incorrecta');
        }

        const token = Jwt.createToken({ id: userExists.id, username: userExists.username, role_id: userExists.role_id});

        return sendSuccess(res,{ token },'Inicio de sension exitoso');

    }catch(error){
        console.log(error);
    };
}

module.exports = login;
