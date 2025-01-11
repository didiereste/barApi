const { verifyToken }=require('../utils/jwt.js');
const { sendError }=require('../utils/responseHandler.js');

 function authTokenJWT(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return sendError(res, 401,'Acceso denegado, token invalido');
    }

    try {
        const payload = verifyToken(token);
        req.user = payload;
        next();
    } catch (err) {
        return sendError(res, 403,'Token expirado o invalido');
    }
}
module.exports = { authTokenJWT }