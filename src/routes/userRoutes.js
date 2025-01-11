const express = require('express');
const { authTokenJWT } = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/checkroleMiddleware');
const { createUser } = require('../controllers/userController');

const router = express.Router();

router.post('/create',authTokenJWT,checkRole(1),createUser);

module.exports= router;
