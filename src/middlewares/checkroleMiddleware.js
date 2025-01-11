const {sendError} = require('../utils/responseHandler');

function checkRole(requiredRole) {
    return function (req, res, next) {
        const { role_id } = req.user;

        if (role_id !== requiredRole) {
            return sendError(res,403,'No tienes permisos suficientes para realizar esta accion');
        }

        next(); 
    };
}

module.exports = checkRole;