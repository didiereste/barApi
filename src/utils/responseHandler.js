
const sendSuccess = (res, data = {}, message = 'Operación exitosa') => {
    res.status(200).json({
        status: 'success',
        message,
        data,
    });
};

const sendError = (res, statusCode = 500, message = 'Error interno del servidor') => {
    res.status(statusCode).json({
        status: 'error',
        message,
    });
};

module.exports={
    sendSuccess,sendError
}