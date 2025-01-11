const AppDataSource = require('../config/connection');
const jwt= require('../utils/jwt');
const { sendSuccess, sendError } = require('../utils/responseHandler')
const User = require('../models/userModel');



const login = async (req, res) => {
    try{
        const {username, password} = req.body

        const userRepository= AppDataSource.getRepository(User);
        const userExists= await userRepository.findOne({where: { username:username }});
        
        if(!userExists){
            return sendError(res,404,'Usuario no existe');
        }

        if(password != userExists.password){
            return sendError(res,401,'Contraseña incorrecta');
        }

        const token = jwt.createToken({ id: userExists.id, username: userExists.username, role_id: userExists.role_id});

        return sendSuccess(res,{ token },'Inicio de sension exitoso');

    }catch(error){
        console.log(error);
    };
}

module.exports = login;
