const { sendSuccess } = require('../utils/responseHandler');

const role = async (req, res) => {
    const msm = 'Hola admin';
    return sendSuccess(res, { msm },'Operacion Exisotosa');
};


module.exports = {
    role
};