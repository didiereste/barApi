// roleRoutes.js
const express = require('express');
const { authTokenJWT } = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/checkroleMiddleware');
const { role } = require('../controllers/roleController');  // Desestructurando el objeto

const router = express.Router();

// Usar la función role importada correctamente
router.get('/welcome', authTokenJWT, checkRole(1), role);

module.exports = router;
