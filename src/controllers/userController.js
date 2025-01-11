const AppDataSource = require('../config/connection');
const { sendSuccess, sendError } = require('../utils/responseHandler');
const  bcrypt = require('bcryptjs');
const validator = require('validator');
const User = require('../models/userModel');

const createUser= async(req,res) => {
    const requiredFields = ['name', 'email', 'password', 'username', 'role_id'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        return sendError(res, 400, `Faltan los siguientes campos: ${missingFields.join(', ')}`);
    }

    const { name, email, password, username, role_id } = req.body;

    if(!validator.isEmail(email)){
        return sendError(res,400,'El email debe de ser numerico');
    }

    if(!validator.isNumeric(role_id)){
        return sendError(res,400,'El rol debe de ser numerico');
    }

    if (!validator.isLength(password, { min: 8})) {
        return sendError(res, 400, 'La contraseña debe tener minimo 8 caracteres');
    }

    const userRepository= AppDataSource.getRepository(User);
    const userExists = await userRepository.findOne({  where: [
        { email: email },
        { username: username }
      ]})

    if (userExists) {
        if (userExists.email === email) {
          return sendError(res, 400, 'El email ya se encuentra en uso');
        }
        if (userExists.username === username) {
          return sendError(res, 400, 'El username ya se encuentra en uso, usar otro');
        }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
        name,
        email,
        password: hashedPassword,
        username,
        role_id
    });

    try{
        await userRepository.save(newUser);
        return sendSuccess(res,{newUser},'Usuario regristrado correctamente');
    }catch(error){
        return sendError(res,500,'Error al crear el usuario');
    }
}

module.exports= {
    createUser
}